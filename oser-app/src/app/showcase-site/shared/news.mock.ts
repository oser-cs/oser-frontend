import { News } from './news.model';

/*
This is a mock array of News objects.
TODO Implement a NewsService to:
- get the last n news
- get all the news
*/
export const NEWS: News[] = [{
  title: 'Journée de Clôture 2017',
  description: "La fin de l'année scolaire sonne aussi la fin du tutorat pour les tutorés. Pour fêter cette belle année passée ensemble, les tutorés et les tuteurs se sont retrouvés ce samedi 5 juin sur le campus de CentraleSupélec […]",
  date: '15/06/17',
  src: 'assets/img/news-jdc.jpg',
  pinned: false
},
{
  title: 'Retour sur Focus Europe 2017',
  description: "Il est l'heure de faire le bilan de cette édition 2017 de Focus Europe, qui a emmené les tutorés à Prague. L'équipe organisatrice vous a préparé une belle brochette de photos ainsi qu'un montage souvenir […]",
  date: '30/04/17',
  src: 'assets/img/news-focus-bilan.jpg',
  pinned: false
},
{
  title: "Focus Europe 2017 : c'est parti !",
  description: "Les lycéens sont arrivés ce jeudi 13 avril à Prague, capitale de la République Tchèque. Au programme : découverte de la ville, visites culturelles, jeu de piste, et surtout beaucoup de bonne humeur ! […]",
  date: '03/04/17',
  src: 'assets/img/news-focus-c-est-parti.jpg',
  pinned: false
},
{
  title: "OSER et Véolia signent un nouveau partenariat",
  description: "Depuis le 11 décembre 2017, OSER peut compter sur un nouveau partenaire. Véolia est un grand groupe de la gestion énergétique et sanitaire, et s'engage à nos côtés pour favoriser le tissu social.",
  date: "14/12/2017",
  src: "assets/img/logo-veolia.png",
  pinned: true
}
]
