class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.positionX = x;
        this.positionY = y;
        this.height = 60;
        this.width = 50;
        this.throwBottle();
    }

    throwBottle() {
        this.speedY = 30;
        this.applyGravity();
        console.log("Werfe Flasche");

        setInterval(() => {
            this.positionX += 10;

        }, 25);
    }
    

}