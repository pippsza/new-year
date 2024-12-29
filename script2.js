const inputPassword = document.querySelector(".password-input-js");
const buttonPassword = document.querySelector(".password-button-js");

buttonPassword.addEventListener("click", () => {
  console.log(inputPassword.value);
    if (inputPassword.value.toLowerCase() === 'знпнсбмшзнб') { window.location.href ="./page-two.html" ;
    } else {
alert("Пароль введён не правильно! Убедись, что ты не использовала пробелы.")
    }
});
