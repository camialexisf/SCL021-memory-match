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
    const dataItems = data.items
  let i = dataItems.length;
  console.log ('Hola Cami');
  while (--i > 0){
    let randIndex = Math.floor(Math.random() * (i + 1));
    [dataItems[randIndex], dataItems[i]] = [dataItems[i], dataItems[randIndex]];
} 
return dataItems;
 }

 export default shuffle();