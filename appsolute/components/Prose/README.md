# Prose

Colonna di testo lungo, leggibile: informativa sulla privacy, note di versione, una pagina "Chi siamo".

Il consumatore fornisce HTML normale come `children`: `h1`–`h3`, `p`, `ul`, `ol`, `a`, `code`, `pre`, `blockquote`, `hr`, `table`. Il componente dà lo stile a quei tag, quindi va bene anche per il testo che arriva da un file Markdown. Con `as="article"` diventa la pagina intera.

- Colonna larga al massimo 720px: mettila dentro una `Section` senza `grid`.
- `h1` è in stile `title`, `h2` in `heading`, `h3` in `body-strong`. Un solo `h1` per pagina.
- I link sono `ink` sottolineati: così il contrasto regge in entrambi i temi.
- La classe `ap-prose-meta` su un paragrafo lo rende `small` e `ink-muted`: per "Ultimo aggiornamento".
- Non usarlo per l'interfaccia: card, elenchi di funzioni e moduli hanno i loro componenti.
