# Création d’une SPA pour une pizzeria : basic-fetch-no-proxy : Intégration de la RESTful API de la pizzeria et gestion de CORS

## How to ? Tentative de consommation d'une opération d'une RESTFul API ne demandant pas d'autorisation
- la Restful API du module 5 doit avoir été démarrée : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/fat-model.
- Pour le frontend, nous repartons du tutoriel précédent : [routing-hmi](https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/routing-hmi).
- Nous allong maintenant gérer l'intégration de notre frontend et du backend, via l'affichage de la liste des pizzas, le menu.
- Création d'un tableau reprenant le menu de pizza au sein de la HomePage : voir le code dans `/src/Components/Pages/HomePage`.js => appel de la méthode `fetch` pour recevoir un Array d'Object. Puis génération dynamique d'HTML sur base des données reçues par l'API. 
- On voit que ça ne fonctionne pas, problème de CORS, la réponse de l'API est bloquée... Que faire ?

## Résolution du problème de CORS
- Soit où contourne le problème :
    - via l'utilisation d'un proxy qui fait en sorte que pour le frontend, l'API se trouve à la même origine que celui-ci ; cela sera vu dans le prochain tutoriel (basic-fetch) ;
    - soit on relâche la sécurité de l'API en autorisant l'origine associée au frontend ; cela est fait dans ce tutoriel : [api-cors](https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/cors). Dans ce cas-ci, rien n'est à faire au niveau du frontend.

## How to ? Consommation d'une opération d'une RESTFul API ne demandant pas d'autorisation
- Le tutoriel [api-cors](https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/cors) a été réalisé afin d'autoriser l'origine du frontend (http://localhost:8080) et l'API a été démarrée. Veillez donc à stoper la RESTful API de l'étape précédente, **api/fat-model**, et démarrer la RESTful API **api-cors**.
- Voila, il n'y a rien d'autre à faire au niveau du client, le menu des pizzas devrait s'afficher.

# Conclusion
- Nous avons une SPA fonctionnelle consommant une opération non protégée de lecture de ressources (de type "pizzas").
- L'intégration de ce frontend avec la RESTful API a été possible car nous avions les moyens de configurer la RESTful API pour ajouter une origine. Ca n'est pas toujours possible, très souvent nous consommons des RESTful APIs qui ne nous appartiennent pas. L'étape suivante nous montre comment régler les problèmes de CORS dans ce cas-là.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza