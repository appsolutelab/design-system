# Callout

Avviso dentro la pagina: dice una cosa che la persona deve sapere prima di andare avanti.

- `info` (default): avviso neutro, per esempio "In sviluppo".
- `success`: un'operazione riuscita che lascia qualcosa da sapere (dov'è il file).
- `danger`: un errore o un rischio di perdere dati. Ha il bordo `danger`.

Il consumatore fornisce `title` (cosa è successo), `children` (cosa significa e cosa fare, una o due frasi) e, se serve, `action` con un `Button` piccolo. Il tono cambia icona e colore dell'icona: il testo resta `ink` e `ink-muted`, quindi il messaggio si capisce anche senza colore.

Passa `role="status"` se l'avviso compare da solo mentre la persona fa altro, `role="alert"` solo per errori urgenti. Non galleggia e non sparisce: per il promemoria di un evento WingPal ha `Reminder`. Al massimo un avviso per vista.
