// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок,
//     буде змінюватися розмір тексту.

const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
console.log(fontSizeControl);
console.log(text);

const changeFontSize = (event) => {
    fontSizeControl.range = event.currentTarget.value;
    text.style.fontSize = `${event.target.value}px`;
    console.log(text.textContent);
}

fontSizeControl.addEventListener("input", changeFontSize);