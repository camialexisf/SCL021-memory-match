import data from '../data/cartoon-network/cartoon-network.js'

console.log(data.items);
/*fetch('./data/cartoon-network/cartoon-network.json')
   .then(resp => resp.json())
   .then( function(data){
    appendData(data);
   })
   .catch(function(err){
    console.log(err);
   });*/

 /* const randomizeData = () => {
   data.sort(() => Math.random() - 0.5);
 };
 console.log(randomizeData);*/


 const shuffle = ()=> {
    const dataItems = data.items;
    const dobleData = (dataItems).concat(dataItems);
    let i = dobleData.length;
 /* console.log ('Hola Cami');*/
  while (--i > 0){
    let randIndex = Math.floor(Math.random() * (i + 1));
    [dobleData[randIndex], dobleData[i]] = [dobleData[i], dobleData[randIndex]];
} 
return dobleData;

 }

 export default shuffle();