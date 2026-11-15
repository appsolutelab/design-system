Il logo di appsolute: il simbolo (`mark.svg`) e la scritta "Appsolute Lab" (`wordmark.svg`), gli stessi file della landing (`src/assets/` nel repository `appsolutelab/wingpal-landing`). Nel gruppo ci sono anche le varianti `mark-light.svg`, `wordmark-light.svg`, `mark-mono.svg` e `mark-mono-dark.svg`.

- Un inchiostro solo: `ink`. `mark.svg` e `wordmark.svg` contengono `#1a1a1a` e passano a `#ececec` quando il sistema operativo è in tema scuro.
- In una pagina con il cambio tema usali come **maschera** su un elemento colorato con `var(--ink)`, così seguono anche il tema scelto con `ThemeToggle`: `background: var(--ink); mask: url(mark.svg) center / contain no-repeat;`. Con `<img>` seguirebbero solo il tema del sistema.
- Proporzioni: simbolo 686 × 678, scritta 1124 × 300. Affiancati hanno la stessa altezza (48px nella sezione "Chi siamo", 28–32px nella barra di navigazione) e `space-3` tra l'uno e l'altra.
- Non cambiare colore, non ruotare, non separare le lettere della scritta. Sotto i 24px di altezza usa solo il simbolo.
- Il logo di ogni prodotto sta nel design system del prodotto (quello di WingPal è nel gruppo Product-Logos di WingPal).
