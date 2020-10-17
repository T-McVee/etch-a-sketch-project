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
    cell.style.backgroundColor = "rgb(246, 251, 255)";
    cell.id = `cell${i}`;
    cell.addEventListener('mouseover', lightUp);
    app.appendChild(cell);
  }
}

// Colour cell on mouse touch
function lightUp(e) {
  const red = lightUpShade(e)
  const green = 120;
  const blue = 176;
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
}

// Random color on mouse touch
function lightUpRandom(e) {
  return ((Math.random() * 256) + 1);
}

// Increase color intensity on each touch
function lightUpShade(e) {
  let currentColor = e.target.style.backgroundColor;

  return currentColor == 'rgb(246, 251, 255)' ? "256"
    : Math.round(parseInt(currentColor.slice(4, 7)) * 0.9);
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


