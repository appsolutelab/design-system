# Navbar

Barra in alto della landing page: logo e nome a sinistra, voci di menu, controlli a destra; su telefono le voci vanno in un menu a comparsa.

- Una barra in rilievo (`surface`, `shadow-raised`, `radius-lg`) che galleggia sopra la pagina e resta in alto durante lo scorrimento (`sticky`). Sopra e ai lati della barra la pagina che scorre sfuma nello sfondo, invece di spuntare.
- Voci in `ink-muted`; quella della sezione attuale (`current`) ha sfondo `accent-soft`, testo `ink` e `aria-current="page"`.
- In `actions` vanno, in quest'ordine: `LangSwitch`, `ThemeToggle` e al massimo un `Button` primario con `href` ("Scarica").
- Sotto 760px compare il bottone menu: apre un pannello con voci e controlli dentro la stessa barra. Si chiude scegliendo una voce o con Esc, che riporta il focus sul bottone menu.
- `skipHref` (es. `"#contenuto"`, l'`id` del `<main>`) aggiunge il link "Vai al contenuto": è il primo elemento della pagina e compare solo con il tasto Tab. Mettilo in ogni pagina.
- `brand` è obbligatorio: il nome del prodotto. Il logo (`logo`) è facoltativo e decorativo (`alt=""`): il nome accanto dà già il testo.

Il consumatore fornisce `brand`, `links`, `current`, `actions` e, in inglese, `labels` ("Main menu", "Open menu", "Close menu", "Skip to content").
