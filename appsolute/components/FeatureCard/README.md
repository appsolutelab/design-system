# FeatureCard

Card in rilievo che presenta una funzione dell'app: icona, nome, una o due frasi, eventualmente un link.

- Icona da 20px in un pozzetto scavato (`surface-sunken`, `shadow-inset`), titolo in stile `heading`, testo in `ink-muted`.
- Parla di cosa fa per la persona, non di come è fatta: "Ritrovi tutto in un posto solo", non "Database SQLite locale".
- `status` per ciò che non c'è ancora: "In arrivo". Non presentare come pronta una funzione che non c'è ancora.
- `href` aggiunge un link sottolineato "Scopri di più" in fondo alla card.
- Mettile in una `Section` con `grid`: le card nella stessa riga hanno la stessa altezza.

Il consumatore fornisce `icon` (es. da `lucide-react`), `title` e il testo come `children`.
