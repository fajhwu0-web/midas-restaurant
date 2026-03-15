let buttonPrev = document.getElementById('prev-button');
let buttonNext = document.getElementById('next-button');
let carousel = document.getElementById('menu-carousel'); 

let shift = 0;
let counter = 0;



function getCardWidth() {
    return carousel.firstElementChild.getBoundingClientRect().width + 20;
}

buttonPrev.addEventListener('click', () => {
    if (counter === 0) {
        return;
    }
    shift += getCardWidth();
    carousel.style.transform = `translateX(${shift}px)`;
    counter--;
})

buttonNext.addEventListener('click', () => {
    if (counter === carousel.children.length - 6) {
        return;
    }
    shift -= getCardWidth();
    carousel.style.transform = `translateX(${shift}px)`;
    counter++;
})
