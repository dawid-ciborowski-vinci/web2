# Création d’une RESTful API pour une pizzeria : api-persistence – Gestion de la persistance des données dans un fichier .json

## How to ? Rendre persistant les pizzas
- Pour rendre persistant les pizzas ajoutées au menu, celles-ci sont écrites au sein d'un fichier JSON : `/data/pizzas.json`.
- L'opération de sérialisation des données est faite via la fonction `serialize` de `/utils/json.js`. Pour se simplifier la vie et ne pas obliger les développeurs à devoir créer manuellement un répertoire **/data** qui contiendra la mini DB de pizzas, le fichier **pizzas.json**, une fonction a été créée qui s'appelle **createPotentialLastDirectory**. La fonction **serialize** fait appel à cette fonction qui va, si nécessaire, créer le répertoire **/data** qui n'existerait pas au sein du projet.
- L'opération de désérialisation des données (ou le parsing des données) est faite via la fonction `parse ` de `/utils/json.js`.
- Actuellement, le code n'est pas très bien structuré. Au prochain step, nous créerons des modules pour séparer la couche de présentation (le router) de la logique et des données.
## How to ? Redémarrer automatiquement votre application à chaque changement de fichier
- installer `nodemon` pour ce projet : `npm i nodemon`
- lancer `nodemon` (au lieu du simple node) quand on tape `npm run debug` : ajout de la ligne `"debug": "nodemon /bin/www"`
dans `package.json` :
```json
"scripts": {
    "debug": "nodemon ./bin/www",
    "start": "node ./bin/www"
  },
```

## How to ? Ne pas redémarrer quand un fichier de votre projet est mis à jour
- Il est possible d'indiquer les fichiers qui doivent être ignorés par nodemon via l'ajout dans `package.json` :
```json
"nodemonConfig": {
    "ignore": [
      "data/*"
    ]
  },
```
- Dans la configuration ajoutée ci-dessous, tous les fichiers qui seraient mis à jour dans le répertoire `/data` ne provoqueront pas de redémarrage du serveur nodemon lorsqu'il est lancé en mode debug (`npm run debug`)




