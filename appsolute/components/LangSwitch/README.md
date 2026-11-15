# LangSwitch

Uno `Switch` già pronto per la lingua: IT a sinistra, EN a destra.

- Mostra le sigle (`IT`, `EN`); gli screen reader leggono il nome intero nella sua lingua ("Italiano", "English"), grazie a `aria-label` e all'attributo `lang`.
- Aspetto, mouse e tastiera sono quelli dello `Switch`: pomello `accent` sulla lingua attiva, l'altra in `ink-muted`.
- Controllato (`value` + `onChange`, es. collegato a i18next) o libero.
- Due lingue sole: con `options` puoi cambiarle (es. italiano e tedesco), ma restano due.

Il consumatore fornisce `value` e `onChange`. In inglese passa `label="Language"`.
