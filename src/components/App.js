import shuffle from './random.js';
import data from '../data/cartoon-network/cartoon-network.js'

//Funcion que crea las cartas
const App = () => {
  //Se crea array vacío que se usará más adelante 
  let pairs = [];
  //Se crea div que luego sera apenchado en root
  const cards = document.createElement("div");
  //Se crea div que contiene todas las cartas
  const cardsImg = document.createElement("div");
  //Le asignamos clase a los divs
  cardsImg.className = "cardsImg";
  cards.className = "cards";
  //For que recorre el arreglo previamente barajado y duplicado
  for (let i = 0; i < shuffle.length; i++) {
    //Se crea div que envuelve cada una de las imagenes, por separado
    const containerCardImg = document.createElement("div");
    //Se crea el elemento imagen a contener
    var frontImg = document.createElement("img");
    //Se introduce cada carta en su respectivo div
    containerCardImg.appendChild(frontImg);
    //Se toma el total de las cartas y se agrupan en un contenedor
    cardsImg.appendChild(containerCardImg);
    //Le damos el src desde donde sacar las imagenes
    frontImg.src = shuffle[i].image;
    //Se asigna un name que corresponda con la imagen que contiene
    containerCardImg.setAttribute("name", shuffle[i].id)
    //Asignamos clase a las imagenes
    frontImg.classList.add("frontcards");
    //Asignamos un name que corresponde con la imagen contenida
    frontImg.setAttribute("name", shuffle[i].id)

    //Escuchador de eventos, que voltea las cartas    
    frontImg.addEventListener("click", function (e) {
      //Al hacer click en una carta en especifico nos retorna el name
      let name = e.target.getAttribute("name");
      //Luego busca el name que corresponda con el Id en la Data
      const front = data.items.find(element => element.id === name);
      //Cambia el src de la carta clickeada por la imagen almacenada en data.items.image
      e.target.src = front.image;
      //Finalmente pushea la carta clickeada a un array vacio
      pairs.push(e.target)
      //Cuando el largo del array es 1 no ejecuta ninguna accion
      if (pairs.length == 1) {
        return;
      }
      //Se ejecuta un setTimeOut para generar un pequeño delay en la comparacion, para que el usuario lo alcance a ver
      setTimeout(function () {
        //Cuando el largo del arreglo es 2 empieza la comparacion
        if (pairs.length == 2) {
          //Se comparan las cartas, utilizando el name y en caso de ser DISTINTAS se vuelve a mostrar la parte trasera      
          if (pairs[0].name !== pairs[1].name) {
            pairs[0].src = data.backSide;
            pairs[1].src = data.backSide;
          }
          else if (pairs[0].name == pairs[1].name) {
            //Cambiar el class de las cartas al encontrar su par
            pairs[0].setAttribute("class", "flipped");
            pairs[1].setAttribute("class", "flipped");

            let arrFlipped = document.querySelectorAll(".flipped")
            //Comprobar que el total de las cartas tenga la nueva clase
            if (arrFlipped.length == shuffle.length) {
              //lanzar alert felicitando
              //alert("¡Felicitaciones, has ganado la partida!")
              swal({
                icon: 'success',
                title: 'Felicitaciones!',
                text: 'has ganado la partida',               
              })
            }
          }
        }
        //Por ultimo el array se vuelve a vaciar 
        pairs = [];
      }, 300)
    })
  }
  //Se apenchean las imagenes en cards
  cards.appendChild(cardsImg);
  //Nos devuelve las cartas que serán apencheadas en el root
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

  }, 1500)

});


document.addEventListener('DOMContentLoaded', function () {
  //Funcion que se ejecuta al clickear Volver a Jugar, refresca la pagina.
  //Llamamos al id del elemento a clickear
  const reload = document.getElementById("playAgain");
  //Se le asigna un escuchador
  reload.addEventListener("click", () => {
    //Refresca la pagina
    location.reload();
  });

  //se crea un evento cuando la pantalla es menor a 991px
  if (window.matchMedia("(max-width: 991px)").matches) {
    //Llamamos al id del elemento a clickear
    const tutorial = document.getElementById("tutorial");
    //Se le asigna un escuchador
    tutorial.addEventListener("click", () => {
      //Se muestra alert con las instrucciones
      //alert("Encuentra los pares! Debes hacer clic en cada carta para voltearla")
      swal({
        icon: 'info',
        title: 'Encuentra los pares!',
        text: 'Debes hacer clic en cada carta para voltearla',
      })
    })
  }
});

export default App;

