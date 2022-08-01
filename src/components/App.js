import shuffle from './random.js';
console.log(shuffle);
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
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};*/




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

