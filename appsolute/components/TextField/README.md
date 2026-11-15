# TextField

Campo di testo con etichetta sempre visibile; il placeholder è un esempio, mai l'etichetta.

- Scavato nello sfondo (`surface-sunken` con `shadow-inset`) con un bordo sottile `line-strong`.
- Quando lo selezioni il campo si schiarisce, il bordo diventa `accent` da 2px e intorno si allarga un alone in 250ms. Anche l'etichetta diventa `accent`. Con un errore, bordo, alone ed etichetta sono `danger`.
- `hint` per spiegare il formato atteso ("Es. Palestra, Aula 3B").
- `error` sostituisce l'hint: dice cosa non va e come risolvere. Il bordo diventa `danger` da 2px e il testo inizia con "Errore:", così non dipende solo dal colore.
- `multiline` lo trasforma in una `<textarea>` per testi lunghi (la descrizione di un evento): `rows` righe visibili (default 4), allungabile trascinando l'angolo.
- `type="date"` e `type="time"` usano il selettore del browser, che segue il tema chiaro o scuro della pagina.
- `disabled`: niente ombra, testo `ink-muted`. Se il valore serve solo da leggere, meglio testo normale che un campo spento.

Il consumatore fornisce `label`, `value`/`onChange` e gli altri attributi di `<input>` (o di `<textarea>` con `multiline`). In inglese passa `errorPrefix="Error"`.
