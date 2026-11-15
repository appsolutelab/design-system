# Checkbox

Casella per una scelta sì/no dentro un modulo o un elenco di opzioni.

Il consumatore fornisce `label` (tutta la riga è cliccabile) e gli attributi di un normale `<input type="checkbox">`: `checked` e `onChange`, oppure `defaultChecked`. `hint` aggiunge una riga di aiuto in `small`.

- Vuota è scavata (`surface-sunken`, `shadow-inset`) con il bordo `line-strong`; spuntata si riempie di `accent` con il segno `on-accent`.
- L'etichetta dice cosa succede quando è spuntata, in positivo: "Mostra i numeri delle settimane", non "Non nascondere…".
- Per una scelta che ha effetto subito tra due stati con un nome (tema, lingua) usa `Switch`. Per completare un'attività di WingPal usa `TaskItem`, che ha la sua animazione.
