/* Создание карточек товара */

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
        elem.classList.add('card_grid');
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

let cardsData = [
    {
        src: 'img/apple-watch.png',
        alt: 'apple-watch',
        rating: '3.4',
        price: '399',
        title: 'Apple Watch Series 4 GPS',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'accessories',
        brand: 'apple'
    },
    {
        src: 'img/jbl-speaker.png',
        alt: 'jbl-speaker',
        rating: '5.0',
        price: '199',
        title: 'JBL Speaker',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'audio',
        brand: 'jbl'
    },
    {
        src: 'img/iphone-x.png',
        alt: 'iphone-x',
        rating: '4.4',
        price: '899',
        title: 'Apple iPhone X 128GB',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'phones',
        brand: 'apple'
    },
    {
        src: 'img/beats-headphones.png',
        alt: 'beats-headphones',
        rating: '3.4',
        price: '459',
        title: 'Beats Headphones',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'audio',
        brand: 'apple'
    },
    {
        src: 'img/macbook-pro.png',
        alt: 'macbook-pro',
        rating: '4.5',
        price: '2499',
        title: 'Apple Macbook Pro 512GB SSD',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'computers',
        brand: 'apple'
    },
    {
        src: 'img/ipad-pro.png',
        alt: 'ipad-pro',
        rating: '5',
        price: '899',
        title: 'Apple iPad Pro 64GB',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'computers',
        brand: 'apple'
    },
    {
        src: 'img/homepod.png',
        alt: 'homepod',
        rating: '3.3',
        price: '399',
        title: 'Apple Homepod',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'audio',
        brand: 'apple'
    },
    {
        src: 'img/jlab-audio-wireless.png',
        alt: 'jlab-audio-wireless',
        rating: '5',
        price: '2499',
        title: 'JBuds Air Wireless Bluetooth…',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'audio',
        brand: 'xiaomi'
    },
    {
        src: 'img/magic-mouse.png',
        alt: 'magic-mouse',
        rating: '4.4',
        price: '99',
        title: 'Apple Magic Mouse ',
        descr: 'Redesigned from scratch and completely revised.',
        category: 'computers',
        brand: 'apple'
    }
];

let card;

for(let i = 0; i < cardsData.length; i++){
    card = new Card(cardsData[i]['src'],
                    cardsData[i]['alt'],
                    cardsData[i]['rating'],
                    cardsData[i]['price'],
                    cardsData[i]['title'],
                    cardsData[i]['descr'],
                    cardsData[i]['category'],
                    cardsData[i]['brand'],
                    '.products__cards').createCard();
}

let productsList = document.querySelector('.products__cards'),
    cards = document.querySelectorAll('.card'),

    btnCardsGrid = document.querySelector('[data-view="grid"]'),
    btnCardsList = document.querySelector('[data-view="list"]'),

    btnWishList = document.querySelectorAll('.card__button_wish');

/* --- Меняем вид отображения карточек товара на странице --- */

function toggleProductsListView (btn, viewRemoveClass, viewAddClass, cardRemoveClass, cardAddClass) {
    btn.addEventListener('click', function() {
        for(let i = 0; i < cards.length; i++) {
            productsList.classList.remove(viewRemoveClass);
            productsList.classList.add(viewAddClass);
            cards[i].classList.remove(cardRemoveClass);
            cards[i].classList.add(cardAddClass);
        }
    });
}

toggleProductsListView(btnCardsGrid, 'products__cards_list', 'products__cards_grid', 'card_list', 'card_grid');

toggleProductsListView(btnCardsList, 'products__cards_grid', 'products__cards_list', 'card_grid', 'card_list');


/* --- Карточка товара. Событие клика по кнопке Wishlist --- */

function toggleClassWishlist(class1, class2) {
    btnWishList.forEach(function(item) {
        item.addEventListener('click', () => {
            item.classList.toggle(class1);
            item.classList.toggle(class2);
        });
    });
}

toggleClassWishlist('wish_none', 'wish_active');