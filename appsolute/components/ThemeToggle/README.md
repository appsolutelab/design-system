# ThemeToggle

Uno `Switch` già pronto per il tema: sole a sinistra (chiaro), luna a destra (scuro), più la logica che applica e ricorda il tema.

- Aspetto, mouse e tastiera sono quelli dello `Switch`. Il binario cambia colore insieme al tema; il pomello è nero nel tema chiaro e chiaro in quello scuro.
- Al cambio di tema il pomello scorre e il resto della pagina cambia colore subito: `applyTheme` spegne le transizioni per un istante, così bottoni e card non animano le ombre da un tema all'altro.
- Senza `theme` fa tutto da solo: parte dal tema già scritto su `<html data-theme>`, altrimenti da quello salvato, altrimenti da quello del sistema operativo.
- **Ricorda solo ciò che sceglie la persona.** Finché nessuno tocca lo switch, la pagina segue il sistema operativo, anche se il sistema cambia tema mentre la pagina è aperta. Al primo click la scelta viene salvata nel browser sotto la chiave `storageKey` (default "theme"; ogni prodotto può usarne una sua, es. "wingpal-theme") e da lì in poi vince sul sistema.
- Se nella pagina ci sono più ThemeToggle, si allineano tra loro.
- Con `theme` + `onChange` è controllato: utile se il tema vive nello stato dell'app. L'hook `useTheme(storageKey)` restituisce `[tema, cambiaTema]` con la stessa logica (segue il sistema, salva solo la scelta), quindi non serve riscriverla.
- Per non vedere il lampo del tema sbagliato al caricamento, la pagina imposta `data-theme` con un piccolo script in `<head>` prima di React: legge la chiave salvata e, se non c'è, `prefers-color-scheme`.

Per casi particolari il design system esporta anche `getInitialTheme`, `applyTheme(tema, chiave, ricorda)` e `followSystemTheme`.

In inglese passa `labels={{ label: "Theme", light: "Light theme", dark: "Dark theme" }}`.
