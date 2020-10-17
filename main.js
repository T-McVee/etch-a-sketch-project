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
    cell.addEventListener('mouseover', lightUpIncrease);
    app.appendChild(cell);
  }
}

// Colour cell on mouse touch
function lightUp(e) {
  e.target.style.backgroundColor = "rgb(256, 120, 176)";
}

// Random color on mouse touch
function lightUpRandom(e) {
  let red = ((Math.random() * 256) + 1);
  let green = 120;
  let blue = 176;

  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Increase color intensity on each pass
function lightUpIncrease(e) {
  let green = 120;
  let blue = 176;
  let currentColor = e.target.style.backgroundColor;

  if (currentColor == 'rgb(246, 251, 255)') {
    lightUp(e);
  } else {
    let currentRed = parseInt(currentColor.slice(4, 7));
    let newRed = Math.round(currentRed * 0.9);

    e.target.style.backgroundColor = `rgb(${newRed}, ${green}, ${blue})`;
  }
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


