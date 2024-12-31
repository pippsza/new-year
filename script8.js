const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = null; // Игрок изначально отсутствует
const goal = { x: canvas.width - 50, y: canvas.height - 50, radius: 15 }; // Финиш

const walls = [
    // { x: 0, y: 0, width: canvas.width, height: 5 },
    // { x: 0, y: 0, width: 5, height: canvas.height },
    // { x: canvas.width - 5, y: 0, width: 5, height: canvas.height },
    // { x: 0, y: canvas.height - 5, width: canvas.width, height: 5 },
    { x: 0, y: 60, width: 1150, height: 5 },
    { x: 70, y: 120, width: 1150, height: 5 },
    { x: 0, y: 180, width: 1150, height: 5 },
    { x: 70, y: 240, width: 1150, height: 5 },
    { x: 0, y: 290, width: 1150, height: 5 },
    { x: 70, y: 350, width: 1150, height: 5 },
    { x: 70, y: 350, width: 5, height: 150 },
    { x: 130, y: 410, width: 5, height: 150 },
    { x: 190, y: 350, width: 5, height: 150 },
    { x: 250, y: 410, width: 5, height: 150 },
    { x: 310, y: 350, width: 5, height: 150 },
    { x: 370, y: 410, width: 5, height: 150 },
    { x: 430, y: 350, width: 5, height: 150 },
    { x: 490, y: 410, width: 5, height: 150 },
    { x: 550, y: 350, width: 5, height: 150 },
    { x: 610, y: 410, width: 5, height: 150 },
    { x: 670, y: 350, width: 5, height: 150 },
    { x: 730, y: 410, width: 5, height: 150 },
    { x: 790, y: 350, width: 5, height: 150 },
    { x: 850, y: 410, width: 5, height: 150 },
    { x: 910, y: 350, width: 5, height: 150 },
    { x: 970, y: 410, width: 5, height: 150 },
    { x: 1030, y: 350, width: 5, height: 150 },
    { x: 1090, y: 410, width: 5, height: 150 },
    { x: 1150, y: 350, width: 5, height: 150 },
    
];


// Рисуем стены
function drawWalls() {
    ctx.fillStyle = 'black';
    walls.forEach(wall => {
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
}

// Рисуем игрока
function drawPlayer() {
    if (!player) return;
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();
}

// Рисуем финиш
function drawGoal() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(goal.x, goal.y, goal.radius, 0, Math.PI * 2);
    ctx.fill();
}

// Проверка столкновений с стенами
function checkCollisions() {
    if (!player) return;

    // Столкновение со стенами
    for (let wall of walls) {
        if (
            player.x + player.radius > wall.x &&
            player.x - player.radius < wall.x + wall.width &&
            player.y + player.radius > wall.y &&
            player.y - player.radius < wall.y + wall.height
        ) {
            resetGame();
            alert('Вы коснулись стенки! Игра окончена.');
            return;
        }
    }

    // Достижение финиша
    const dx = player.x - goal.x;
    const dy = player.y - goal.y;
    if (Math.sqrt(dx * dx + dy * dy) < player.radius + goal.radius) {
        alert('Поздравляю, ты победила!');
        window.location.href ="./finish-page.html";
    }
}

// Обработчик кнопки создания игрока / перезапуска игры
document.getElementById('startOrRestartButton').addEventListener('click', () => {
    if (!player) {
        player = { x: 50, y: 50, radius: 10 }; // Создаем игрока
       
    } else {
        resetGame();
        alert('Игра перезапущена.');
    }
});

// Отслеживание движения мыши
canvas.addEventListener('mousemove', (e) => {
    if (player) {
        player.x = e.clientX;
        player.y = e.clientY;
    }
});

// Сброс игры
function resetGame() {
    player = null; // Только обнуляем игрока
}

// Главный игровой цикл
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWalls();
    drawPlayer();
    drawGoal();
    checkCollisions();
    requestAnimationFrame(gameLoop);
}

gameLoop();
