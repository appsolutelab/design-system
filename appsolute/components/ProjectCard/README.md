# ProjectCard

Card di un prodotto nella pagina di appsolute: tutta la card è un link alla landing del prodotto.

Il consumatore fornisce `name`, `href` e una frase in `description`. `logo` è il logo del prodotto (32px dentro un pozzetto scavato da 56px): un `<img>` oppure un elemento con il logo come maschera su `ink`, così segue il tema. Senza logo si vede l'iniziale del nome. `status` e `meta` diventano `Badge`.

- Mettine una per prodotto in una `Section` con `grid`.
- `status` dice la verità sullo stato del prodotto: "In sviluppo", "Disponibile".
- `linkLabel` nomina il prodotto ("Vai a WingPal"), così il link ha senso anche letto da solo.
- Per il codice di un progetto usa `RepoCard`.
