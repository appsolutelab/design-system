# RepoCard

Card che porta al codice su GitHub: nome del repository, una frase, licenza e linguaggi.

- Tutta la card è un link. In rilievo a riposo, sale di 1px al passaggio del puntatore, si schiaccia quando la premi, come un bottone.
- Il nome è in `mono` (`appsolute/nome-progetto`), con l'icona del codice in un pozzetto scavato.
- `license` e `meta` diventano pillole con bordo `line-strong`: "AGPL-3.0", "TypeScript", "Rust".
- In fondo l'invito, sottolineato: "Vedi il codice su GitHub".
- Non disegnare il logo di GitHub: si scrive "GitHub" a parole.

Il consumatore fornisce `name`, `href`, `description`, `license` e `meta`.
