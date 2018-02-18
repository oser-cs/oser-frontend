import { Filter } from './filter.model';

export const FILTERS = [
  {
    name: "Année",
    children: [
      { name: "2018" },
      { name: "2017" },
      { name: "2016" },
    ]
  },
  {
    name: "Catégories",
    children: [
      { name: "Focus Europe" },
      { name: "Stage Théâtre" },
      { name: "(Art)cessible" },
      { name: "Oser la Prépa" },
      { name: "Carnets de France" },
      { name: "Good Morning London" },
      { name: "Tutorat" },
      { name: "Sorties" },
      { name: "Annonces" },
    ]
  }
];
