# Travail de fin d'études - EFP

Ce projet est un site web complet pour un commerce de type restauration qui permet aux utilisateurs de naviguer dans un catalogue de produits, de passer des commandes en ligne et de réserver des tables.

Zaytoon signifie "Olive" en arabe, produit fréquemment utilisé dans la cuisine orientale.

Avec ce site, les utilisateurs peuvent facilement commander et réserver des repas en ligne, tandis que les propriétaires du commerce peuvent gérer les commandes et les réservations en temps réel.

### Technologies choisies

Ce projet est développé en utilisant les technologies suivantes : React.js pour la partie front-end, CSS/Tailwind pour la mise en page et Firebase pour la gestion des données.

### Roadmap

- 26/02 : setup du projet (titre, architecture, favicon, choix de police)
- 28/02 : navbar et slider sur homepage - changement du titre en O Zaytoon pour le coté francais dans une phrase - images sombres pour refleter les couleurs du site sur le texte (images plus claires viendront plus tard) - utilisation de SwiperJS pour le caroussel
- 02/03 : page catalogue responsive (TODO: il faut encore rajouter des plats et les faire défiler avec un caroussel)
- 02/03 : page La Carte (menu) responsive et changement de quelaues images
- 08/03 : section "Team" + formulaire de réservations
- 09/03 : section "News du restaurant" + Footer + refactor du css
- 15/03 : refactor tout le code css en Sass
- 16/03 : creation du backend nodeJS et des routes
- 18/03 : requetes CRUD pour user.js et catalogue + ajout du proxy dans le package.json pour le port 9999 et les calls API
- 20/03 : Firebase init
- 20/03 : refactoring de toutes les images + creation d'un Loader global
- 20/03 : avancée sur le catalogue coté back
- 21/03 : refactor code backend et sass + ErrorPage Component + Footer fini
- 22/03 : massive PR refactor le projet en backend et frontend distincts
- 22/03 : page SignUp + modal SignIn

### ToDo's/Bug's

- TODO toast Welcome et Bienvenue
- TODO btn navbar en fonction de currentUser context
- TODO link id firebase a id table sql nodeJs
- TODO routes privées order + reservations pour User connecter
- TODO Login : mot de passe oublié via firebase + autorisations user a voir marvel

- TODO: Home + Catalogue Lazy loading des components? Check udemy course => stocker les items du catalogue dans le localstorage
  pour eviter de trop fetch?

- TODO: Catalogue : rajouter boissons dans le catalogue + checker les prix (houmous a 4e et crevettes a 14e ?)
- TODO: Catalogue : Plats en carrousel style hawaiien

- TODO récuperer formulaires, tooltip et toastify et les utiliser

- TODO NavBar : passe en mobile -> cache le hamburger menu -> revient en desktop -> plus de Navbar
- TODO NavBar : passage en responsive (mobile/tablet) ouvre automatiquement le hamburger menu

- TODO Sign Up: en mobile le centrage est trop à droite

- TODO Reservations : Gérer tout le formulaire avec useForm hook

- TODO Team et News : a changer par des infos du resto ou sur moi?

- TODO ShoppingCart : check projet deja fait !!!

### Créateur du projet

Ali Haboula
