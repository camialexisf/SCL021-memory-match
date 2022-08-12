import data from '../data/cartoon-network/cartoon-network.js'
//Se crea función que baraja aleatoremente las cartas y las duplica
 const shuffle = () => {
//Variable que almacena los datos de cada carta
    const dataItems = data.items;
//Variable que duplica las cartas
    const dobleData = (dataItems).concat(dataItems);
//Se le asigna valor a i 
    let i = dobleData.length;
//Recorre el array completo cambiando el orden una por una
  while (--i > 0){
//Variable que almacena la operación que cambia las cartas
    let randIndex = Math.floor(Math.random() * (i + 1));
//Comparación que intercambia los index de cada carta
    [dobleData[randIndex], dobleData[i]] = [dobleData[i], dobleData[randIndex]];
} 
//Retornamos las cartas duplicadas y barajadas
return dobleData;

 }

 export default shuffle();