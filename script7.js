const questions = [
    {
        question: "Сколько будет 5 + 8?",
        answers: [13, 14, 12],
        correct: 13,
        time: 3 
    },
    {
        question: "Сколько будет 6 * 7?",
        answers: [42, 40, 45],
        correct: 42,
        time: 4
    },
    {
        question: "Сколько будет 16 / 4?",
        answers: [4, 3, 5],
        correct: 4,
        time: 3
    },
    {
        question: "Сколько будет 2^3?",
        answers: [8, 7, 6],
        correct: 8,
        time: 3
    },
    {
        question: "Сколько будет 25 - 5 + 10?",
        answers: [30, 35, 40],
        correct: 30,
        time: 4
    },
    {
        question: "Сколько будет 12 + 5 * 2?",
        answers: [24, 22, 20],
        correct: 22,
        time: 6
    },
    {
        question: "Сколько будет 2^4 + 3?",
        answers: [19, 18, 17],
        correct: 19,
        time: 7
    },
    {
        question: "Сколько будет 9^2 - 16?",
        answers: [65, 64, 72],
        correct: 65,
        time: 7
    },
    {
        question: "Сколько будет √169?",
        answers: [13, 14, 12],
        correct: 13,
        time: 4
    },
    {
        question: "Сколько будет 15 + 3 * 4?",
        answers: [27, 26, 28],
        correct: 27,
        time: 5
    },
    {
        question: "Сколько будет 3^5?",
        answers: [243, 256, 225],
        correct: 243,
        time: 8
    },
    {
        question: "Сколько будет 45 / 9 + 7?",
        answers: [12, 14, 11],
        correct: 12,
        time: 7
    },
    {
        question: "Сколько будет (6 + 4) * 3?",
        answers: [30, 28, 32],
        correct: 30,
        time: 4
    },
    {
        question: "Сколько будет 13^2 - 25?",
        answers: [144, 125, 110],
        correct: 144,
        time: 5
    },
    {
        question: "Сколько будет (15 + 5) * 2?",
        answers: [40, 50, 45],
        correct: 40,
        time: 4
    },
    {
        question: "Сколько будет √256?",
        answers: [16, 14, 15],
        correct: 16,
        time: 5
    },
    {
        question: "Сколько будет 8 * 8 + 10?",
        answers: [74, 65, 60],
        correct: 74,
        time: 8
    },
    {
        question: "Сколько будет 9 * 7 - 20?",
        answers: [43, 44, 45],
        correct: 43,
        time: 8
    },
    {
        question: "Сколько будет 10 * (3 + 7)?",
        answers: [100, 90, 110],
        correct: 100,
        time: 4
    },
    {
        question: "Сколько будет (2^3 + 5) * 2?",
        answers: [26, 24, 30],
        correct: 26,
        time: 8
    }  ,{
        question: "Сколько будет 5 + 8?",
        answers: [13, 14, 12],
        correct: 13,
        time: 2
    },
    {
        question: "Сколько будет 6 * 7?",
        answers: [42, 40, 45],
        correct: 42,
        time: 4
    },
    {
        question: "Сколько будет 16 / 4?",
        answers: [4, 3, 5],
        correct: 4,
        time: 3
    },
    {
        question: "Сколько будет 2^3?",
        answers: [8, 7, 6],
        correct: 8,
        time: 3
    },
    {
        question: "Сколько будет 2^4 + 3?",
        answers: [19, 18, 17],
        correct: 19,
        time: 5
    },
    {
        question: "Сколько будет 9^2 - 16?",
        answers: [65, 64, 72],
        correct: 65,
        time: 5
    },
    {
        question: "Сколько будет √169?",
        answers: [13, 14, 12],
        correct: 13,
        time: 3
    },
    {
        question: "Сколько будет 15 + 3 * 4?",
        answers: [27, 26, 28],
        correct: 27,
        time: 4
    },
    {
        question: "Сколько будет 3^5?",
        answers: [243, 256, 225],
        correct: 243,
        time: 5
    },
    {
        question: "Сколько будет 45 / 9 + 7?",
        answers: [12, 14, 11],
        correct: 12,
        time: 4
    },
    {
        question: "Сколько будет (6 + 4) * 3?",
        answers: [30, 28, 32],
        correct: 30,
        time: 4
    },
    {
        question: "Сколько будет 100 / 5 * 2?",
        answers: [40, 45, 50],
        correct: 40,
        time: 4
    },
    {
        question: "Сколько будет 13^2 - 25?",
        answers: [144, 125, 110],
        correct: 144,
        time: 5
    },
    {
        question: "Сколько будет (15 + 5) * 2?",
        answers: [40, 50, 45],
        correct: 40,
        time: 4
    },
    {
        question: "Сколько будет √256?",
        answers: [16, 14, 15],
        correct: 16,
        time: 3
    },
    {
        question: "Сколько будет 8 * 8 + 10?",
        answers: [74, 65, 60],
        correct: 74,
        time: 4
    },
    {
        question: "Сколько будет 9 * 7 - 20?",
        answers: [43, 44, 45],
        correct: 43,
        time: 5
    },
    {
        question: "Сколько будет 10 * (3 + 7)?",
        answers: [100, 90, 110],
        correct: 100,
        time: 4
    },
    {
        question: "Сколько будет (2^3 + 5) * 2?",
        answers: [26, 24, 30],
        correct: 26,
        time: 5
    },
    {
        question: "Сколько будет 16 + 25?",
        answers: [41, 42, 40],
        correct: 41,
        time: 2
    },
    {
        question: "Сколько будет 9 + 6 * 2?",
        answers: [21, 22, 20],
        correct: 21,
        time: 4
    },
    {
        question: "Сколько будет 7 * (2 + 3)?",
        answers: [35, 30, 40],
        correct: 35,
        time: 4
    },
    {
        question: "Сколько будет 5^3?",
        answers: [125, 150, 100],
        correct: 125,
        time: 5
    },
    {
        question: "Сколько будет 100 / (2 + 3)?",
        answers: [20, 15, 25],
        correct: 20,
        time: 4
    },
    {
        question: "Сколько будет 50 * (4 - 3)?",
        answers: [50, 60, 55],
        correct: 50,
        time: 3
    },
    {
        question: "Сколько будет 2^7?",
        answers: [128, 120, 135],
        correct: 128,
        time: 5
    },
    {
        question: "Сколько будет 17 * 5 + 10?",
        answers: [95, 90, 100],
        correct: 95,
        time: 5
    },
    {
        question: "Сколько будет √100?",
        answers: [10, 11, 12],
        correct: 10,
        time: 3
    },
    {
        question: "Сколько будет 3 * (5 + 4)?",
        answers: [27, 28, 29],
        correct: 27,
        time: 4
    },
    {
        question: "Сколько будет 8^2 + 5?",
        answers: [69, 70, 65],
        correct: 69,
        time: 4
    }
];


let currentQuestionIndex = 0;
let correctAnswersInARow = 0;
let timer;
let remainingTime;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');
const successMessage = document.getElementById('successMessage');
const restartBtn = document.getElementById('restartBtn');

// Перемешиваем вопросы случайным образом
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]; // Меняем местами
    }
}

function startTimer() {
    timer = setInterval(() => {
        remainingTime--;
        timerElement.textContent = `Осталось времени: ${remainingTime} секунд`;

        if (remainingTime <= 0) {
            clearInterval(timer);
            checkAnswer(null); // Таймер истек, неправильный ответ
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    const answers = currentQuestion.answers.sort(() => Math.random() - 0.5); // Перемешиваем ответы
    answersElement.innerHTML = '';

    answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.classList.add('answer-btn');
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersElement.appendChild(btn);
    });

    remainingTime = currentQuestion.time; // Устанавливаем время из объекта задачи
    timerElement.textContent = `Осталось времени: ${remainingTime} секунд`;
    startTimer();
}

function checkAnswer(selectedAnswer) {
    stopTimer();

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        correctAnswersInARow++;
        if (correctAnswersInARow === 7) {
            successMessage.style.display = 'block';
            restartBtn.style.display = 'block';
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                successMessage.style.display = 'block';
                restartBtn.style.display = 'block';
            }
        }
    } else {
        correctAnswersInARow = 0;
        alert('Неправильный ответ! Начинаем заново.');
        restartGame();
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    correctAnswersInARow = 0;
    successMessage.style.display = 'none';
    restartBtn.style.display = 'none';
    shuffleQuestions();  // Перемешиваем вопросы перед новым запуском
    loadQuestion();
 
}

shuffleQuestions();  // Перемешиваем вопросы при начале игры
loadQuestion();
