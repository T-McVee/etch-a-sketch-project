// HTML elements
const app = document.querySelector('#app');
const resetBtn = document.querySelector('#reset');


//create 16 div elements
function initBoard(num) {
  app.style.gridTemplateColumns = `repeat(${Math.sqrt(num)}, 1fr)`;
  app.style.gridTemplateRows = `repeat(${Math.sqrt(num)}, 1fr)`;


  for (let i = 1; i <= num; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell${i}`;
    cell.addEventListener('mouseover', lightUpRandom);
    app.appendChild(cell);
  }
}

// Colour cell on mouse touch
function lightUp(e) {
  e.target.classList.add('hovered');
}

// Random color on mouse touch
function lightUpRandom(e) {
  let red = ((Math.random() * 256) + 1);
  let green = 120;
  let blue = 176;

  e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
}

function newGame() {
  clearBoard();
  let gridSize = getInput();
  initBoard(gridSize);
};

// Remove previous game's cells
function clearBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.remove());
}

function getInput() {
  let input = 101;
  while (input > 100) {
    input = prompt("What size grid would you like? Input must be less than 100");
  }
  return input * input;
}

initBoard(256);


