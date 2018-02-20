import { Visit } from './visit.model';

export const VISITS: Visit[] = [
  {
    id: 0,
    title: 'Exposition : "Le pouvoir des algorithmes"',
    place: "Palais de la Découverte",
    date: new Date("2018-02-24T15:00:00"),
    description: "Au cœur du fonctionnement de nos ordinateurs, les algorithmes se résument à des séquences d'instructions élémentaires. Mais tous ne se valent pas et leur coût varie en termes de mémoire et de temps d'exécution, laissant apparaître de vertigineuses possibilités.",
    image: "assets/img/sortie-decouverte.jpg",
  },
  {
    id: 1,
    title: "Découverte ludique de la Maison de la Radio",
    place: "Maison de la Radio",
    date: new Date("2018-02-20T14:00:00"),
    description: "L'univers de la Maison de la radio vous est ouvert, à travers un parcours ludique au sein de la Maison ronde. Pour satisfaire la curiosité et le plaisir des plus jeunes, découvrez les grandes salles de concerts, un studio de radio et des recoins du bâtiment, une façon de connaître histoire et son architecture et de s’immerger dans la vie de la radio.",
    image: "assets/img/sortie-radio.jpg",
  },
  {
    id: 2,
    title: "L'Art des super-héros Marvel",
    place: "Musée des Arts Ludiques",
    date: new Date("2014-04-13T13:30:00"),
    description: "Du 22 mars au 31 août 2014, Art Ludique-Le Musée propose la première grande exposition au monde consacrée à l’Art des Super Héros Marvel.",
    image: "assets/img/sortie-marvel.jpg",
  },
  {
    id: 3,
    title: "Découverte ludique de la Maison de la Radio",
    place: "Maison de la Radio",
    date: new Date("2018-02-20T14:00:00"),
    description: "L'univers de la Maison de la radio vous est ouvert, à travers un parcours ludique au sein de la Maison ronde. Pour satisfaire la curiosité et le plaisir des plus jeunes, découvrez les grandes salles de concerts, un studio de radio et des recoins du bâtiment, une façon de connaître histoire et son architecture et de s’immerger dans la vie de la radio.",
    image: "assets/img/sortie-radio.jpg",
  },
].map(v => <Visit>v);
