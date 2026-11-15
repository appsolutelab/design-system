# TeamCard

Una persona del gruppo: avatar tondo, nome e di cosa si occupa.

Il consumatore fornisce `name` e `role`. `avatar` è una foto quadrata (`<img>` con `alt=""`); senza, il componente mostra le iniziali del nome. `href` e `linkLabel` aggiungono un link, per esempio al profilo GitHub.

- Mettine una per persona in una `Section` con `grid`. `compact` toglie la card e rimpicciolisce l'avatar: per elenchi stretti e footer.
- Il ruolo dice cosa fa la persona nel progetto ("Dati e logica"), non un titolo ("CTO").
- Nome e foto di una persona si pubblicano solo se lei è d'accordo; per chi è minorenne serve anche il consenso dei genitori. Senza foto le iniziali vanno benissimo.
