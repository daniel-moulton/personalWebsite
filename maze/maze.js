// Define the maze dimensions
const rows = 30;
const columns = 30;

// Create a 2D array to represent the maze
const maze = new Array(rows);
for (let i = 0; i < rows; i++) {
    maze[i] = new Array(columns).fill(1);
}

// Function to generate the maze
function generateMaze() {
    let startingPoint = [0, 0];
    let endingPoint = [rows - 1, columns - 1];

    // Set the starting point to 0
    maze[0][0] = 0;

    // Set the ending point to 0
    maze[rows - 1][columns - 1] = 0;

    // Set the current position to the starting point
    let currentPosition = startingPoint;

    let validPath = false;
    while (!validPath) {
        // Choose a random unvisited neighbour
        let neighbours = getNeighbours(currentPosition);
        let randomNeighbour = neighbours[Math.floor(Math.random() * neighbours.length)];

        // Set the current position to the random neighbour
        currentPosition = randomNeighbour;

        // Set the current position to 0
        maze[currentPosition[0]][currentPosition[1]] = 0;

        // Check if the current position is the ending point
        if (currentPosition[0] === endingPoint[0] && currentPosition[1] === endingPoint[1]) {
            validPath = true;
        }
    }
    // Print the maze to the console
    outputMaze();
}

// Function to get the neighbours of the current position
function getNeighbours(currentPosition) {
    let neighbours = [];

    // Get the neighbours to the left, right, top, and bottom
    let left = [currentPosition[0], currentPosition[1] - 1];
    console.log(`Left neighbour: ${left}`);

    let right = [currentPosition[0], currentPosition[1] + 1];
    console.log(`Right neighbour: ${right}`);

    let top = [currentPosition[0] - 1, currentPosition[1]];
    console.log(`Top neighbour: ${top}`);

    let bottom = [currentPosition[0] + 1, currentPosition[1]];
    console.log(`Bottom neighbour: ${bottom}`);

    // Check if the neighbour is a valid one and add it to the list
    if (left[0] >= 0 && left[0] < rows && left[1] >= 0 && left[1] < columns) {
        neighbours.push(left);
    }

    if (right[0] >= 0 && right[0] < rows && right[1] >= 0 && right[1] < columns) {
        neighbours.push(right);
    }

    if (top[0] >= 0 && top[0] < rows && top[1] >= 0 && top[1] < columns) {
        neighbours.push(top);
    }

    if (bottom[0] >= 0 && bottom[0] < rows && bottom[1] >= 0 && bottom[1] < columns) {
        neighbours.push(bottom);
    }

    console.log(`Neighbours: ${neighbours}`);
    return neighbours;
}

// Function to generate the maze and output as HTML table
function outputMaze() {
    const mazeContainer = document.getElementById("maze");
    const grid = document.getElementById("maze-grid");

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td");

            // Set the class based on the maze cell value
            cell.className = maze[i][j] === 0 ? "path" : "wall";
            cell.innerHTML = maze[i][j];
            cell.style.color = "green"

            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

// Generate the maze
generateMaze();
