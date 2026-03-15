import { menuDishes } from "../data/menu-dishes.js";  

const menuCarousel = document.getElementById('menu-carousel');

function createCard(dish) {

    return `
    <a class="menu-carousel-item">
        <img src="resources/menu-plates/${dish.image_top}" alt="">
        <p>${dish.text}</p>
        <img src="resources/menu-plates/${dish.image_bottom}" alt="">
    </a>
    `
}

for (let i = 0; i < menuDishes.length; i++) {
    menuCarousel.innerHTML += createCard(menuDishes[i]);
}
