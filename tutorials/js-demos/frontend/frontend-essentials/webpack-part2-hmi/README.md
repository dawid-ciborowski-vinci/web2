# Création d’un frontend pour une pizzeria : webpack-part2-hmi : migration complète du frontend classique vers un frontend moderne utilisant Webpack

## Introduction

- Pour rappel, généralement, quand vous allez créer un frontend tournant sous Webpack, vous allez utiliser un
  boilerplate fournissant déjà un fichier `package.json` contenant tous les packages à installer, ainsi qu'une
  configuration de Webpack (`webpack.config.js`).
- Ici, nous vous expliquons tout ce qui a été fait pour créer ces démos, afin de vous permettre de comprendre les
  mécanismes de Webpack.

## How to ? Configuration de Webpack

- Mise à jour du fichier `package.json` pour ajouter "start" :

```json
 "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack serve"
  },
```

- Nous souhaitons utiliser Webpack afin de bénéficier de toutes ces fonctionnalités :
  - Installation & configuration d’un serveur de développement (devServer) :
    - proxy sous Webpack Servir `index.html` quand route n’amène à aucun fichier
    - Rendre le serveur accessible de l’extérieur (via son ou ses adresse(s) IP)
    - Ouvrir le browser par défaut à l’URL « localhost »
- `/dist` enlevé de git, on veut que l'application générée lors du déploiement soit faite entièrement pour chaque
  génération sur base de tout ce qui se trouve dans `/src`
  - Création automatique d’un fichier `index.html` dans `/dist` sur base du template `/src/index.html`
  - Charger les images à l’aide de Webpack de `/src/img` vers `/dist` (éventuellement les transformer)
- Installation et configuration de la gestion du CSS : utilisation du `style loader` et du `css loader`
- Transpiler du JS
- Mapper le JS du bundle au JS des sources (eval-source-map) afin de pouvoir débugger facilement
- Créer le bundle dans `/dist/bundle.js` (au lieu de `/dist/main.js` par défaut)

- Installation des packages pour bénéficier de toutes ces fonctionnalités :
  `npm i webpack webpack-cli webpack-dev-server css-loader style-loader html-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin -D`

- Création du fichier de configuration de Webpack `/webpack.config.js` permettant de configurer les fonctionnalités de
  Webpack décrites ci-dessus (gérer le développement serveur, ...). Il est à noter que grâce à la génération automatique
  de `dist/index.html` sur base de `/src/index.html`, `/src/index.html` ne doit plus contenir la balise

```html
<script src="./main.js"></script>
ou
<script src="./bundle.js"></script>
comme c'est configuré ici .
```

## Refactoring de l'application

- En changeant la configuration de Webpack, le fichier `/dist/index.html` a été déplacé vers `/src/index.html`. et la
  balise `<script src="./main.js"></script>` a été retirée de `/src/index.html`. L'idée est de mieux structurer nos
  répertoires et contenus afin que tout ce qui se trouve dans `/dist` soit généré par webpack sur base de tout ce qui se
  trouve dans `/src`.
- Mettre tous les assets dans `/dist` => pour ce step 0, `/img`, `/sound` et `/stylesheets` sont donc mis dans `/src`
- Chargement du css (grâce aux modules css-loader et style-loader) dans `/src/index.js` (ou tout autre module .js) :

```js
import './stylesheets/style.css';
```

- Chargement d'une photo via le CSS : il n'y a rien de plus à faire, du moment que la photo est dans `/src`, le Asset
  Module reconnaît la photo localement et va remplacer le chemin final de la photo lorsque le projet a été "build" (ou
  "bundlé" ; ). Par exemple, dans style.css :

```css
background-image: url(../img/pizza.jpg);
```

- Chargement d'un fichier (image ou autre) directement dans un fichier .html : cela est possible grâce à l'installation
  et configuration du module `html-loader` : Webpack émet le fichier dans le "output directory" (`/dist`) et remplace
  `src` avec le chemin final vers le fichier
- Chargement d'un fichier son : idem que pour une photo, voir le code !
- Même si cette application ne contient pas encore de chargement dynamique d'image via du JS, Webpack a été configuré
  pour pouvoir le traiter. Cela serait possible grâce aux types de Asset Modules : `asset/resource` ou autre. Par
  exemple, on pourrait créer une image, le logo dans `/src/index.js` (ou tout autre module) :

```js
import logo from './img/js-logo.png';
```

- `asset/resource` va transformer le chemin de la photo vers le chemin de la photo qui se trouvera dans le répertoire de
  sortie (`/dist`). Pour utiliser le logo comme src d'une image :

```js
footerPhoto.src = logo;
```

- En savoir plus sur la gestion des assets par Webpack et les types de Asset Modules :
  https://webpack.js.org/guides/asset-modules/

- Chargement d'une photo via le CSS : il n'y a rien de plus à faire, du moment que la photo est dans `/src`, le Asset
  Module reconnaît la photo localement et va remplacer le chemin final de la photo lorsque le projet a été "build" (ou
  "bundlé" ; ). Par exemple, dans style.css :

```css
background-image: url(../img/pizza.jpg);
```

- Chargement d'un fichier (image ou autre) directement dans un fichier .html : cela est possible grâce à l'installation
  et configuration du module `html-loader` : Webpack émet le fichier dans le "output directory" (`/dist`) et remplace
  `src` avec le chemin final vers le fichier
- Chargement d'un fichier son : idem que pour une photo, voir le code !

## Démarrage de l'application

- Démarrer l' application : `npm start`
- Le bundle a été généré (`bundle.js`) ainsi que `index.html`, mais tout est géré par le serveur de développement, il
  n'y a rien de mis dans `/dist` !

## Ajout et configuration d'un linter et d'un formateur

- Nous souhaitons ajouter un outil qui permette de détecter des erreurs de programmation lors de l'écriture de nos
  scripts. Pour ce faire, nous allons utiliser ESLint (cet outil est aussi utilisé par Facebook au sein d'app React).
- Installation du linter : `npm install eslint -D`.
- Configuration du linter et création d'un fichier de config nommé `.eslintrc.js` : `npm init @eslint/config`. Une suite
  de questions sont pausées. Ici on a précisé que l'on fait du développement sans framework, côté browser et que l'on
  souhaite appliquer un JS style guide d'Airbnb afin d'avoir des règles de programmation qui correspondent à ce qui est
  fait en React.
- Installation du package pour utiliser le Airbnb JavaScript Syle Guide : `npm i eslint-config-airbnb-base -D`. Airbnb
  JavaScript Syle Guide est donné ici : https://github.com/airbnb/javascript.
- La config d'Airbnb a automatiquement été ajoutée dans les plugins (rules) vérifiées par ESLint, c'est représenté par
  cette ligne de `.eslintrc.js` : extends: ['airbnb-base']
- Installation du plugin au sein de Webpack pour utiliser ESLint : `npm install eslint-webpack-plugin -D`
- Configuration de `webpack.config.js`, ajout de :

```
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin()],
  // ...
};
```

- A ce stade-ci, lors du lancement de webpack, celui-ci check les règles de codage. Si certaines ne sont pas respectée, le code ne compile pas.
- Pour bénéficier de plus de feedback sur le code, installez l'extension **ESLint** au sein de VS Code. Vous ne devez plus attendre la compilation pour avoir du feedback sur votre code, cela se fait dès l'écriture ! Vous avez même des  propositions de "Quick fix" !
- Pour formater votre code, nous vous conseillons d'installer l'extension **Prettier**.
- Vous souhaitez reformater votre code en accord avec le linter ? Par défaut, l'extension Prettier de VS Code n'est pas configuré pour appliquer le style d'Airbnb. Il y a notamment des soucis avec les Strings : tout devient des double quotes au lieu de single quotes...
- Pour configurer prettier basé sur Airbnb JS style guide :
  - installer un package fournissant les paramètres de config : `npm i prettier-airbnb-config -D`
  - utiliser ces paramètres de configuration au sein d'un fichier `.prettierrc.js` :

```
module.exports = {
  ...require('prettier-airbnb-config'),
  printWidth: 120,
  arrowParens: 'always',
  bracketSpacing: true,
};
```

- Concernant le formateur, apparemment le package **prettier-airbnb-config** ne fournit pas une config qui correspond au style guide d'Airbnb. Nous avons du changer les règles au sein de **.prettierrc.js** :
  - - tenter de ne pas créer de lignes de plus de 100 caractères via **printWidth**
  - toujours mettre les parenthèses lors d'un unique paramètre via **\*arrowParens**.
  - mettre un espace entre les accolades d'un objet via **bracketSpacing**.
  - toujours ajouter une virgule (même dans les fonctions quand multilignes, pour le dernier paramètre) :
    **trailingComma**.
- Toujours concernant le formateur, celui-ci fait du bon travail, mais cela ne colle pas toujours avec ce que le linter impose. Pour désactiver les règles qui entrent en conflit avec Prettier :
  - ce package a été installé : `npm i -D eslint-config-prettier`.
  - la config du linter a été changée dans **.estlintrc.js** en ajoutant **prettier** à la fin de l'array "extends" pour qu'il puisse remplacer d'autres configurations.
- Certaines règles d'Airbnb sont difficilement applicables. La 1ère est que sous Windows ou Linux, les sauts à la lignes
  sont faits différemment. On souhaite laisser cela acceptable. De plus, on souhaite aussi permettre le hoisting des
  fonctions. Afin de rendre le code plus lisible, on aimerait pouvoir utiliser une fonction, même si ça définition est
  donnée plus loin dans le script. Nous avons donc assoupli ces deux règles, 'linebreak-style' & 'no-use-before-define',
  au sein du fichier de configuration du linter **.eslintrc.js**.

- En conclusion, voici tous les packages qui ont été installée :
  `npm i eslint eslint-config-airbnb-base eslint-webpack-plugin prettier-airbnb-config -D`. Deux fichiers de config ont
  été rajoutés : **.eslintrc.js** et **.prettierrc.js**, et deux extensions ont été installées dans VS Code : **ESLint**
  et **Prettier**.

## Conclusion : pourquoi avoir fait tout ça ?

- A l'étape suivante, nous allons pouvoir intégrer n'importe quel package du monde node.js ! C'est une gestion
  incroyable et simple des dépendances et des assets !
- Sachez que quand vous faites un build pour la production (`npm run build`), le bundle est optimisé pour la production
  ! Cela signifie que tous vos commentaires peuvent être enlevés de vos scripts, tous les espaces sont enlevés, toutes
  les dépendances non utilisées sont retirées, certains fichiers sont convertis en base64... Dès lors, vous avez un
  bundle des plus compacts !

# Resources

- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza
  Spinoza
