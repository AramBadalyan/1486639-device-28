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

    /* Закрываем все модальные окна при нажатии на крестик */
const closeModals = () => {
    for (let modal_window of modal_windows) {
        modal_window.classList.add("hidden");
        modal_window.classList.remove("modal-error");
    };
};

for (let close_button of close_buttons) {
    close_button.addEventListener("click", closeModals);
};

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        if (!contact_popap.classList.contains("hidden") || !map_popap.classList.contains("hidden")) {
            evt.preventDefault();
            closeModals();
        }
    }
})

    /* Проверка полей на валидность */
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

for (let form_field of form_fields) {
    form_field.addEventListener("input", function() {
        if(form_field.value) {
            form_field.classList.remove("invalid");
        } else {
            form_field.classList.add("invalid");
        }
    });
}