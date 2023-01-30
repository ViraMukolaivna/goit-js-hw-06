// Напиши скрипт, який під час втрати фокусу на інпуті
//     (подія blur), перевіряє його вміст щодо правильної
//      кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const validInput  = document.getElementById("validation-input") ;
const dataLength = Number(validInput.dataset.length);
function addRemove(removed, added) {
    validInput.classList.remove(removed);
    validInput.classList.add(added);
}
const changeColorBorder = (event) => {
    if (event.target.value.length === dataLength) {
        // validInput.classList.remove("invalid");
        // validInput.classList.add("valid");
        addRemove("invalid", "valid");
    } else {
        // validInput.classList.remove("valid");
        // validInput.classList.add("invalid");
        addRemove("valid", "invalid");
        }
        
}; 

validInput.addEventListener("blur", changeColorBorder);