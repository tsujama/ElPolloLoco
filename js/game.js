let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);

    console.log("My character is ", world.character );



    // character.src = '../img/2_character_pepe/2_walk/W-21.png';

    // ctx.drawImage(character, 20, 20, 50, 150)
};

document.addEventListener("keydown", (event) => {
    
    switch (event.key.toLowerCase()) {
        case " ":
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
            keyboard.F = true;
            break;
    
        default:
            keyboard.SPACE = false;
            keyboard.UP = false;
            keyboard.LEFT = false;
            keyboard.DOWN = false;
            keyboard.RIGHT = false;
            keyboard.F = false;
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
    
        default:
            keyboard.SPACE = false;
            keyboard.UP = false;
            keyboard.LEFT = false;
            keyboard.DOWN = false;
            keyboard.RIGHT = false;
            keyboard.F = false;
            break;
    }
});

