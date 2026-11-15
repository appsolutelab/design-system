# Card

Pannello generico: il contenitore di base per raggruppare contenuti in un'app o in una landing.

- `raised` (default): `surface` con `shadow-raised`. Il caso normale.
- `sunken`: `surface-sunken` con `shadow-inset`, per contenuti secondari o aree dove si scrive.
- `floating`: `surface-raised` con `shadow-pop`, solo per ciò che sta sopra la vista (menu, popover).

Il consumatore fornisce `children`. `title` e `actions` aggiungono una riga d'intestazione; con `title` passa anche `as="section"` o `"article"`. `padding` vale `lg` (24px, default), `md` (16px) o `none` per contenuti che arrivano al bordo.

Dentro una card in rilievo i controlli sono in rilievo piccolo o scavati: mai un'altra card `raised`. Se il contenuto ha già un componente suo (`FeatureCard`, `RepoCard`, `TaskItem`), usa quello.
