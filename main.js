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

function createCell() {
  let cell = document.createElement("div");
  cell.classList.add("cell");
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
    width: ${gridDimension}px;
    height: ${gridDimension}px;
    `
  );

  container.appendChild(grid);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let c = createCell()
      grid.appendChild(c)
    }
  }
}

createGrid()

// Event Listener

let rng = (n) => Math.floor(Math.random()*n)
let rcg = () => `rgb(${rng(256)}, ${rng(256)}, ${rng(256)})`;
let rainbowMode = false
let penColor = rainbowMode ? rcg() : "#000";

const cellsBGColor = "#fff"
let isMouseDown = false

document.addEventListener(
  'mousedown', () => {isMouseDown = true});

document.addEventListener(
  'mouseup', () => isMouseDown=false);


const gridCells = document.querySelectorAll(".cell");
gridCells.forEach(cell => {
  let isChecked = false;
  cell.addEventListener("mousedown", (e)=> {
      cell.style.backgroundColor = cellsBGColor
  })
  cell.addEventListener("mouseenter", (e)=> {
    if(isMouseDown) {
      cell.style.backgroundColor = cellsBGColor
    } else {
      cell.style.backgroundColor = penColor
      isChecked = true
    }
  })
  cell.addEventListener("click", (e)=> {
    console.log(isChecked);
    // a click erases cell if already checked, or color it if its not
    cell.style.backgroundColor = isChecked ? cellsBGColor : "#000"
    isChecked = !isChecked
  })
});
