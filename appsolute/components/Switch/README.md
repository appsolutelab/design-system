# Switch

Selettore a due posizioni: un binario scavato con un pomello che scorre sull'opzione attiva. Lo stesso componente serve per il tema, la lingua o qualsiasi scelta tra due cose.

- Ogni opzione ha `value`, `name` (il nome per esteso, letto dagli screen reader e mostrato come suggerimento) e `content`: un'icona da 18px che usa `currentColor` oppure una sigla di due o tre lettere ("IT", "SÌ").
- Cosa fa lo switch lo decide `onChange`: riceve il `value` scelto. Non serve un componente nuovo per ogni uso, cambiano solo le opzioni.
- Binario `surface-sunken` con `shadow-inset` e bordo `line-strong`, che cambia colore col tema. Pomello pieno di `accent`: l'opzione attiva è in `on-accent` sopra il pomello, l'altra resta visibile in `ink-muted`, così si vede subito cosa si può scegliere.
- Mouse: si clicca una delle due metà; cliccare quella già attiva passa all'altra. Tastiera: Tab per arrivarci, frecce sinistra/destra per cambiare; l'anello del focus gira intorno a tutto il binario.
- È un `radiogroup` con due `radio`: `label` dà il nome al gruppo ("Tema", "Lingua").
- Controllato (`value` + `onChange`) o libero (`defaultValue`).
- Il pomello scorre in 300ms con un piccolo rimbalzo; con `prefers-reduced-motion` si sposta subito.
- Misura unica: 80×40px.

Solo due opzioni: per tre o più scelte serve un altro componente (per esempio dei bottoni affiancati).

```tsx
<Switch
  label="Vista"
  value={view}
  onChange={setView}
  options={[
    { value: "grid", name: "Griglia", content: <LayoutGrid size={18} /> },
    { value: "list", name: "Lista", content: <List size={18} /> },
  ]}
/>
```
