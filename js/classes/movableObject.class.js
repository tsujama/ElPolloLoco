class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    life = 100;
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
        return this.positionY < 180;
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
           ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.positionX, this.positionY, this.width, this.height);
            ctx.stroke(); 
        }
    }
    // character.isColliding(chicken);
    isColliding(movableObject) {
        return this.positionX + this.width > movableObject.positionX &&
        this.positionY + this.height > movableObject.positionY &&
        this.positionX < movableObject.positionX + movableObject.width &&
        this.positionY < movableObject.positionY + movableObject.height;
    };

    hit() {
        this.life -= 5;
        if(this.life === 0) {
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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