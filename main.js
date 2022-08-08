const h1Height = document.querySelector("h1").offsetHeight
console.log(h1Height);


var w = window.innerWidth;
var h = window.innerHeight;
console.log(w, h);

const gridSize = 16;
const gridDimension = Math.min(w * .8, h * .8) ;
const gridMargin = Math.min(w * .1, h * .1) ;
let displayCellBorder = 1

let cellDimension = (gridDimension-displayCellBorder*gridSize*2)/gridSize ;



console.log("gridDimension ",gridDimension);
console.log("gridMargin ",gridMargin);
console.log("cellDimension ",cellDimension);
let grid;

const container = document.querySelector("#grid-container")
container.classList.add("vh-center");

function createCell(_text) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  //cell.textContent = _text;

  // cellDimension = 29.40
  cell.setAttribute(
    "style",
    `
    width: ${cellDimension}px;
    height: ${cellDimension}px;
    `
  )
  return cell;
}

function createGrid() {
  grid = document.createElement("div");
  grid.classList.add("grid");

  grid.setAttribute(
    "style",
    `
    //margin-top: ${gridMargin}px;
    //margin-bottom: ${gridMargin}px;
    width: ${gridDimension}px;
    height: ${gridDimension}px;
    `
  );

  container.appendChild(grid);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      c = createCell(
        i%10+''+j%10
        )
      grid.appendChild(c)
    }
  }
}

// show

createGrid();
