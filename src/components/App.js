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
//Funcion que muestra cartas por el frente y por atras, ESTA OK!
/*const App = () => {
  const frontCard = document.createElement("div");
  const backCard = document.createElement("div");

  for (var i = 0; i < shuffle.length; i++) {
    var frontImg = document.createElement("img");
    var backImg = document.createElement('img');
    frontImg.src = shuffle[i].image;
    backImg.src = shuffle[i].backSide;
    frontCard.appendChild(frontImg);   
    backCard.appendChild(backImg);
    console.log(backImg);
  }
  frontImg.className = 'frontCards';
  backImg.className = 'backCards';
  return (backCard);
}*/

//Usar solo un elemento que contenga ambos lados de la carta
const App = () => {
//Se crea constante que contiene ambos lados
  const cards = document.createElement("div"); 

  for (var i = 0; i < shuffle.length; i++) {
//se establece carta que se muestra por defecto
    var frontImg = document.createElement("img");
    frontImg.src = shuffle[i].image;
     var backImg = shuffle[i].backSide;
     console.log(backImg)

  // Creamos funcion SetTimeOut
setTimeout (function(){
  frontImg.setAttribute("src", shuffle[i].backSide);
}, 5000);
  //Se cambia el atributo de carta mostrada por defecto a la parte posterior con setAttribute
 
   cards.appendChild(frontImg);   
    /*backCard.appendChild(backImg);*/
  }
  cards.className = "cards"
  /*frontImg.className = 'frontCards';*/
  /*backImg.className = 'backCards';*/
  return (cards);
}


export default App;

