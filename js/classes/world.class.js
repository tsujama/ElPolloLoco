class World {
    character = new Character();
    level = createLevel1();
    ctx;
    keyboard;
    camera_x = 0;
    statusbar_life = new Statusbar(0);
    statusbar_coins = new Statusbar(40);
    statusbar_bottles = new Statusbar(80);
    throwableObjects = [];
    coinRespawnTimers = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.statusbar_life.setPercentage(100, this.statusbar_life.IMAGES_LIFE);
        this.statusbar_coins.setPercentage(0, this.statusbar_coins.IMAGES_COINS);
        this.statusbar_bottles.setPercentage(0, this.statusbar_bottles.IMAGES_BOTTLES);

        this.connectCharacterToWorld();
        this.connectEndbossToWorld();
        this.startEnemyAnimations();
        this.draw();
        this.startGameLoop();
    }

    connectCharacterToWorld() {
        this.character.world = this;
    }

    connectEndbossToWorld() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss) {
                enemy.world = this;
            }
        });
    }

    startGameLoop() {
        this.gameInterval = setInterval(() => {
            this.checkCollisions();
            this.checkCoinCollisions();
            this.checkVendingMachineCollisions();
            this.checkThrowObjects();
            this.checkGameOver();
            this.checkGameWon();
        }, 200);

        this.collisionInterval = setInterval(() => {
            this.checkBottleCollisions();
            this.checkBottleGroundCollision();
        }, 1000 / 60);
    }

    startEnemyAnimations() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chicken || enemy instanceof Endboss) {
                enemy.animate();
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.F && this.character.bottles >= 20) {
            let x = this.character.otherDirection
                ? this.character.positionX
                : this.character.positionX + 100;

            let bottle = new ThrowableObject(
                x,
                this.character.positionY + 100,
                this.character.otherDirection
            );

            this.throwableObjects.push(bottle);
            this.character.bottles -= 20;

            this.updateStatusbar(
                this.statusbar_bottles,
                this.character.bottles,
                this.statusbar_bottles.IMAGES_BOTTLES
            );

            this.keyboard.F = false;
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {

            let isColliding = this.character.isColliding(enemy);
            let isBossAttack = enemy instanceof Endboss && enemy.isAttacking();
            let isAlive = this.character.life > 0;
            let isEnemyAlive = !enemy.isDead();
            let isFalling = this.character.speedY < 0;
            let characterFeet = this.character.positionY + this.character.height - this.character.offsetBottom;
            let previousCharacterFeet = this.character.lastCollisionFeet;
            let enemyTop = enemy.positionY + enemy.offsetTop;
            let isAboveEnemy = previousCharacterFeet !== null && previousCharacterFeet <= enemyTop && characterFeet >= enemyTop;

            if ((isColliding || isBossAttack) && isAlive && isEnemyAlive) {
                if (enemy instanceof Endboss) {
                    if (enemy.isAttacking()) {
                        if (!this.character.isHurt()) {
                            this.character.hit();
                        }
                        this.updateStatusbar(
                            this.statusbar_life,
                            this.character.life,
                            this.statusbar_life.IMAGES_LIFE
                        );
                    }
                } else if (isFalling && isAboveEnemy) {
                    enemy.life = 0;
                } else {
                    if (!this.character.isHurt()) {
                    this.character.hit();
                }
                    this.updateStatusbar(
                    this.statusbar_life,
                    this.character.life,
                    this.statusbar_life.IMAGES_LIFE
                    );
                }
            }
        });
        this.character.lastCollisionFeet = this.character.positionY + this.character.height - this.character.offsetBottom;
    }

    checkCoinCollisions() {
        for (let i = this.level.coins.length - 1; i >= 0; i--) {
            let coin = this.level.coins[i];

            if (this.character.isColliding(coin)) {
                this.character.collectCoins();

                this.updateStatusbar(
                    this.statusbar_coins,
                    this.character.coins,
                    this.statusbar_coins.IMAGES_COINS
                );
                coin.stopAnimation();
                this.level.coins.splice(i, 1);

                let timer = setTimeout(() => {
                    this.level.coins.push(
                        new Coins(coin.positionX, coin.positionY)
                    );
                }, 10000);

                this.coinRespawnTimers.push(timer);
            }
        }
    }

    checkBottleCollisions() {
        for(let i = this.throwableObjects.length - 1; i >= 0; i--) {
            let bottle = this.throwableObjects[i];
            for (let enemy of this.level.enemies) {
                if (bottle.isColliding(enemy) && !enemy.isDead()) {

                    if (enemy instanceof Endboss) {
                        enemy.life -= 20;
                        enemy.lastHit = new Date().getTime();
                    } else {
                        enemy.life = 0;
                    }

                    bottle.stopMovement();
                    this.throwableObjects.splice(i, 1);
                    break;
                }
            }
        } 
    };

    checkBottleGroundCollision() {
        for(let i = this.throwableObjects.length - 1; i >= 0; i--) {
            let bottle = this.throwableObjects[i];

            if(bottle.positionY > 480) {
                bottle.stopMovement();
                this.throwableObjects.splice(i, 1);
            }
        }
    }

    checkVendingMachineCollisions() {

        this.level.vendingMachine.forEach((machine) => {           
            let isColliding = this.character.isColliding(machine);

            if (isColliding && this.keyboard.E && this.character.coins >= 20 && this.character.bottles < 100) {
                if(!machine.isAnimating) {
                    machine.animate();

                    this.character.coins -= 20;

                    this.character.bottles += 20;

                    //   this.statusbar_coins.setPercentage(
                    //    this.character.coins,
                    //    this.statusbar_coins.IMAGES_COINS
                    //);
                    this.updateStatusbar(this.statusbar_coins, this.character.coins, this.statusbar_coins.IMAGES_COINS);

                    this.updateStatusbar(this.statusbar_bottles, this.character.bottles, this.statusbar_bottles.IMAGES_BOTTLES);
                }
            }  
        });
    }

    updateStatusbar(statusbarObject, characterStat, imagePath) {
        statusbarObject.setPercentage(characterStat, imagePath);
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

    this.ctx.translate(Math.round(this.camera_x), 0);

    this.drawBackground();
    this.drawGameObjects();

    this.ctx.translate(-Math.round(this.camera_x), 0);

    this.drawStatusbars();

    this.animationFrameId = requestAnimationFrame(() => {
        this.draw();
    });
}

    drawBackground() {
        this.addObjectsToMap(this.level.backgroundObjects);
    }

    drawGameObjects() {
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.vendingMachine);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
    }

    drawStatusbars() {
        this.addToMap(this.statusbar_life);
        this.addToMap(this.statusbar_coins);
        this.addToMap(this.statusbar_bottles);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        object.draw(this.ctx);

        object.drawFrame(this.ctx);

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.positionX = object.positionX * -1;
    }

    flipImageBack(object) {
        object.positionX = object.positionX * -1;
        this.ctx.restore();
    }

    checkGameOver() {
        if (this.character.isDead()) {
            document.getElementById("canvas").style.display = "none";
            document.getElementById("gameOverScreen").style.display = "block";
            document.getElementById("fullscreenButton").style.display = "none";
            this.stopGame();
        }
    }

    checkGameWon() {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);

        if (endboss && endboss.isDead()) {
            document.getElementById("canvas").style.display = "none";
            document.getElementById("gameWonScreen").style.display = "block";
            document.getElementById("fullscreenButton").style.display = "none";
            this.stopGame();
        }
    }

    stopGame() {
        clearInterval(this.gameInterval);
        clearInterval(this.collisionInterval);
        cancelAnimationFrame(this.animationFrameId);

        this.character.stopAnimation();

        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chicken || enemy instanceof Endboss) {
                enemy.stopAnimation();
            }
        });

        this.throwableObjects.forEach((bottle) => {
            bottle.stopMovement();
        });

        this.coinRespawnTimers.forEach(timer => clearTimeout(timer));
        this.level.coins.forEach(coin => coin.stopAnimation());
    }
}