# Création d’une RESTful API pour une pizzeria : cookies – Sauvegarde du username et du token au sein d’un cookie côté client

## Introduction
- Afin de sécuriser la RESTful API, nous allons hacher les passwords des utilisateurs et nous allons aussi échapper les caractères dangereux lors d'opérations d'écriture sur les ressources.

## Initialisation de l'application
- à l'aide du tutoriel précédent
[safe](https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/safe), 
cette application **cookies** a été initialisée.

## How to ? Création du cookie
- Installation de la libraire `cookie-session` : `npm i cookie-session`
- Utilisation et configuration des cookies : 
    - Protection contre les attaques XSS : utilisation de `HttpOnly` pour rendre les cookies inaccessible au JS
    - Configuration des cookies dans `/app.js` :
    ```js
    const cookieSession = require('cookie-session');
    const expiryDateIn3Months = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 3);
    const cookieSecreteKey = 'YouWouldnot!not!like!mypizza';
    app.use(
    cookieSession({
        name: 'user',
        keys: [cookieSecreteKey],
        cookie: {
        httpOnly: true,
        expires: expiryDateIn3Months,
        },
    }),
    );
     ```
    - Création des données de session (qui seront inclues dans le cookies et sauvegardées par le client) au sein de `/routes/auths.js` :
    ```js
    req.session.username = authenticatedUser.username;
    ```
    - Lecture des données de session : voir `authorize` dans `/utils/authorize.js` : 
    ```js
    req.session.username = authenticatedUser.username;
    ```
    
# Conclusion
- Cette RESTful API permet de gérer les données de session côté client (le username et le token pour cette application) au sein de cookies.
- Il est à noter qu'il existe aussi la possibilité de sauvegarder les données de session de session côté serveur. Cette approche n'est pas vue dans ce cours, car elle amène à une scalabilité horizontale plus difficile d'une API : l'augmentation du nombre de serveurs pour répondre à une charge plus élevée amène à complexifier l'application. 
De plus, les applications clientes sont de plus en plus puissante et donc il est de plus en plus intéressant de s'appuyer sur les ressources des clients plutôt que de devoir gérer des serveurs surpuissants (et couteux).




