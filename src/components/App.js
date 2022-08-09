import shuffle from './random.js';
/*import toTurn from './girar.js';*/
import data from '../data/cartoon-network/cartoon-network.js'

//Funcion que crea las cartas
const App = () => {
  let pairs = [];
  const cards = document.createElement("div");
  const cardsImg = document.createElement("div");
  //Le asignamos clase al div
  cardsImg.className = "cardsImg";
  cards.className = "cards";
  for (let i = 0; i < shuffle.length; i++) {
    //se establece carta que se muestra por defecto
    const containerCardImg = document.createElement("div");
    var frontImg = document.createElement("img");
    containerCardImg.appendChild(frontImg);
    cardsImg.appendChild(containerCardImg);
    frontImg.src = shuffle[i].image;
    containerCardImg.setAttribute("name", shuffle[i].id)
    frontImg.classList.add("frontcards");
    frontImg.setAttribute("name", shuffle[i].id)

    frontImg.addEventListener("click", function (e) {
      //que busque segun el name el id que corresponda dentro de la data y desde ahi saque el src
      let name = e.target.getAttribute("name");
      console.log(name)
      const front = data.items.find(element => element.id === name);
      e.target.src = front.image;
      pairs.push(e.target)
      if (pairs.length == 1){
       return;
      }
      setTimeout(function () {
       if (pairs.length == 2){
        if(pairs[0].name !== pairs[1].name) {
           pairs[0].src = data.backSide;
           pairs[1].src = data.backSide;
           console.log(pairs)
        }}
      pairs = [];
      }, 500)
  
    })
    //darle un id a cada div segun imagen q contiene
    //cuando ese div coincide con el del target, cambiar  src de backside a image
    //cuando hago clic se muestra una carta
    //esa se mantiene volteada hasta q clikeamos la otra
    //se ven un ratito
    //se comparan y si son iguales se quedam giradas, si son distintas muestra el backside de nuevo

  }
  cards.appendChild(cardsImg);
  return cards;
}




window.addEventListener("load", function () {
  let arrCards = document.querySelectorAll(".frontcards")
  let backImg = data.backSide;

  setTimeout(function () {
    for (let i = 0; i < arrCards.length; i++) {
      arrCards[i].setAttribute("src", backImg);
      //console.log(arrCards[i].name)
    }
  }, 1000)
});


export default App;

