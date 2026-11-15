# WindowFrame

Cornice a forma di finestra per mostrare l'app in una landing.

Il consumatore fornisce `children`: uno screenshot (`<img>`, con `flush` perché arrivi ai bordi) oppure i componenti veri del prodotto, che restano vivi e seguono il tema della pagina. `title` è il testo nella barra; `label` descrive l'anteprima a chi usa uno screen reader.

- Galleggia con `shadow-pop`: è l'oggetto in primo piano della sezione. Una per vista.
- I tre punti nella barra sono neutri (`line-strong`): la cornice non imita Windows né macOS.
- Per uno screenshot servono due immagini, tema chiaro e tema scuro, mostrate secondo `data-theme`.
- Sta bene nel `media` del `Hero` o in una `Section` centrata. Dentro l'app vera non serve: la finestra la disegna il sistema operativo.
