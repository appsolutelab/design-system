# EmptyState

Riempie una vista o una card ancora vuota e dice come iniziare.

Il consumatore fornisce `title` (cosa manca, senza drammi: "Nessuna attività per oggi"), una frase in `children` che spiega come si riempie lo spazio e `action`, di solito il `Button` primario della vista. `icon` è un'icona da 24px in un pozzetto scavato.

- Una sola azione. Se la vista ha già il suo bottone primario nell'intestazione, qui usa un bottone `secondary`.
- Niente punti esclamativi, niente illustrazioni: lo stato vuoto è normale, non un errore. Per un errore usa `Callout`.
- Usalo anche per una ricerca senza risultati: "Nessun risultato per «verifica»", con il suggerimento di cambiare parola.
