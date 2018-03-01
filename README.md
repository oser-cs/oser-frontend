# oser-frontend
Frontend du site d'Ouverture Sociale pour l'Egalité et la Réussite.

## Installation

Après avoir cloné le repo :

```
$ cd oser-frontend
```

1. Installez `@angular/cli` si ce n'est pas encore fait

```
$ npm install -g @angular/cli
```

2. Installez les dépendances

```
$ npm install
```

3. Lancez le serveur de dev

```
$ ng serve -o
```

## FAQ

> J'obtiens l'erreur ci-dessous à l'étape 3. Que faire ?

```
ERROR in Error encountered resolving symbol values statically. Calling function 'Ng4TwitterTimelineModule', function calls are not supported.
```

C'est une erreur liée à un package utilisé pour l'affichage d'un feed Twitter sur le site vitrine. Le bug est connu est [suivi sur le repo du package](https://github.com/lokers/ng4-twitter-timeline/issues/1). Déclenchez un *hot reload* (par exemple en ajoutant une ligne à un fichier quelconque) et le build devrait (étrangement) fonctionner.
