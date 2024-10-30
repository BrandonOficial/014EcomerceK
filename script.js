// Hero slide

var swiper = new Swiper('.heroSlider', {
    slidePerView: 1,
    loop: true,
    autoplay: true,
    speed: 2000,
})

// Product slide

var swiper = new Swiper('.productSwiper', {
    slidesPerView: 4, // Define o número de slides visíveis ao mesmo tempo
    spaceBetween: 0, // Espaço entre os slides
    loop: true,
    autoplay: true,
})

// Brands slide

var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5, // Define o número de slides visíveis ao mesmo tempo
    spaceBetween: 10, // Espaço entre os slides
    loop: true,
    autoplay: {
        delay: 1500,
    }
})