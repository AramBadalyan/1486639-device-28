/* Header */
/* Кнопка поиска */
const search_button = document.querySelector(".search-button");
const search_field = document.querySelector(".search-field");
const search_form = document.querySelector(".search");

search_field.addEventListener("focus", function () {
    /* if(search_field.value) { */
        search_form.classList.add("field-focused");
    /* } */
})

search_field.addEventListener("blur", function () {
    if(!search_field.value) {
        search_form.classList.remove("field-focused");
    }
})

/* Всплывающее меню аталога в header */
const catalog_link = document.querySelector(".catalog-link");
const catalog_menu = document.querySelector(".catalog-menu");

catalog_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalog_menu.classList.toggle("reveal");
});

/* Авторизация */01313
const authorizations = document.querySelectorAll(".authorization");
const login_links = document.querySelectorAll(".login");
const logout_links = document.querySelectorAll(".logout");

for (let login_link of login_links) {
    login_link.addEventListener("click", function(evt) {
        if(!authorizations[0].classList.contains("logged")) {
            evt.preventDefault();
            for (let authorization of authorizations) {
                authorization.classList.add("logged");
            }
        }
    })
}

for (let logout_link of logout_links) {
    logout_link.addEventListener("click", function(evt) {
        evt.preventDefault();
        for (let authorization of authorizations) {
            authorization.classList.remove("logged");
        }
    })
}

/* Index-sliders */
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

/* Modal windows */
/* Работа с модальными окнами */
const modal_windows = document.querySelectorAll(".modal");
const close_buttons = document.querySelectorAll(".close-button");
const contact_popap = document.querySelector(".contact-form");
const map_popap = document.querySelector(".map");
const map_link = document.querySelector(".map-link");
const contact_link = document.querySelector(".contact-link");

const sending_form = contact_popap.querySelector(".form-fields");
const form_fields = sending_form.querySelectorAll(".form-field");
const name_field = sending_form.querySelector("#name-field");
const mail_field = sending_form.querySelector("#email-field");
const message_field = sending_form.querySelector("#message-field");

let isStorageSupport = true;
let name_storage = "", mail_storage = "";

try {
    name_storage = localStorage.getItem("name");
    mail_storage = localStorage.getItem("mail");
}   catch (err) {
    isStorageSupport = false;
};

    /* Отображаем форму обратной связи по клику кнопки Напишите нам
        Предварительно закрываем все открытые модальные окна
        Заполняем поля из localStorage */
contact_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeModals();
    contact_popap.classList.remove("hidden");
    name_field.focus();

    if(name_storage) {
        name_field.value = name_storage;
        mail_field.focus();
    }

    if(mail_storage) {
        mail_field.value = mail_storage;
        message_field.focus();
    }
});

    /* Оторажаем интерактивную карту по клику на картинку карты */
map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeModals();
    map_popap.classList.remove("hidden");
});

    /* Функция закрытия всех модальных окон при нажатии на крестик */
const closeModals = () => {
    for (let modal_window of modal_windows) {
        modal_window.classList.add("hidden");
        modal_window.classList.remove("modal-error");
    };
};

    /* Навешиваем обработчики на кнопки закрытия */
for (let close_button of close_buttons) {
    close_button.addEventListener("click", closeModals);
};

    /* Закрываем модальные окна, если открыты, по нажатию Esc */
window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        if (!contact_popap.classList.contains("hidden") || !map_popap.classList.contains("hidden")) {
            evt.preventDefault();
            closeModals();
        }
    }
})

    /* Проверка полей формы обратной связи на валидность */
sending_form.addEventListener("submit", function (evt) {
    if (!name_field.value || !mail_field.value || !message_field.value) {
        evt.preventDefault();
        contact_popap.classList.remove("modal-error");
        contact_popap.offsetWidth = contact_popap.offsetWidth;
        contact_popap.classList.add("modal-error");

        for (let form_field of form_fields) {
            if(!form_field.value) {
                form_field.classList.add("invalid");
            }
        };
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name_field.value);
            localStorage.setItem("mail", mail_field.value);
        }
    };
});

    /* При заполнении поля убираем класс невалидности */
for (let form_field of form_fields) {
    form_field.addEventListener("input", function() {
        if(form_field.value) {
            form_field.classList.remove("invalid");
        } else {
            form_field.classList.add("invalid");
        }
    });
}