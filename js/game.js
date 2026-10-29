let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
};

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("canvas").style.display = "block";
    init();
}

function showControls() {
    document.getElementById("controlsScreen").style.display = "flex";
}

function hideControls() {
    document.getElementById("controlsScreen").style.display = "none";
}

function showImprint() {
    document.getElementById("imprintScreen").style.display = "flex";
}

function hideImprint() {
    document.getElementById("imprintScreen").style.display = "none";
}

document.addEventListener("keydown", (event) => {
    
    switch (event.key.toLowerCase()) {
        case " ":
            event.preventDefault();
            keyboard.SPACE = true;
            break;

        case "w": 
            keyboard.UP = true;
            break;

        case "a":
            keyboard.LEFT = true;
            break;

        case "s":
            keyboard.DOWN = true;
            break;

        case "d":
            keyboard.RIGHT = true;
            break;

        case "f":
            if (!event.repeat) {
                keyboard.F = true;
            }
            break;

        case "e":
            keyboard.E = true;
            break;
    
        default:
            keyboard.SPACE = false;
            keyboard.UP = false;
            keyboard.LEFT = false;
            keyboard.DOWN = false;
            keyboard.RIGHT = false;
            keyboard.F = false;
            keyboard.E = false;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    
    switch (event.key.toLowerCase()) {
        case " ":
            keyboard.SPACE = false;
            break;

        case "w": 
            keyboard.UP = false;
            break;

        case "a":
            keyboard.LEFT = false;
            break;

        case "s":
            keyboard.DOWN = false;
            break;

        case "d":
            keyboard.RIGHT = false;
            break;

        case "f":
            keyboard.F = false;
            break;

        case "e":
            keyboard.E = false;
            break;
    
        default:
            keyboard.SPACE = false;
            keyboard.UP = false;
            keyboard.LEFT = false;
            keyboard.DOWN = false;
            keyboard.RIGHT = false;
            keyboard.F = false;
            keyboard.E = false;
            break;
    }
});

function toggleFullscreen() {
    let gameContainer = document.getElementById('gameContainer');

    if (!document.fullscreenElement) {
        gameContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function restartGame() {
    document.getElementById("gameOverScreen").style.display = "none";
    document.getElementById("gameWonScreen").style.display = "none";
    document.getElementById("canvas").style.display = "block";
    document.getElementById("fullscreenButton").style.display = "block";
    init();
}

function backToHome() {
    document.getElementById("gameOverScreen").style.display = "none";
    document.getElementById("gameWonScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}

function handleTouchButton(buttonId, isPressed) {
    switch (buttonId) {
        case "moveLeft":
            keyboard.LEFT = isPressed;
            break;
        case "moveRight":
            keyboard.RIGHT = isPressed;
            break;
        case "jump":
            keyboard.SPACE = isPressed;
            break;
        case "throw":
            keyboard.F = isPressed;
            break;
        case "buy":
            keyboard.E = isPressed;
            break;
    }
}

function setupTouchButton(buttonId) {
    let button = document.getElementById(buttonId);

    button.onpointerdown = () => handleTouchButton(buttonId, true);
    button.onpointerup = () => handleTouchButton(buttonId, false);
    button.onpointercancel = () => handleTouchButton(buttonId, false);
}

setupTouchButton("moveLeft");
setupTouchButton("moveRight");
setupTouchButton("jump");
setupTouchButton("throw");
setupTouchButton("buy");


