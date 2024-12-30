// Создание множества карточек и обработка их событий
const container = document.createElement('div');
container.style.position = 'absolute';
container.style.width = '100%';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);

// Функция для генерации случайного числа от 1 до 100, исключая 15
function generateRandomNumberExcluding15() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (randomNumber === 15);
    return randomNumber;
}

// Функция для создания одной карточки
function createCard() {
    const card = document.createElement('div');
    card.style.position = 'absolute';
    card.style.width = '100px';
    card.style.height = '100px';
    card.style.backgroundColor = '#c67979';
    card.style.color = '#fff';
    card.style.display = 'flex';
    card.style.justifyContent = 'center';
    card.style.border = ' solid black 2px'
    card.style.alignItems = 'center';
    card.style.fontSize = '24px';
    card.style.cursor = 'pointer';
    card.style.transition = 'opacity 0.6s';

    // Случайное расположение на экране
    card.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    card.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    // Добавление события на клик
    card.addEventListener('click', () => {
        const randomNumber = generateRandomNumberExcluding15();
        card.textContent = randomNumber; // Показываем случайное число
        card.style.opacity = '0'; // Начинаем исчезновение
        
        // Создаем новую карточку
        createCard();

        setTimeout(() => {
            card.remove(); // Удаляем карточку через несколько секунд
        }, 600);
    });

    container.appendChild(card);
}

// Создаем 50 карточек
for (let i = 0; i < 50; i++) {
    createCard();
}
