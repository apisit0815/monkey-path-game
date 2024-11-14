let monkeyPosition = [0, 0];
let score = 0;

function move(direction) {
    let [x, y] = monkeyPosition;

    switch(direction) {
        case 'up':
            if (x > 0) x--;
            break;
        case 'down':
            if (x < 2) x++;
            break;
        case 'left':
            if (y > 0) y--;
            break;
        case 'right':
            if (y < 2) y++;
            break;
        default:
            break;
    }

    updatePosition(x, y);
}

function updatePosition(newX, newY) {
    // Clear old position
    const oldCell = document.getElementById(`cell-${monkeyPosition[0]}-${monkeyPosition[1]}`);
    if (oldCell) oldCell.textContent = '';

    // Update position
    monkeyPosition = [newX, newY];
    const newCell = document.getElementById(`cell-${newX}-${newY}`);
    newCell.textContent = '🐵';

    checkReward(newX, newY);
}

function checkReward(x, y) {
    const tile = document.getElementById(`cell-${x}-${y}`).textContent;

    if (tile === '🍌') {
        score += 1;
        alert('You found a banana! +1 point!');
    } else if (tile === '🐜') {
        score -= 1;
        alert('You encountered an ant! -1 point!');
    }

    document.getElementById('score').textContent = score;
}

function resetGame() {
    // Clear all cells
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }

    // Reset position and score
    monkeyPosition = [0, 0];
    score = 0;

    // Set monkey back to starting position
    const startCell = document.getElementById(`cell-0-0`);
    startCell.textContent = '🐵';

    // Update score display
    document.getElementById('score').textContent = score;
}