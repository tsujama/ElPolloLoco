class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super();
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.positionX = x;
        this.positionY = y;
        this.height = 60;
        this.width = 50;
        this.throwBottle();
    }

    throwBottle() {
    this.speedY = 30;
    this.applyGravity();

        this.intervalId = setInterval(() => {
            this.positionX += 10;

            if (this.positionY > 480) {
                clearInterval(this.intervalId);
            }
        }, 25);
    }

    stopMovement() {
        clearInterval(this.intervalId);
        clearInterval(this.gravityIntervalId);
    }
}