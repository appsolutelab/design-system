# Dialog

Finestra sopra la vista per una cosa sola: confermare un'azione o compilare un modulo breve.

Il consumatore tiene lo stato: passa `open` e mette `open` a `false` in `onClose`, che arriva con Esc, con un clic sul velo o sul bottone X. `title` dice cosa si sta facendo; `children` è il testo o il modulo; `actions` sono i bottoni in fondo, prima "Annulla" poi l'azione.

- Usa `<dialog>` del browser: il focus resta dentro, la pagina dietro non si può usare, Esc chiude.
- Galleggia su `surface-raised` con `shadow-pop`; dietro c'è il velo `scrim`.
- `size="sm"` (400px) per le conferme, `md` (520px, default) per i moduli come "Nuovo evento".
- Il titolo di una conferma è una domanda con il verbo dell'azione ("Eliminare la nota?") e il bottone ripete quel verbo ("Elimina nota"), mai "OK" o "Sì".
- Il bottone che elimina è `danger`; quello che salva è `primary`.
- Non aprire una finestra da un'altra finestra. Per un avviso che non chiede una decisione usa `Callout`.
- `modal={false}` serve solo ad anteprime e documentazione: mostra la finestra nel flusso della pagina, senza velo.
