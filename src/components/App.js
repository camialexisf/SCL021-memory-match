import shuffle from './random.js';
/*import data from '../data/cartoon-network/cartoon-network.js'*/

// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// 

//Funcion que crea las cartas por el frente 
const App = () => {
  //Se crea constante que contiene ambos lados
  const cards = document.createElement("div");

  for (let i = 0; i < shuffle.length; i++) {
    //se establece carta que se muestra por defecto
    var frontImg = document.createElement("img");
    frontImg.src = shuffle[i].image;
  frontImg.classList.add("frontcards");
    cards.appendChild(frontImg);
  }
  cards.className = "cards"
  return (cards);
}



export default App;

