const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    }
})
