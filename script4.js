const clickerButton = document.querySelector('.clicker-button-js');
let clicks = 0;
const title = document.querySelector('.title-js');


 
    clickerButton.addEventListener('click', () => {
        clicks++; 
        title.textContent = `Кол-во кликов: ${clicks} `
        if (clicks === 999) {
            clickerButton.addEventListener('click', () => {window.location.href ="./page-four.html" ;alert("ЮХУ! 999!!!!!!")} )
  
        }
    });

    
