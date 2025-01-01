# Récupérateur de Questions pour Kwyk

Ce script permet d'extraire facilement toutes les questions des exercices Kwyk en utilisant un script JavaScript à exécuter dans la console de votre navigateur. Les questions sont extraites de tous les éléments ayant la classe `exercise_question`.

## Utilisation

1. Accédez à l'exercice dont vous souhaitez récupérer les questions.
2. Avant chaque utilisation du script, rafraîchissez la page (en appuyant sur `F5`, `Ctrl+F5` ou `Ctrl+R`.
3. Ouvrez les outils de développement de votre navigateur (en appuyant sur `F12` ou `Ctrl+Shift+I`).
4. Allez dans l'onglet "Console".
5. Si le navigateur bloque le collage, tapez `"autoriser le collage"` dans la console pour autoriser cette action.
6. Copiez [le script fourni](script.js) et collez-le dans la console.
7. Une fois le script exécuté, une boîte de dialogue apparaîtra avec toutes les questions extraites. Vous pourrez ensuite copier le texte et l'utiliser selon vos besoins.

## Avertissements

- L'utilisation de la console du navigateur peut générer des avertissements ou alertes dans certains navigateurs. Ces messages sont des mesures de sécurité standard, vous indiquant que du code personnalisé peut être exécuté. Ce script est totalement sécurisé et n'affecte en rien le fonctionnement de votre navigateur ni de votre appareil et il ne représente aucun risque de sécurité pour votre compte Kwyk. De manière générale, il est recommandé de lire le code source des script avant de les exécuter. 
- Le script a été testé sur Firefox et Microsoft Edge. Il se peut qu'il ne fonctionne pas sur certains navigateurs. Il est recommandé d'utiliser Firefox, car il permet de copier du texte depuis les boîtes de dialogue.
- Ce projet a une finalité strictement éducative et ne doit pas être utilisé pour tricher. L'auteur du script ne peut être tenu responsable de son utilisation, ni des conséquences qui en découlent. L'utilisateur est seul responsable de l'usage qu'il fait du script.

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT). Voir [LICENSE](LICENSE.md)
