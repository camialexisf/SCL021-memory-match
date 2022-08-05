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

  for (let i = 0; i < shuffle.length; i++) {
    //se establece carta que se muestra por defecto
    var frontImg = document.createElement("img");
    frontImg.src = shuffle[i].image;
    //variable que contiene link a parte posterior
    var backImg = shuffle[i].backSide;
  frontImg.classList.add("frontcards");
    //console.log(backImg)

    // Creamos funcion SetTimeOut 
    /*setTimeout(function () {
  //Se cambia el atributo de carta mostrada por defecto a la parte posterior con setAttribute
  console.log(frontImg);  
  frontImg.setAttribute("src", backImg);
    }, 5000);*/


    
    cards.appendChild(frontImg);
    /*backCard.appendChild(backImg);*/
  }
 
  cards.className = "cards"
  /*frontImg.className = 'frontCards';*/
  /*backImg.className = 'backCards';*/
  return (cards);
}
//funcion q cambia atributo visibilidad
/*frontImg.setAttribute('id', 'frontSideImage');
  backImg.setAttribute('id', 'backSideImage');

  cards.appendChild(frontImg);
  cards.appendChild(backImg);
  console.log(backImg)

  frontImg.style.visibility = "visible";
  backImg.style.visibility = "hidden";

  setTimeout(function () {
    var front = document.getElementById('frontSideImage');
    var back = document.getElementById('backSideImage');
    if (back.style.visibility === 'hidden') {
      back.style.visibility = 'visible';
    } else {
      front.style.visibility = 'hidden';
    }
  }, 3000); */



export default App;

