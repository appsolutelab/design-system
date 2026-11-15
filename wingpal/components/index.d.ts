import type * as React from "react";

/* Tipi dei componenti WingPal (window.WingPal). Generati dai sorgenti in components/src. */

export interface TagProps {
    /** Colore del calendario o dell'etichetta. Ignorato se tone="reminder". */
    color?: CalendarColor;
    /** reminder: pillola marigold per i promemoria. */
    tone?: "default" | "reminder";
    children: React.ReactNode;
}
export declare function Tag(props: TagProps): React.JSX.Element;

export interface TaskItemProps {
    title: string;
    /** Scadenza già formattata, es. "Domani · 08:00". */
    due?: string;
    /** Scadenza superata: mostra "In ritardo" in danger. */
    late?: boolean;
    done?: boolean;
    tag?: string;
    tagColor?: CalendarColor;
    onToggle?: (done: boolean) => void;
    /** Con onOpen il titolo diventa un bottone che apre l'attività (scadenza, etichetta, collegamenti). */
    onOpen?: () => void;
    /** I collegamenti dell'attività, come LinkChip: la nota o l'evento da cui è nata. */
    links?: React.ReactNode;
    /** Testi per l'accessibilità e il ritardo, da tradurre per l'inglese. */
    labels?: {
        markDone?: string;
        markTodo?: string;
        late?: string;
    };
}
export declare function TaskItem(props: TaskItemProps): React.JSX.Element;

export interface EventBlockProps {
    title: string;
    /** Orario già formattato, es. "14:30–16:00". */
    time?: string;
    place?: string;
    color?: CalendarColor;
    /** Una riga sola, per eventi brevi o la vista mese. */
    compact?: boolean;
    /** Altezza in px nella griglia oraria (48px = 1 ora). */
    height?: number;
}
export declare function EventBlock(props: EventBlockProps): React.JSX.Element;

export interface PollCardProps {
    question: string;
    /** Riga sotto la domanda, es. "Proposto da Giulia · chiude venerdì". */
    meta?: string;
    /** Voti degli altri membri, senza il voto dell'utente. */
    options: {
        label: string;
        votes: number;
    }[];
    /** Indice dell'opzione votata dall'utente, se c'è. */
    myVote?: number | null;
    onVote?: (index: number | null) => void;
    /** Testi da tradurre per l'inglese. */
    labels?: {
        mine?: string;
        vote?: string;
        votes?: string;
    };
    /** Livello del titolo della domanda (default 3). */
    headingLevel?: 2 | 3 | 4;
}
export declare function PollCard(props: PollCardProps): React.JSX.Element;

export interface AppShellProps {
    /** La barra laterale: logo, SidebarGroup e SidebarItem. */
    sidebar: React.ReactNode;
    /** L'intestazione della vista, di solito un ViewHeader. */
    header?: React.ReactNode;
    /** La vista: MonthGrid, DayGrid, l'elenco delle attività, l'editor di una nota. Scorre da sola. */
    children: React.ReactNode;
    /** Pannello a destra per il dettaglio di ciò che è selezionato (la nota di un evento, i collegamenti). */
    aside?: React.ReactNode;
    /** Barra laterale stretta, solo icone (72px). */
    collapsed?: boolean;
    /** Nomi delle zone per gli screen reader. */
    labels?: {
        sidebar?: string;
        aside?: string;
    };
    className?: string;
}
/** La finestra dell'app: barra laterale in rilievo a sinistra, vista al centro, pannello di dettaglio facoltativo a destra. Occupa tutta l'altezza del contenitore. */
export declare function AppShell(props: AppShellProps): React.JSX.Element;

export interface SidebarItemProps {
    /** Nome della voce: "Calendario", "Attività", "Scuola". */
    label: string;
    /** Icona da 20px che usa currentColor. */
    icon?: React.ReactNode;
    /** Al posto dell'icona, il pallino di un calendario o di un'etichetta. */
    color?: CalendarColor;
    /** La voce della vista aperta: sfondo accent-soft e aria-current. */
    active?: boolean;
    /** Numero a destra, es. le attività da fare oggi. */
    count?: number;
    /** Con href la voce è un link; senza, un bottone. */
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
/** Una voce della barra laterale. In una barra collapsed (AppShell) resta solo l'icona e il nome diventa il suggerimento. */
export declare function SidebarItem(props: SidebarItemProps): React.JSX.Element;
export interface SidebarGroupProps {
    /** Intestazione in maiuscolo: "Etichette". Senza, il gruppo non ha titolo (la navigazione principale). */
    label?: string;
    /** Un controllo piccolo accanto al titolo, es. un IconButton ghost "Nuova etichetta". */
    action?: React.ReactNode;
    /** Le SidebarItem del gruppo. */
    children: React.ReactNode;
}
/** Raggruppa le voci della barra laterale sotto un'intestazione. */
export declare function SidebarGroup(props: SidebarGroupProps): React.JSX.Element;

export interface ViewHeaderProps {
    /** Titolo della vista: "Novembre 2026", "Attività", il titolo di una nota. È l'<h1> della finestra. */
    title: React.ReactNode;
    /** Riga piccola sotto il titolo: "Settimana 46", "3 da fare oggi". */
    subtitle?: React.ReactNode;
    /** Con onPrev e onNext compaiono le frecce per spostarsi nel tempo. */
    onPrev?: () => void;
    onNext?: () => void;
    /** Con onToday compare il bottone "Oggi". */
    onToday?: () => void;
    /** Le viste tra cui scegliere, es. Mese / Settimana / Giorno. */
    views?: SegmentedOption[];
    /** Vista attiva. */
    view?: string;
    onViewChange?: (view: string) => void;
    /** A destra: l'azione principale della vista ("Nuovo evento") e, se serve, la ricerca. */
    actions?: React.ReactNode;
    /** Testi da tradurre. */
    labels?: {
        prev?: string;
        next?: string;
        today?: string;
        views?: string;
    };
    className?: string;
}
/** Intestazione di ogni vista dell'app: titolo, navigazione nel tempo, cambio vista e azione principale. */
export declare function ViewHeader(props: ViewHeaderProps): React.JSX.Element;

export interface MonthGridProps {
    /** Anno, es. 2026. */
    year: number;
    /** Mese da 0 (gennaio) a 11 (dicembre), come in Date. */
    month: number;
    /** Gli eventi da mostrare: bastano quelli del mese e dei giorni vicini. */
    events?: CalendarEvent[];
    /** Il giorno di oggi "2026-11-14": il suo numero è pieno di marigold. */
    today?: string;
    /** Il giorno selezionato: sfondo accent-soft. */
    selected?: string;
    onSelectDay?: (date: string) => void;
    onSelectEvent?: (id: string) => void;
    /** Quanti eventi mostrare per giorno prima di "Altri n" (default 3). */
    maxPerDay?: number;
    /** Lingua di giorni e date (default "it"). */
    locale?: string;
    /** Testi da tradurre. In more, {n} è il numero di eventi nascosti. */
    labels?: {
        more?: string;
        today?: string;
    };
    className?: string;
}
/** La vista mese: sei righe al massimo, settimana che inizia di lunedì, eventi come EventBlock compatti. */
export declare function MonthGrid(props: MonthGridProps): React.JSX.Element;

export interface DayGridProps {
    /** I giorni in colonna, come "2026-11-14": uno per la vista giorno, sette per la settimana. */
    days: string[];
    /** Gli eventi di quei giorni. Quelli senza start vanno nella riga "Tutto il giorno". */
    events?: CalendarEvent[];
    /** Prima ora mostrata (default 7). */
    startHour?: number;
    /** Ultima ora mostrata, esclusa (default 21). */
    endHour?: number;
    /** Il giorno di oggi: il suo numero è pieno di marigold. */
    today?: string;
    /** L'ora attuale "15:10": disegna la linea dell'ora attuale nella colonna di oggi. */
    now?: string;
    onSelectEvent?: (id: string) => void;
    onSelectDay?: (date: string) => void;
    /** Lingua di giorni e date (default "it"). */
    locale?: string;
    /** Testi da tradurre. */
    labels?: {
        allDay?: string;
        today?: string;
        now?: string;
    };
    className?: string;
}
/** La griglia oraria delle viste giorno e settimana: un'ora è alta 48px, gli eventi sono EventBlock alti quanto durano. */
export declare function DayGrid(props: DayGridProps): React.JSX.Element;

export interface QuickAddProps {
    /** Cosa si aggiunge, come etichetta per gli screen reader e testo d'esempio: "Aggiungi attività". */
    label: string;
    /** Chiamata con il testo quando la persona preme Invio o il bottone. Il campo si svuota da solo. */
    onAdd: (text: string) => void;
    /** Testo d'esempio nel campo (default uguale a label). */
    placeholder?: string;
    /** Riga di aiuto sotto il campo: "Invio per aggiungere". */
    hint?: React.ReactNode;
    /** Nome del bottone per gli screen reader (default "Aggiungi"). */
    submitLabel?: string;
    className?: string;
}
/** Campo a una riga per aggiungere al volo un'attività (o un evento, una nota) in cima a un elenco. */
export declare function QuickAdd(props: QuickAddProps): React.JSX.Element;

export interface NoteCardProps {
    /** Titolo della nota (la prima riga). */
    title: string;
    /** Inizio del testo, senza i simboli del Markdown: ne mostra due righe. */
    excerpt?: string;
    /** Ultima modifica già formattata: "Oggi · 15:10". */
    updated?: string;
    /** I collegamenti della nota, come LinkChip. Stanno fuori dal bottone, quindi restano cliccabili. */
    links?: React.ReactNode;
    /** La nota aperta nell'editor: sfondo accent-soft. */
    active?: boolean;
    onOpen?: () => void;
    /** Livello del titolo (default 3). */
    headingLevel?: 2 | 3 | 4;
}
/** Una nota nell'elenco: titolo, due righe di testo, data e collegamenti. */
export declare function NoteCard(props: NoteCardProps): React.JSX.Element;

export type LinkKind = "event" | "note" | "task";
export interface LinkChipProps {
    /** Cosa c'è dall'altra parte del collegamento. */
    kind: LinkKind;
    /** Titolo dell'evento, della nota o dell'attività collegata. */
    title: string;
    /** Dettaglio breve: l'orario dell'evento, la scadenza dell'attività. */
    meta?: string;
    /** Apre l'elemento collegato. */
    onOpen?: () => void;
    /** Con onRemove compare la X per togliere il collegamento (non elimina l'elemento). */
    onRemove?: () => void;
    /** Testi da tradurre: il tipo letto dagli screen reader e l'azione della X. */
    labels?: {
        event?: string;
        note?: string;
        task?: string;
        remove?: string;
    };
    className?: string;
}
/** Il collegamento tra un evento, la sua nota e le attività che ne nascono: una pillola che porta dall'uno all'altro. */
export declare function LinkChip(props: LinkChipProps): React.JSX.Element;

export interface ReminderProps {
    /** Di cosa si tratta: il titolo dell'evento o dell'attività. */
    title: string;
    /** Quando: "Tra 10 minuti · 14:30", "Scade oggi alle 18:00". */
    time?: string;
    /** Bottoni piccoli: "Posticipa", "Apri". Al massimo due. */
    actions?: React.ReactNode;
    /** Con onDismiss compare la X. */
    onDismiss?: () => void;
    /** Testi da tradurre. */
    labels?: {
        kind?: string;
        dismiss?: string;
    };
    className?: string;
}
/** Il promemoria dentro l'app, quando arriva l'ora di un evento o di una scadenza. Accompagna la notifica del sistema, non la sostituisce. */
export declare function Reminder(props: ReminderProps): React.JSX.Element;

export interface ColorSwatchesProps {
    /** Colore scelto. Senza value il componente tiene lo stato da solo. */
    value?: CalendarColor;
    defaultValue?: CalendarColor;
    onChange?: (color: CalendarColor) => void;
    /** Nome del gruppo per gli screen reader: "Colore dell'evento". */
    label: string;
    /** Nomi dei colori da tradurre (default in italiano). */
    names?: Partial<Record<CalendarColor, string>>;
    className?: string;
}
/** Scelta del colore di un evento, di un calendario o di un'etichetta tra i cinque colori cal-*. */
export declare function ColorSwatches(props: ColorSwatchesProps): React.JSX.Element;

export interface SettingsRowProps {
    /** Nome dell'impostazione: "Tema", "Lingua", "Copia di sicurezza". */
    label: React.ReactNode;
    /** Una frase che dice cosa cambia, o lo stato attuale: "Ultima copia: oggi alle 15:10". */
    description?: React.ReactNode;
    /** Il controllo a destra: Switch, Segmented, Button. */
    children?: React.ReactNode;
    /** danger: per azioni che cancellano dati; l'etichetta diventa danger. */
    tone?: "default" | "danger";
}
/** Una riga delle impostazioni: testo a sinistra, controllo a destra. Va dentro SettingsGroup. */
export declare function SettingsRow(props: SettingsRowProps): React.JSX.Element;
export interface SettingsGroupProps {
    /** Titolo del gruppo: "Aspetto", "I tuoi dati", "Informazioni". */
    title: string;
    /** Le SettingsRow del gruppo. */
    children: React.ReactNode;
    /** Livello del titolo (default 2). */
    headingLevel?: 2 | 3;
}
/** Un gruppo di impostazioni: titolo e una card in rilievo con le righe separate da una linea. */
export declare function SettingsGroup(props: SettingsGroupProps): React.JSX.Element;

export declare const ChevronLeftIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const ChevronRightIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const PlusIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CalendarIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const NoteIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const TaskIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const BellIcon: (p: {
    size?: number;
}) => React.JSX.Element;

export type CalendarColor = "graphite" | "sky" | "coral" | "plum" | "moss";
export declare const CALENDAR_COLORS: CalendarColor[];
/** Data locale come "2026-11-14": il formato che i componenti del calendario usano per i giorni. */
export declare function isoDate(d: Date): string;
/** "2026-11-14" → Date a mezzanotte locale. */
export declare function parseIsoDate(iso: string): Date;
/** Un evento come lo leggono MonthGrid e DayGrid. Gli orari sono locali, già nel fuso in cui vanno mostrati. */
export interface CalendarEvent {
    id: string;
    /** Giorno dell'evento: "2026-11-14". */
    date: string;
    title: string;
    /** Ora di inizio "14:30". Senza, l'evento dura tutto il giorno. */
    start?: string;
    /** Ora di fine "16:00". */
    end?: string;
    place?: string;
    color?: CalendarColor;
}

/* ---- Componenti di Appsolute, disponibili anche in window.WingPal ---- */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** primary: l'azione principale della vista (max una). secondary: default. ghost: azioni leggere in toolbar. danger: elimina. */
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "md" | "sm";
    /** Con href il bottone diventa un link <a> con lo stesso aspetto: usalo per navigare (es. "Scarica", "Vedi il codice"). */
    href?: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.JSX.Element;

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
    /** Cosa fa il bottone, letto dagli screen reader e mostrato come suggerimento. Obbligatorio: l'icona da sola non basta. */
    label: string;
    /** Un'icona da 20px che usa currentColor. */
    icon: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): React.JSX.Element;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Etichetta sempre visibile sopra il campo. */
    label: string;
    /** Aiuto sotto il campo. */
    hint?: string;
    /** Messaggio di errore: sostituisce hint e colora il bordo con danger. */
    error?: string;
    /** Parola prima del messaggio di errore (default "Errore"). */
    errorPrefix?: string;
    /** Campo su più righe (<textarea>) per testi lunghi: la descrizione di un evento, un messaggio. */
    multiline?: boolean;
    /** Righe visibili con multiline (default 4). Il campo si può allungare trascinando l'angolo. */
    rows?: number;
}
export declare function TextField(props: TextFieldProps): React.JSX.Element;

export interface SwitchOption {
    /** Valore dell'opzione, es. "dark" o "en". */
    value: string;
    /** Nome per esteso, letto dagli screen reader e mostrato come suggerimento: "Tema scuro", "English". */
    name: string;
    /** Contenuto visibile: un'icona da 18px che usa currentColor, oppure una sigla di due o tre lettere ("IT"). */
    content: React.ReactNode;
    /** Lingua del nome, se diversa da quella della pagina (es. "en" per "English"). */
    lang?: string;
}
export interface SwitchProps {
    /** Le due posizioni: la prima a sinistra, la seconda a destra. */
    options: [SwitchOption, SwitchOption];
    /** Opzione attiva. Senza value il componente tiene lo stato da solo, partendo da defaultValue. */
    value?: string;
    /** Opzione iniziale quando non c'è value (default la prima). */
    defaultValue?: string;
    onChange?: (value: string) => void;
    /** Nome del gruppo per gli screen reader: "Tema", "Lingua". */
    label: string;
    className?: string;
}
/**
 * Selettore a due posizioni: un binario scavato con un pomello che scorre sull'opzione attiva.
 * Lo stesso componente fa da cambio tema, cambio lingua o qualsiasi scelta tra due cose:
 * cambiano solo le opzioni (icona o sigla) e cosa fa onChange.
 */
export declare function Switch(props: SwitchProps): React.JSX.Element;

export interface LangOption {
    /** Codice della lingua, es. "it". Va anche nell'attributo lang. */
    value: string;
    /** Sigla mostrata, es. "IT". */
    label: string;
    /** Nome per esteso nella sua lingua, letto dagli screen reader: "Italiano", "English". */
    name: string;
}
export interface LangSwitchProps {
    /** Lingua attiva. Senza value il componente tiene lo stato da solo. */
    value?: string;
    onChange?: (value: string) => void;
    /** Le due lingue (default italiano e inglese). */
    options?: [LangOption, LangOption];
    /** Nome del gruppo per gli screen reader (default "Lingua"). */
    label?: string;
}
/** Uno Switch già pronto per la lingua: le sigle come contenuto, il nome per esteso nella sua lingua per gli screen reader. */
export declare function LangSwitch(props: LangSwitchProps): React.JSX.Element;

export interface ThemeToggleProps {
    /** Tema attivo. Senza theme il componente legge il tema salvato o quello del sistema e cambia da solo <html data-theme>. */
    theme?: Theme;
    onChange?: (theme: Theme) => void;
    /** Chiave del browser in cui ricordare il tema, senza theme (default "theme"). */
    storageKey?: string;
    /** Testi per gli screen reader, da tradurre per l'inglese. */
    labels?: {
        label?: string;
        light?: string;
        dark?: string;
    };
}
/** Uno Switch già pronto per il tema: sole e luna, e in più la logica che applica e ricorda il tema. */
export declare function ThemeToggle(props: ThemeToggleProps): React.JSX.Element;

export interface NavbarProps {
    /** Nome del prodotto accanto al logo. */
    brand: React.ReactNode;
    /** Logo prima del nome, es. <img src={logo} alt="" width={28} height={28} />. Decorativo: il nome dà già il testo. */
    logo?: React.ReactNode;
    /** Dove porta il logo (default "/"). */
    homeHref?: string;
    /** Voci di menu: ancore della landing ("#funzioni") o pagine. */
    links?: NavLink[];
    /** href della voce attiva: riceve aria-current="page". */
    current?: string;
    /** Controlli a destra: LangSwitch, ThemeToggle, un Button primario. */
    actions?: React.ReactNode;
    /** Resta in alto durante lo scorrimento (default true). */
    sticky?: boolean;
    /** Ancora del contenuto principale, es. "#contenuto": aggiunge il link "Vai al contenuto", che compare solo con il tasto Tab. */
    skipHref?: string;
    /** Testi per gli screen reader, da tradurre per l'inglese. */
    labels?: {
        nav?: string;
        open?: string;
        close?: string;
        skip?: string;
    };
}
export declare function Navbar(props: NavbarProps): React.JSX.Element;

export interface HeroProps {
    /** Riga breve sopra il titolo, in maiuscolo: "Gratis e open source". */
    eyebrow?: React.ReactNode;
    /** Il titolo della pagina: diventa l'unico <h1>. */
    title: React.ReactNode;
    /** Stato del prodotto in un Badge sotto il titolo: "In sviluppo · prima versione a gennaio 2027". */
    status?: React.ReactNode;
    /** Una o due frasi che dicono cosa fa l'app. */
    lead?: React.ReactNode;
    /** Uno o due Button con href: il primo primary ("Scarica"), il secondo secondary ("Vedi il codice"). */
    actions?: React.ReactNode;
    /** Riga piccola sotto i bottoni: licenza, piattaforme, "Niente pubblicità". */
    note?: React.ReactNode;
    /** Immagine o anteprima dell'app a destra (sotto, su telefono). */
    media?: React.ReactNode;
}
export declare function Hero(props: HeroProps): React.JSX.Element;

export interface SectionProps {
    /** Ancora per la Navbar, es. "funzioni" → href="#funzioni". */
    id?: string;
    /** Riga breve sopra il titolo, in maiuscolo. */
    eyebrow?: React.ReactNode;
    /** Titolo della sezione: un <h2>. */
    title?: React.ReactNode;
    /** Livello del titolo (default 2). Usa 1 solo nelle pagine senza Hero, come la privacy: lì il titolo della sezione è il titolo della pagina. */
    headingLevel?: 1 | 2;
    /** Frase sotto il titolo. */
    lead?: React.ReactNode;
    /** Allineamento dell'intestazione (default "start"). */
    align?: "start" | "center";
    /** sunken: fascia su surface-sunken per staccare una sezione dalle vicine. */
    tone?: "plain" | "sunken";
    /** Mette i figli in una griglia che va a capo da sola (card da 260px in su). */
    grid?: boolean;
    children?: React.ReactNode;
}
export declare function Section(props: SectionProps): React.JSX.Element;

export interface FeatureCardProps {
    /** Un'icona da 20px che usa currentColor (es. da lucide-react). */
    icon?: React.ReactNode;
    /** Nome della funzione, breve: "Calendario", "Note collegate". */
    title: string;
    /** Una o due frasi su cosa fa per la persona. */
    children: React.ReactNode;
    /** Badge accanto al titolo per ciò che non c'è ancora: "In arrivo", "Dopo l'MVP". */
    status?: string;
    /** Link per approfondire. */
    href?: string;
    /** Testo del link (default "Scopri di più"). */
    linkLabel?: string;
    /** Livello del titolo (default 3, sotto l'h2 di una Section). */
    headingLevel?: 2 | 3 | 4;
}
export declare function FeatureCard(props: FeatureCardProps): React.JSX.Element;

export interface CodeBlockProps {
    /** Il codice, anche su più righe. Viene copiato così com'è, senza il "$". */
    code: string;
    /** Nome del file o del linguaggio, in alto a sinistra: "bash", "src/main.ts". */
    title?: string;
    /** Mostra "$" davanti a ogni riga, per i comandi da terminale. Il "$" non si seleziona e non si copia. */
    prompt?: boolean;
    /** Testi del bottone, da tradurre per l'inglese. */
    labels?: {
        copy?: string;
        copied?: string;
        failed?: string;
        code?: string;
    };
}
export declare function CodeBlock(props: CodeBlockProps): React.JSX.Element;

export interface RepoCardProps {
    /** Nome del repository come su GitHub: "appsolute/nome-progetto". */
    name: string;
    /** Indirizzo del repository. */
    href: string;
    /** Una frase su cosa c'è nel codice. */
    description?: string;
    /** Licenza, es. "AGPL-3.0". */
    license?: string;
    /** Altre informazioni brevi: linguaggi, "Issue aperte a tutti". */
    meta?: string[];
    /** Invito all'azione in fondo (default "Vedi il codice su GitHub"). */
    linkLabel?: string;
}
export declare function RepoCard(props: RepoCardProps): React.JSX.Element;

export interface FooterColumn {
    title: string;
    links: NavLink[];
}
export interface FooterProps {
    /** Nome del prodotto. */
    brand: React.ReactNode;
    /** Logo prima del nome, decorativo. */
    logo?: React.ReactNode;
    /** Una frase sotto il nome. */
    tagline?: React.ReactNode;
    /** Colonne di link: Prodotto, Progetto, Community. */
    columns?: FooterColumn[];
    /** Riga finale: licenza, link al codice, "Niente pubblicità, niente tracciamento". */
    bottom?: React.ReactNode;
    /** Nome del gruppo di link per gli screen reader (default "Link del sito"). */
    navLabel?: string;
}
export declare function Footer(props: FooterProps): React.JSX.Element;

export interface BadgeProps {
    /** neutral: informazione (default). accent: la cosa più importante della riga, es. la versione attuale. success / danger: uno stato, sempre con una parola. */
    tone?: "neutral" | "accent" | "success" | "danger";
    /** Un'icona da 14px che usa currentColor, prima del testo. */
    icon?: React.ReactNode;
    /** Una o due parole: "In sviluppo", "v0.1.0", "AGPL-3.0". */
    children: React.ReactNode;
    className?: string;
}
/** Pillola piccola per stati, versioni e licenze. Non è cliccabile. */
export declare function Badge(props: BadgeProps): React.JSX.Element;

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    /** raised: esce dallo sfondo (default). sunken: scavata, per contenuti secondari o aree dove si scrive. floating: galleggia sopra la vista, per menu e popover. */
    tone?: "raised" | "sunken" | "floating";
    /** Spazio interno: md = space-4, lg = space-6 (default), none per contenuti che arrivano al bordo. */
    padding?: "none" | "md" | "lg";
    /** Elemento HTML (default "div"). Usa "section" o "article" quando la card ha un titolo. */
    as?: "div" | "section" | "article" | "aside";
    /** Titolo in alto, in stile heading. */
    title?: React.ReactNode;
    /** Controlli a destra del titolo: un bottone ghost, un Badge. */
    actions?: React.ReactNode;
    children?: React.ReactNode;
}
/** Pannello generico: il contenitore di base di app e landing. Dentro una card i controlli sono in rilievo piccolo o scavati, mai un'altra card in rilievo. */
export declare function Card(props: CardProps): React.JSX.Element;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    /** Testo accanto alla casella: tutta la riga è cliccabile. */
    label: React.ReactNode;
    /** Riga di aiuto sotto l'etichetta. */
    hint?: React.ReactNode;
}
/** Casella per una scelta sì/no dentro un modulo o un elenco di opzioni. Per completare un'attività di WingPal usa TaskItem. */
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;

export interface SegmentedOption {
    /** Valore dell'opzione, es. "week". */
    value: string;
    /** Testo visibile, una parola: "Settimana". */
    label: React.ReactNode;
    /** Icona da 18px prima del testo, facoltativa. */
    icon?: React.ReactNode;
}
export interface SegmentedProps {
    /** Da due a cinque opzioni, tutte visibili. */
    options: SegmentedOption[];
    /** Opzione attiva. Senza value il componente tiene lo stato da solo, partendo da defaultValue. */
    value?: string;
    /** Opzione iniziale quando non c'è value (default la prima). */
    defaultValue?: string;
    onChange?: (value: string) => void;
    /** Nome del gruppo per gli screen reader: "Vista del calendario". */
    label: string;
    size?: "md" | "sm";
    className?: string;
}
/**
 * Scelta tra poche opzioni con un nome (Mese / Settimana / Giorno): binario scavato e pomello accent che scorre.
 * Per due opzioni con sole icone o sigle usa Switch.
 */
export declare function Segmented(props: SegmentedProps): React.JSX.Element;

export interface KbdProps {
    /** I tasti della scorciatoia, in ordine: ["Ctrl", "K"]. Su macOS passa "⌘" al posto di "Ctrl". */
    keys?: string[];
    /** In alternativa a keys, un tasto solo come testo. */
    children?: React.ReactNode;
    className?: string;
}
/** Scorciatoia da tastiera: ogni tasto è un piccolo tasto in rilievo, in mono. */
export declare function Kbd(props: KbdProps): React.JSX.Element;

export interface CalloutProps {
    /** info: avviso neutro (default). success: è andata bene. danger: errore o perdita di dati. */
    tone?: "info" | "success" | "danger";
    /** Cosa è successo, in poche parole. */
    title?: React.ReactNode;
    /** Una o due frasi: cosa significa e cosa fare. */
    children?: React.ReactNode;
    /** Un bottone o un link a destra (sotto, su schermi stretti). */
    action?: React.ReactNode;
    /** Icona al posto di quella del tono (20px, currentColor). */
    icon?: React.ReactNode;
    /** Ruolo ARIA: "status" per un avviso che compare da solo, "alert" per un errore urgente. Senza role è testo normale. */
    role?: "status" | "alert";
    className?: string;
}
/** Avviso dentro la pagina: "In sviluppo", "Copia di sicurezza creata", "Non salvato". Non galleggia e non sparisce da solo. */
export declare function Callout(props: CalloutProps): React.JSX.Element;

export interface EmptyStateProps {
    /** Icona da 24px che usa currentColor. */
    icon?: React.ReactNode;
    /** Cosa manca, senza drammi: "Nessuna attività per oggi". */
    title: React.ReactNode;
    /** Una frase su come riempire lo spazio. */
    children?: React.ReactNode;
    /** L'azione per iniziare, di solito un Button. */
    action?: React.ReactNode;
    /** Livello del titolo (default 3). */
    headingLevel?: 2 | 3 | 4;
    className?: string;
}
/** Riempie una vista o una card ancora vuota e dice come iniziare. */
export declare function EmptyState(props: EmptyStateProps): React.JSX.Element;

export interface DialogProps {
    /** Aperta o chiusa: lo stato lo tiene chi la usa. */
    open: boolean;
    /** Chiamata quando la persona chiude (Esc, clic fuori, bottone X). Metti open a false qui. */
    onClose: () => void;
    /** Titolo: dice cosa si sta facendo, "Nuovo evento", "Eliminare la nota?". */
    title: React.ReactNode;
    /** Contenuto: testo o un modulo. */
    children?: React.ReactNode;
    /** Bottoni in fondo, allineati a destra: prima "Annulla", poi l'azione. */
    actions?: React.ReactNode;
    /** sm 400px (conferme), md 520px (moduli, default). */
    size?: "sm" | "md";
    /** false: la finestra sta nel flusso della pagina senza velo. Serve solo per anteprime e documentazione. */
    modal?: boolean;
    /** Testo del bottone di chiusura (default "Chiudi"). */
    closeLabel?: string;
    className?: string;
}
/** Finestra di dialogo sopra la vista, costruita su <dialog>: il browser gestisce focus, Esc e sfondo inerte. */
export declare function Dialog(props: DialogProps): React.JSX.Element;

export type Platform = "windows" | "macos" | "linux";
export interface DownloadOption {
    platform: Platform;
    /** Indirizzo del file, di solito una release su GitHub. */
    href: string;
    /** Nome mostrato del sistema (default "Windows", "macOS", "Linux"). */
    label?: string;
    /** Nome del file: "WingPal_0.1.0_x64-setup.exe". */
    file?: string;
    /** Peso già formattato: "8,4 MB". */
    size?: string;
    /** Requisiti o formato: "Windows 10 o successivo", "AppImage, 64 bit". */
    note?: string;
}
export interface DownloadCardProps {
    /** Titolo della card (default "Scarica"). */
    title?: React.ReactNode;
    /** Versione, mostrata in un Badge: "v0.1.0". */
    version?: string;
    /** Data della versione già formattata: "24 gen 2027". */
    date?: string;
    /** Un file per sistema. Più file per lo stesso sistema (es. .deb e AppImage) sono ammessi: il primo è quello consigliato. */
    options: DownloadOption[];
    /** Sistema da proporre. Senza, il componente lo rileva dal browser dopo il primo render. */
    platform?: Platform | null;
    /** Riga in fondo: link a note di versione, checksum, codice. */
    footer?: React.ReactNode;
    /** Testi da tradurre. In download, {os} diventa il nome del sistema. */
    labels?: {
        download?: string;
        others?: string;
        all?: string;
        mobile?: string;
        get?: string;
    };
    /** Livello del titolo (default 3). */
    headingLevel?: 2 | 3 | 4;
    className?: string;
}
/** Sistema operativo del visitatore, o null su telefoni, tablet e dove non si capisce. Da chiamare solo nel browser. */
export declare function detectPlatform(): Platform | null;
/** Il blocco "Scarica" di una landing: propone il file per il sistema del visitatore e tiene gli altri a portata di mano. */
export declare function DownloadCard(props: DownloadCardProps): React.JSX.Element;

export interface Step {
    /** Nome della tappa, breve. */
    title: React.ReactNode;
    /** Una o due frasi. */
    text?: React.ReactNode;
    /** done: fatta (spunta). current: in corso (numero pieno). todo: da fare (default). */
    state?: "done" | "current" | "todo";
    /** Parola che dice lo stato, in un Badge: "Fatto", "In corso", "In programma". Mettila sempre quando usi state. */
    status?: string;
}
export interface StepsProps {
    items: Step[];
    /** list: una sotto l'altra con la linea che le unisce (default). grid: card affiancate che vanno a capo. */
    layout?: "list" | "grid";
    /** Livello dei titoli (default 3). */
    headingLevel?: 2 | 3 | 4;
    className?: string;
}
/** Elenco numerato di tappe: una roadmap, i passi di un'installazione, "come funziona". L'ordine conta: è un <ol>. */
export declare function Steps(props: StepsProps): React.JSX.Element;

export interface ProjectCardProps {
    /** Nome del prodotto: "WingPal". */
    name: string;
    /** Indirizzo della sua pagina. */
    href: string;
    /** Logo del prodotto, 48px (un <img> o un elemento con maschera). Senza logo si vede l'iniziale. */
    logo?: React.ReactNode;
    /** Una frase su cosa fa. */
    description?: React.ReactNode;
    /** Stato in un Badge: "In sviluppo", "Disponibile". */
    status?: string;
    /** Informazioni brevi: "Desktop", "Open source". */
    meta?: string[];
    /** Invito in fondo (default "Vai al progetto"). */
    linkLabel?: string;
    /** Livello del titolo (default 3). */
    headingLevel?: 2 | 3 | 4;
}
/** Card di un prodotto nella pagina di appsolute: tutta la card è un link alla landing del prodotto. */
export declare function ProjectCard(props: ProjectCardProps): React.JSX.Element;

export interface TeamCardProps {
    /** Nome e cognome. */
    name: string;
    /** Di cosa si occupa: "Interfaccia e design system". */
    role?: React.ReactNode;
    /** Foto o avatar (un <img> quadrato). Senza, si vedono le iniziali. */
    avatar?: React.ReactNode;
    /** Link facoltativo sotto il ruolo, es. al profilo GitHub. */
    href?: string;
    /** Testo del link, es. "@nome su GitHub". */
    linkLabel?: string;
    /** compact: una riga, per elenchi e footer. */
    compact?: boolean;
}
/** Una persona del gruppo: avatar tondo, nome e ruolo. Mettine più di una in una Section con grid. */
export declare function TeamCard(props: TeamCardProps): React.JSX.Element;

export interface FaqItem {
    /** La domanda, come la farebbe una persona: "È davvero gratis?". */
    question: string;
    /** La risposta: una o due frasi, o più paragrafi <p>. */
    answer: React.ReactNode;
    /** Aperta al caricamento. */
    open?: boolean;
}
export interface FaqProps {
    items: FaqItem[];
    /** Con un nome comune se ne apre una alla volta (attributo name di <details>). */
    name?: string;
    className?: string;
}
/** Domande e risposte che si aprono una per una. Usa <details>: funziona senza JavaScript e il testo resta trovabile con la ricerca nella pagina. */
export declare function Faq(props: FaqProps): React.JSX.Element;

export interface ProseProps extends React.HTMLAttributes<HTMLElement> {
    /** Elemento HTML (default "div"). Usa "article" per una pagina intera come la privacy. */
    as?: "div" | "article" | "section";
    /** HTML normale: h1–h3, p, ul, ol, a, code, pre, blockquote, hr, table. */
    children: React.ReactNode;
}
/** Colonna di testo lungo, leggibile: informativa sulla privacy, note di versione, pagine "Chi siamo". Dà lo stile ai tag HTML che contiene. */
export declare function Prose(props: ProseProps): React.JSX.Element;

export interface WindowFrameProps {
    /** Titolo nella barra: il nome dell'app o della vista. */
    title?: React.ReactNode;
    /** Il contenuto della finestra: uno screenshot (<img>) o componenti veri. */
    children: React.ReactNode;
    /** Descrizione per gli screen reader quando il contenuto è solo un'immagine dimostrativa. */
    label?: string;
    /** Il contenuto arriva ai bordi (per gli screenshot). Default: con padding space-4. */
    flush?: boolean;
    className?: string;
}
/** Cornice a forma di finestra per mostrare l'app in una landing. I tre punti sono neutri: non imita nessun sistema operativo. */
export declare function WindowFrame(props: WindowFrameProps): React.JSX.Element;

export type Theme = "light" | "dark";
/** Chiave del browser in cui si ricorda il tema. Ogni prodotto può usarne una sua. */
export declare const DEFAULT_THEME_KEY = "theme";
/** Tema già impostato su <html data-theme>, altrimenti quello salvato, altrimenti quello del sistema operativo. */
export declare function getInitialTheme(storageKey?: string): Theme;
/**
 * Applica il tema a <html data-theme>. Con persist (default true) lo ricorda anche nel browser:
 * passa false quando il tema non l'ha scelto la persona (primo caricamento, cambio del sistema operativo),
 * così la pagina continua a seguire il sistema finché qualcuno non sceglie.
 */
export declare function applyTheme(theme: Theme, storageKey?: string, persist?: boolean): void;
/**
 * Segue il tema del sistema operativo finché la persona non ne ha scelto uno: quando il sistema cambia
 * e nel browser non c'è un tema salvato, chiama onChange. Restituisce la funzione che smette di ascoltare.
 */
export declare function followSystemTheme(onChange: (theme: Theme) => void, storageKey?: string): () => void;
/** [tema, cambiaTema]: parte dal tema iniziale, segue il sistema finché la persona non sceglie, e ricorda solo ciò che sceglie lei con cambiaTema. */
export declare function useTheme(storageKey?: string): [Theme, (t: Theme) => void];

export declare const SunIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const MoonIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const MenuIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CloseIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CopyIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CheckIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CodeIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const ArrowRightIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const DownloadIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const ChevronDownIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const InfoIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const AlertIcon: (p: {
    size?: number;
}) => React.JSX.Element;
export declare const CircleCheckIcon: (p: {
    size?: number;
}) => React.JSX.Element;

/** Link usato da Navbar e Footer. */
export interface NavLink {
    label: string;
    href: string;
}
