const resizeButton = document.querySelector("#resizeButton");

function createGrid(size = 16) {
  const grid = document.createElement("div");
  const body = document.querySelector("body");
  grid.classList.add("flex-container");
  body.appendChild(grid);
  for (let i = 0; i < size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
}

function resizeSquares() {
  const squares = document.querySelectorAll(".square");
  const squareSideLength = Math.ceil(Math.sqrt(squares.length));
  // flex-basis: square length = squareRow% of row overall length
  const squareRowPercentage = 100 / squareSideLength;
  squares.forEach((item) => {
    item.style.flex = `0 0 ${squareRowPercentage}%`;
  });
}

resizeButton.addEventListener("click", (e) => {
  let i;
  const grid = document.querySelector(".flex-container");
  do {
    i = window.prompt("How many squares per side?");
  } while (i < 0 || i > 100);
  grid.remove();
  createGrid(i);
  resizeSquares();
});

createGrid();
resizeSquares();
