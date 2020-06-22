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