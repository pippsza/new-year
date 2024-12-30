const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = null; // Игрок изначально отсутствует
const goal = { x: canvas.width - 50, y: canvas.height - 50, radius: 15 }; // Финиш

const walls = [
    { x: 0, y: 0, width: 714, height: 14 },
    { x: 0, y: 14, width: 14, height: 700 },
    { x: 112, y: 14, width: 14, height: 56 },
    { x: 140, y: 14, width: 14, height: 84 },
    { x: 336, y: 14, width: 14, height: 28 },
    { x: 420, y: 14, width: 14, height: 84 },
    { x: 616, y: 14, width: 14, height: 56 },
    { x: 700, y: 14, width: 14, height: 700 },
    { x: 14, y: 112, width: 28, height: 14 },
    { x: 84, y: 112, width: 56, height: 14 },
    { x: 196, y: 112, width: 56, height: 14 },
    { x: 336, y: 112, width: 84, height: 14 },
    { x: 532, y: 112, width: 56, height: 14 },
    { x: 644, y: 112, width: 28, height: 14 },
    { x: 112, y: 140, width: 14, height: 56 },
    { x: 224, y: 140, width: 14, height: 84 },
    { x: 280, y: 140, width: 14, height: 84 },
    { x: 476, y: 140, width: 14, height: 84 },
    { x: 532, y: 140, width: 14, height: 84 },
    { x: 644, y: 140, width: 14, height: 56 },
    { x: 14, y: 196, width: 28, height: 14 },
    { x: 84, y: 196, width: 112, height: 14 },
    { x: 252, y: 196, width: 28, height: 14 },
    { x: 420, y: 196, width: 28, height: 14 },
    { x: 560, y: 196, width: 112, height: 14 },
    { x: 644, y: 224, width: 14, height: 112 },
    { x: 336, y: 252, width: 14, height: 112 },
    { x: 476, y: 252, width: 14, height: 112 },
    { x: 700, y: 700, width: 14, height: 14 }
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
        resetGame();
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
