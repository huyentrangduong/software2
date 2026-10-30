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

