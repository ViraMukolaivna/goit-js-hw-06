// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на button.change
//     - color і виводить значення кольору в span.color.



const nameColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const backBody = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  backBody.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = body.style.backgroundColor;
});




