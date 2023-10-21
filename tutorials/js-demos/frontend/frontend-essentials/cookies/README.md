# Création d’une SPA pour une pizzeria : cookies : Utilisation des cookies

## Démarrage de la RESTful API
- la Restful API du module 8 qui offre des cookies doit avoir été démarrée : https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/cookies.
- Pour le frontend, on part du code du tutoriel précédent : 
[web-storage](https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/web-storage))

## How to ? envoi du token via le cookie `user`
- Pour l'autorisation nécessaire lors de l'opération de création d'une pizza, il suffit donc juste de supprimer le authorization header qui contenait le token dans `/src/Components/Pages/AddPizzaPage.js`.
- En effet, le token est envoyé automatiquement au serveur pour chaque requête, au sein d'un cookie.

# Conclusion
- Nous avons une SPA qui ressemble à un site que l'on pourrait déployer pour un client 🎉.
- Notons que cette version de notre frontend pourrait être améliorée. Actuellement, lorsqu'on fait un logout, on n'efface pas le cookie du browser.  
Comment feriez vous ? Vous pourriez par exemple appeler la méthode **GET /auths/logout** 😉.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza