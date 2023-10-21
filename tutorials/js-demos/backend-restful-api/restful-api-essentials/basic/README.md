# Création d’une RESTful API pour une pizzeria : api-basic : gestion de données non persistantes, code peu structuré
## How to ? Création de l'application sans authentification
- A l'aide d'un générateur d'application, création d'une application Express, sans vues, dans le répertoire de projet `/basic` (NB : c'est lors de la création d'une MPA que les vues sont utilisées) : `npx express-generator --no-view basic`
NB : le `--no-view` permet de ne pas avoir à effacer certains répertoires inutiles à une SPA comme `/views`.
- NB : Pour une API qui ne possède pas de serveur de fichiers statiques, on a pas besoin d'avoir un répertoire `public`, ni d'un serveur statique. On peut donc effacer le répertoire `/public` et supprimer le middleware de serveur de fichiers statiques de `app.js` : 
```js
app.use(express.static(path.join(__dirname, 'public'))); 
```
- Installer les dépendances de l'application : 
    - Aller dans le répertoir du projet `/basic` : `cd basic` (ou via VS Code, clic droit sur le répertoire `/basic`, `Open in Integrated Terminal`)
    - Installation des packages (package d'express): `npm i`
- Notre API doit traiter de ressources de type "pizza" :
    - Création d'un router pour traiter des ressources `/pizzas`: création de `/routes/pizzas.js` soit en adaptant `indexRouter` (`/routers/index.js` et `app.js`) en `pizzaRouter` (`/routes/pizzas.js` et `app.js`), le plus facile, soit en partant de rien et en créant `pizzaRouter` (et `pizzas.js`).
    - Gestion de l'opération de lecture de toutes les pizzas : selon les conventions RESTful, pour lire toutes les ressources, il faut faire une requête de type `GET /pizzas`. 
    `/routes/pizza.js` doit donc gérer une route renvoyant toutes les pizzas qui existent dans le menu : le menu est un Array d'Objects (chaque Object représente une pizza)
## Utilisation de la RESTful API
- Démarrer l'API (par défaut elle est configurée sur le port 3000 au sein de /`bin/www`) : `npm start`
- Consommer l'API via un browser pour lire toutes les ressources de type pizza : http://localhost:3000/pizzas

## Opération de création d'une pizza
- Gestion de l'opération de création d'une nouvelle pizza : selon les conventions RESTful, pour créer une ressource, il faut faire une requête de type `POST /pizzas`.
`/routes/pizza.js`doit donc gérer une route créant une nouvelle pizza. 
- Actuellement, l'ajout d'une pizza n'est pas persistant. Il se fait dans une mémoire temporaire, au sein d'un array, par l'ajout d'un Object représentant une pizza dans le menu.
- Comment tester l'opération de création `POST /pizzas` ? Il faudrait soit développer un formulaire de pizza au niveau du frontend, soit tester la requête via un client REST.
## How to ? Test rapide de son API via REST Client
- Installer `REST Client` au sein des extensions de VS Code si ça n'est pas déjà fait.
- Créer un fichier qui va contenir les requêtes de tests : `/tests/pizza.http`.
- Création de requêtes `GET /pizzas` et `POST /pizzas` : voir les exemples au sein de `/tests/pizza.http`. Les données associées à une pizza, lors d'une requête POST, sont envoyées au format JSON. Les requêtes sont séparées par `###` (ou plus)
- Exécuter les requêtes pour voir comment l'API réagit => clic sur `Send Request` au sein de `/tests/pizzas.http`. 

