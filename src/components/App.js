import shuffle from './random.js';
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
// 

/*const App = () => {
  const newDivImg = document.createElement("div");
  for (var i = 0; i < shuffle.length; i++) {
    var img = document.createElement("img");
    img.src = shuffle[i].image;
    newDivImg.appendChild(img);
  }
  
  newDivImg.className = 'cards';
  return (newDivImg);

  const backSide = document.createElement("div");
  const backSideImg = document.createElement('img');
  backSideImg.src = shuffle[i].backSide;
  console.log(backSideImg)
};*/

const App = () => {
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
  return (frontCard);
}





/*function appendData(shuffle) {
   
 var mainContainer = document.getElementById("root");
 for (var i = 0; i < shuffle.length; i++) {
   var img = document.createElement("img");
   img.src = data.items[i].image;
   mainContainer.appendChild(img);
 }
};
appendData();*/
export default App;

