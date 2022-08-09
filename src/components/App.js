import shuffle from './random.js';
/*import toTurn from './girar.js';*/
import data from '../data/cartoon-network/cartoon-network.js'

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
  //Se crea un div que contiene ambos lados
  const cards = document.createElement("div");
 const cardsImg = document.createElement("div");
 //Le asignamos clase al div
  cards.className = "cards"
  for (let i = 0; i < shuffle.length; i++) {
    //se establece carta que se muestra por defecto

    var frontImg = document.createElement("img");
    cardsImg.appendChild(frontImg);
    frontImg.src = shuffle[i].image;
    frontImg.classList.add("frontcards");
    frontImg.setAttribute("name", shuffle[i].id)
    
    frontImg.addEventListener("click", function (e) {
      frontImg.src = shuffle[i].image;
      console.log(e.target.name)
    let imagen = frontImg.getAttribute("name");
    console.log(imagen)
      /*document.getElementsByName(frontImg[i]) == shuffle[i].id
        frontImg.setAttribute("src", frontImg)*/
      
      //if () {
      // return frontImg
    
     // }
      //else if (e.target.className != document.querySelectorAll(".frontcards") ) {
       // return shuffle[i].backSide
      //}
   //console.log(e.target.value)
    })

  }
  cards.appendChild(cardsImg);
  return cards;
}

window.addEventListener("load", function () {
  let arrCards = document.querySelectorAll(".frontcards")
  let backImg = data.items[0].backSide;

  setTimeout(function () {
    for (let i = 0; i < arrCards.length; i++) {
      arrCards[i].setAttribute("src", backImg);
      //console.log(arrCards[i].name)
    }
  }, 2000)
});


export default App;

