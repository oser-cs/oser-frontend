# oser-frontend

Frontend du site d'Ouverture Sociale pour l'Egalité et la Réussite, développé avec Angular 4.

## Installation

Après avoir cloné le repo :

```
$ cd oser-frontend/
```

1. Installez `@angular/cli` globalement (`-g`) si ce n'est pas encore fait.

```
oser-frontend $ npm install -g @angular/cli
```

2. Rendez-vous dans le dossier du projet et installez les dépendances.

```
oser-frontend $ cd oser-app/
oser-app $ npm install
```

3. Lancez le serveur de développement.

```
oser-app $ ng serve -o
```

## En cas d'erreur…

```
$ npm install
npm WARN: No repository field...
```

Si vous obtenez ce message après l'étape 2, il est probable que vous ne soyez pas dans le bon dossier. Assurez-vous d'être dans le dossier du projet (`oser-app`), là où se situe un fichier `package.json` (que npm utilise pour lire et installer les dépendances).

```
ERROR in Error encountered resolving symbol values statically. Calling function 'Ng4TwitterTimelineModule', function calls are not supported.
```

C'est une erreur liée à un package utilisé pour l'affichage d'un feed Twitter sur le site vitrine. Le bug est connu est [suivi sur le repo du package](https://github.com/lokers/ng4-twitter-timeline/issues/1). Déclenchez un *hot reload* (par exemple en ajoutant une ligne à un fichier quelconque) et le build devrait (étrangement) fonctionner.
