import {popularDishes} from '../data/popular-dishes.js';

const popularDishesGrid = document.getElementById('popular-dishes-grid');

function createCard(dish) {
    
    let buyBlock = `
        <p class="item-price">${dish.price_rub} ₽</p>
        <button class="item-add-btn">
            <img src="resources/icons/cart_black.svg" alt="">
        </button>`;
    if (dish.old_price_rub) {
        buyBlock = `
            <div class="item-price-block">
                <p class="item-old-price">${dish.old_price_rub} ₽</p>
                <p class="item-price">${dish.price_rub} ₽</p>
            </div>
            <button class="item-add-btn">
                <img src="resources/icons/cart_black.svg" alt="">
            </button>`
        } else if ("variations" in dish) {
        buyBlock = `
        <div class="item-price-block">
                <p class="item-min-price">${dish.min_price_rub} ₽ -</p>
                <p class="item-max-price">${dish.max_price_rub} ₽</p>
            </div>
            <button class="item-variations-btn">
                ${dish.variations}
            </button>
        `
        }

    
    
    return `
        <div class="item-card">
            <img src="resources/items-mini/${dish.image}" alt="" class="item-img">
            <p class="item-name">${dish.name}</p>
            <p class="item-portion">${dish.weight_g}г</p>
            <p class="item-description">${dish.description}</p>
            <div class="item-buy">
                ${buyBlock}
            </div>
        </div>`
}

for (let i = 0; i < popularDishes.length; i++) {
    popularDishesGrid.innerHTML += createCard(popularDishes[i]);
}
