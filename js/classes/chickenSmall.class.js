class ChickenSmall extends Chicken {
    height = 60;
    width = 50;
    positionY = 365;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor(positionX) {
        super(positionX);

        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.speed = 0.5;

        this.applyGravity();
        this.jumpRandomly();
    }

    jumpRandomly() {
        this.jumpInterval = setInterval(() => {
            if (!this.isDead() && !this.isAboveGround()) {
                this.speedY = 30;
            }
        }, 2000 + Math.random() * 3000);
    }

    stopAnimation() {
        super.stopAnimation();
        clearInterval(this.jumpInterval);
        clearInterval(this.gravityIntervalId);
    }
}