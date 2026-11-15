# Badge

Pillola piccola che dice lo stato di qualcosa: una versione, una licenza, "In sviluppo".

- `neutral` (default): informazione. Bordo `line-strong`, testo `ink-muted`.
- `accent`: la cosa più importante della riga, per esempio la versione attuale. Una per gruppo.
- `success` e `danger`: uno stato. Il colore non basta: scrivi sempre la parola ("Disponibile", "Non più supportata").

Il consumatore fornisce `children` (una o due parole, maiuscola solo all'inizio) e, se serve, `icon` da 14px.

Non è cliccabile e non ha rilievo: per filtrare o scegliere usa `Segmented`, per le etichette colorate di WingPal usa `Tag`. Le pillole dentro `FeatureCard` (`status`) e `RepoCard` hanno lo stesso aspetto: nei componenti nuovi usa `Badge`.
