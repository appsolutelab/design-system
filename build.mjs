// Builds components/bundle.js, bundle.css and index.d.ts of each design system from components/src.
// Usage: node build.mjs            (both, Appsolute first)
//        node build.mjs appsolute  (one)
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const SYSTEMS = {
  appsolute: {
    namespace: "Appsolute",
    entry: "index.ts",
    // Catalogue order of the components.
    components: ["Button", "IconButton", "TextField", "Checkbox", "Switch", "Segmented", "LangSwitch", "ThemeToggle", "Badge", "Kbd", "Card", "Callout", "EmptyState", "Dialog", "Navbar", "Hero", "Section", "FeatureCard", "Steps", "DownloadCard", "WindowFrame", "ProjectCard", "TeamCard", "Faq", "Prose", "CodeBlock", "RepoCard", "Footer"],
  },
  wingpal: {
    namespace: "WingPal",
    // WingPal's bundle also carries Appsolute, so previews and prototypes work with one file.
    entry: "bundle-entry.ts",
    components: ["Tag", "TaskItem", "EventBlock", "PollCard", "AppShell", "SidebarItem", "ViewHeader", "MonthGrid", "DayGrid", "QuickAdd", "NoteCard", "LinkChip", "Reminder", "ColorSwatches", "SettingsRow"],
  },
};

// react and react-dom come from the page (window.React, window.ReactDOM), not from the bundle.
const globals = {
  name: "globals",
  setup(b) {
    b.onResolve({ filter: /^react(-dom)?$/ }, (a) => ({ path: a.path, namespace: "g" }));
    b.onLoad({ filter: /.*/, namespace: "g" }, (a) => ({ contents: "module.exports = window." + (a.path === "react" ? "React" : "ReactDOM") + ";", loader: "js" }));
  },
};

// Follows the @import lines of styles.css in order; tokens.css stays out (it is loaded before the bundle).
function inlineCss(file) {
  return fs.readFileSync(file, "utf8").split("\n").map((line) => {
    const m = /^@import "(\.[^"]+)";/.exec(line);
    if (!m) return line;
    if (/tokens\.css$/.test(m[1])) return null;
    return inlineCss(path.resolve(path.dirname(file), m[1])).trimEnd();
  }).filter((line) => line !== null).join("\n");
}

async function buildSystem(sys) {
  const { namespace, entry, components } = SYSTEMS[sys];
  const root = path.resolve(sys, "components");
  const src = path.join(root, "src");
  const isWingPal = sys === "wingpal";
  // WingPal imports Appsolute from "../appsolute" (see wingpal/components/src/appsolute.ts): for the build, a copy sits there.
  const copy = path.join(root, "appsolute");
  if (isWingPal) { fs.rmSync(copy, { recursive: true, force: true }); fs.cpSync(path.resolve("appsolute/components/src"), copy, { recursive: true }); }
  try {
    const result = await build({ entryPoints: [path.join(src, entry)], bundle: true, format: "iife", globalName: "__ds", jsx: "transform", target: "es2019", write: false, plugins: [globals], charset: "utf8" });
    const js = result.outputFiles[0].text;
    if (/<\/script|<!--/i.test(js)) throw new Error("bundle.js contains </script or <!--");
    const header = "/* @ds-bundle: " + JSON.stringify({ format: 4, namespace, components: components.map((name) => ({ name })) }) + " */\n/* Generato da components/src (TypeScript) con esbuild: modifica i sorgenti, non questo file. */\n";
    fs.writeFileSync(path.join(root, "bundle.js"), header + js + "window." + namespace + " = __ds;\n");

    let css = inlineCss(path.join(src, "styles.css")).replace(/^\/\* [^\n]*importa questo file[^\n]*\n/, "");
    const urls = [...css.matchAll(/^@import url\([^\n]+\n/gm)].map((m) => m[0]); // @import url() must come first
    css = [...new Set(urls)].join("") + css.replace(/^@import url\([^\n]+\n/gm, "");
    if (isWingPal) css = "/* Prima gli stili di Appsolute (copiati dal suo bundle.css), poi quelli di WingPal. */\n" + fs.readFileSync(path.resolve("appsolute/components/bundle.css"), "utf8").trimEnd() + "\n\n" + css;
    if (/<\/style/i.test(css)) throw new Error("bundle.css contains </style");
    fs.writeFileSync(path.join(root, "bundle.css"), css);

    const out = ".dts-" + sys;
    fs.rmSync(out, { recursive: true, force: true });
    execSync(`npx tsc --declaration --emitDeclarationOnly --jsx react --target es2020 --module esnext --moduleResolution bundler --strict --skipLibCheck --rootDir ${isWingPal ? root : src} --outDir ${out} ${path.join(src, "index.ts")}`, { stdio: "inherit" });
    const modules = [...new Set([...fs.readFileSync(path.join(src, "index.ts"), "utf8").matchAll(/from "\.\/([^"]+)"/g)].map((m) => m[1]))];
    let dts = `import type * as React from "react";\n\n/* Tipi dei componenti ${namespace} (window.${namespace}). Generati dai sorgenti in components/src. */\n`;
    for (const m of modules) {
      const t = fs.readFileSync(path.join(out, isWingPal ? "src" : "", m + ".d.ts"), "utf8")
        .replace(/^import [^\n]*\n/gm, "").replace(/^export \{\};?\n/gm, "")
        .replace(/\(\{[^)]*?\}: (\w+Props)\)/gs, "(props: $1)")
        .replace(/(\/\*\*[^\n]*\*\/\n)?export declare function (cx|calVar|minutes)\([^\n]*\n/g, "");
      dts += "\n" + t.trim() + "\n";
    }
    if (isWingPal) dts += "\n/* ---- Componenti di Appsolute, disponibili anche in window.WingPal ---- */\n" + fs.readFileSync(path.resolve("appsolute/components/index.d.ts"), "utf8").replace(/^import [^\n]*\n/, "").replace(/^\n\/\* Tipi dei componenti[^\n]*\n/m, "");
    fs.writeFileSync(path.join(root, "index.d.ts"), dts);
    fs.rmSync(out, { recursive: true, force: true });
    console.log(namespace + ": bundle.js, bundle.css, index.d.ts");
  } finally {
    if (isWingPal) fs.rmSync(copy, { recursive: true, force: true });
  }
}

const wanted = process.argv[2] ? [process.argv[2]] : ["appsolute", "wingpal"];
for (const sys of wanted) {
  if (!SYSTEMS[sys]) throw new Error("Unknown design system: " + sys);
  await buildSystem(sys);
}
