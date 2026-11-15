/* @ds-bundle: {"format":4,"namespace":"WingPal","components":[{"name":"Tag"},{"name":"TaskItem"},{"name":"EventBlock"},{"name":"PollCard"},{"name":"AppShell"},{"name":"SidebarItem"},{"name":"ViewHeader"},{"name":"MonthGrid"},{"name":"DayGrid"},{"name":"QuickAdd"},{"name":"NoteCard"},{"name":"LinkChip"},{"name":"Reminder"},{"name":"ColorSwatches"},{"name":"SettingsRow"}]} */
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

  // wingpal/components/src/bundle-entry.ts
  var bundle_entry_exports = {};
  __export(bundle_entry_exports, {
    AlertIcon: () => AlertIcon,
    AppShell: () => AppShell,
    ArrowRightIcon: () => ArrowRightIcon,
    Badge: () => Badge,
    BellIcon: () => BellIcon,
    Button: () => Button,
    CALENDAR_COLORS: () => CALENDAR_COLORS,
    CalendarIcon: () => CalendarIcon,
    Callout: () => Callout,
    Card: () => Card,
    CheckIcon: () => CheckIcon,
    Checkbox: () => Checkbox,
    ChevronDownIcon: () => ChevronDownIcon,
    ChevronLeftIcon: () => ChevronLeftIcon,
    ChevronRightIcon: () => ChevronRightIcon,
    CircleCheckIcon: () => CircleCheckIcon,
    CloseIcon: () => CloseIcon,
    CodeBlock: () => CodeBlock,
    CodeIcon: () => CodeIcon,
    ColorSwatches: () => ColorSwatches,
    CopyIcon: () => CopyIcon,
    DEFAULT_THEME_KEY: () => DEFAULT_THEME_KEY,
    DayGrid: () => DayGrid,
    Dialog: () => Dialog,
    DownloadCard: () => DownloadCard,
    DownloadIcon: () => DownloadIcon,
    EmptyState: () => EmptyState,
    EventBlock: () => EventBlock,
    Faq: () => Faq,
    FeatureCard: () => FeatureCard,
    Footer: () => Footer,
    Hero: () => Hero,
    IconButton: () => IconButton,
    InfoIcon: () => InfoIcon,
    Kbd: () => Kbd,
    LangSwitch: () => LangSwitch,
    LinkChip: () => LinkChip,
    MenuIcon: () => MenuIcon,
    MonthGrid: () => MonthGrid,
    MoonIcon: () => MoonIcon,
    Navbar: () => Navbar,
    NoteCard: () => NoteCard,
    NoteIcon: () => NoteIcon,
    PlusIcon: () => PlusIcon,
    PollCard: () => PollCard,
    ProjectCard: () => ProjectCard,
    Prose: () => Prose,
    QuickAdd: () => QuickAdd,
    Reminder: () => Reminder,
    RepoCard: () => RepoCard,
    Section: () => Section,
    Segmented: () => Segmented,
    SettingsGroup: () => SettingsGroup,
    SettingsRow: () => SettingsRow,
    SidebarGroup: () => SidebarGroup,
    SidebarItem: () => SidebarItem,
    Steps: () => Steps,
    SunIcon: () => SunIcon,
    Switch: () => Switch,
    Tag: () => Tag,
    TaskIcon: () => TaskIcon,
    TaskItem: () => TaskItem,
    TeamCard: () => TeamCard,
    TextField: () => TextField,
    ThemeToggle: () => ThemeToggle,
    ViewHeader: () => ViewHeader,
    WindowFrame: () => WindowFrame,
    applyTheme: () => applyTheme,
    detectPlatform: () => detectPlatform,
    followSystemTheme: () => followSystemTheme,
    getInitialTheme: () => getInitialTheme,
    isoDate: () => isoDate,
    parseIsoDate: () => parseIsoDate,
    useTheme: () => useTheme
  });

  // wingpal/components/appsolute/components/Button/Button.tsx
  var React = __toESM(require_react());

  // wingpal/components/appsolute/utils.ts
  function cx(...parts) {
    return parts.filter(Boolean).join(" ");
  }

  // wingpal/components/appsolute/components/Button/Button.tsx
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

  // wingpal/components/appsolute/components/IconButton/IconButton.tsx
  var React2 = __toESM(require_react());
  function IconButton({ label, icon, className, title, ...rest }) {
    return /* @__PURE__ */ React2.createElement(Button, { ...rest, "aria-label": label, title: title != null ? title : label, className: cx("ap-btn-icon", className) }, icon);
  }

  // wingpal/components/appsolute/components/TextField/TextField.tsx
  var React3 = __toESM(require_react());
  function TextField({ label, hint, error, errorPrefix = "Errore", multiline, rows = 4, id, className, ...rest }) {
    const autoId = React3.useId();
    const fieldId = id != null ? id : "ap-field-" + autoId;
    const hintId = fieldId + "-hint";
    const msg = error || hint;
    return /* @__PURE__ */ React3.createElement("div", { className: cx("ap-field", error && "ap-field-error", className) }, /* @__PURE__ */ React3.createElement("label", { htmlFor: fieldId }, label), multiline ? /* @__PURE__ */ React3.createElement("textarea", { ...rest, rows, id: fieldId, "aria-invalid": error ? true : void 0, "aria-describedby": msg ? hintId : void 0 }) : /* @__PURE__ */ React3.createElement("input", { ...rest, id: fieldId, "aria-invalid": error ? true : void 0, "aria-describedby": msg ? hintId : void 0 }), msg ? /* @__PURE__ */ React3.createElement("span", { id: hintId, className: "ap-field-hint" }, error ? errorPrefix + ": " + error : hint) : null);
  }

  // wingpal/components/appsolute/components/Switch/Switch.tsx
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

  // wingpal/components/appsolute/components/LangSwitch/LangSwitch.tsx
  var React5 = __toESM(require_react());
  var DEFAULT = [
    { value: "it", label: "IT", name: "Italiano" },
    { value: "en", label: "EN", name: "English" }
  ];
  function LangSwitch({ value, onChange, options = DEFAULT, label = "Lingua" }) {
    const opts = options.map((o) => ({ value: o.value, name: o.name, content: o.label, lang: o.value }));
    return /* @__PURE__ */ React5.createElement(Switch, { label, value, defaultValue: options[0].value, options: opts, onChange });
  }

  // wingpal/components/appsolute/components/ThemeToggle/ThemeToggle.tsx
  var React8 = __toESM(require_react());

  // wingpal/components/appsolute/icons.tsx
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

  // wingpal/components/appsolute/theme.ts
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

  // wingpal/components/appsolute/components/ThemeToggle/ThemeToggle.tsx
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

  // wingpal/components/appsolute/components/Navbar/Navbar.tsx
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

  // wingpal/components/appsolute/components/Hero/Hero.tsx
  var React11 = __toESM(require_react());

  // wingpal/components/appsolute/components/Badge/Badge.tsx
  var React10 = __toESM(require_react());
  function Badge({ tone = "neutral", icon, children, className }) {
    return /* @__PURE__ */ React10.createElement("span", { className: cx("ap-badge", tone !== "neutral" && "ap-badge-" + tone, className) }, icon ? /* @__PURE__ */ React10.createElement("span", { className: "ap-badge-icon", "aria-hidden": "true" }, icon) : null, children);
  }

  // wingpal/components/appsolute/components/Hero/Hero.tsx
  function Hero({ eyebrow, title, status, lead, actions, note, media }) {
    return /* @__PURE__ */ React11.createElement("section", { className: cx("ap-hero", media != null && "ap-hero-has-media") }, /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-text" }, eyebrow ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React11.createElement("h1", { className: "ap-hero-title" }, title), status ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-status" }, /* @__PURE__ */ React11.createElement(Badge, null, status)) : null, lead ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-lead" }, lead) : null, actions ? /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-actions" }, actions) : null, note ? /* @__PURE__ */ React11.createElement("p", { className: "ap-hero-note" }, note) : null), media != null ? /* @__PURE__ */ React11.createElement("div", { className: "ap-hero-media" }, media) : null);
  }

  // wingpal/components/appsolute/components/Section/Section.tsx
  var React12 = __toESM(require_react());
  function Section({ id, eyebrow, title, headingLevel = 2, lead, align = "start", tone = "plain", grid, children }) {
    const headId = React12.useId();
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React12.createElement("section", { id, className: cx("ap-section", tone === "sunken" && "ap-section-sunken", align === "center" && "ap-section-center"), "aria-labelledby": title ? headId : void 0 }, /* @__PURE__ */ React12.createElement("div", { className: "ap-section-inner" }, title || eyebrow || lead ? /* @__PURE__ */ React12.createElement("header", { className: "ap-section-head" }, eyebrow ? /* @__PURE__ */ React12.createElement("p", { className: "ap-section-eyebrow" }, eyebrow) : null, title ? /* @__PURE__ */ React12.createElement(H, { className: "ap-section-title", id: headId }, title) : null, lead ? /* @__PURE__ */ React12.createElement("p", { className: "ap-section-lead" }, lead) : null) : null, grid ? /* @__PURE__ */ React12.createElement("div", { className: "ap-section-grid" }, children) : children));
  }

  // wingpal/components/appsolute/components/FeatureCard/FeatureCard.tsx
  var React13 = __toESM(require_react());
  function FeatureCard({ icon, title, children, status, href, linkLabel = "Scopri di più", headingLevel = 3 }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React13.createElement("article", { className: "ap-feature" }, icon ? /* @__PURE__ */ React13.createElement("span", { className: "ap-feature-icon", "aria-hidden": "true" }, icon) : null, /* @__PURE__ */ React13.createElement(H, { className: "ap-feature-title" }, title, status ? /* @__PURE__ */ React13.createElement(Badge, null, status) : null), /* @__PURE__ */ React13.createElement("div", { className: "ap-feature-text" }, children), href ? /* @__PURE__ */ React13.createElement("a", { className: "ap-link ap-feature-link", href }, linkLabel, /* @__PURE__ */ React13.createElement(ArrowRightIcon, { size: 16 })) : null);
  }

  // wingpal/components/appsolute/components/CodeBlock/CodeBlock.tsx
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

  // wingpal/components/appsolute/components/RepoCard/RepoCard.tsx
  var React15 = __toESM(require_react());
  function RepoCard({ name, href, description, license, meta = [], linkLabel = "Vedi il codice su GitHub" }) {
    const items = license ? [license, ...meta] : meta;
    return /* @__PURE__ */ React15.createElement("a", { className: "ap-repo", href }, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-top" }, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-icon", "aria-hidden": "true" }, /* @__PURE__ */ React15.createElement(CodeIcon, null)), /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-name" }, name)), description ? /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-desc" }, description) : null, items.length ? /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-meta" }, items.map((m, i) => /* @__PURE__ */ React15.createElement(Badge, { key: i }, m))) : null, /* @__PURE__ */ React15.createElement("span", { className: "ap-repo-cta" }, linkLabel, /* @__PURE__ */ React15.createElement(ArrowRightIcon, { size: 16 })));
  }

  // wingpal/components/appsolute/components/Footer/Footer.tsx
  var React16 = __toESM(require_react());
  function Footer({ brand, logo, tagline, columns = [], bottom, navLabel = "Link del sito" }) {
    return /* @__PURE__ */ React16.createElement("footer", { className: "ap-footer" }, /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-inner" }, /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-brand" }, /* @__PURE__ */ React16.createElement("span", { className: "ap-footer-name" }, logo ? /* @__PURE__ */ React16.createElement("span", { className: "ap-footer-logo", "aria-hidden": "true" }, logo) : null, brand), tagline ? /* @__PURE__ */ React16.createElement("p", { className: "ap-footer-tagline" }, tagline) : null), columns.length ? /* @__PURE__ */ React16.createElement("nav", { className: "ap-footer-cols", "aria-label": navLabel }, columns.map((c, i) => /* @__PURE__ */ React16.createElement("div", { key: i, className: "ap-footer-col" }, /* @__PURE__ */ React16.createElement("p", { className: "ap-footer-col-title" }, c.title), /* @__PURE__ */ React16.createElement("ul", null, c.links.map((l, j) => /* @__PURE__ */ React16.createElement("li", { key: j }, /* @__PURE__ */ React16.createElement("a", { href: l.href }, l.label))))))) : null), bottom ? /* @__PURE__ */ React16.createElement("div", { className: "ap-footer-bottom" }, bottom) : null);
  }

  // wingpal/components/appsolute/components/Card/Card.tsx
  var React17 = __toESM(require_react());
  function Card({ tone = "raised", padding = "lg", as = "div", title, actions, className, children, ...rest }) {
    const El = as;
    return /* @__PURE__ */ React17.createElement(El, { ...rest, className: cx("ap-card", "ap-card-" + tone, "ap-card-pad-" + padding, className) }, title || actions ? /* @__PURE__ */ React17.createElement("div", { className: "ap-card-head" }, title ? /* @__PURE__ */ React17.createElement("h3", { className: "ap-card-title" }, title) : /* @__PURE__ */ React17.createElement("span", null), actions ? /* @__PURE__ */ React17.createElement("div", { className: "ap-card-actions" }, actions) : null) : null, children);
  }

  // wingpal/components/appsolute/components/Checkbox/Checkbox.tsx
  var React18 = __toESM(require_react());
  function Checkbox({ label, hint, className, ...rest }) {
    return /* @__PURE__ */ React18.createElement("label", { className: cx("ap-checkbox", rest.disabled && "ap-checkbox-disabled", className) }, /* @__PURE__ */ React18.createElement("input", { ...rest, type: "checkbox" }), /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-box", "aria-hidden": "true" }, /* @__PURE__ */ React18.createElement(CheckIcon, { size: 14 })), /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-text" }, label, hint ? /* @__PURE__ */ React18.createElement("span", { className: "ap-checkbox-hint" }, hint) : null));
  }

  // wingpal/components/appsolute/components/Segmented/Segmented.tsx
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

  // wingpal/components/appsolute/components/Kbd/Kbd.tsx
  var React20 = __toESM(require_react());
  function Kbd({ keys, children, className }) {
    if (!keys) return /* @__PURE__ */ React20.createElement("kbd", { className: cx("ap-kbd", className) }, children);
    return /* @__PURE__ */ React20.createElement("span", { className: cx("ap-kbd-group", className) }, keys.map((k, i) => /* @__PURE__ */ React20.createElement(React20.Fragment, { key: i }, i > 0 ? /* @__PURE__ */ React20.createElement("span", { className: "ap-kbd-plus", "aria-hidden": "true" }, "+") : null, /* @__PURE__ */ React20.createElement("kbd", { className: "ap-kbd" }, k))));
  }

  // wingpal/components/appsolute/components/Callout/Callout.tsx
  var React21 = __toESM(require_react());
  function Callout({ tone = "info", title, children, action, icon, role, className }) {
    const I = tone === "danger" ? AlertIcon : tone === "success" ? CircleCheckIcon : InfoIcon;
    return /* @__PURE__ */ React21.createElement("div", { className: cx("ap-callout", "ap-callout-" + tone, className), role }, /* @__PURE__ */ React21.createElement("span", { className: "ap-callout-icon", "aria-hidden": "true" }, icon != null ? icon : /* @__PURE__ */ React21.createElement(I, null)), /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-body" }, title ? /* @__PURE__ */ React21.createElement("p", { className: "ap-callout-title" }, title) : null, children ? /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-text" }, children) : null), action ? /* @__PURE__ */ React21.createElement("div", { className: "ap-callout-action" }, action) : null);
  }

  // wingpal/components/appsolute/components/EmptyState/EmptyState.tsx
  var React22 = __toESM(require_react());
  function EmptyState({ icon, title, children, action, headingLevel = 3, className }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React22.createElement("div", { className: cx("ap-empty", className) }, icon ? /* @__PURE__ */ React22.createElement("span", { className: "ap-empty-icon", "aria-hidden": "true" }, icon) : null, /* @__PURE__ */ React22.createElement(H, { className: "ap-empty-title" }, title), children ? /* @__PURE__ */ React22.createElement("div", { className: "ap-empty-text" }, children) : null, action ? /* @__PURE__ */ React22.createElement("div", { className: "ap-empty-action" }, action) : null);
  }

  // wingpal/components/appsolute/components/Dialog/Dialog.tsx
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

  // wingpal/components/appsolute/components/DownloadCard/DownloadCard.tsx
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

  // wingpal/components/appsolute/components/Steps/Steps.tsx
  var React25 = __toESM(require_react());
  function Steps({ items, layout = "list", headingLevel = 3, className }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React25.createElement("ol", { className: cx("ap-steps", "ap-steps-" + layout, className), role: "list" }, items.map((s, i) => {
      var _a;
      const state = (_a = s.state) != null ? _a : "todo";
      return /* @__PURE__ */ React25.createElement("li", { key: i, className: cx("ap-step", "ap-step-" + state), "aria-current": state === "current" ? "step" : void 0 }, /* @__PURE__ */ React25.createElement("span", { className: "ap-step-n", "aria-hidden": "true" }, state === "done" ? /* @__PURE__ */ React25.createElement(CheckIcon, { size: 16 }) : i + 1), /* @__PURE__ */ React25.createElement("div", { className: "ap-step-body" }, /* @__PURE__ */ React25.createElement(H, { className: "ap-step-title" }, s.title, s.status ? /* @__PURE__ */ React25.createElement(Badge, { tone: state === "current" ? "accent" : "neutral" }, s.status) : null), s.text ? /* @__PURE__ */ React25.createElement("div", { className: "ap-step-text" }, s.text) : null));
    }));
  }

  // wingpal/components/appsolute/components/ProjectCard/ProjectCard.tsx
  var React26 = __toESM(require_react());
  function ProjectCard({ name, href, logo, description, status, meta = [], linkLabel = "Vai al progetto", headingLevel = 3 }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React26.createElement("a", { className: "ap-project", href }, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-top" }, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-logo", "aria-hidden": "true" }, logo != null ? logo : name.slice(0, 1)), /* @__PURE__ */ React26.createElement(H, { className: "ap-project-name" }, name), status ? /* @__PURE__ */ React26.createElement(Badge, null, status) : null), description ? /* @__PURE__ */ React26.createElement("span", { className: "ap-project-desc" }, description) : null, meta.length ? /* @__PURE__ */ React26.createElement("span", { className: "ap-project-meta" }, meta.map((m) => /* @__PURE__ */ React26.createElement(Badge, { key: m }, m))) : null, /* @__PURE__ */ React26.createElement("span", { className: "ap-project-cta" }, linkLabel, /* @__PURE__ */ React26.createElement(ArrowRightIcon, { size: 16 })));
  }

  // wingpal/components/appsolute/components/TeamCard/TeamCard.tsx
  var React27 = __toESM(require_react());
  var initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  function TeamCard({ name, role, avatar, href, linkLabel, compact }) {
    return /* @__PURE__ */ React27.createElement("div", { className: cx("ap-team", compact && "ap-team-compact") }, /* @__PURE__ */ React27.createElement("span", { className: "ap-team-avatar", "aria-hidden": "true" }, avatar != null ? avatar : initials(name)), /* @__PURE__ */ React27.createElement("div", { className: "ap-team-body" }, /* @__PURE__ */ React27.createElement("span", { className: "ap-team-name" }, name), role ? /* @__PURE__ */ React27.createElement("span", { className: "ap-team-role" }, role) : null, href ? /* @__PURE__ */ React27.createElement("a", { className: "ap-link ap-team-link", href }, linkLabel != null ? linkLabel : href) : null));
  }

  // wingpal/components/appsolute/components/Faq/Faq.tsx
  var React28 = __toESM(require_react());
  function Faq({ items, name, className }) {
    return /* @__PURE__ */ React28.createElement("div", { className: cx("ap-faq", className) }, items.map((it) => (
      // "name" su <details> è recente: React 18 non lo conosce nei tipi, quindi passa come attributo libero.
      /* @__PURE__ */ React28.createElement("details", { key: it.question, className: "ap-faq-item", open: it.open, ...name ? { name } : null }, /* @__PURE__ */ React28.createElement("summary", { className: "ap-faq-q" }, /* @__PURE__ */ React28.createElement("span", null, it.question), /* @__PURE__ */ React28.createElement("span", { className: "ap-faq-chevron", "aria-hidden": "true" }, /* @__PURE__ */ React28.createElement(ChevronDownIcon, null))), /* @__PURE__ */ React28.createElement("div", { className: "ap-faq-a" }, it.answer))
    )));
  }

  // wingpal/components/appsolute/components/Prose/Prose.tsx
  var React29 = __toESM(require_react());
  function Prose({ as = "div", className, children, ...rest }) {
    const El = as;
    return /* @__PURE__ */ React29.createElement(El, { ...rest, className: cx("ap-prose", className) }, children);
  }

  // wingpal/components/appsolute/components/WindowFrame/WindowFrame.tsx
  var React30 = __toESM(require_react());
  function WindowFrame({ title, children, label, flush, className }) {
    return /* @__PURE__ */ React30.createElement("figure", { className: cx("ap-window", flush && "ap-window-flush", className), "aria-label": label }, /* @__PURE__ */ React30.createElement("div", { className: "ap-window-bar", "aria-hidden": "true" }, /* @__PURE__ */ React30.createElement("span", { className: "ap-window-dots" }, /* @__PURE__ */ React30.createElement("i", null), /* @__PURE__ */ React30.createElement("i", null), /* @__PURE__ */ React30.createElement("i", null)), title ? /* @__PURE__ */ React30.createElement("span", { className: "ap-window-title" }, title) : null), /* @__PURE__ */ React30.createElement("div", { className: "ap-window-body" }, children));
  }

  // wingpal/components/src/components/Tag/Tag.tsx
  var React31 = __toESM(require_react());

  // wingpal/components/src/utils.ts
  function cx2(...parts) {
    return parts.filter(Boolean).join(" ");
  }
  var CAL = {
    graphite: "--cal-graphite",
    sky: "--cal-sky",
    coral: "--cal-coral",
    plum: "--cal-plum",
    moss: "--cal-moss"
  };
  function calVar(c) {
    var _a;
    return "var(" + ((_a = CAL[c != null ? c : "graphite"]) != null ? _a : CAL.graphite) + ")";
  }
  var CALENDAR_COLORS = ["graphite", "sky", "coral", "plum", "moss"];
  function isoDate(d) {
    const p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }
  function parseIsoDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  function minutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + (m || 0);
  }

  // wingpal/components/src/components/Tag/Tag.tsx
  function Tag({ color, tone = "default", children }) {
    if (tone === "reminder") return /* @__PURE__ */ React31.createElement("span", { className: "ap-tag ap-tag-reminder" }, children);
    return /* @__PURE__ */ React31.createElement("span", { className: "ap-tag", style: { ["--tag"]: calVar(color) } }, /* @__PURE__ */ React31.createElement("span", { className: "ap-tag-dot", "aria-hidden": "true" }), children);
  }

  // wingpal/components/src/components/TaskItem/TaskItem.tsx
  var React32 = __toESM(require_react());
  function Check() {
    return /* @__PURE__ */ React32.createElement("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 3.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React32.createElement("path", { d: "M5 12.5l4.5 4.5L19 7.5" }));
  }
  function TaskItem({ title, due, late, done: initialDone = false, tag, tagColor, onToggle, onOpen, links, labels = {} }) {
    const { markDone = "Segna come fatta", markTodo = "Segna come da fare", late: lateLabel = "In ritardo" } = labels;
    const [done, setDone] = React32.useState(initialDone);
    const [justDone, setJustDone] = React32.useState(false);
    React32.useEffect(() => {
      setDone(initialDone);
    }, [initialDone]);
    const toggle = () => {
      const v = !done;
      setDone(v);
      setJustDone(v);
      onToggle == null ? void 0 : onToggle(v);
    };
    const isLate = late && !done;
    return /* @__PURE__ */ React32.createElement("div", { className: cx2("ap-task", done && "ap-task-done", justDone && "ap-just-done"), onAnimationEnd: (e) => {
      if (e.target === e.currentTarget) setJustDone(false);
    } }, /* @__PURE__ */ React32.createElement("button", { type: "button", className: "ap-check", role: "checkbox", "aria-checked": done, "aria-label": (done ? markTodo : markDone) + ": " + title, onClick: toggle }, done ? /* @__PURE__ */ React32.createElement(Check, null) : null), /* @__PURE__ */ React32.createElement("div", { className: "ap-task-body" }, /* @__PURE__ */ React32.createElement("span", { className: "ap-task-title" }, onOpen ? /* @__PURE__ */ React32.createElement("button", { type: "button", className: "ap-task-open", onClick: onOpen }, /* @__PURE__ */ React32.createElement("span", { className: "ap-task-title-text" }, title)) : /* @__PURE__ */ React32.createElement("span", { className: "ap-task-title-text" }, title)), due || tag ? /* @__PURE__ */ React32.createElement("span", { className: "ap-task-meta" }, due ? /* @__PURE__ */ React32.createElement("span", { className: isLate ? "ap-task-late" : void 0 }, isLate ? lateLabel + " · " + due : due) : null, tag ? /* @__PURE__ */ React32.createElement(Tag, { color: tagColor }, tag) : null) : null, links ? /* @__PURE__ */ React32.createElement("div", { className: "ap-task-links" }, links) : null));
  }

  // wingpal/components/src/components/EventBlock/EventBlock.tsx
  var React33 = __toESM(require_react());
  function EventBlock({ title, time, place: place2, color, compact, height }) {
    const style = { ["--cal"]: calVar(color), ...height ? { height } : null };
    return /* @__PURE__ */ React33.createElement("div", { className: cx2("ap-event", compact && "ap-event-compact"), style }, /* @__PURE__ */ React33.createElement("span", { className: "ap-event-title" }, title), time || place2 ? /* @__PURE__ */ React33.createElement("span", { className: "ap-event-time" }, [time, place2].filter(Boolean).join(" · ")) : null);
  }

  // wingpal/components/src/components/PollCard/PollCard.tsx
  var React34 = __toESM(require_react());
  function PollCard({ question, meta, options, myVote = null, onVote, labels = {}, headingLevel = 3 }) {
    const { mine: mineLabel = "(il tuo voto)", vote = "voto", votes = "voti" } = labels;
    const [mine, setMine] = React34.useState(myVote);
    React34.useEffect(() => {
      setMine(myVote);
    }, [myVote]);
    const H = "h" + headingLevel;
    const qId = React34.useId();
    const opts = options.map((o, i) => ({ label: o.label, votes: o.votes + (mine === i ? 1 : 0) }));
    const total = opts.reduce((a, o) => a + o.votes, 0) || 1;
    const pick = (i) => {
      const v = mine === i ? null : i;
      setMine(v);
      onVote == null ? void 0 : onVote(v);
    };
    return /* @__PURE__ */ React34.createElement("section", { className: "ap-poll", "aria-labelledby": qId }, /* @__PURE__ */ React34.createElement("div", null, /* @__PURE__ */ React34.createElement(H, { className: "ap-poll-q", id: qId }, question), meta ? /* @__PURE__ */ React34.createElement("p", { className: "ap-poll-meta" }, meta) : null), /* @__PURE__ */ React34.createElement("div", { className: "ap-poll-opts", role: "group", "aria-labelledby": qId }, opts.map((o, i) => /* @__PURE__ */ React34.createElement("button", { key: i, type: "button", "aria-pressed": mine === i, className: cx2("ap-poll-opt", mine === i && "ap-poll-opt-mine"), onClick: () => pick(i) }, /* @__PURE__ */ React34.createElement("span", { className: "ap-poll-bar", style: { width: Math.round(o.votes / total * 100) + "%" }, "aria-hidden": "true" }), /* @__PURE__ */ React34.createElement("span", null, o.label + (mine === i ? " " + mineLabel : "")), /* @__PURE__ */ React34.createElement("span", { className: "ap-poll-count" }, o.votes + " " + (o.votes === 1 ? vote : votes))))));
  }

  // wingpal/components/src/components/AppShell/AppShell.tsx
  var React35 = __toESM(require_react());
  function AppShell({ sidebar, header, children, aside, collapsed, labels = {}, className }) {
    const { sidebar: sidebarLabel = "Navigazione", aside: asideLabel = "Dettaglio" } = labels;
    return /* @__PURE__ */ React35.createElement("div", { className: cx2("ap-shell", collapsed && "ap-shell-collapsed", aside ? "ap-shell-has-aside" : null, className) }, /* @__PURE__ */ React35.createElement("nav", { className: "ap-shell-sidebar", "aria-label": sidebarLabel }, sidebar), /* @__PURE__ */ React35.createElement("div", { className: "ap-shell-main" }, header ? /* @__PURE__ */ React35.createElement("div", { className: "ap-shell-header" }, header) : null, /* @__PURE__ */ React35.createElement("main", { className: "ap-shell-content" }, children)), aside ? /* @__PURE__ */ React35.createElement("aside", { className: "ap-shell-aside", "aria-label": asideLabel }, aside) : null);
  }

  // wingpal/components/src/components/SidebarItem/SidebarItem.tsx
  var React36 = __toESM(require_react());
  function SidebarItem({ label, icon, color, active, count, href, onClick }) {
    const inner = /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("span", { className: "ap-side-icon", "aria-hidden": "true" }, color ? /* @__PURE__ */ React36.createElement("span", { className: "ap-side-dot", style: { background: calVar(color) } }) : icon), /* @__PURE__ */ React36.createElement("span", { className: "ap-side-label" }, label), count != null ? /* @__PURE__ */ React36.createElement("span", { className: "ap-side-count" }, count) : null);
    const cls = cx2("ap-side-item", active && "ap-side-item-active");
    return href != null ? /* @__PURE__ */ React36.createElement("a", { className: cls, href, title: label, "aria-current": active ? "page" : void 0, onClick }, inner) : /* @__PURE__ */ React36.createElement("button", { type: "button", className: cls, title: label, "aria-current": active ? "page" : void 0, onClick }, inner);
  }
  function SidebarGroup({ label, action, children }) {
    const id = React36.useId();
    return /* @__PURE__ */ React36.createElement("div", { className: "ap-side-group", role: "group", "aria-labelledby": label ? id : void 0 }, label ? /* @__PURE__ */ React36.createElement("div", { className: "ap-side-group-head" }, /* @__PURE__ */ React36.createElement("span", { className: "ap-side-group-label", id }, label), action) : null, children);
  }

  // wingpal/components/src/components/ViewHeader/ViewHeader.tsx
  var React38 = __toESM(require_react());

  // wingpal/components/src/icons.tsx
  var React37 = __toESM(require_react());
  function Icon2({ size = 20, children }) {
    return /* @__PURE__ */ React37.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" }, children);
  }
  var ChevronLeftIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "m15 18-6-6 6-6" }));
  var ChevronRightIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "m9 18 6-6-6-6" }));
  var PlusIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "M5 12h14M12 5v14" }));
  var CalendarIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "M8 2v4M16 2v4M3 10h18" }), /* @__PURE__ */ React37.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }));
  var NoteIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" }));
  var TaskIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React37.createElement("path", { d: "m3 17 2 2 4-4M13 6h8M13 12h8M13 18h8" }));
  var BellIcon = (p) => /* @__PURE__ */ React37.createElement(Icon2, { ...p }, /* @__PURE__ */ React37.createElement("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" }));

  // wingpal/components/src/components/ViewHeader/ViewHeader.tsx
  function ViewHeader({ title, subtitle, onPrev, onNext, onToday, views, view, onViewChange, actions, labels = {}, className }) {
    const { prev = "Precedente", next = "Successivo", today = "Oggi", views: viewsLabel = "Vista" } = labels;
    return /* @__PURE__ */ React38.createElement("header", { className: cx2("ap-viewhead", className) }, /* @__PURE__ */ React38.createElement("div", { className: "ap-viewhead-title" }, /* @__PURE__ */ React38.createElement("h1", null, title), subtitle ? /* @__PURE__ */ React38.createElement("p", null, subtitle) : null), onPrev || onNext || onToday ? /* @__PURE__ */ React38.createElement("div", { className: "ap-viewhead-nav" }, onPrev ? /* @__PURE__ */ React38.createElement(IconButton, { size: "sm", label: prev, icon: /* @__PURE__ */ React38.createElement(ChevronLeftIcon, null), onClick: onPrev }) : null, onToday ? /* @__PURE__ */ React38.createElement(Button, { size: "sm", onClick: onToday }, today) : null, onNext ? /* @__PURE__ */ React38.createElement(IconButton, { size: "sm", label: next, icon: /* @__PURE__ */ React38.createElement(ChevronRightIcon, null), onClick: onNext }) : null) : null, /* @__PURE__ */ React38.createElement("div", { className: "ap-viewhead-end" }, views ? /* @__PURE__ */ React38.createElement(Segmented, { size: "sm", label: viewsLabel, options: views, value: view, onChange: onViewChange }) : null, actions));
  }

  // wingpal/components/src/components/MonthGrid/MonthGrid.tsx
  var React39 = __toESM(require_react());
  function MonthGrid({ year, month, events = [], today, selected, onSelectDay, onSelectEvent, maxPerDay = 3, locale = "it", labels = {}, className }) {
    var _a;
    const { more = "Altri {n}", today: todayLabel = "oggi" } = labels;
    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const rows = Math.ceil((offset + daysInMonth) / 7);
    const weekdayFmt = new Intl.DateTimeFormat(locale, { weekday: "short" });
    const fullFmt = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" });
    const titleFmt = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
    const weekdays = Array.from({ length: 7 }, (_, i) => weekdayFmt.format(new Date(2024, 0, 1 + i)).replace(".", ""));
    const byDay = /* @__PURE__ */ new Map();
    for (const e of events) byDay.set(e.date, [...(_a = byDay.get(e.date)) != null ? _a : [], e]);
    for (const list of byDay.values()) list.sort((a, b) => {
      var _a2, _b;
      return ((_a2 = a.start) != null ? _a2 : "").localeCompare((_b = b.start) != null ? _b : "");
    });
    return /* @__PURE__ */ React39.createElement("div", { className: cx2("ap-month", className), role: "grid", "aria-label": titleFmt.format(first) }, /* @__PURE__ */ React39.createElement("div", { className: "ap-month-head", role: "row" }, weekdays.map((w) => /* @__PURE__ */ React39.createElement("span", { key: w, className: "ap-month-weekday", role: "columnheader" }, w))), Array.from({ length: rows }, (_, r) => /* @__PURE__ */ React39.createElement("div", { key: r, className: "ap-month-week", role: "row" }, Array.from({ length: 7 }, (_2, c) => {
      var _a2;
      const day = new Date(year, month, 1 - offset + r * 7 + c);
      const iso = isoDate(day);
      const list = (_a2 = byDay.get(iso)) != null ? _a2 : [];
      const shown = list.length > maxPerDay ? list.slice(0, maxPerDay - 1) : list;
      const hidden = list.length - shown.length;
      const isToday = iso === today;
      return /* @__PURE__ */ React39.createElement("div", { key: iso, role: "gridcell", "aria-selected": iso === selected, className: cx2("ap-month-day", day.getMonth() !== month && "ap-month-day-out", iso === selected && "ap-month-day-selected") }, /* @__PURE__ */ React39.createElement("button", { type: "button", className: cx2("ap-month-num", isToday && "ap-month-num-today"), "aria-label": fullFmt.format(day) + (isToday ? ", " + todayLabel : ""), "aria-current": isToday ? "date" : void 0, onClick: () => onSelectDay == null ? void 0 : onSelectDay(iso) }, day.getDate()), shown.map((e) => /* @__PURE__ */ React39.createElement("button", { key: e.id, type: "button", className: "ap-month-event", "aria-label": e.title + (e.start ? ", " + e.start : ""), onClick: () => onSelectEvent == null ? void 0 : onSelectEvent(e.id) }, /* @__PURE__ */ React39.createElement(EventBlock, { compact: true, title: e.title, time: e.start, color: e.color }))), hidden > 0 ? /* @__PURE__ */ React39.createElement("button", { type: "button", className: "ap-month-more", onClick: () => onSelectDay == null ? void 0 : onSelectDay(iso) }, more.replace("{n}", String(hidden))) : null);
    }))));
  }

  // wingpal/components/src/components/DayGrid/DayGrid.tsx
  var React40 = __toESM(require_react());
  var HOUR = 48;
  function place(list) {
    const items = list.map((e) => {
      const s = minutes(e.start);
      return { e, s, f: Math.max(e.end ? minutes(e.end) : s + 60, s + 30), col: 0, cols: 1 };
    }).sort((a, b) => a.s - b.s || b.f - a.f);
    let cluster = [], clusterEnd = -1;
    const close = () => {
      const n = Math.max(0, ...cluster.map((p) => p.col)) + 1;
      cluster.forEach((p) => {
        p.cols = n;
      });
      cluster = [];
    };
    for (const p of items) {
      if (cluster.length && p.s >= clusterEnd) close();
      const used = new Set(cluster.filter((q) => q.f > p.s).map((q) => q.col));
      while (used.has(p.col)) p.col++;
      cluster.push(p);
      clusterEnd = Math.max(clusterEnd, p.f);
    }
    close();
    return items;
  }
  function DayGrid({ days, events = [], startHour = 7, endHour = 21, today, now, onSelectEvent, onSelectDay, locale = "it", labels = {}, className }) {
    const { allDay = "Tutto il giorno", today: todayLabel = "oggi", now: nowLabel = "Adesso" } = labels;
    const weekdayFmt = new Intl.DateTimeFormat(locale, { weekday: "short" });
    const fullFmt = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" });
    const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i);
    const cols = { gridTemplateColumns: "56px repeat(" + days.length + ", minmax(0, 1fr))" };
    const top = (min) => (min - startHour * 60) / 60 * HOUR;
    const whole = events.filter((e) => !e.start);
    const nowMin = now ? minutes(now) : -1;
    const showNow = nowMin >= startHour * 60 && nowMin <= endHour * 60;
    return /* @__PURE__ */ React40.createElement("div", { className: cx2("ap-daygrid", className) }, /* @__PURE__ */ React40.createElement("div", { className: "ap-daygrid-head", style: cols }, /* @__PURE__ */ React40.createElement("span", null), days.map((d) => {
      const date = parseIsoDate(d);
      const isToday = d === today;
      return /* @__PURE__ */ React40.createElement("button", { key: d, type: "button", className: "ap-daygrid-dayhead", "aria-label": fullFmt.format(date) + (isToday ? ", " + todayLabel : ""), "aria-current": isToday ? "date" : void 0, onClick: () => onSelectDay == null ? void 0 : onSelectDay(d) }, /* @__PURE__ */ React40.createElement("span", { className: "ap-daygrid-weekday" }, weekdayFmt.format(date).replace(".", "")), /* @__PURE__ */ React40.createElement("span", { className: cx2("ap-daygrid-num", isToday && "ap-daygrid-num-today") }, date.getDate()));
    })), whole.length ? /* @__PURE__ */ React40.createElement("div", { className: "ap-daygrid-allday", style: cols }, /* @__PURE__ */ React40.createElement("span", { className: "ap-daygrid-hour" }, allDay), days.map((d) => /* @__PURE__ */ React40.createElement("div", { key: d, className: "ap-daygrid-alldaycol" }, whole.filter((e) => e.date === d).map((e) => /* @__PURE__ */ React40.createElement("button", { key: e.id, type: "button", className: "ap-daygrid-wholeevent", onClick: () => onSelectEvent == null ? void 0 : onSelectEvent(e.id) }, /* @__PURE__ */ React40.createElement(EventBlock, { compact: true, title: e.title, color: e.color })))))) : null, /* @__PURE__ */ React40.createElement("div", { className: "ap-daygrid-body", style: { ...cols, height: hours.length * HOUR } }, /* @__PURE__ */ React40.createElement("div", { className: "ap-daygrid-hours", "aria-hidden": "true" }, hours.map((h, i) => /* @__PURE__ */ React40.createElement("span", { key: h, className: "ap-daygrid-hour", style: { top: i * HOUR } }, String(h).padStart(2, "0"), ":00"))), days.map((d) => /* @__PURE__ */ React40.createElement("div", { key: d, className: "ap-daygrid-col", role: "group", "aria-label": fullFmt.format(parseIsoDate(d)) }, place(events.filter((e) => e.date === d && e.start)).map(({ e, s, f, col, cols: n }) => {
      const from = Math.max(s, startHour * 60), to = Math.min(f, endHour * 60);
      if (to <= from) return null;
      const time = e.start + (e.end ? "–" + e.end : "");
      const h = (to - from) / 60 * HOUR - 4;
      return /* @__PURE__ */ React40.createElement("button", { key: e.id, type: "button", className: "ap-daygrid-event", style: { top: top(from) + 2, height: h, left: col / n * 100 + "%", width: 100 / n + "%" }, "aria-label": e.title + ", " + time + (e.place ? ", " + e.place : ""), onClick: () => onSelectEvent == null ? void 0 : onSelectEvent(e.id) }, /* @__PURE__ */ React40.createElement(EventBlock, { compact: h < 60, title: e.title, time, place: h < 60 ? void 0 : e.place, color: e.color }));
    }), showNow && d === today ? /* @__PURE__ */ React40.createElement("div", { className: "ap-daygrid-now", style: { top: top(nowMin) } }, /* @__PURE__ */ React40.createElement("span", { className: "ap-sr-only" }, nowLabel, ", ", now)) : null))));
  }

  // wingpal/components/src/components/QuickAdd/QuickAdd.tsx
  var React41 = __toESM(require_react());
  function QuickAdd({ label, onAdd, placeholder, hint, submitLabel = "Aggiungi", className }) {
    const [text, setText] = React41.useState("");
    const hintId = React41.useId();
    const submit = (e) => {
      e.preventDefault();
      const t = text.trim();
      if (!t) return;
      onAdd(t);
      setText("");
    };
    return /* @__PURE__ */ React41.createElement("form", { className: cx2("ap-quickadd", className), onSubmit: submit }, /* @__PURE__ */ React41.createElement("div", { className: "ap-quickadd-field" }, /* @__PURE__ */ React41.createElement("input", { type: "text", value: text, onChange: (e) => setText(e.target.value), placeholder: placeholder != null ? placeholder : label, "aria-label": label, "aria-describedby": hint ? hintId : void 0, autoComplete: "off" }), /* @__PURE__ */ React41.createElement("button", { type: "submit", className: "ap-quickadd-submit", "aria-label": submitLabel, title: submitLabel, disabled: !text.trim() }, /* @__PURE__ */ React41.createElement(PlusIcon, null))), hint ? /* @__PURE__ */ React41.createElement("span", { className: "ap-quickadd-hint", id: hintId }, hint) : null);
  }

  // wingpal/components/src/components/NoteCard/NoteCard.tsx
  var React42 = __toESM(require_react());
  function NoteCard({ title, excerpt, updated, links, active, onOpen, headingLevel = 3 }) {
    const H = "h" + headingLevel;
    return /* @__PURE__ */ React42.createElement("article", { className: cx2("ap-note", active && "ap-note-active") }, /* @__PURE__ */ React42.createElement(H, { className: "ap-note-title" }, /* @__PURE__ */ React42.createElement("button", { type: "button", className: "ap-note-open", "aria-current": active ? "true" : void 0, onClick: onOpen }, title)), excerpt ? /* @__PURE__ */ React42.createElement("p", { className: "ap-note-excerpt" }, excerpt) : null, updated ? /* @__PURE__ */ React42.createElement("p", { className: "ap-note-updated" }, updated) : null, links ? /* @__PURE__ */ React42.createElement("div", { className: "ap-note-links" }, links) : null);
  }

  // wingpal/components/src/components/LinkChip/LinkChip.tsx
  var React43 = __toESM(require_react());
  var ICONS = { event: CalendarIcon, note: NoteIcon, task: TaskIcon };
  function LinkChip({ kind, title, meta, onOpen, onRemove, labels = {}, className }) {
    var _a, _b, _c, _d;
    const names = { event: (_a = labels.event) != null ? _a : "Evento", note: (_b = labels.note) != null ? _b : "Nota", task: (_c = labels.task) != null ? _c : "Attività" };
    const I = ICONS[kind];
    return /* @__PURE__ */ React43.createElement("span", { className: cx2("ap-linkchip", className) }, /* @__PURE__ */ React43.createElement("button", { type: "button", className: "ap-linkchip-open", onClick: onOpen }, /* @__PURE__ */ React43.createElement("span", { className: "ap-linkchip-icon", "aria-hidden": "true" }, /* @__PURE__ */ React43.createElement(I, { size: 16 })), /* @__PURE__ */ React43.createElement("span", { className: "ap-sr-only" }, names[kind], ": "), /* @__PURE__ */ React43.createElement("span", { className: "ap-linkchip-title" }, title), meta ? /* @__PURE__ */ React43.createElement("span", { className: "ap-linkchip-meta" }, meta) : null), onRemove ? /* @__PURE__ */ React43.createElement("button", { type: "button", className: "ap-linkchip-remove", "aria-label": ((_d = labels.remove) != null ? _d : "Togli il collegamento") + ": " + title, onClick: onRemove }, /* @__PURE__ */ React43.createElement(CloseIcon, { size: 14 })) : null);
  }

  // wingpal/components/src/components/Reminder/Reminder.tsx
  var React44 = __toESM(require_react());
  function Reminder({ title, time, actions, onDismiss, labels = {}, className }) {
    const { kind = "Promemoria", dismiss = "Chiudi il promemoria" } = labels;
    return /* @__PURE__ */ React44.createElement("div", { className: cx2("ap-reminder", className), role: "status" }, /* @__PURE__ */ React44.createElement("span", { className: "ap-reminder-icon", "aria-hidden": "true" }, /* @__PURE__ */ React44.createElement(BellIcon, null)), /* @__PURE__ */ React44.createElement("div", { className: "ap-reminder-body" }, /* @__PURE__ */ React44.createElement("span", { className: "ap-reminder-kind" }, kind), /* @__PURE__ */ React44.createElement("span", { className: "ap-reminder-title" }, title), time ? /* @__PURE__ */ React44.createElement("span", { className: "ap-reminder-time" }, time) : null, actions ? /* @__PURE__ */ React44.createElement("div", { className: "ap-reminder-actions" }, actions) : null), onDismiss ? /* @__PURE__ */ React44.createElement(IconButton, { variant: "ghost", size: "sm", label: dismiss, icon: /* @__PURE__ */ React44.createElement(CloseIcon, null), onClick: onDismiss }) : null);
  }

  // wingpal/components/src/components/ColorSwatches/ColorSwatches.tsx
  var React45 = __toESM(require_react());
  var NAMES2 = { graphite: "Grafite", sky: "Azzurro", coral: "Corallo", plum: "Prugna", moss: "Muschio" };
  function ColorSwatches({ value, defaultValue = "graphite", onChange, label, names = {}, className }) {
    const [inner, setInner] = React45.useState(defaultValue);
    const current = value != null ? value : inner;
    const refs = React45.useRef([]);
    const n = CALENDAR_COLORS.length;
    const select = (i, focus = false) => {
      var _a;
      const c = CALENDAR_COLORS[(i + n) % n];
      setInner(c);
      if (c !== current) onChange == null ? void 0 : onChange(c);
      if (focus) (_a = refs.current[(i + n) % n]) == null ? void 0 : _a.focus();
    };
    const index = CALENDAR_COLORS.indexOf(current);
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
    return /* @__PURE__ */ React45.createElement("div", { className: cx2("ap-swatches", className), role: "radiogroup", "aria-label": label, onKeyDown }, CALENDAR_COLORS.map((c, i) => {
      var _a;
      const name = (_a = names[c]) != null ? _a : NAMES2[c];
      return /* @__PURE__ */ React45.createElement("button", { key: c, ref: (el) => {
        refs.current[i] = el;
      }, type: "button", role: "radio", "aria-checked": c === current, "aria-label": name, title: name, tabIndex: c === current ? 0 : -1, className: "ap-swatch", style: { ["--cal"]: calVar(c) }, onClick: () => select(i) }, c === current ? /* @__PURE__ */ React45.createElement(CheckIcon, { size: 14 }) : null);
    }));
  }

  // wingpal/components/src/components/SettingsRow/SettingsRow.tsx
  var React46 = __toESM(require_react());
  function SettingsRow({ label, description, children, tone = "default" }) {
    return /* @__PURE__ */ React46.createElement("div", { className: cx2("ap-setting", tone === "danger" && "ap-setting-danger") }, /* @__PURE__ */ React46.createElement("div", { className: "ap-setting-text" }, /* @__PURE__ */ React46.createElement("span", { className: "ap-setting-label" }, label), description ? /* @__PURE__ */ React46.createElement("span", { className: "ap-setting-desc" }, description) : null), children ? /* @__PURE__ */ React46.createElement("div", { className: "ap-setting-control" }, children) : null);
  }
  function SettingsGroup({ title, children, headingLevel = 2 }) {
    const H = "h" + headingLevel;
    const id = React46.useId();
    return /* @__PURE__ */ React46.createElement("section", { className: "ap-settings", "aria-labelledby": id }, /* @__PURE__ */ React46.createElement(H, { className: "ap-settings-title", id }, title), /* @__PURE__ */ React46.createElement("div", { className: "ap-settings-card" }, children));
  }
  return __toCommonJS(bundle_entry_exports);
})();
window.WingPal = __ds;
