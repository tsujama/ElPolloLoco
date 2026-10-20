class MovableObject {
    positionX = 120;
    positionY = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });  
    }

    moveRight() {
        console.log("moving right");
    }

    moveLeft() {
        setInterval(() => {
            this.positionX -= this.speed;
        }, 1000 / 60);
    }
}