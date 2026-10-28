class Coins extends DrawableObject {

    height = 175;
    width = 160;

    IMAGES_COINS = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png"
    ]

    constructor(positionX, positionY) {
        super();
        this.loadImage("img/8_coin/coin_1.png");
        this.loadImages(this.IMAGES_COINS);

        this.positionX = positionX;
        this.positionY = positionY;

        this.animate();
    }

    animate() {
        this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 500);
    }

    stopAnimation() {
        clearInterval(this.animationInterval);
    }
}