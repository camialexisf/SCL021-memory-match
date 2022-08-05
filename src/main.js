import App from './components/App.js';
import shuffle from './data/cartoon-network/cartoon-network.js';


// console.log(shuffle)

document.getElementById('root').appendChild(App());

let arrCards = document.querySelectorAll(".frontcards")
let backImg = shuffle.items[0].backSide;


setTimeout(function(){
    for(let i = 0;i < arrCards.length; i++){
        arrCards[i].setAttribute("src",backImg )
    }
}, 5000)
