# Section

Una sezione della landing page: contenitore largo al massimo 1120px con intestazione (sopratitolo, titolo, frase) e il contenuto sotto.

- Il titolo è un `<h2>` nello stile `title`; la sezione è collegata al titolo con `aria-labelledby`.
- `headingLevel={1}` solo nelle pagine senza `Hero`, come la privacy: lì il titolo della sezione è il titolo della pagina. Resta un solo `<h1>` per pagina.
- `id` serve per le ancore della `Navbar` (`#funzioni`). Lo scorrimento si ferma sotto la Navbar fissa.
- `grid` mette i figli in una griglia che va a capo da sola (colonne da 260px in su): pensata per `FeatureCard`, `ProjectCard` e `TeamCard`.
- `tone="sunken"` dà alla sezione lo sfondo `surface-sunken` per staccarla dalle vicine; usalo al massimo una volta ogni due sezioni.
- `align="center"` centra l'intestazione: per una sezione sola, quella che vuoi far notare.
- Tra una sezione e l'altra c'è `space-12`.

Il consumatore fornisce titolo, testi e contenuto.
