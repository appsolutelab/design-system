# design-system

The two design systems of **Appsolute**, a group of students from ITIS G. Cardano in Pavia, Italy, who build free and open source apps.

| Folder | Design system | Used by |
|---|---|---|
| `appsolute/` | **Appsolute**: the base. Neutral tokens, generic controls and the blocks of a landing page. | Every Appsolute site and app |
| `wingpal/` | **WingPal**: the product layer. Adds the calendar colours, `marigold` and the components of the desktop app. | The WingPal app and its landing page |

WingPal is built on Appsolute: it repeats the base tokens with the same values and imports the base components. When a base token or component changes, change it in `appsolute/` first.

The guidelines are written in Italian, like the products. Each system's `README.md` is its brand book: principles, tone of voice, colour, type, spacing, the neumorphic style and how the components fit together. Read it before building anything.

Both systems are also published as live, browsable references:

- Appsolute: <https://claude.ai/artifact/Wwoj3Re3YXVT3ZFJyAqUAe>
- WingPal: <https://claude.ai/artifact/8WEus46ryqjutF2ga2CmCH>

## What is in each folder

```text
README.md                    the brand book (start here)
tokens.json                  the tokens: colours per theme, type, spacing, radius, shadows
tokens.css                   the same tokens as CSS custom properties, light and dark
assets/                      logos, with their own README (Appsolute only, see below)
components/
  src/                       React + TypeScript sources: one .tsx and one .css per component
  <Component>/README.md      guidelines: when to use it and what the consumer provides
  <Component>/preview.html   a small live example
  bundle.js, bundle.css      generated from src/: one script and one stylesheet
  index.d.ts                 generated from src/: the props of every component
```

`tokens.json` is the source for the tokens; `tokens.css` is generated from it by the design system page. Components never contain a fixed colour: they read `var(--token-name)`, so both themes work without extra code.

## Using the components in a project

The components are plain source files, not an npm package. Copy the `src` folders into the project, side by side:

```text
src/ui/appsolute/   <- appsolute/components/src  (+ appsolute/tokens.css)
src/ui/wingpal/     <- wingpal/components/src    (+ wingpal/tokens.css)
```

Then:

1. In each `styles.css`, point the first `@import` at where you put `tokens.css`.
2. Import the styles once, Appsolute first: `import "./ui/appsolute/styles.css"` and, for a WingPal project, `import "./ui/wingpal/styles.css"`.
3. Import components from the folders: `import { Navbar, Hero } from "./ui/appsolute"`.

The WingPal components that need a button or an icon import it through `wingpal/components/src/appsolute.ts`, which points at the folder next to it (`../appsolute`). If you place the folders differently, change that one path. `bundle-entry.ts` is only used to build this repository's WingPal bundle and is not needed in a project.

A site that only needs the landing blocks copies `appsolute` alone.

The only runtime dependency is React 18. Icons inside the components are drawn like [Lucide](https://lucide.dev) (ISC licence); for any other icon use `lucide-react`.

## Building the bundles

`bundle.js`, `bundle.css` and `index.d.ts` are generated. After changing anything under `components/src`, rebuild them and commit the result. You need Node.js 20 or newer.

```sh
npm install
npm run build              # both systems, Appsolute first
node build.mjs appsolute   # one system
```

`bundle.js` is a classic script that expects `window.React` and `window.ReactDOM` and defines `window.Appsolute` or `window.WingPal`. The WingPal bundle also carries a copy of Appsolute, so a preview or a prototype works with one script and one stylesheet; rebuild it whenever Appsolute changes.

## Previews

Each `preview.html` is a fragment, not a full page: it expects `tokens.css`, `bundle.css`, React 18 and `bundle.js` to be loaded already, which is what the live design system pages do. To see the components rendered, open the links above.

## Adding or changing a component

1. Edit or add `components/src/components/<Name>/<Name>.tsx` and `<Name>.css`. Class names start with `ap-`; colours, shadows, radii and spacing come from tokens.
2. Export it from `components/src/index.ts`, import its stylesheet in `components/src/styles.css`, and add its name to the list in `build.mjs`.
3. Add `components/<Name>/README.md` (first sentence: what it is) and `components/<Name>/preview.html`.
4. Check it in both themes, with the keyboard, and with `prefers-reduced-motion`. Add it to `forced-colors.css` if it has a raised or sunken shape.
5. Run `npm run build`.

Text inside a component must be translatable: give it a `labels` prop with Italian defaults.

## Not in this repository

- The WingPal logo files. They are in the WingPal design system (asset group Product-Logos) and in `wingpal-landing`.
- The cover previews and the files that the design system page generates for itself (`api/`, `manifest.json`).
