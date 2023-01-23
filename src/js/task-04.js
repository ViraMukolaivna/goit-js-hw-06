// Створи змінну counterValue, в якій буде
// зберігатися поточне значення лічильника та
// ініціалізуй її значенням 0.
// // Додай слухачів кліків до кнопок,
// всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const counter = document.getElementById("value");

btnMinus.addEventListener("click", () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});
btnPlus.addEventListener("click", () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
});
