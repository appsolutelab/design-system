import type * as React from "react";

/* Tipi dei componenti Appsolute (window.Appsolute). Generati dai sorgenti in components/src. */

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
