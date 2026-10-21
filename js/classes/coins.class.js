class Coins extends MovableObject {

    height = 175;
    width = 160;

    IMAGES_WALKING = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png"
    ]

    constructor(positionX, positionY) {
        super().loadImage("img/8_coin/coin_1.png");
        this.loadImages(this.IMAGES_WALKING);

        this.positionX = positionX;
        this.positionY = positionY;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 500);
    }
}