// Переменная для хранения случайного числа
let randomNumber;
const button = document.getElementById('generate-button');
const guessInput = document.querySelector('.guess-input-js');

// Функция для генерации случайного числа от 1 до 20
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Сгенерированное число:", randomNumber);
}

// Добавляем обработчик события на кнопку

   
     button.addEventListener('click', () => { 
        generateRandomNumber();
         if (Number(guessInput.value) === randomNumber) {
            alert(" Число было угаданно!")
            window.location.href ="./page-five.html"
        console.log("Ты угадал число!")
     } else {
        console.log("Попробуй еще раз!")
        alert(`Загаданным числом было ${randomNumber}`)
        guessInput.value = "";
     }});


