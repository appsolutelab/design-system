# CodeBlock

Blocco di codice o di comandi da terminale con il bottone Copia, per la sezione "Il codice è pubblico" e la documentazione.

- Scavato nella pagina (`surface-sunken`, `shadow-inset`, bordo `line`), testo in `mono`, scorrimento orizzontale per le righe lunghe (raggiungibile da tastiera).
- `prompt` mostra "$" davanti a ogni riga: non si seleziona e non viene copiato.
- `title` in alto a sinistra: il linguaggio ("bash") o il nome del file. Fa anche da nome del blocco per gli screen reader; senza `title` il nome è `labels.code` ("Codice").
- Il bottone dice cosa è successo: "Copiato" per due secondi, o "Copia non riuscita". Il messaggio viene letto dagli screen reader.
- Niente colori di sintassi: il blocco resta leggero e leggibile in entrambi i temi.

Il consumatore fornisce `code` e, in inglese, `labels` ("Copy", "Copied", "Copy failed", "Code").
