let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let scoreCount = document.getElementById('score');
let colorLabel = document.getElementById('color-label');
let startButton = document.getElementById('start-button');
let points = 0;
let colors = ['Red', 'Blue', 'Green'];
let status = 1;
let timer;
let chosenColor = '';

function colorChoice() {
    let colorPicked = Math.floor(Math.random() * colors.length);
    chosenColor = colors[colorPicked];
    colorLabel.innerHTML = colors[colorPicked];
}

function addOne(event) {
    if (chosenColor.toLowerCase() === event.target.id) {
        points += 1
    } else {
        points -= 1
    }

    scoreCount.innerHTML = points;

    if (points === -1) {
        alert('Game Over! Thank you for playing.');
        reset()
    }
}

function reset() {
    clearInterval(timer);
    startButton.innerHTML = 'Start Game';
    startButton.style.backgroundColor = '';
    status += 1;

    scoreCount.innerHTML = '0';
    colorLabel.innerHTML = '';
    points = 0;
    
    red.onclick = '';
    blue.onclick = '';
    green.onclick = '';
}

startButton.onclick = () =>  {
    if (status === 1) {
        timer = setInterval(colorChoice, 1000);
        gameStatus = 1;
        startButton.innerHTML = 'Stop Game';
        startButton.style.backgroundColor = "red";
        status -= 1;

        red.onclick = addOne;
        blue.onclick = addOne;
        green.onclick = addOne;




    } else {
       reset();
    }
    
}