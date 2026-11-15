# IconButton

Bottone con una sola icona, per barre e controlli compatti; ha sempre un'etichetta letta dagli screen reader.

- È un `Button` quadrato (44px, 34px con `size="sm"`): stesse varianti, stesse ombre, stesso rimbalzo al click.
- `label` è obbligatoria: diventa `aria-label` e il suggerimento al passaggio del puntatore. Scrivila come un'azione: "Apri il menu", "Copia".
- Usa `variant="ghost"` nelle barre (Navbar, toolbar), `secondary` quando il bottone sta da solo.
- Icone da 20px che usano `currentColor`. Il design system esporta quelle che servono ai componenti (`MenuIcon`, `CloseIcon`, `SunIcon`, `MoonIcon`, `CopyIcon`, `CheckIcon`, `CodeIcon`, `ArrowRightIcon`); per le altre usa Lucide.

Il consumatore fornisce `label`, `icon` e `onClick`.
