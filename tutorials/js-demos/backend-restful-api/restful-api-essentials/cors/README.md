# Création d’une RESTful API pour une pizzeria : cors – Gestion des CORS via l’autorisation d’une nouvelle origine

## Introduction
- Cette application **cors** a été initialisée sur base de l'API nommée **fat-model**.
- Lors de la création d'une SPA, il arrive souvent que le frontend se trouve sur une autre origine que le backend ; en effet, même si le serveur du frontend et l'API se trouvent sur la même machine, ils fonctionnent souvent sur des ports différents, et donc sur des autres origines.
- Quand le browser détecte que l'origine qui a permis de charger l'application web (souvent `index.html`) est différente de l'origine associée à la RESTful API, celui bloque les opérations de lecture de cette API.
- Afin de malgré tout permettre au frontend de dialoguer avec la RESTful API, il est possible de relâcher la sécurité au niveau de l'API, en autorisant l'origine correspondant au frontend.

## Gestion des CORS
- La sécurité de l'API va être relâchée en gérant les Cross Origin Resource Sharing  (CORS). On va configurer le serveur de l'API en spécifiant la ou les origines pouvant lire ses ressources via un web browser (pouvant accéder à ses réponses). Cela sera fait via des « HTTP headers » ajoutés aux réponses du serveur.
- Installation du package `cors` : `npm i cors`
- Relaxer la sécurité au niveau d'un router en appelant le middleware **cors** :  
``` js
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use('/pizzas', cors(corsOptions), pizzaRouter);
``` 




