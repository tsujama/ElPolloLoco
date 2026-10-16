class MovableObject {
    positionX = 120;
    positionY = 250;
    img;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("moving right");
    }

    moveLeft() {
        console.log("moving left");
    }
}