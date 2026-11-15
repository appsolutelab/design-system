# Segmented

Scelta tra poche opzioni con un nome, tutte visibili: Mese / Settimana / Giorno.

Il consumatore fornisce `options` (da due a cinque, ognuna con `value` e `label` di una parola), `label` per gli screen reader e `onChange`. Con `value` lo stato lo tiene chi lo usa; senza, il componente parte da `defaultValue`.

- È lo stesso disegno di `Switch`: binario scavato e pomello `accent` che scorre. L'opzione attiva è `on-accent`, le altre `ink-muted`.
- Le colonne sono tutte larghe uguali: tieni le etichette corte e di lunghezza simile.
- Con le frecce della tastiera si passa da un'opzione all'altra; il focus gira intorno a tutto il binario.
- Per due opzioni con sole icone o sigle (tema, lingua) usa `Switch`. Oltre le cinque opzioni serve un menu.
- `size="sm"` nelle barre degli strumenti, come in `ViewHeader` di WingPal.
