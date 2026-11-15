/* @ds-bundle: {"format":4,"namespace":"Appsolute","components":[{"name":"Button"},{"name":"IconButton"},{"name":"TextField"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Segmented"},{"name":"LangSwitch"},{"name":"ThemeToggle"},{"name":"Badge"},{"name":"Kbd"},{"name":"Card"},{"name":"Callout"},{"name":"EmptyState"},{"name":"Dialog"},{"name":"Navbar"},{"name":"Hero"},{"name":"Section"},{"name":"FeatureCard"},{"name":"Steps"},{"name":"DownloadCard"},{"name":"WindowFrame"},{"name":"ProjectCard"},{"name":"TeamCard"},{"name":"Faq"},{"name":"Prose"},{"name":"CodeBlock"},{"name":"RepoCard"},{"name":"Footer"}]} */
/* Generato da components/src (TypeScript) con esbuild: modifica i sorgenti, non questo file. */
var __ds = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // appsolute/components/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    AlertIcon: () => AlertIcon,
    ArrowRightIcon: () => ArrowRightIcon,
    Badge: () => Badge,
    Button: () => Button,
    Callout: () => Callout,
    Card: () => Card,
    CheckIcon: () => CheckIcon,
    Checkbox: () => Checkbox,
    ChevronDownIcon: () => ChevronDownIcon,
    CircleCheckIcon: () => CircleCheckIcon,
    CloseIcon: () => CloseIcon,
    CodeBlock: () => CodeBlock,
    CodeIcon: () => CodeIcon,
    CopyIcon: () => CopyIcon,
    DEFAULT_THEME_KEY: () => DEFAULT_THEME_KEY,
    Dialog: () => Dialog,
    DownloadCard: () => DownloadCard,
    DownloadIcon: () => DownloadIcon,
    EmptyState: () => EmptyState,
    Faq: () => Faq,
    FeatureCard: () => FeatureCard,
    Footer: () => Footer,
    Hero: () => Hero,
    IconButton: () => IconButton,
    InfoIcon: () => InfoIcon,
    Kbd: () => Kbd,
    LangSwitch: () => LangSwitch,
    MenuIcon: () => MenuIcon,
    MoonIcon: () => MoonIcon,
    Navbar: () => Navbar,
    ProjectCard: () => ProjectCard,
    Prose: () => Prose,
    RepoCard: () => RepoCard,
    Section: () => Section,
    Segmented: () => Segmented,
    Steps: () => Steps,
    SunIcon: () => SunIcon,
    Switch: () => Switch,
    TeamCard: () => TeamCard,
    TextField: () => TextField,
    ThemeToggle: () => ThemeToggle,
    WindowFrame: () => WindowFrame,
    applyTheme: () => applyTheme,
    detectPlatform: () => detectPlatform,
    followSystemTheme: () => followSystemTheme,
    getInitialTheme: () => getInitialTheme,
    useTheme: () => useTheme
  });

  // appsolute/components/src/components/Button/Button.tsx
  var React = __toESM(require_react());

  // appsolute/components/src/utils.ts
  function cx(...parts) {
    return parts.filter(Boolean).join(" ");
  }

  // appsolute/components/src/components/Button/Button.tsx
  function Button({ variant = "secondary", size = "md", href, target, rel, className, onClick, type = "button", children, ...rest }) {
    const [pops, setPops] = React.useState(0);
    const cls = cx("ap-btn", "ap-btn-" + variant, size === "sm" && "ap-btn-sm", pops > 0 && (pops % 2 ? "ap-pop-1" : "ap-pop-2"), className);
    const handle = (e) => {
      setPops((n) => n + 1);
      onClick == null ? void 0 : onClick(e);
    };
    if (href != null) {
      const { disabled, ...anchorRest } = rest;
      if (disabled) return /* @__PURE__ */ React.createElement("a", { ...anchorRest, role: "link", "aria-disabled": "true", className: cls }, children);
      return /* @__PURE__ */ React.createElement("a", { ...anchorRest, href, target, rel: rel != null ? rel : target === "_blank" ? "noopener noreferrer" : void 0, className: cls, onClick: handle }, children);
    }
    return /* @__PURE__ */ React.createElement("button", { ...rest, type, className: cls, onClick: handle }, children);
  }

  // appsolute/components/src/components/IconButton/IconButton.tsx
  var React2 = __toESM(require_react());
  function IconButton({ label, icon, className, title, ...rest }) {
    return /* @__PURE__ */ React2.createElement(Button, { ...rest, "aria-label": label, title: title != null ? title : label, className: cx("ap-btn-icon", className) }, icon);
  }

  // appsolute/components/src/components/TextField/TextField.tsx
  var React3 = __toESM(require_react());
  function TextField({ label, hint, error, errorPrefix = "Errore", multiline, rows = 4, id, className, ...rest }) {
    const autoId = React3.useId();
    const fieldId = id != null ? id : "ap-field-" + autoId;
    const hintId = fieldId + "-hint";
    const msg = error || hint;
    return /* @__PURE__ */ React3.createElement("div", { className: cx("ap-field", error && "ap-field-error", className) }, /* @__PURE__ */ React3.createElement("label", { htmlFor: fieldId }, label), multiline ? /* @__PURE__ */ React3.createElement("textarea", { ...rest, rows, id: fieldId, "aria-invalid": error ? true : void 0, "aria-describedby": msg ? hintId : void 0 }) : /* @__PURE__ */ React3.createElement("input", { ...rest, id: fieldId, "aria-invalid": error ? true : void 0, "aria-describedby": msg ? hintId : void 0 }), msg ? /* @__PURE__ */ React3.createElement("span", { id: hintId, className: "ap-field-hint" }, error ? errorPrefix + ": " + error : hint) : null);
  }

  // appsolute/components/src/components/Switch/Switch.tsx
  var React4 = __toESM(require_react());
  function Switch({ options, value, defaultValue, onChange, label, className }) {
    const [inner, setInner] = React4.useState(defaultValue != null ? defaultValue : options[0].value);
    const current = value != null ? value : inner;
    const index = options[1].value === current ? 1 : 0;
    const refs = [React4.useRef(null), React4.useRef(null)];
    const select = (i, focus = false) => {
      var _a;
      setInner(options[i].value);
      if (options[i].value !== current) onChange == null ? void 0 : onChange(options[i].value);
      if (focus) (_a = refs[i].current) == null ? void 0 : _a.focus();
    };
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        select(0, true);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        select(1, true);
      }
    };
    return /* @__PURE__ */ React4.createElement("div", { className: cx("ap-switch", index === 1 && "ap-switch-second", className), role: "radiogroup", "aria-label": label, onKeyDown }, /* @__PURE__ */ React4.createElement("span", { className: "ap-switch-knob", "aria-hidden": "true" }), options.map((o, i) => /* @__PURE__ */ React4.createElement(
      "button",
      {
        key: o.value,
        ref: refs[i],
        type: "button",
        role: "radio",
        "aria-checked": i === index,
        "aria-label": o.name,
        lang: o.lang,
        title: o.name,
        tabIndex: i === index ? 0 : -1,
        className: cx("ap-switch-opt", i === index && "ap-switch-opt-on"),
        onClick: () => select(i === index ? 1 - i : i)
      },
      o.content
    )));
  }

  // appsolute/components/src/components/LangSwitch/LangSwitch.tsx
  var React5 = __toESM(require_react());
  var DEFAULT = [
    { value: "it", label: "IT", name: "Italiano" },
    { value: "en", label: "EN", name: "English" }
  ];
  function LangSwitch({ value, onChange, options = DEFAULT, label = "Lingua" }) {
    const opts = options.map((o) => ({ value: o.value, name: o.name, content: o.label, lang: o.value }));
    return /* @__PURE__ */ React5.createElement(Switch, { label, value, defaultValue: options[0].value, options: opts, onChange });
  }

  // appsolute/components/src/components/ThemeToggle/ThemeToggle.tsx
  var React8 = __toESM(require_react());

  // appsolute/components/src/icons.tsx
  var React6 = __toESM(require_react());
  function Icon({ size = 20, children }) {
    return /* @__PURE__ */ React6.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" }, children);
  }
  var SunIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("circle", { cx: "12", cy: "12", r: "4" }), /* @__PURE__ */ React6.createElement("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" }));
  var MoonIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }));
  var MenuIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M4 6h16M4 12h16M4 18h16" }));
  var CloseIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M18 6 6 18M6 6l12 12" }));
  var CopyIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }), /* @__PURE__ */ React6.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }));
  var CheckIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M20 6 9 17l-5-5" }));
  var CodeIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "m16 18 6-6-6-6M8 6l-6 6 6 6" }));
  var ArrowRightIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" }));
  var DownloadIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" }));
  var ChevronDownIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "m6 9 6 6 6-6" }));
  var InfoIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React6.createElement("path", { d: "M12 16v-4M12 8h.01" }));
  var AlertIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01" }));
  var CircleCheckIcon = (p) => /* @__PURE__ */ React6.createElement(Icon, { ...p }, /* @__PURE__ */ React6.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React6.createElement("path", { d: "m9 12 2 2 4-4" }));

  // appsolute/components/src/theme.ts
  var React7 = __toESM(require_react());
  var DEFAULT_THEME_KEY = "theme";
  function getInitialTheme(storageKey = DEFAULT_THEME_KEY) {
    if (typeof window === "undefined") return "light";
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(theme, storageKey = DEFAULT_THEME_KEY, persist = true) {
    const root = document.documentElement;
    if (root.getAttribute("data-theme") !== theme) {
      root.classList.add("ap-theme-switching");
      root.setAttribute("data-theme", theme);
      void root.offsetWidth;
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("ap-theme-switching")));
    }
    if (!persist) return;
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
    }
  }
  function followSystemTheme(onChange, storageKey = DEFAULT_THEME_KEY) {
    if (typeof window === "undefined" || !window.matchMedia) return () => {
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") return;
      } catch {
      }
      onChange(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }
  function useTheme(storageKey = DEFAULT_THEME_KEY) {
    const [theme, setThemeState] = React7.useState(() => getInitialTheme(storageKey));
    React7.useEffect(() => {
      applyTheme(getInitialTheme(storageKey), storageKey, false);
    }, [storageKey]);
    React7.useEffect(() => followSystemTheme((t) => {
      setThemeState(t);
      applyTheme(t, storageKey, false);
    }, storageKey), [storageKey]);
    const setTheme = React7.useCallback((t) => {
      setThemeState(t);
      applyTheme(t, storageKey, true);
    }, [storageKey]);
    return [theme, setTheme];
  }

  // appsolute/components/src/components/ThemeToggle/ThemeToggle.tsx
  function ThemeToggle({ theme, onChange, storageKey, labels = {} }) {
    const { label = "Tema", light = "Tema chiaro", dark = "Tema scuro" } = labels;
    const [inner, setInner] = React8.useState(() => theme != null ? theme : getInitialTheme(storageKey));
    const current = theme != null ? theme : inner;
    React8.useEffect(() => {
      if (theme == null) applyTheme(getInitialTheme(storageKey), storageKey, false);
    }, [theme, storageKey]);
    React8.useEffect(() => {
      if (theme != null) return;
      return followSystemTheme((t) => {
        setInner(t);
        applyTheme(t, storageKey, false);
      }, storageKey);
    }, [theme, storageKey]);
    React8.useEffect(() => {
      if (theme != null || typeof MutationObserver === "undefined") return;
      const root = document.documentElement;
      const obs = new MutationObserver(() => {
        const t = root.getAttribute("data-theme");
        if (t === "light" || t === "dark") setInner(t);
      });
      obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
      return () => obs.disconnect();
    }, [theme]);
    return /* @__PURE__ */ React8.createElement(
      Switch,
      {
        label,
        value: current,
        options: [
          { value: "light", name: light, content: /* @__PURE__ */ React8.createElement(SunIcon, { size: 18 }) },
          { value: "dark", name: dark, content: /* @__PURE__ */ React8.createElement(MoonIcon, { size: 18 }) }
        ],
        onChange: (v) => {
          setInner(v);
          if (theme == null) applyTheme(v, storageKey, true);
          onChange == null ? void 0 : onChange(v);
        }
      }
    );
  }

  // appsolute/components/src/components/Navbar/Navbar.tsx
  var React9 = __toESM(require_react());
  function Navbar({ brand, logo, homeHref = "/", links = [], current, actions, sticky = true, skipHref, labels = {} }) {
    const { nav = "Menu principale", open: openLabel = "Apri il menu", close = "Chiudi il menu", skip = "Vai al contenuto" } = labels;
    const ref = React9.useRef(null);
    const [open, setOpen] = React9.useState(false);
    const panelId = React9.useId();
    React9.useEffect(() => {
      if (!open) return;
      const onKey = (e) => {
        var _a, _b;
        if (e.key !== "Escape") return;
        setOpen(false);
        (_b = (_a = ref.current) == null ? void 0 : _a.querySelector(".ap-nav-toggle")) == null ? void 0 : _b.focus();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [open]);
    return /* @__PURE__ */ React9.createElement("header", { ref, className: cx("ap-nav", sticky && "ap-nav-sticky", open && "ap-nav-open") }, skipHref ? /* @__PURE__ */ React9.createElement("a", { className: "ap-skip", href: skipHref }, skip) : null, /* @__PURE__ */ React9.createElement("div", { className: "ap-nav-bar" }, /* @__PURE__ */ React9.createElement("a", { className: "ap-nav-brand", href: homeHref }, logo ? /* @__PURE__ */ React9.createElement("span", { className: "ap-nav-logo", "aria-hidden": "true" }, logo) : null, /* @__PURE__ */ React9.createElement("span", { className: "ap-nav-name" }, brand)), /* @__PURE__ */ React9.createElement(
      IconButton,
      {
        className: "ap-nav-toggle",
        variant: "ghost",
        label: open ? close : openLabel,
        icon: open ? /* @__PURE__ */ React9.createElement(CloseIcon, null) : /* @__PURE__ */ React9.createElement(MenuIcon, null),
        "aria-expanded": open,
        "aria-controls": panelId,
        onClick: () => setOpen(!open)
      }
    ), /* @__PURE__ */ React9.createElement("div", { className: "ap-nav-panel", id: panelId }, links.length ? /* @__PURE__ */ React9.createElement("nav", { className: "ap-nav-links", "aria-label": nav }, /* @__PURE__ */ React9.createElement("ul", null, links.map((l, i) => /* @__PURE__ */ React9.createElement("li", { key: i }, /* @__PURE__ */ React9.createElement("a", { className: cx("ap-nav-link", l.href === current && "ap-nav-link-on"), href: l.href, "aria-current": l.href === current ? "page" : void 0, onClick: () => setOpen(false) }, l.label))))) : null, actions ? /* @__PURE__ */ React9.createElement("div", { className: "ap-nav-actions" }, actions) : null)));
  }

  // appsolute/components/src/components/Hero/Hero.tsx
  var React11 = __toESM(require_react());

  // appsolute/components/src/components/Badge/Badge.tsx
  var React10 = __toESM(require_react());
  function Badge({ tone = "neutral", icon, children, className }) {
    return /* @__PURE__ */ React10.createElement("span", { className: cx("ap-badge", tone !== "neutral" && "ap-badge-" + tone, className) }, icon ? /* @__PURE__ */ React10.createElement("span", { className: "ap-badge-icon", "aria-hidden": "true" }, icon) : null, children);
  }

  // appsolute/components/src/components/Hero/Hero.tsx
  function Hero({ eyebrow, title, status, lead, actions, note, media }) {
    return /* @__PURE__ */ React11.createElement("section", { className: cx("ap-hero", media != null && "ap-hero-has-media") }, /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-text" }, eyebrow ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React11.createElement("h1", { className: "ap-hero-title" }, title), status ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-status" }, /* @__PURE__ */ React11.createElement(Badge, null, status)) : null, lead ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-lead" }, lead) : null, actions ? /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-actions" }, actions) : null, note ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-note" }, note) : null), media != null ? /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-media" }, media) : null);
  }

  // appsolute/components/src/components/Section/Section.tsx
  var React12 = __toESM(require_react());
  function Section({ id, eyebrow, title, headingLevel = 2, lead, align = "start", tone = "plain", grid, children }) {
    const headId = React12.useId();
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React12.createElement("section", { id, className: cx("ap-section", tone === "sunken" && "ap-section-sunken", align === "center" && "ap-section-center"), "aria-labelledby": title ? headId : void 0 }, /* @__PURE__ */ React12.createElement("div", { className: "ap-section-inner" }, title || eyebrow || lead ? /* @__PURE__ */ React12.createElement("header", { className: "ap-section-head" }, eyebrow ? /* @__PURE__ */ React12.createElement("p", { className: "ap-section-eyebrow" }, eyebrow) : null, title ? /* @__PURE__ */ React12.createElement(H, { className: "ap-section-title", id: headId }, title) : null, lead ? /* @__PURE__ */ React12.createElement("p", { className: "ap-section-lead" }, lead) : null) : null, grid ? /* @__PURE__ */ React12.createElement("div", { className: "ap-section-grid" }, children) : children));
  }

  // appsolute/components/src/components/FeatureCard/FeatureCard.tsx
  var React13 = __toESM(require_react());
  function FeatureCard({ icon, title, children, status, href, linkLabel = "Scopri di più", headingLevel = 3 }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React13.createElement("article", { className: "ap-feature" }, icon ? /* @__PURE__ */ React13.createElement("span", { className: "ap-feature-icon", "aria-hidden": "true" }, icon) : null, /* @__PURE__ */ React13.createElement(H, { className: "ap-feature-title" }, title, status ? /* @__PURE__ */ React13.createElement(Badge, null, status) : null), /* @__PURE__ */ React13.createElement("div", { className: "ap-feature-text" }, children), href ? /* @__PURE__ */ React13.createElement("a", { className: "ap-link ap-feature-link", href }, linkLabel, /* @__PURE__ */ React13.createElement(ArrowRightIcon, { size: 16 })) : null);
  }

  // appsolute/components/src/components/CodeBlock/CodeBlock.tsx
  var React14 = __toESM(require_react());
  function CodeBlock({ code, title, prompt, labels = {} }) {
    const { copy = "Copia", copied = "Copiato", failed = "Copia non riuscita", code: codeLabel = "Codice" } = labels;
    const [state, setState] = React14.useState("idle");
    React14.useEffect(() => {
      if (state === "idle") return;
      const t = setTimeout(() => setState("idle"), 2e3);
      return () => clearTimeout(t);
    }, [state]);
    const doCopy = () => {
      if (!navigator.clipboard) {
        setState("err");
        return;
      }
      navigator.clipboard.writeText(code).then(() => setState("ok"), () => setState("err"));
    };
    const lines = code.replace(/\n$/, "").split("\n");
    return /* @__PURE__ */ React14.createElement("figure", { className: "ap-code" }, /* @__PURE__ */ React14.createElement("figcaption", { className: "ap-code-head" }, /* @__PURE__ */ React14.createElement("span", { className: "ap-code-title" }, title), /* @__PURE__ */ React14.createElement(Button, { variant: "ghost", size: "sm", onClick: doCopy }, state === "ok" ? /* @__PURE__ */ React14.createElement(CheckIcon, { size: 16 }) : /* @__PURE__ */ React14.createElement(CopyIcon, { size: 16 }), /* @__PURE__ */ React14.createElement("span", { "aria-live": "polite" }, state === "ok" ? copied : state === "err" ? failed : copy))), /* @__PURE__ */ React14.createElement("pre", { className: "ap-code-pre", tabIndex: 0, role: "region", "aria-label": title != null ? title : codeLabel }, /* @__PURE__ */ React14.createElement("code", null, lines.map((l, i) => /* @__PURE__ */ React14.createElement("span", { className: "ap-code-line", key: i }, prompt ? /* @__PURE__ */ React14.createElement("span", { className: "ap-code-prompt", "aria-hidden": "true" }, "$ ") : null, l, "\n")))));
  }

  // appsolute/components/src/components/RepoCard/RepoCard.tsx
  var React15 = __toESM(require_react());
  function RepoCard({ name, href, description, license, meta = [], linkLabel = "Vedi il codice su GitHub" }) {
    const items = license ? [license, ...meta] : meta;
    return /* @__PURE__ */ React15.createElement("a", { className: "ap-repo", href }, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-top" }, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-icon", "aria-hidden": "true" }, /* @__PURE__ */ React15.createElement(CodeIcon, null)), /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-name" }, name)), description ? /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-desc" }, description) : null, items.length ? /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-meta" }, items.map((m, i) => /* @__PURE__ */ React15.createElement(Badge, { key: i }, m))) : null, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-cta" }, linkLabel, /* @__PURE__ */ React15.createElement(ArrowRightIcon, { size: 16 })));
  }

  // appsolute/components/src/components/Footer/Footer.tsx
  var React16 = __toESM(require_react());
  function Footer({ brand, logo, tagline, columns = [], bottom, navLabel = "Link del sito" }) {
    return /* @__PURE__ */ React16.createElement("footer", { className: "ap-footer" }, /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-inner" }, /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-brand" }, /* @__PURE__ */ React16.createElement("span", { className: "ap-footer-name" }, logo ? /* @__PURE__ */ React16.createElement("span", { className: "ap-footer-logo", "aria-hidden": "true" }, logo) : null, brand), tagline ? /* @__PURE__ */ React16.createElement("p", { className: "ap-footer-tagline" }, tagline) : null), columns.length ? /* @__PURE__ */ React16.createElement("nav", { className: "ap-footer-cols", "aria-label": navLabel }, columns.map((c, i) => /* @__PURE__ */ React16.createElement("div", { key: i, className: "ap-footer-col" }, /* @__PURE__ */ React16.createElement("p", { className: "ap-footer-col-title" }, c.title), /* @__PURE__ */ React16.createElement("ul", null, c.links.map((l, j) => /* @__PURE__ */ React16.createElement("li", { key: j }, /* @__PURE__ */ React16.createElement("a", { href: l.href }, l.label))))))) : null), bottom ? /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-bottom" }, bottom) : null);
  }

  // appsolute/components/src/components/Card/Card.tsx
  var React17 = __toESM(require_react());
  function Card({ tone = "raised", padding = "lg", as = "div", title, actions, className, children, ...rest }) {
    const El = as;
    return /* @__PURE__ */ React17.createElement(El, { ...rest, className: cx("ap-card", "ap-card-" + tone, "ap-card-pad-" + padding, className) }, title || actions ? /* @__PURE__ */ React17.createElement("div", { className: "ap-card-head" }, title ? /* @__PURE__ */ React17.createElement("h3", { className: "ap-card-title" }, title) : /* @__PURE__ */ React17.createElement("span", null), actions ? /* @__PURE__ */ React17.createElement("div", { className: "ap-card-actions" }, actions) : null) : null, children);
  }

  // appsolute/components/src/components/Checkbox/Checkbox.tsx
  var React18 = __toESM(require_react());
  function Checkbox({ label, hint, className, ...rest }) {
    return /* @__PURE__ */ React18.createElement("label", { className: cx("ap-checkbox", rest.disabled && "ap-checkbox-disabled", className) }, /* @__PURE__ */ React18.createElement("input", { ...rest, type: "checkbox" }), /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-box", "aria-hidden": "true" }, /* @__PURE__ */ React18.createElement(CheckIcon, { size: 14 })), /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-text" }, label, hint ? /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-hint" }, hint) : null));
  }

  // appsolute/components/src/components/Segmented/Segmented.tsx
  var React19 = __toESM(require_react());
  function Segmented({ options, value, defaultValue, onChange, label, size = "md", className }) {
    var _a;
    const [inner, setInner] = React19.useState(defaultValue != null ? defaultValue : (_a = options[0]) == null ? void 0 : _a.value);
    const current = value != null ? value : inner;
    const index = Math.max(0, options.findIndex((o) => o.value === current));
    const refs = React19.useRef([]);
    const select = (i, focus = false) => {
      var _a2;
      const o = options[(i + options.length) % options.length];
      setInner(o.value);
      if (o.value !== current) onChange == null ? void 0 : onChange(o.value);
      if (focus) (_a2 = refs.current[(i + options.length) % options.length]) == null ? void 0 : _a2.focus();
    };
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        select(index - 1, true);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        select(index + 1, true);
      }
    };
    const style = { ["--ap-seg-n"]: options.length, ["--ap-seg-i"]: index };
    return /* @__PURE__ */ React19.createElement("div", { className: cx("ap-seg", size === "sm" && "ap-seg-sm", className), style, role: "radiogroup", "aria-label": label, onKeyDown }, /* @__PURE__ */ React19.createElement("span", { className: "ap-seg-knob", "aria-hidden": "true" }), options.map((o, i) => /* @__PURE__ */ React19.createElement("button", { key: o.value, ref: (el) => {
      refs.current[i] = el;
    }, type: "button", role: "radio", "aria-checked": i === index, tabIndex: i === index ? 0 : -1, className: cx("ap-seg-opt", i === index && "ap-seg-opt-on"), onClick: () => select(i) }, o.icon, o.label)));
  }

  // appsolute/components/src/components/Kbd/Kbd.tsx
  var React20 = __toESM(require_react());
  function Kbd({ keys, children, className }) {
    if (!keys) return /* @__PURE__ */ React20.createElement("kbd", { className: cx("ap-kbd", className) }, children);
    return /* @__PURE__ */ React20.createElement("span", { className: cx("ap-kbd-group", className) }, keys.map((k, i) => /* @__PURE__ */ React20.createElement(React20.Fragment, { key: i }, i > 0 ? /* @__PURE__ */ React20.createElement("span", { className: "ap-kbd-plus", "aria-hidden": "true" }, "+") : null, /* @__PURE__ */ React20.createElement("kbd", { className: "ap-kbd" }, k))));
  }

  // appsolute/components/src/components/Callout/Callout.tsx
  var React21 = __toESM(require_react());
  function Callout({ tone = "info", title, children, action, icon, role, className }) {
    const I = tone === "danger" ? AlertIcon : tone === "success" ? CircleCheckIcon : InfoIcon;
    return /* @__PURE__ */ React21.createElement("div", { className: cx("ap-callout", "ap-callout-" + tone, className), role }, /* @__PURE__ */ React21.createElement("span", { className: "ap-callout-icon", "aria-hidden": "true" }, icon != null ? icon : /* @__PURE__ */ React21.createElement(I, null)), /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-body" }, title ? /* @__PURE__ */ React21.createElement("p", { className: "ap-callout-title" }, title) : null, children ? /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-text" }, children) : null), action ? /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-action" }, action) : null);
  }

  // appsolute/components/src/components/EmptyState/EmptyState.tsx
  var React22 = __toESM(require_react());
  function EmptyState({ icon, title, children, action, headingLevel = 3, className }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React22.createElement("div", { className: cx("ap-empty", className) }, icon ? /* @__PURE__ */ React22.createElement("span", { className: "ap-empty-icon", "aria-hidden": "true" }, icon) : null, /* @__PURE__ */ React22.createElement(H, { className: "ap-empty-title" }, title), children ? /* @__PURE__ */ React22.createElement("div", { className: "ap-empty-text" }, children) : null, action ? /* @__PURE__ */ React22.createElement("div", { className: "ap-empty-action" }, action) : null);
  }

  // appsolute/components/src/components/Dialog/Dialog.tsx
  var React23 = __toESM(require_react());
  function Dialog({ open, onClose, title, children, actions, size = "md", modal = true, closeLabel = "Chiudi", className }) {
    const ref = React23.useRef(null);
    const titleId = React23.useId();
    React23.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (!modal) return;
      if (open && !el.open) el.showModal();
      if (!open && el.open) el.close();
    }, [open, modal]);
    return /* @__PURE__ */ React23.createElement(
      "dialog",
      {
        ref,
        open: !modal && open ? true : void 0,
        className: cx("ap-dialog", "ap-dialog-" + size, !modal && "ap-dialog-inline", className),
        "aria-labelledby": titleId,
        onCancel: (e) => {
          e.preventDefault();
          onClose();
        },
        onClose: () => {
          if (open) onClose();
        },
        onClick: (e) => {
          if (modal && e.target === e.currentTarget) onClose();
        }
      },
      /* @__PURE__ */ React23.createElement("div", { className: "ap-dialog-panel" }, /* @__PURE__ */ React23.createElement("header", { className: "ap-dialog-head" }, /* @__PURE__ */ React23.createElement("h2", { className: "ap-dialog-title", id: titleId }, title), /* @__PURE__ */ React23.createElement(IconButton, { variant: "ghost", size: "sm", label: closeLabel, icon: /* @__PURE__ */ React23.createElement(CloseIcon, null), onClick: onClose })), children ? /* @__PURE__ */ React23.createElement("div", { className: "ap-dialog-body" }, children) : null, actions ? /* @__PURE__ */ React23.createElement("footer", { className: "ap-dialog-actions" }, actions) : null)
    );
  }

  // appsolute/components/src/components/DownloadCard/DownloadCard.tsx
  var React24 = __toESM(require_react());
  var NAMES = { windows: "Windows", macos: "macOS", linux: "Linux" };
  function detectPlatform() {
    if (typeof navigator === "undefined") return null;
    const uaData = navigator.userAgentData;
    const ua = navigator.userAgent || "";
    if ((uaData == null ? void 0 : uaData.mobile) || /Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return null;
    const p = ((uaData == null ? void 0 : uaData.platform) || navigator.platform || ua).toLowerCase();
    if (p.includes("win")) return "windows";
    if (p.includes("mac")) return navigator.maxTouchPoints > 1 ? null : "macos";
    if (p.includes("linux") || p.includes("x11")) return "linux";
    return null;
  }
  function Row({ o, get }) {
    var _a;
    const name = (_a = o.label) != null ? _a : NAMES[o.platform];
    return /* @__PURE__ */ React24.createElement("li", null, /* @__PURE__ */ React24.createElement("a", { className: "ap-download-row", href: o.href }, /* @__PURE__ */ React24.createElement("span", { className: "ap-download-row-text" }, /* @__PURE__ */ React24.createElement("span", { className: "ap-download-row-name" }, name), /* @__PURE__ */ React24.createElement("span", { className: "ap-download-meta" }, [o.note, o.size].filter(Boolean).join(" · "))), /* @__PURE__ */ React24.createElement("span", { className: "ap-download-row-cta" }, /* @__PURE__ */ React24.createElement(DownloadIcon, { size: 16 }), get, /* @__PURE__ */ React24.createElement("span", { className: "ap-sr-only" }, " ", name, o.file ? ", " + o.file : ""))));
  }
  function DownloadCard({ title = "Scarica", version, date, options, platform, footer, labels = {}, headingLevel = 3, className }) {
    var _a;
    const { download = "Scarica per {os}", others = "Altri sistemi", all = "Scegli il tuo sistema", mobile = "È un'app per computer: apri questa pagina da Windows, macOS o Linux per scaricarla.", get = "Scarica" } = labels;
    const [detected, setDetected] = React24.useState(platform);
    React24.useEffect(() => {
      if (platform === void 0) setDetected(detectPlatform());
    }, [platform]);
    const current = platform !== void 0 ? platform : detected;
    const main = current ? options.find((o) => o.platform === current) : void 0;
    const rest = options.filter((o) => o !== main);
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React24.createElement("section", { className: cx("ap-download", className) }, /* @__PURE__ */ React24.createElement("header", { className: "ap-download-head" }, /* @__PURE__ */ React24.createElement(H, { className: "ap-download-title" }, title), version ? /* @__PURE__ */ React24.createElement(Badge, { tone: "accent" }, version) : null, date ? /* @__PURE__ */ React24.createElement("span", { className: "ap-download-meta" }, date) : null), main ? /* @__PURE__ */ React24.createElement("div", { className: "ap-download-main" }, /* @__PURE__ */ React24.createElement(Button, { variant: "primary", href: main.href }, /* @__PURE__ */ React24.createElement(DownloadIcon, null), download.replace("{os}", (_a = main.label) != null ? _a : NAMES[main.platform])), /* @__PURE__ */ React24.createElement("span", { className: "ap-download-meta" }, [main.file, main.size, main.note].filter(Boolean).join(" · "))) : current === null ? /* @__PURE__ */ React24.createElement("p", { className: "ap-download-mobile" }, mobile) : null, rest.length ? /* @__PURE__ */ React24.createElement("div", { className: "ap-download-others" }, /* @__PURE__ */ React24.createElement("p", { className: "ap-download-label" }, main ? others : all), /* @__PURE__ */ React24.createElement("ul", { className: "ap-download-list", role: "list" }, rest.map((o, i) => /* @__PURE__ */ React24.createElement(Row, { key: o.platform + i, o, get })))) : null, footer ? /* @__PURE__ */ React24.createElement("div", { className: "ap-download-footer" }, footer) : null);
  }

  // appsolute/components/src/components/Steps/Steps.tsx
  var React25 = __toESM(require_react());
  function Steps({ items, layout = "list", headingLevel = 3, className }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React25.createElement("ol", { className: cx("ap-steps", "ap-steps-" + layout, className), role: "list" }, items.map((s, i) => {
      var _a;
      const state = (_a = s.state) != null ? _a : "todo";
      return /* @__PURE__ */ React25.createElement("li", { key: i, className: cx("ap-step", "ap-step-" + state), "aria-current": state === "current" ? "step" : void 0 }, /* @__PURE__ */ React25.createElement("span", { className: "ap-step-n", "aria-hidden": "true" }, state === "done" ? /* @__PURE__ */ React25.createElement(CheckIcon, { size: 16 }) : i + 1), /* @__PURE__ */ React25.createElement("div", { className: "ap-step-body" }, /* @__PURE__ */ React25.createElement(H, { className: "ap-step-title" }, s.title, s.status ? /* @__PURE__ */ React25.createElement(Badge, { tone: state === "current" ? "accent" : "neutral" }, s.status) : null), s.text ? /* @__PURE__ */ React25.createElement("div", { className: "ap-step-text" }, s.text) : null));
    }));
  }

  // appsolute/components/src/components/ProjectCard/ProjectCard.tsx
  var React26 = __toESM(require_react());
  function ProjectCard({ name, href, logo, description, status, meta = [], linkLabel = "Vai al progetto", headingLevel = 3 }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React26.createElement("a", { className: "ap-project", href }, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-top" }, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-logo", "aria-hidden": "true" }, logo != null ? logo : name.slice(0, 1)), /* @__PURE__ */ React26.createElement(H, { className: "ap-project-name" }, name), status ? /* @__PURE__ */ React26.createElement(Badge, null, status) : null), description ? /* @__PURE__ */ React26.createElement("span", { className: "ap-project-desc" }, description) : null, meta.length ? /* @__PURE__ */ React26.createElement("span", { className: "ap-project-meta" }, meta.map((m) => /* @__PURE__ */ React26.createElement(Badge, { key: m }, m))) : null, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-cta" }, linkLabel, /* @__PURE__ */ React26.createElement(ArrowRightIcon, { size: 16 })));
  }

  // appsolute/components/src/components/TeamCard/TeamCard.tsx
  var React27 = __toESM(require_react());
  var initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  function TeamCard({ name, role, avatar, href, linkLabel, compact }) {
    return /* @__PURE__ */ React27.createElement("div", { className: cx("ap-team", compact && "ap-team-compact") }, /* @__PURE__ */ React27.createElement("span", { className: "ap-team-avatar", "aria-hidden": "true" }, avatar != null ? avatar : initials(name)), /* @__PURE__ */ React27.createElement("div", { className: "ap-team-body" }, /* @__PURE__ */ React27.createElement("span", { className: "ap-team-name" }, name), role ? /* @__PURE__ */ React27.createElement("span", { className: "ap-team-role" }, role) : null, href ? /* @__PURE__ */ React27.createElement("a", { className: "ap-link ap-team-link", href }, linkLabel != null ? linkLabel : href) : null));
  }

  // appsolute/components/src/components/Faq/Faq.tsx
  var React28 = __toESM(require_react());
  function Faq({ items, name, className }) {
    return /* @__PURE__ */ React28.createElement("div", { className: cx("ap-faq", className) }, items.map((it) => (
      // "name" su <details> è recente: React 18 non lo conosce nei tipi, quindi passa come attributo libero.
      /* @__PURE__ */ React28.createElement("details", { key: it.question, className: "ap-faq-item", open: it.open, ...name ? { name } : null }, /* @__PURE__ */ React28.createElement("summary", { className: "ap-faq-q" }, /* @__PURE__ */ React28.createElement("span", null, it.question), /* @__PURE__ */ React28.createElement("span", { className: "ap-faq-chevron", "aria-hidden": "true" }, /* @__PURE__ */ React28.createElement(ChevronDownIcon, null))), /* @__PURE__ */ React28.createElement("div", { className: "ap-faq-a" }, it.answer))
    )));
  }

  // appsolute/components/src/components/Prose/Prose.tsx
  var React29 = __toESM(require_react());
  function Prose({ as = "div", className, children, ...rest }) {
    const El = as;
    return /* @__PURE__ */ React29.createElement(El, { ...rest, className: cx("ap-prose", className) }, children);
  }

  // appsolute/components/src/components/WindowFrame/WindowFrame.tsx
  var React30 = __toESM(require_react());
  function WindowFrame({ title, children, label, flush, className }) {
    return /* @__PURE__ */ React30.createElement("figure", { className: cx("ap-window", flush && "ap-window-flush", className), "aria-label": label }, /* @__PURE__ */ React30.createElement("div", { className: "ap-window-bar", "aria-hidden": "true" }, /* @__PURE__ */ React30.createElement("span", { className: "ap-window-dots" }, /* @__PURE__ */ React30.createElement("i", null), /* @__PURE__ */ React30.createElement("i", null), /* @__PURE__ */ React30.createElement("i", null)), title ? /* @__PURE__ */ React30.createElement("span", { className: "ap-window-title" }, title) : null), /* @__PURE__ */ React30.createElement("div", { className: "ap-window-body" }, children));
  }
  return __toCommonJS(index_exports);
})();
window.Appsolute = __ds;
