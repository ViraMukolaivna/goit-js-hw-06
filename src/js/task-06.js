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

const refs = 
{ validInput: document.getElementById("validation-input") };

const changeColorBorder = (event) => {
    if (event.target.value.length === 6) {
        refs.validInput.classList.remove("invalid");
        refs.validInput.classList.add("valid");
    } else {
        refs.validInput.classList.remove("valid");
        refs.validInput.classList.add("invalid");
        }
        
}; 

refs.validInput.addEventListener("blur", changeColorBorder);