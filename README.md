# oser-frontend

Frontend du site d'Ouverture Sociale pour l'Egalité et la Réussite, développé avec Angular 4.

## Installation

Après avoir cloné le repo :

```
$ cd oser-frontend/
```

- Installez `@angular/cli` globalement (`-g`) si ce n'est pas encore fait.

```
oser-frontend $ npm install -g @angular/cli
```

- Installez le reste des dépendances.

```
oser-frontend $ npm install
```

- Lancez le serveur de développement.

```
oser-app $ ng serve -o
```

## En cas d'erreur…

```
$ npm install
npm WARN: No repository field...
```

Si vous obtenez ce message après l'étape 2, il est probable que vous ne soyez pas dans le bon dossier. Assurez-vous d'être dans le dossier du projet (`oser-frontend`), là où se situe un fichier `package.json` (que npm utilise pour lire et installer les dépendances).

## Déploiment

Actuellement, le frontend est déployé sur Heroku. Il y a 2 applications, chacune reliée à une branche de ce repo :

- `oser-cs` est reliée à `master`
- `oser-frontend-dev` est reliée à `dev`

Ainsi, un push sur la branche `master` déclenche un déploiement de l'application `oser-cs`, qui sera accessible dans sa nouvelle version en quelques minutes. Même principe sur la branche `dev`. :+1:

Si une erreur survient lors du déploiement, la nouvelle version n'est pas mise en prod (ouf !) et un email est envoyé à l'adresse mail du secteur Geek.

Les applications sont accessibles à leur adresse au format suivant : `www.<NOM_APP>.herokuapp.com`.
