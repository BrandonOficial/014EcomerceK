// Hero slide

var swiper = new Swiper('.heroSlider', {
    slidePerView: 1,
    loop: true,
    autoplay: true,
    speed: 2000,
})

// Product slide

var swiper = new Swiper('.productSwiper', {
    slidesPerView: 4, 
    spaceBetween: 0, // Espaço entre os slides
    loop: true,
    autoplay: true,
    breakpoints: {
        1200:{
            slidesPerView: 4, 
            spaceBetween: 10,
        },
        900:{
            slidesPerView: 3, 
            spaceBetween: 10,
        },
        500:{
            slidesPerView: 2, 
            spaceBetween: 20,
        },
    },
})

// Brands slide

var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5, // Define o número de slides visíveis ao mesmo tempo
    spaceBetween: 10, // Espaço entre os slides
    loop: true,
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        1200:{
            slidesPerView: 4, 
            spaceBetween: 10,
        },
        900:{
            slidesPerView: 3, 
            spaceBetween: 10,
        },
        500:{
            slidesPerView: 2, 
            spaceBetween: 20,
        },
    },
})
// Feature slide

var swiper = new Swiper('.featureSwiper', {
    slidesPerView: 3, // Define o número de slides visíveis ao mesmo tempo
    spaceBetween: 10, // Espaço entre os slides
    loop: true,
    autoplay: true,
    breakpoints: {
        500:{
            slidesPerView: 2, 
            spaceBetween: 20,
        },
    },
})


// show mini products
let miniProductsLink1 = document.querySelector('.mini_dot');
let miniProductsLink2 = document.querySelector('.mini_dot2');
let miniProduct = document.querySelector('.mini_product');
let miniProduct2 = document.querySelector('.mini_product2');

miniProductsLink1.addEventListener('click',() => {
    miniProduct.classList.toggle('show_mini_product');
});
miniProductsLink2.addEventListener('click',() => {
    miniProduct2.classList.toggle('show_mini_product');
});

// Show menu
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click',() => {
    menu.classList.toggle('show_menu');
});