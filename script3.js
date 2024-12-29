const button = document.querySelector('.mom-button-js');
const nextPageButton = document.querySelector('.next-page-js');
button.addEventListener('mouseenter', () => {
    button.classList.add('mom-button')
    // Вычисляем случайную позицию внутри окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Генерируем случайные координаты для кнопки
    const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

    // Устанавливаем новые координаты для кнопки
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
nextPageButton.addEventListener('click', () => { window.location.href ="./page-three.html" ;});