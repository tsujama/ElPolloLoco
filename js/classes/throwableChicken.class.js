class ThrowableChicken extends Chicken {

    constructor(positionX, positionY, targetX) {
        super();
        this.positionX = positionX;
        this.positionY = positionY;
        this.targetX = targetX;
        this.speed = 2;
        this.speedY = 20;
        this.otherDirection = this.targetX > this.positionX;
        this.applyGravity();
        this.checkLanding();
        this.flyTowardsCharacter();
    }

    isAboveGround() {
        return this.positionY < 325;
    }

    landOnGround() {
        if (this.positionY >= 325) {
            this.positionY = 325;
            this.speedY = 0;
            clearInterval(this.gravityIntervalId);
            clearInterval(this.landingInterval);
            clearInterval(this.flightInterval);
            this.animate();
        }
    }

    checkLanding() {
        this.landingInterval = setInterval(() => {
            this.landOnGround();
        }, 40);
    }

    flyTowardsCharacter() {
        this.flightInterval = setInterval(() => {
            if (this.targetX < this.positionX) {
                this.positionX -= 10;
            } else {
                this.positionX += 10;
            }
        }, 40);
    }

    animate() {
        this.movementInterval = setInterval(() => {
            if (!this.isDead()) {
                if (this.otherDirection) {
                    this.moveRight();
                } else {
                    this.moveLeft();
                }
            }
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}