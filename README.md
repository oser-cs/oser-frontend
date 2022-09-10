# oser-frontend

Frontend du site d'Ouverture Sociale pour l'Egalité et la Réussite, développé avec Angular 6.

## Installation sans docker

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

- Lancez le serveur de développement (`-o` ouvrira l'application à la fin du build).

```
oser-frontend $ ng serve -c local
```

> Le flag `-c` correspond à la configuration utilisée. La valeur `local` signifie que l'environnement "local" sera utilisé, comme défini dans le fichier `environments/environment.local.ts`.

Le site sera alors disponible à l'adresse http://localhost:4200.

## Installation avec docker

Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels.
L'avantage est que l'installation est plus rapide.

Etapes :

1. Intaller docker sur votre pc
2. Se placer dans le repertoire oser-frontend : cd oser-frontend/
3. Lancer la commande : $ docker build -t oser-frontend .
4. Lancer la commande : $ docker run -p 4200:4200 oser-frontend .
5. Lancer votre navigateur préféré et taper 127.0.0.1:4200 dans la barre de recherche

## En cas d'erreur…

```
$ npm install
npm WARN: No repository field...
```

Si vous obtenez ce message après l'étape 2, il est probable que vous ne soyez pas dans le bon dossier. Assurez-vous d'être dans le dossier du projet (`oser-frontend`), là où se situe un fichier `package.json` (que npm utilise pour lire et installer les dépendances).

## CI/CD

Une pipeline CI/CD (Continuous Integration/Continuous Delivery) existe pour assurer le test et le déploiement automatique lors d'un `git push`. Celle-ci est réalisée avec TravisCI.

Pour plus d'information,s consulter le `.travis.yml` et la [documentation TravisCI](https://docs.travis-ci.com).

## Déploiement

Actuellement, le frontend est déployé sur Heroku. Il y a 2 applications, chacune reliée à une branche de ce repo :

- `oser-cs` est reliée à `master`
- `oser-frontend-dev` est reliée à `dev`

Ainsi, un push sur la branche `master` déclenche un déploiement de l'application `oser-cs`, qui sera accessible dans sa nouvelle version en quelques minutes. Même principe sur la branche `dev`. :+1:

Si une erreur survient lors du déploiement, la nouvelle version n'est pas mise en prod (ouf !) et un email est envoyé à l'adresse mail du secteur Geek.

Les applications sont accessibles à leur adresse au format suivant : `<NOM_APP>.herokuapp.com`.
