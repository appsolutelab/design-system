# Steps

Elenco numerato di tappe in ordine: una roadmap, i passi di un'installazione, "come funziona".

Il consumatore fornisce `items`: per ogni tappa `title`, una o due frasi in `text` e, in una roadmap, `state` (`done`, `current`, `todo`) con la parola `status` che lo dice ("Fatto", "In corso", "In programma").

- Il numero sta in un pozzetto scavato. La tappa `current` ha il numero pieno di `accent`; quella `done` ha una spunta al posto del numero. Lo stato si legge sempre anche dalla parola in `status`: mettila ogni volta che usi `state`.
- `layout="list"` (default): una sotto l'altra, unite da una linea. `layout="grid"`: card in rilievo affiancate che vanno a capo, per tre o quattro tappe brevi.
- Una sola tappa `current`.
- Niente date se non sono sicure: "In programma" è onesto, "Marzo 2027" è una promessa.
- Per funzioni che non hanno un ordine usa `FeatureCard` in una `Section` con `grid`.
