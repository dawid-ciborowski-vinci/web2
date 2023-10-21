# Création d’un frontend pour une pizzeria : structured-hmi : Structuration du code en modules et gestion de la navigation
## How to ? Découpe de l'IHM en modules
### Introduction
- Nous allons restructurer le code du site de la pizzeria, notamment afin d'éviter, lors de l'ajout de pages, de la duplication de code. De plus, nous souhaitons que tous nos écrans soient générés dynamiquement, via du JS. Ca nous permettra de facilement changer l'affichage.
- Pour démarrer, nous repartons du code du tutoriel de la partie **modern-dynamic-hmi** ([modern-dynamic-hmi](https://github.com/e-vinci/js-demos/tree/main/frontend/frontend-essentials/modern-dynamic-hmi)), à l'aide d'un copier / coller de ce code.
.
-Pour la suite de ce tutoriel, **/tutorials/pizzeria/hmi/structured** est considéré comme la racine du projet.
### ) Créer une structure logique de répertoires et de modules
- Dans ce projet, on a créé tous ces nouveux répertoires et fichiers vides pour reprendre nos composants fonctionnels :
    - **/src/Components** : répertoire qui reprendra tous les composants fonctionnels.
    - **/src/Components/Pages** : répertoire qui donnera toutes les pages qui seront accessibles 
    en cliquant sur la Navbar.
    - **/src/Components/Pages/HomePage.js** : **HomePage** de notre site, c'est l'affichage 
    du menu des pizzas et de la liste des boissons.
    - **/src/Components/Pages/LoginPage.js** : **LoginPage** de notre site, elle permettra plus tard
    aux admins de se connecter.
    - **/src/Components/Pages/RegisterPage.js** : **RegisterPage** de notre site, elle 
    pourrait permettre de créer des admins.
    - **/src/Components/Header** : répertoire qui reprendra le header.
    - **/src/Components/Header/Header.js** : module qui reprendra la génération du header via du JS.
    - **/src/Components/Footer** : répertoire qui reprendra le footer.
    - **/src/Components/Footer/Footer.js** : module qui reprendra la génération du header via du JS.
    - **/src/Components/Navbar** : répertoire qui reprendra la Navbar.
    - **/src/Components/Navbar/Navbar.js** : module qui reprendra la génération de la Navbar via du JS.

### Créer le layout des écrans
Il n'est pas utile de générer le squelette de tous les écrans via du JS.  
Comme nous souhaitons un layout identique pour tous les écrans, nous allons garder ce layout 
au sein de **/src/index.html**, via des "wrappers" statiques ; ici nous utilisons 
le **`<header>`**,  le **`<main>`** et le **`<footer>`** comme wrapper. 
Le code de **/src/index.html** est donc simplifié.

### Génération des contenus dynamiques
- Tous les modules associé à des composants fonctionnels sont complétés pour générer 
de l'HTML dynamiquement : **HomePage.js**, **Header.js**, **Footer.js**.
- On fait ensuite appels à ces nouveaux composants fonctionnels en mettant à jour 
**index.js**.
## Ajout d'une Navbar
- Nous souhaitons créer une Navbar à l'aide de JS et de Bootstrap afin de pouvoir afficher 
différentes pages : **HomePage**, **LoginPage** ou **RegisterPage**.  
- Dans un premier temps, nous avons créé les deux nouvelles pages **LoginPage** et **RegisterPage**.
- Avant d'afficher une page, nous nous assurons de faire un "clear" du "wrapper" 
utilisé pour afficher les pages (**main**). Comme nous allons utiliser le "clear" dans de 
multiples pages, et bien, afin d'éviter des duplications de code, nous ajoutons un nouveau
module **render.js** dans un nouveau répertoire **/src/utils**. De plus, nous allons y ajouter 
une fonction permettant de donner un titre à une page.
- Nous avons ensuite créé la **Navbar**. La gestion du routage de la bonne page, c'est-à-dire l'affichage de la page correspondant à l'élément de la Navbar qui a été cliqué, est simple.
Lors d'un clic sur un élément de la Navbar, on identifie cet élément grâce au texte associé à celui-ci (via **`e.target.innerHTML`**). Ensuite, la fonction associée à la page est appelée.
- Par exemple, pour rendre la page de login, il suffit d'appeler **`LoginPage()`** 
du module **`/src/Components/Pages/LoginPage`**.
# Conclusion
- Nous avons une IHM fonctionnelle.
- Pour l'instant, il n'est pas possible d'ajouter des opérations de lecture & écriture sur des ressources externes à notre IHM. Pourtant, nous souhaiterions qu'un admin du site puisse ajouter des pizzas, en effacer... Pour ce faire, il est important d'apprendre à développer des web services. Puis finalement, nous pourrons intégrer les opérations offertes par nos web services au sein d'une IHM.

# Resources
- photo de : https://unsplash.com/ (Sahand Hoseini, pizza sur la planche, Engin Akyurt, pizza au fromage)
- musique de : https://freemusicarchive.org/music/Infecticide : Infecticide - Chansons Tristes - 11. Infecticide - Pizza Spinoza