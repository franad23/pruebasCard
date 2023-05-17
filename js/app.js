import data from "../Datos/datos.json" assert {type:'json'};
import { CardProd } from "./ClassCard.js";
const $cardsCont = document.querySelector('.cardsCont');

let prodArr = [];

data.forEach(element => {
    prodArr.push(new CardProd (element.id, element.name, element.ranking, element.price, element.disc, element.discPer, element.img, element.descrip, element.tdp))
})
console.log(prodArr);
prodArr.forEach(elem => {
    elem.createCard($cardsCont);
});

let currentFav = null;
let FavArr = [];

window.fav = (id) => {
    currentFav = id;
    console.log(currentFav);
    return currentFav;
}



