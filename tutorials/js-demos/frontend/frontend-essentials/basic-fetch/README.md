# Création d’une SPA pour une pizzeria : basic-fetch: Consommation d’opérations non protégées de la RESTful API grâce à un proxy

## Démarrage de la RESTful API
- la Restful API du module 5 doit avoir été démarrée : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/fat-model.
- Pour le frontend, on part du code du tutoriel précédent : 
[basic-fetch-no-proxy](https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/basic-fetch-no-proxy))

## How to ? Utilisation du proxy de Webpack 
- Utilisation du proxy de Webpack : 
    - Voir la configuration du proxy offerte au sein de `/webpack.config.js` :
    ```js
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {'^/api' : ''}
      },
    },

    ```
    - Changer l'URI lors de l'appel de la méthode `fetch` pour que celle-ci commence par `/api`. Toute URI commençant par `/api` sera prise en charge par le proxy de Webpack (serveur de développement ici) : par exemple, un `fetch` de type `GET /api/pizzas` (voir `/Components/Page/HomePage.js` sera transformé en `GET http://localhost:3000/pizzas` par le proxy

# Conclusion
- Nous avons une SPA qui affiche le même résultat qu'à l'étape précédente sans avoir du relaxer la sécurité au niveau de la RESTful API. Le code du **fetch** utilise une syntaxe un peu lourde à l'aide de **.then()** pour chaîner les traitements asynchrones.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza