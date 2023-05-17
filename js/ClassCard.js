export class CardProd {
    constructor(id, name, ranking, price, disc, discPer, img, descrip, tpd, fav, type) {
        this.id = id;
        this.name = name;
        this.ranking = ranking;
        this.price = price;
        this.disc = disc;
        this.discPer = discPer;
        this.img = img;
        this.descrip = descrip;
        this.tpd = tpd;
        this.fav = fav;
        this.type = type
    }
    createCard(cont){
        let card = document.createElement('div');
        card.classList.add('cardProd')
        card.innerHTML = `
            <div class="imgCardCont">
                <img src="${this.img}" alt="">
                ${this.fav ?  `<i class="bi bi-heart-fill" onclick="window.fav(${this.id})"></i>`: `<i class="bi bi-heart" onclick="window.fav(${this.id}, ${this.fav})"></i>`}
            </div>
            <div class="priceCardCont">
                <h1>${this.name}</h1>
                <div class="priceCont">
                    ${this.disc ? `<span class="disc"> -${this.discPer}%</span>
                    <del class="PrevPrice">$${this.price}ARS</del>
                    <span>$${Math.floor((this.price * (100-this.discPer))/100)}ARS</span>`: `<span>$${this.price}ARS</span>`}
                    
                </div>
            </div>
        `
        cont.appendChild(card)
    }
    createFavCard(cont) {
        let card = document.createElement('div');
        card.classList.add('cardProdOffCanvas');
        card.innerHTML = `
            <div class="imgCardCont">
            <img src="${this.img}" alt="">
            <h1>${this.name}</h1>
        `
        cont.appendChild(card)
    }
}