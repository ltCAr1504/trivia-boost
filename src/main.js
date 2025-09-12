
import {cardQuizzesData} from "./data/cardQuizzesData.js"




const navDropdown = document.querySelector('.nav__dropdown-menu')
const dropdownLink = document.getElementById('nav__dropdown__link')
const arrowIcon = document.getElementById('arrow__img')
const quizDifficulty = document.querySelectorAll('.quiz__difficulty')




function displayDropdownMenu(){ 
  if (navDropdown.style.opacity === '1'){
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }else{
    navDropdown.style.opacity = '1'
    arrowIcon.style.transform = 'rotate(-180deg)'
  }                
}

dropdownLink.addEventListener('click',displayDropdownMenu)

window.addEventListener('scroll', () => {
  if(window.scrollY > 5){
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }
})

document.addEventListener('click', (e) => {
  if (!navDropdown.contains(e.target) && e.target !== dropdownLink) {
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }
})






function createQuizCards() {
  const quizContainer = document.querySelector('.quiz__spotlight__content');
  quizContainer.innerHTML = ''; 

  const colors = {
    'Easy': '#2ecc71',   // verde
    'Medium': '#f1c40f', // amarillo
    'Hard': '#e74c3c'    // rojo
  };

  cardQuizzesData.forEach((quizInfo, index) => {
    const card = document.createElement('div');
    card.classList.add('quiz__box');

    card.innerHTML = `
      <div class="box__content">
        <div class="info">
          <h3 class="title">${quizInfo.title}</h3>
          <p class="questions__quantity">Questions: <span>${quizInfo.questionsQuantity}</span></p>
          <p>Difficulty: <span class="quiz__difficulty">${quizInfo.difficulty}</span></p>
          <button class="btn__quiz">Start Quiz</button>
        </div>
        <div class="box__img">
          <img src="" alt="">
        </div>
      </div>
    `;

    // 👉 Ahora puedes acceder al span.quiz__difficulty dentro del card
    const difficultySpan = card.querySelector('.quiz__difficulty');
    const difficulty = quizInfo.difficulty;

    if (colors[difficulty]) {
      difficultySpan.style.color = colors[difficulty];
    }

    quizContainer.appendChild(card); // ✅ agrega la tarjeta al DOM
  });
}






createQuizCards()







