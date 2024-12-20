Voici une copie du site CoinMarketCap, le but était de reproduire un site qui affiche le cours des 100 premières crypto-monnaies.
Pour se faire j'ai d'abord procédé à une bonne architecture en prenant en compte les choses les plus importantes à savoir :

assets :

- logo : J'ai générer un fichier svg avec une IA pour avoir une entête, il sert également de retour vers Home

components :

- Chart :
- ChartComponent : Qui s'occupe de la partie des graphiques et travail avec l'API de CoinGecko présent sur index.js
- CryptoCard : 
- SearchBar : Afin de rechercher rapidement n'importes quelles des 100 cryptos comprises dans ce tableau

pages :

- Details : C'est la partie qui concerne lorsque l'on séléctionne une crypto afin d'avoir toutes les informations à son sujet
- Home : La page accueil avec un tableau regroupant toutes les cryptos

services :

- CryptoAPI : Regroupant à la fois l'API du cours des cryptos, mais aussi les graphiques

styles :

- index : Design CSS 

L'expérience que j'en ai tiré :

Le début était relativement facile à mettre en place avec la SearchBar, la connexion des cryptos qui n'a pas du tout posé problème non plus en soit tout s'est très bien passé. J'ai commencé par un design très simpliste le temps d'avoir quelque chose en place et puis j'ai bien vu que ce n'était pas super donc j'ai commencé à reprendre le style de CoinMarketCap. J'ai donc basculer les cryptos en tableau, ce qui a évidemment rendu la chose beaucoup plus propre. J'y ai par la suite ajouté le logo, le classement, le nom, le prix et la capitalisation boursière. Voila pour la première partie qui m'a en soit pris plus de temps à choisir niveau design.

Deuxième partie qui a été plus compliqué : intégrer des graphiques dynamiques. J'ai eu beaucoup de problème car il a fallu installé beaucoup d'extension dont je ne connaissait pas. Ensuite il a fallu revoir toute la structure de Details car j'ai séparé en 2 tableaux cette partie. Une avec la crypto et toutes ses informations et l'autre réservé uniquement pour le graphique.
Au final, j'ai reussi à débloquer la situation mais même avant que je parviennes à mettre en place les graphiques je trouvais que l'API n'offrait pas beaucoup de liberté. J'entend par la qu'elle limite enormement les requêtes. C'est pour cela que si on souhaites se renseigné sur 2 cryptos dans un laps de temps assez court il est possible qu'elle crash.

Le mot de la fin est que je me suis bien amusé à faire cela car la comprehension de l'API pour que ce soit le cours, le prix etc. des cryptos, était très simpliste.
