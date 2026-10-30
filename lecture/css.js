const boardElement = document.getElementById('board');

//Renders the grid to the page
function render(grid) {
  boardElement.innerHTML = '';
  boardElement.style.setProperty('--cols', grid[0].length);
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const cell = document.createElement('div');
      cell.className = grid[r][c] === 1 ? 'cell alive' : 'cell';
      boardElement.appendChild(cell);
    }
  }

}
function generateRandomGrid() {

    let grid = []
    for (let i = 0; i <10; i++){
    let row = []
    for ( let j = 0; j < 10; j++) {
        let change = Math.random ()
        let cell = 0
        if (change > 0.7) {
            cell = 1
        }
        row.push(cell)
    }
    grid.push(row)
    }
    return grid;
} 

function generateNextGeneration(grid){
    let nextGeneration = []
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            let cell = grid[i][j]
            console.log(cell)
        }
    }
}
let grid = generateRandomGrid()
generateNextGeneration(grid)
render(grid)

