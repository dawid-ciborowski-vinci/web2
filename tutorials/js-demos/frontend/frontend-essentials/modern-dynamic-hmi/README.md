# Création d’un frontend pour une pizzeria : modern-dynamic-hmi : Génération dynamique de l'HTML d'une IHM

## Démarrer votre application
- Ce tutoriel est la suite de la partie **modern-esthetic-hmi** où nous allons générer de l'HTML dynamiquement.
- Il faut donc repartir du code de la partie **modern-esthetic-hmi**.

## Génération d'HTML à l'aide de String
- Dans un premier, nous avons créé un array contenant des pizzas au sein de **index.js**.
- A l'aide des `template literals`, nous avons créé des Strings multilignes pour créer une représentation de l'HTML.
- Nous accédons à un élément HTML, un Wrapper, pour changer la propriété 
**innerHTML** de celui-ci. Ici c'est le **main** que nous avons mis à jour.

## Ajout dynamiquement d'un gestionnaire d'événéments après le render du DOM
- A ce stade-ci, nous souhaiterions ajouter un gestionnaire de passage de souris sur le menu. Au passage sur le menu, nous souhaitons changer la couleur du background afin que le menu devienne vert. Lorsqu'on quitte le menu, celle-ci doit reprendre sa couleur initiale.
- Nous mettons le code de **index.js** à jour afin :
    - d'obtenir une référence vers le Node représentant le menu au sein du DOM tree.
    - d'accéder à l'attribut **class** d'une **table** en modifiant, en JS, l'attribut **className**. Nous avons utilisé les classes Bootstrap "table-success" pour mettre en vert, et "table-danger" pour que ça soit en rouge.

## Génération d'HTML à partir de Nodes
- Dans un premier, nous avons créé un array contenant des boissons au sein de **index.js**.
- A l'aide de **createElement()**, nous créons tous les éléments dont nous avons besoin, et nous ajoutons ceux-ci à un wrapper, le **main**, à l'aide de la fonction **appendChild()**.

## Ajout dynamiquement d'un gestionnaire d'événéments avant le render du DOM
- Nous souhaiterions ajouter un gestionnaire de passage de souris sur la liste des boissons.
Au passage sur la liste, nous souhaitons changer la couleur du background afin 
qu'elle devienne rouge. Lorsqu'on quitte la liste, celle-ci doit reprendre sa couleur initiale.
- Le code de **index.js** a été mis à jour afin d'ajouter deux écouteurs d'événements à la table 
en cours de construction. Notons que ces écouteurs peuvent être ajoutés avant ou après avoir 
fait l'ajout de la table dans le "DOM tree".

## Ajout dynamique d'images ou d'autres assets
Lorsque l'on souhaite ajouter une image ou tout autre assets (son, vidéo...) via du JS et que 
l'on utilise un module bundler comme Webpack, on ne peut pas juste ajouter une balise **`<image`** 
avec le chemin en relatif vers celle-ci.

Pourquoi pas ?  Parce qu'en fait, le bundler va s'occuper de copier, et parfois d'optimiser les 
assets dans le "build", généralement généré dans le répertoire **/dist** de votre projet.
Ainsi, lorsque vous développez votre code, l'image se trouve à un endroit différent d'où 
se trouvera l'image lors du build.

Pour bien gérer les URL au sein de votre JS, vous devez d'abord importer vos assets. 
Voici comment ajouter une image dynamiquement au sein du **`<footer>`** : 

```javascript
import pizzaImage from './src/img/pizza2.png';

renderPizzaImage(pizzaImage);

function renderPizzaImage(pizzaUrl) {
  const image = new Image(); // or document.createElement('img');
  image.src = pizzaUrl;
  image.height = 50;
  const footer = document.querySelector('footer');
  footer.appendChild(image);
}
```
Le type du Asset Module configuré dans **webpack.config.js** est **'asset/resource'**.
Cela signifie que pour chaque fichier importé dans le JS, il sera émis dans le "output directory", (ou "build directory"), généralement dans **/dist**, avec comme non de fichier qqch qui ressemble à un hash (par exemple 151cfcfa1bd74779aadb.png) et leur chemins (paths) seront injecté dans le bundle.

Le chemin de l'image **pizza2.png** lors de l'exécution de l'application sera donné dans la variable **pizzaImage**.

## Conclusion
- Il existe plusieurs façon de générer de l'HTML.
Du moment que l'on sait comment accéder au DOM, il devient très facile, via des attributs ou des méthodes offertes par le DOM, de créer de l'HTML 
dynamiquement.

# Resources
- photos de : https://unsplash.com/ (Sahand Hoseini, pizza sur la planche, Engin Akyurt, pizza au fromage)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza