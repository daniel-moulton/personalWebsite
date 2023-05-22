document.addEventListener("DOMContentLoaded", () => {

    var tetrominos = new Map();
    var score = document.querySelector('#score');

    let row1 = Array.from(document.querySelectorAll('.row1'));
    let row2 = Array.from(document.querySelectorAll('.row2'));
    let row3 = Array.from(document.querySelectorAll('.row3'));
    let row4 = Array.from(document.querySelectorAll('.row4'));
    let row5 = Array.from(document.querySelectorAll('.row5'));
    let row6 = Array.from(document.querySelectorAll('.row6'));
    let row7 = Array.from(document.querySelectorAll('.row7'));
    let row8 = Array.from(document.querySelectorAll('.row8'));
    let row9 = Array.from(document.querySelectorAll('.row9'));
    let row10 = Array.from(document.querySelectorAll('.row10'));
    let row11 = Array.from(document.querySelectorAll('.row11'));
    let row12 = Array.from(document.querySelectorAll('.row12'));
    let row13 = Array.from(document.querySelectorAll('.row13'));
    let row14 = Array.from(document.querySelectorAll('.row14'));
    let row15 = Array.from(document.querySelectorAll('.row15'));
    let row16 = Array.from(document.querySelectorAll('.row16'));
    let row17 = Array.from(document.querySelectorAll('.row17'));
    let row18 = Array.from(document.querySelectorAll('.row18'));
    let row19 = Array.from(document.querySelectorAll('.row19'));
    let row20 = Array.from(document.querySelectorAll('.row20'));
    let takenRow = Array.from(document.querySelectorAll('.taken'))

    let squares = [];
    squares.push(row1);
    squares.push(row2);
    squares.push(row3);
    squares.push(row4);
    squares.push(row5);
    squares.push(row6);
    squares.push(row7);
    squares.push(row8);
    squares.push(row9);
    squares.push(row10);
    squares.push(row11);
    squares.push(row12);
    squares.push(row13);
    squares.push(row14);
    squares.push(row15);
    squares.push(row16);
    squares.push(row17);
    squares.push(row18);
    squares.push(row19);
    squares.push(row20);
    squares.push(takenRow);

    var nextBlock;
    var nextBlockType;
    var score;
    var audio;

    var startButton = document.getElementById('startBtn')
    score = 0;

    startButton.addEventListener('click', () => {
        resetTetrominos2();
        
        
        let next = tetrominoGenerator();
        document.currentBlockType = next[0];
        document.currentBlock = next[1];
        
        
        
        
        drawTetromino();
        timer = setInterval(moveTetrominoDown, 1000);
        audio = new Audio("music.mp3");
        audio.loop = true;
        audio.play();
        startButton.remove();
    })


    function resetTetrominos() {
        tetrominos.set("L", [
            [4, 2],
            [5, 2],
            [6, 1],
            [6, 2]
        ]);
        tetrominos.set("Z", [
            [4, 1],
            [5, 1],
            [5, 2],
            [6, 2]
        ]);
        tetrominos.set("S", [
            [4, 2],
            [5, 2],
            [5, 1],
            [6, 1]
        ]);
        tetrominos.set("T", [
            [4, 1],
            [5, 1],
            [5, 2],
            [6, 1]
        ]);
        tetrominos.set("O", [
            [4, 1],
            [4, 2],
            [5, 1],
            [5, 2]
        ]);
        tetrominos.set("I", [
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4]
        ]);
        tetrominos.set("J", [
            [4, 1],
            [4, 2],
            [5, 2],
            [6, 2]
        ]);
    }

    function resetTetrominos2() {
        tetrominos.set("L", [
            [
                [4, 2],
                [5, 2],
                [6, 1],
                [6, 2]
            ],
            [
                [5, 1],
                [5, 2],
                [5, 3],
                [6, 3]
            ],
            [
                [4, 3],
                [4, 2],
                [5, 2],
                [6, 2]
            ],
            [
                [4, 1],
                [5, 1],
                [5, 2],
                [5, 3]
            ]
        ]);
        tetrominos.set("Z", [
            [
                [4, 1],
                [5, 1],
                [5, 2],
                [6, 2]
            ],
            [
                [6, 1],
                [6, 2],
                [5, 2],
                [5, 3]
            ],
            [
                [4, 2],
                [5, 2],
                [5, 3],
                [6, 3]
            ],
            [
                [5, 1],
                [5, 2],
                [4, 2],
                [4, 3]
            ]
        ]);
        tetrominos.set("S", [
            [
                [4, 2],
                [5, 2],
                [5, 1],
                [6, 1]
            ],
            [
                [5, 1],
                [5, 2],
                [6, 2],
                [6, 3]
            ],
            [
                [4, 3],
                [5, 3],
                [5, 2],
                [6, 2]
            ],
            [
                [4, 1],
                [4, 2],
                [5, 2],
                [5, 3]
            ]
        ]);
        tetrominos.set("T", [
            [
                [4, 1],
                [5, 1],
                [5, 2],
                [6, 1]
            ],
            [
                [5, 0],
                [4, 1],
                [5, 1],
                [5, 2]
            ],
            [
                [4, 1],
                [5, 0],
                [5, 1],
                [6, 1]
            ],
            [
                [5, 0],
                [5, 1],
                [5, 2],
                [6, 1]
            ]
        ]);
        tetrominos.set("O", [
            [
                [4, 1],
                [4, 2],
                [5, 1],
                [5, 2]
            ],
            [
                [4, 1],
                [4, 2],
                [5, 1],
                [5, 2]
            ],
            [
                [4, 1],
                [4, 2],
                [5, 1],
                [5, 2]
            ],
            [
                [4, 1],
                [4, 2],
                [5, 1],
                [5, 2]
            ]
        ]);
        tetrominos.set("I", [
            [
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 4]
            ],
            [
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2]
            ],
            [
                [4, 0],
                [4, 1],
                [4, 2],
                [4, 3]
            ],
            [
                [3, 2],
                [4, 2],
                [5, 2],
                [6, 2]
            ]
        ]);
        tetrominos.set("J", [
            [
                [4, 1],
                [4, 2],
                [5, 2],
                [6, 2]
            ],
            [
                [5, 1],
                [6, 1],
                [5, 2],
                [5, 3]
            ],
            [
                [4, 2],
                [5, 2],
                [6, 2],
                [6, 3]
            ],
            [
                [4, 3],
                [5, 1],
                [5, 2],
                [5, 3]
            ]
        ]);
    }

    function randomTetromino() {
        var tetrominoTypes = ["L", "S", "Z", "T", "O", "I", "J"];
        var randomTetromino = tetrominoTypes[Math.floor(Math.random() * tetrominoTypes.length)];
        
        return randomTetromino
    }

    function tetrominoGenerator() {
        resetTetrominos2();
        nextBlockType = randomTetromino();
        nextBlock = tetrominos.get(nextBlockType);
        document.currentRotation = 0;
        
        
        score += 1;
        document.getElementById("Score").innerHTML = score;
        var returnArray = [];
        returnArray.push(nextBlockType, nextBlock);
        return returnArray;
    }

    function drawTetromino() {
        for (var i = 0; i < 4; i++) {
            x = document.currentBlock[document.currentRotation][i][0];
            y = document.currentBlock[document.currentRotation][i][1];
            squares[y][x].classList.add(`${document.currentBlockType}`);
        }
    }

    function undrawTetromino() {
        for (var i = 0; i < 4; i++) {
            x = document.currentBlock[document.currentRotation][i][0];
            y = document.currentBlock[document.currentRotation][i][1];
            squares[y][x].classList.remove(`${document.currentBlockType}`);
        }
    }

    function moveTetrominoDown() {
        stopTetromino();
        if (!(gameOver())) {
            undrawTetromino();
            
            
            for (var j = 0; j < 4; j++) {
                for (var i = 0; i < 4; i++) {
                    document.currentBlock[j][i][1]++;
                }
            }
            document.numBlocksMovedDown++;
            drawTetromino();
        }
        
    }

    function stopTetromino() {
        var cantMove = false;
        for (var i = 0; i < 4; i++) {
            
            x = document.currentBlock[document.currentRotation][i][0];
            y = document.currentBlock[document.currentRotation][i][1];
            if (squares[y + 1][x].classList.contains('taken')) {
                i = 4;
                cantMove = true;
            }
        }
        if (cantMove) {
            for (var j = 0; j < 4; j++) {
                x1 = document.currentBlock[document.currentRotation][j][0];
                y1 = document.currentBlock[document.currentRotation][j][1];
                squares[y1][x1].classList.remove(`${document.currentBlockType}`);
                squares[y1][x1].classList.add('taken');
            }
            isRowComplete();
            let next = tetrominoGenerator();
            document.currentBlockType = next[0];
            document.currentBlock = next[1];
            document.numBlocksMovedDown = 0;
            document.numBlocksMovedRight = 0;
        }
    }

    function isRowComplete() {
        for (var row = 0; row < 20; row++) {
            let isComplete = true;
            for (var column = 0; column < 10; column++) {
                if (!(squares[row][column].classList.contains('taken'))) {
                    
                    isComplete = false;
                    break
                }
            }
            if (isComplete) {
                for (var column = 0; column < 10; column++) {
                    squares[row][column].classList.remove('taken');
                }
                moveRowsDown(row);
                isRowComplete();
            }
        }
    }

    function moveRowsDown(row) {
        if (row >= 1) {
            for (var column = 0; column < 10; column++) {
                if (squares[row - 1][column].classList.contains('taken')) {
                    squares[row - 1][column].classList.remove('taken');
                    squares[row][column].classList.add('taken');
                }
            }
            moveRowsDown(row - 1);
        }
    }

    function gameOver() {
        var gameOver = false;
        for (var i = 0; i < 4; i++) {
            x = document.currentBlock[document.currentRotation][i][0];
            y = document.currentBlock[document.currentRotation][i][1];
            if (squares[y + 1][x].classList.contains('taken')) {
                gameOver = true;
                break
            }
        }
        if (gameOver) {
            clearInterval(timer);
            document.removeEventListener('keyup', moveTetromino);
            document.getElementById('tetris-bg').remove();
            var gameOverDiv = document.getElementById("game-over-screen");
            var content = document.createTextNode("GAME OVER!");
            gameOverDiv.appendChild(content);
            audio.pause();
            var restartButton = document.createElement("button");
            restartButton.type = "button";
            restartButton.innerHTML = "Restart game!";
            restartButton.className = "btnStart";
            gameOverDiv.appendChild(restartButton);
            restartButton.onclick = function() {
                window.location.reload();
            }
        }
        return gameOver;
    }

    document.addEventListener('keyup', moveTetromino);

    function moveTetrominoLeft() {
        undrawTetromino();
        var isFurthestLeft = false;
        var leftBlockClear = true;
        for (var i = 0; i < 4; i++) {
            if (document.currentBlock[document.currentRotation][i][0] == 0) {
                isFurthestLeft = true;
                break;
            }
        }
        if (!isFurthestLeft) {
            for (var i = 0; i < 4; i++) {
                x = document.currentBlock[document.currentRotation][i][0];
                y = document.currentBlock[document.currentRotation][i][1];
                if (squares[y][x - 1].classList.contains('taken')) {
                    leftBlockClear = false;
                    break;
                }
            }
            if (leftBlockClear) {
                for (var j = 0; j < 4; j++) {
                    for (var i = 0; i < 4; i++) {
                        document.currentBlock[j][i][0]--;
                    }
                }
                document.numBlocksMovedRight--;
            }
        }
        drawTetromino();
    }

    function moveTetrominoRight() {
        undrawTetromino();
        var isFurthestRight = false;
        var rightBlockClear = true;
        for (var i = 0; i < 4; i++) {
            if (document.currentBlock[document.currentRotation][i][0] == 9) {
                isFurthestRight = true;
                break;
            }
        }
        if (!isFurthestRight) {
            for (var i = 0; i < 4; i++) {
                x = document.currentBlock[document.currentRotation][i][0];
                y = document.currentBlock[document.currentRotation][i][1];
                if (squares[y][x + 1].classList.contains('taken')) {
                    rightBlockClear = false;
                    break;
                }
            }
            if (rightBlockClear) {
                for (var j = 0; j < 4; j++) {
                    for (var i = 0; i < 4; i++) {
                        document.currentBlock[j][i][0]++;
                    }
                }
                document.numBlocksMovedRight++;
            }
        }
        drawTetromino();
    }

    function rotateTetromino() {
        nextRotation = document.currentRotation;
        nextRotation++;
        if (nextRotation == 4) {
            nextRotation = 0;
        }
        if (!isRotationValid(nextRotation)) {
            nextRotation--;
        } else {
            undrawTetromino();
            document.currentRotation = nextRotation;
            drawTetromino();
        }
    }

    function isRotationValid(nextRotation) {
        for (var i = 0; i < 4; i++) {
            if ((document.currentBlock[nextRotation][i][0] > 9) ||
                (document.currentBlock[nextRotation][i][0] < 0) ||
                (document.currentBlock[nextRotation][i][1] > 20)) {
                return false;
            }
        }
        for (var i = 0; i < 4; i++) {
            x = document.currentBlock[nextRotation][i][0];
            y = document.currentBlock[nextRotation][i][1];
            if (squares[y][x].classList.contains('taken')) {
                return false;
            }
        }
        return true;

    }

    function moveTetromino(e) {
        switch (e.keyCode) {
            case 38:
                rotateTetromino();
                break;
            case 37:
                moveTetrominoLeft();
                break;
            case 39:
                moveTetrominoRight();
                break;
            case 40:
                moveTetrominoDown();
                break;
        }
    }
})