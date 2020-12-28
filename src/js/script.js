class Card {
    constructor(src, alt, rating, price, titleProduct, descr, category, brand, parent) {
        this.src = src;
        this.alt = alt;
        this.rating = rating;
        this.price = price;
        this.titleProduct = titleProduct;
        this.descr = descr;
        this.category = category;
        this.brand = brand;
        this.parent = document.querySelector(parent);
    }

    createCard() {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.classList.add('card_active');
        elem.setAttribute('data-price', `${this.price}`);
        elem.setAttribute('data-rating', `${this.rating}`);
        elem.setAttribute('data-category', `${this.category}`);
        elem.setAttribute('data-brand', `${this.brand}`);

        elem.innerHTML = `
        <div class="card__img">
            <img src="${this.src}" alt="${this.alt}">
        </div>
        
        <div class="card__inner">
            <div class="card__wrapper">
                <div class="card__rating">
                    <span class="card__rating-value">${this.rating}</span>
                    <img src="img/star.svg" alt="star">
                </div>
                <span class="card__price">$${this.price}</span>
            </div>
            <div class="card__title">${this.titleProduct}</div>
            <div class="card__descr">${this.descr}</div>
            <div class="card__buttons">
                <button class="card__button card__button_wish wish_none">WISHLIST</button>
                <button class="card__button card__button_cart">ADD TO CART</button>
            </div>
        </div>
        `;

        this.parent.append(elem);
    }
}