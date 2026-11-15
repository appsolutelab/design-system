# Hero

Apertura della landing page: un titolo, una frase che spiega cosa fa il prodotto, al massimo due azioni.

- Il titolo è l'unico `<h1>` della pagina, nello stile `display`. Breve, senza punto finale. Sotto i 480px scende a 32px, così un titolo lungo non occupa mezzo schermo.
- `eyebrow` sopra il titolo in stile `label` maiuscolo: la promessa più forte ("Gratis e open source").
- `status` sotto il titolo, in un `Badge`: a che punto è il prodotto ("In sviluppo · prima versione prevista a gennaio 2027"). Toglilo quando il prodotto si può scaricare.
- `lead` in `ink-muted`: una o due frasi oneste su cosa fa il prodotto. Solo promesse verificabili.
- `actions`: un `Button` primario con `href` ("Scarica") e uno secondario ("Vedi il codice"). Sono link, non bottoni.
- `note`: piattaforme, licenza, "Niente pubblicità" in `small`.
- Con `media` (screenshot, illustrazione o un `WindowFrame`) diventa a due colonne sopra 900px; su telefono l'immagine va sotto.

Niente animazioni all'apertura: il titolo è già lì.
