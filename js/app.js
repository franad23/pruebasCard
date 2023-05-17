import data from "../Datos/datos.json" assert {type:'json'};
import { CardProd } from "./ClassCard.js";
const $cardsCont = document.querySelector('.cardsCont');
const $offCanvasCont = document.querySelector('.offCanvasCont') 
let currentFav = null;
let prodArr = [];
let favArr = [];
const $inputSearch = document.getElementById('inputSearch')

const loadData = () => {
    prodArr = [];
    data.forEach(element => {
        prodArr.push(new CardProd (element.id, element.name, element.ranking, element.price, element.disc, element.discPer, element.img, element.descrip, element.tdp, element.fav))
    })
}
loadData();
console.log(prodArr);
const loadCards = () => {
    $cardsCont.innerHTML = '';
    prodArr.forEach(elem => {
        elem.createCard($cardsCont);
    });
}
loadCards();


window.fav = function(id) {
    let index = prodArr.findIndex((item) => item.id == id);
    console.log(index);
    if (prodArr[index].fav == true) {
        event.target.classList.remove('bi-heart-fill');
        event.target.classList.add('bi-heart');
        data[index].fav = false;
        console.log(data[index].fav); 
        loadData();
        loadCards();
    } else {
        event.target.classList.add('bi-heart-fill');
        event.target.classList.remove('bi-heart');
        data[index].fav = true;
        console.log(data[index].fav); 
        loadData();
        loadCards();
    }
};
window.prueba = (event) => {
    let favSelec = prodArr.filter(elem => elem.fav == true);
    $offCanvasCont.innerHTML = '';
    console.log(favSelec);
    favSelec.forEach(elem => {
        elem.createFavCard($offCanvasCont)
    })
}

$inputSearch.addEventListener("input", () => {
    let toSearch = $inputSearch.value;
    let toSearchregex = new RegExp(`${toSearch}`,"gi") ;
    let arrToSearch = prodArr.filter(element => element.name.match(toSearchregex))
    $cardsCont.innerHTML = '';
    arrToSearch.forEach(elem => {
        elem.createCard($cardsCont)
    })
    console.log(toSearch);
    console.log(arrToSearch);
    if (arrToSearch.length == 0) {
        let notFind = document.createElement('h1')
        notFind.innerHTML = `Tu busqueda "${toSearch}" no coincide con nuestros productos`
        $cardsCont.appendChild(notFind);
    }
})

// let prueba = "francis";

// const regExpLiteral = new RegExp(`${prueba}`,"gi") ;
// console.log(regExpLiteral);

// const regExpStr = [
//     {
//         "nombre": "Franco diaz"
//     },
//     {
//         "nombre": "Francisco paez"
//     },
//     {
//         "nombre": "Noelia"
//     }
// ];
// console.log(regExpStr);
// console.log(regExpStr.filter(element => element.nombre.match(regExpLiteral)));