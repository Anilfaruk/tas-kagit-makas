//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection");

//?? secilen elemanlarin tasiyicilari
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
//??!!message
const messagePar = document.querySelector(".message");

//!score
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");

//* ------- Variables ------- */
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcRandom;
//? Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";
//?MODAL
const modalCardSection = document.querySelector(".modal-card");
//?final messagge
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")
//* ------- event listener ------- */
selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});
    playAgainBtn.addEventListener("click" , () =>{
      //  modalCardSection.classList.toggle("show")
      //  modalCardSection.style.display = 'none'
      modalCardSection.classList.toggle("show")
      //?window.location.reload()//  //??!SAYFA REFLESHLENIR??????????
    })
//* ------- Functions ------- */
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // pcRandom = "rock"
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};
const calculateResult = () => {
  //? esitlik durumu
  if (userSelectImg.alt === pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal()
  }
};
const draw = () => {
  messagePar.textContent = "It's a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};
const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};
const openModal = () => {
  modalCardSection.classList.add("show");
  if(yourScoreSpan.textContent === "10" ){
    finalMessagePar.textContent = "You Win🐱‍👤💬✌😉"
    document.querySelector(".modal").style.backgroundColor = GREEN
    playAgainBtn.style.color = GREEN
  }else{
    finalMessagePar.textContent = "You lost🐱"
    document.querySelector(".modal").style.backgroundColor = RED
    playAgainBtn.style.color = RED
  }
};

//?! Ilkel yontemler
//?? Resimler
// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")
// rockImg.addEventListener("click", ()=>{

// image.src = ".assets/rock.png"
// image.alt = "Rock"
// yourChoiceDiv.appendChild(image)
//! yourChoiceDiv.innerHTML =`<img src=".assets/rock.png" alt="Rock">`

// })
//? paperImg.addEventListener("click", ()=>{

//   image.src = ".assets/paper.png"
//   image.alt = "paper"
//   yourChoiceDiv.appendChild(image)
// }
// scissorImg.addEventListener("click", ()=>{

//   image.src = ".assets/scissor.png"
//   image.alt = "scissor"
//   yourChoiceDiv.appendChild(image)
// }
