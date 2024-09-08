let swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});
swiper.on('slideChange', function () {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
});
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
};

let button = document.getElementById("button1");
button.setAttribute("onclick", "move();"); 
function order() {
    window.open("https://dash.cloudflare.com/cbefffa8921fd97303d44ff6460d12df/xender.com")
};
