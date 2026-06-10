const swiper = new Swiper('.swiper', {
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

const button = document.querySelector(".custom-button")
const albumsCollapse = document.querySelector(".collapsible-albums")
const tracksBtn = document.querySelector(".tracks-btn")
const tracksList = document.querySelector(".custom-list")

function showContent(element) {
    const isHidden = element.classList.contains("d-none")
    if (isHidden) {
        element.classList.remove("d-none")
    } else {
        element.classList.add("d-none")
    }
}
button.addEventListener("click", hideCollapse)

function changeButtonLable(element, btn) {
    if (!element.classList.contains("d-none")) {
        btn.innerText = "Hide content"
    } else {
        btn.innerText = "Show content"
    }
}

function hideCollapse() {
    showContent(albumsCollapse)
    changeButtonLable(albumsCollapse, button)
}

tracksBtn.addEventListener("click", () => {
    showContent(tracksList)
})
