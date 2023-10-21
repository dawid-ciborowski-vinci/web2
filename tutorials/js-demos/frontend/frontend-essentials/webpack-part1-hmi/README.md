# Création d’un frontend pour une pizzeria : webpack-part1-hmi : migration partiel du frontend classique vers un frontend moderne utilisant Webpack sans fichier de configuration
## Introduction
- Ce tutorial est totalement optionnel. Il a été créé afin de comprendre comment le boilerplate (= le squelette) d'une application web moderne utilisant un bundler peut être configuré.
- Notons qu'en général, les développeurs ont tendance à utiliser des boilerplates déjà configuré. De plus en plus de développeurs utilisent un framework qui offre la génération du squelette de leur application web.
- Pour ce cours, nous utiliserons un boilerplate qui a été configuré pour utiliser la dernière version de Webpack ainsi que les fonctionnalités dont nous aurons besoin pour ce cours (serveur de développement avec hot reload, proxy...). Cela correspond à la partie **modern-hmi** du tutoriel "Création d’un frontend pour une pizzeria". 
- Les étapes **webpack-part1-hmi** et **webpack-part2-hmi** de ce tutoriel "Création d’un frontend pour une pizzeria" expliquent donc comment le boilerplate du cours a été créé. Celui-ci est donné ici : https://github.com/e-vinci/js-basic-boilerplate.git  

## How to ?
- Créer les répertoires `/src` et `/dist` dans le répertoire de votre projet.
- Le script d'entrée de l'application (`index.js`) doit se trouver dans : `/src/index.js`
- Les assets associés au frontend (html, images, sons, css...) doivent se trouver dans : `/dist` (exemple `/dist/index.html`, `/dist/img/js-logo.png`...)
- `/dist/index.html` doit référencer le bundle au sein d'une balise script : modification de 
```html
<script src="./index.js"></script>
```
vers 
```html
<script src="./main.js"></script>
```
- A ce stade-ci, nous ne souhaitons pas gérer de feuille de style, car cela impliquerait de 
configurer Webpack pour charger du CSS. Afin donc de focaliser sur l'apprentissage du rôle 
de Webpack, nous avons fait quelque de peu recommandé : tout le style identifié à l'étape 
précédente au sein du fichier **/stylesheet/style.css** a été directement intégré dans 
le fichier **index.html** à l'aide des propriétés **style** des éléments HTML.
- Créer le fichier de configuration du projet : `npm init -y`
- Installer les packages pour Webpack : `npm i webpack webpack-cli -D`
- Lancer un build via le CLI (command line interface) : `npx webpack`
- Le bundle est généré au sein de `/dist/main.js`
- Pour démarrez l'application, il suffit de servir le répertoire `/dist` via n'importe quel serveur. Utilisation de VS Code `Live Server` (installer l'extension `Live Server` si ça n'est pas déjà fait) : clic droit sur `/dist/index.html`, `Open with Live Server`.

## Générer un bundle via npm run dev OU npm run build
- Mettre à jour le fichier `package.json` : 
```json
 "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
```
- Lancer un build du bundle : `npm run dev` (OU `npm run build`)
NB : `npm run build` est l'équivalent de `npx webpack`
- Votre bundle a été généré au sein de `/dist/main.js`

## Exécuter l'application
- Utiliser `Live Server`  : clic droit sur `/dist/index.html`, `Open with Live Server`
NB : vous devez avoir installé l'extension `Live Server` auparavant dans VS Code.

## Chargement des assets de manière moderne par Webpack
- Cela sera réalisé à la prochaine étape.

## Migration de Bootstrap en CDN vers Bootstrap géré de façon moderne par Webpack
- Comme ça n'est pas quelque chose de si rapide à configurer, nous le ferons à l'étape suivante.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza