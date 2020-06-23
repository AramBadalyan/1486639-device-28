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
