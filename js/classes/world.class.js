class World {
    character = new Character();
    level = level1;
    ctx;
    keyboard;
    camera_x = 0;
    statusbar_life = new Statusbar(0);
    statusbar_coins = new Statusbar(40);
    statusbar_bottles = new Statusbar(80);
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.statusbar_life.setPercentageLife(100);
        this.statusbar_coins.setPercentageCoins(0);
        this.statusbar_bottles.setPercentageBottles(0);

        this.setWorld();
        this.draw();
        this.run()
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCoinCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if(this.keyboard.F) {
            let bottle = new ThrowableObject(this.character.positionX + 100, this. character.positionY + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) && this.character.life > 0) {
                    this.character.hit();
                    this.statusbar_life.setPercentageLife(this.character.life, this.statusbar_life.IMAGES_LIFE);
                }
        });
    }

    checkCoinCollisions() {
        for (let i = this.level.coins.length - 1; i >= 0; i--) {
            let coin = this.level.coins[i];

            if (this.character.isColliding(coin)) {
                this.character.collectCoins();

                this.statusbar_coins.setPercentageCoins(
                    this.character.coins
                );

                this.level.coins.splice(i, 1);
            }
        }
    }

    // checkBottleCollisions() {
    //     setInterval(() => {
    //         for (let i = this.level.coins.length - 1; i >= 0; i--) {
    //             let coin = this.level.coins[i];

    //             if (this.character.isColliding(coin)) {
    //                 this.character.collectCoins();

    //                 this.statusbar_coins.setPercentageCoins(
    //                     this.character.coins
    //                 );

    //                 this.level.coins.splice(i, 1);
    //             }
    //         }
    //     }, 100);
    // }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // --- space for fixed objects ---
        this.addToMap(this.statusbar_life);
        this.addToMap(this.statusbar_coins);
        this.addToMap(this.statusbar_bottles);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        // draw wird immer wieder aufgerufen.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);

        movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.positionX = movableObject.positionX * -1;
    }

    flipImageBack(movableObject) {
        movableObject.positionX = movableObject.positionX * -1;
        this.ctx.restore();
    }
}