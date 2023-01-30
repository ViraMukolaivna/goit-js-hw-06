// 1. Обробка відправлення форми form.login - form 
// повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна
// ерезавантажуватися.
// 3. Якщо у формі є незаповнені поля,
// dиводь alert з попередженням про те, що всі поля повинні 
// бути заповнені.
// 4.Якщо користувач заповнив усі поля 
// і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля
//     - значенням властивості.
// 5. Для доступу до елементів форми використовуй властивість
// elements.
// 6. Виведи об'єкт із введеними даними в консоль і 
// очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");
const message = "Заповніть усі поля!";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
   if (email.value.trim() === "" || password.value === "") {
        return alert(message);
    }
  console.log(email.value, password.value);
   event.currentTarget.reset();
});
