# Création d’un frontend pour une pizzeria : modern-esthetic-hmi : conversion d'un frontend moderne utilisant du CSS vers Bootstrap

## Démarrer votre application
- Ce tutoriel est la suite de la partie **modern-hmi** où nous allons utiliser Bootstrap pour soigner le style de la page HTML. 
- Il faut donc repartir du code de la partie **modern-hmi**.

## Utilisation de Bootstrap pour soigner le style
Nous allons maintenant convertir le style du site de la pizzeria à l'aide de Bootstrap. 
La seule chose que nous allons laisser dans **/src/stylesheets/main.css** est la gestion 
d'une image en background car Bootstrap ne prévoit pas de solution.

Veuillez donc mettre à jour **/src/stylesheets/main.css** pour ne garder que l'image en background :
```css
body { 
    background-image : url(../img/pizza.jpg);
    background-size : cover;
}
```

Il faut maintenant mettre à jour **index.html** et indiquer les bonnes classes de Bootstrap :
- **`text-center`** : pour centrer nos titres et le main
- **`text-white font-weight-bold py-2`** : pour le style du texte dans le footer. **`py-2`** 
met du padding sur l'axe des **y**, est donc tant en haut qu'en bas du footer.
- Pour que le layout de la page fasse toujour, au minimum, la hauteur complète du navigateur 
et donne l'effet au **`<footer>`** d'être "sticky" en bas de page,
on utilise :
  - **`vh-100 d-flex flex-column`** au sein du **`<body>`**.
  - **`h-100 flex-grow-1`** dans le **`<main>`** pour lui imposer de remplir l'espace disponible. Ainsi, le footer donne l'effet d'être "sticky" en bas de la page.
- Pour la taille du logo JS, Bootstrap offre des classe pour le **Sizing** en fonction 
de la taille du parent ou du **viewport** (le browser). Ici, on préfère avoir une taille fixe 
de 50 pixel, donc on va indiquer cette taille directement dans l'attribut **`height`** de **`<img>`**.

Voila à quoi doit ressembler **index.html** suite aux changements :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pizzeria</title>
    <link rel="icon" href="./img/pizza-svgrepo-com.svg" type="image/svg+xml" />
  </head>
  <body class="vh-100 d-flex flex-column">
    <header>
      <h1 class="animate__animated animate__bounce text-center">We love Pizza</h1>
    </header>
    <main class="h-100 flex-grow-1 text-center">
      <audio id="audioPlayer" controls autoplay>
        <source src="./sound/Infecticide-11-Pizza-Spinoza.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
    <footer class="text-center text-white font-weight-bold py-2">
      <h1 class="animate__animated animate__bounce animate__delay-2s text-center">
        But we also love JS
      </h1>
      <img src="./img/js-logo.png" height="50px" alt="" />
    </footer>
  </body>
</html>
```

Le style est maintenant identique à ce qui était fait grâce à **/src/stylesheets/main.css**.

## Conclusion
- Il est facile d'utiliser Bootstrap pour amener à un style soigné de pages webs.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza