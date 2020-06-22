/* Основной слайдер */
const slides = document.querySelectorAll(".slide");
const slider_controls = document.querySelectorAll(".slider-control");
const control0 = document.querySelector(".control0");
const control1 = document.querySelector(".control1");
const control2 = document.querySelector(".control2");

control0.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove("current-slide");
        slider_controls[i].classList.remove("current-control");
    }
    slides[0].classList.add("current-slide");
    slider_controls[0].classList.add("current-control");
});

control1.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove("current-slide");
        slider_controls[i].classList.remove("current-control");
    }
    slides[1].classList.add("current-slide");
    slider_controls[1].classList.add("current-control");
});

control2.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove("current-slide");
        slider_controls[i].classList.remove("current-control");
    }
    slides[2].classList.add("current-slide");
    slider_controls[2].classList.add("current-control");
});

/* Слайдер услуг */
const services = document.querySelectorAll(".service");
const service_buttons = document.querySelectorAll(".service-button");
const delivery = document.querySelector(".button.delivery");
const warranty = document.querySelector(".button.warranty");
const credit = document.querySelector(".button.credit");

delivery.addEventListener("click", function () {
    for (let i = 0; i < services.length; i += 1) {
        services[i].classList.remove("current");
        service_buttons[i].classList.remove("service-activated");
    }
    services[0].classList.add("current");
    service_buttons[0].classList.add("service-activated");
});

warranty.addEventListener("click", function () {
    for (let i = 0; i < services.length; i += 1) {
        services[i].classList.remove("current");
        service_buttons[i].classList.remove("service-activated");
    }
    services[1].classList.add("current");
    service_buttons[1].classList.add("service-activated");
});

credit.addEventListener("click", function () {
    console.log("Button warranty pressed!");
    for (let i = 0; i < services.length; i += 1) {
        services[i].classList.remove("current");
        service_buttons[i].classList.remove("service-activated");
    }
    services[2].classList.add("current");
    service_buttons[2].classList.add("service-activated");
});
