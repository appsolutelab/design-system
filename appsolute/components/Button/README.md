# Button

Esegue un'azione; l'etichetta è un verbo all'inizio, con la maiuscola solo sulla prima parola ("Aggiungi evento").

- `primary` (riempimento `accent`, testo `on-accent`): l'azione per cui esiste la vista. Al massimo uno per vista.
- `secondary` (default): tutte le altre azioni.
- `ghost`: azioni leggere nelle barre degli strumenti e nelle card.
- `danger`: eliminazioni. Chiedi conferma con un `Dialog` prima di eliminare.
- `size="sm"` (34px) solo in barre e righe dense; `md` è alto 44px. Su schermi touch anche il bottone piccolo risponde al dito su un'area di 44px.

Il consumatore fornisce `children` (testo, eventualmente un'icona da 20px prima) e `onClick`. Per navigare ("Scarica", "Vedi il codice") passa `href`: il componente diventa un link `<a>` con lo stesso aspetto, così resta un link per il browser e per gli screen reader.

`disabled` spegne il bottone: niente rilievo, testo `ink-muted`. Vale anche con `href`: il link perde l'indirizzo e riceve `aria-disabled`. Usalo poco: un bottone spento non dice perché. Meglio lasciarlo attivo e spiegare cosa manca quando viene premuto.

A riposo il bottone esce dallo schermo: gradiente a 145° e `shadow-button`. Al passaggio del puntatore l'ombra si allunga (`shadow-button-hover`) e sale di 1px; il `ghost` resta piatto e prende solo `shadow-raised-sm`. Il primario non cambia colore all'hover: cambia solo l'ombra. Le ombre stanno sotto tutti i bottoni, anche quelli vicini, quindi due bottoni affiancati non si coprono mai. Premuto, il bottone diventa scavato (`shadow-inset`); il primario usa `shadow-inset-accent`, con l'ombra scura in alto a sinistra sul suo riempimento. Con `prefers-reduced-motion` niente spostamenti.

Al click il bottone scende di 1px e torna su con un piccolo rimbalzo. L'animazione è nel componente: chi usa solo le classi CSS ottiene l'abbassamento, ma non il rimbalzo.
