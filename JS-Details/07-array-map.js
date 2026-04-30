const hobbies = [
    "Correr",
    "Corta Cabelo",
    "Escuta musica",
    "Jogar Videogame",
    "Ver Series",
    "Dormir"

];

const novosHobbies = hobbies.map((hob) => {
   return `<p>${hob}</p>`;
});

console.log(novosHobbies);