/* Punto d'ingresso del solo bundle del design system (components/bundle.js): mette in window.WingPal anche
   i componenti di Appsolute, così anteprime e prototipi funzionano con un file solo. Nel progetto non serve:
   lì si importa da ui/appsolute e da ui/wingpal. */
export * from "./appsolute";
export * from "./index";
