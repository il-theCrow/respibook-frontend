const categories = [
  {
    "label": "Antipasti",
    "img": "antipasti.jpg"
  },
  {
    "label": "Primi",
    "img": "primi.jpg"
  },
  {
    "label": "Veggie",
    "img": "veggie.jpg"
  },
  {
    "label": "Secondi di Carne",
    "img": "carne.jpg"
  },
  {
    "label": "Secondi di Pesce",
    "img": "pesce.jpg"
  },
  {
    "label": "Dolci",
    "img": "dolci.jpg"
  },
  {
    "label": "Extra",
    "img": "panino.jpg"
  },
  {
    "label": "Cocktail",
    "img": "moscowmule.jpg"
  },
];

categories.forEach(category => {
  category.img = "assets/img/" + category.img;
});

export default categories;
