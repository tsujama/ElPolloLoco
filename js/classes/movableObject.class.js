class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    life = 100;
    coins = 0;
    bottles = 0;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable object should always fall
            return true;
        } else {
            return this.positionY < 180;
        }
    }

    // character.isColliding(chicken);
    isColliding(movableObject) {
        return this.positionX + this.width > movableObject.positionX &&
        this.positionY + this.height > movableObject.positionY &&
        this.positionX < movableObject.positionX + movableObject.width &&
        this.positionY < movableObject.positionY + movableObject.height;
    };

    collectCoins() {
        let coinValue = 20;

        if(this.coins < 100) {
            this.coins += coinValue;
        }
    }

    hit() {
        this.life -= 5;
        if(this.life <= 0) {
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed < 1;
    }

    isDead() {
        return this.life === 0;
    }

    moveRight() {
        this.positionX += this.speed;
    }

    moveLeft() {
        this.positionX -= this.speed;
    }

    jump() {
        this.speedY = 35;
    }
}