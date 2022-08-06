import data from '../data/cartoon-network/cartoon-network.js'

 const shuffle = () => {
    const dataItems = data.items;
    const dobleData = (dataItems).concat(dataItems);
    let i = dobleData.length;
  while (--i > 0){
    let randIndex = Math.floor(Math.random() * (i + 1));
    [dobleData[randIndex], dobleData[i]] = [dobleData[i], dobleData[randIndex]];
} 
return dobleData;

 }

 export default shuffle();