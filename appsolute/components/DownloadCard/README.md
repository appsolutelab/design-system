# DownloadCard

Il blocco "Scarica" di una landing: propone il file giusto per il computer del visitatore e tiene gli altri a portata di mano.

Il consumatore fornisce `options`, un file per sistema (`platform`, `href`, e meglio anche `file`, `size`, `note`), più `version` e `date` dell'ultima versione. Di solito `href` punta al file di una release su GitHub.

- Il componente rileva Windows, macOS o Linux nel browser e mostra **un solo bottone primario** per quel sistema; gli altri file stanno sotto "Altri sistemi" come righe scavate.
- Su telefono e tablet, o se il sistema non si capisce, non c'è nessun bottone primario: compare la frase `labels.mobile` e l'elenco completo.
- `platform` forza il sistema (utile nei test e nelle anteprime); `platform={null}` forza la versione senza bottone primario.
- `footer` è la riga delle prove: note di versione, checksum, "Gratis, senza account". Solo cose vere.
- I sistemi si scrivono a parole, senza i loghi di Microsoft, Apple o Linux.
- Testi in inglese con `labels`: `download` ("Download for {os}"), `others`, `all`, `mobile`, `get`.

È il bottone primario della pagina: nella stessa vista il `Hero` porta qui con un link ("Scarica" → `#scarica`) invece di ripetere il file. Finché non c'è una versione da scaricare non usarlo: metti un `Callout` "In sviluppo" e il link al codice.
