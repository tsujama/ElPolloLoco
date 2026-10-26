class Endboss extends MovableObject {

    height = 400;
    width = 250;
    positionY = 60;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png"
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    world;
    deathImageIndex = 0;
    hasThrownChicken = false;

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.positionX = 2500;
    }

    throwChicken() {
        let chicken = new ThrowableChicken(
            this.positionX,
            this.positionY + 150,
            this.world.character.positionX
        );

        this.world.level.enemies.push(chicken);
    }

    isCharacterNearby() {
        return Math.abs(this.positionX - this.world.character.positionX) < 400;
    }

    moveTowardsCharacter() {
        if (this.isCharacterNearby() && !this.isCharacterInAttackRange()) {
            if (this.world.character.positionX < this.positionX) {
                this.otherDirection = false;
                this.positionX -= 5;
            } else {
                this.otherDirection = true;
                this.positionX += 5;
            }
        }
    }

    isCharacterInAttackRange() {
        let bossCenter = this.positionX + this.width / 2;
        let characterCenter = this.world.character.positionX + this.world.character.width / 2;

        return Math.abs(bossCenter - characterCenter) < 200;
    }

    isAttacking() {
        return !this.isDead() && this.isCharacterInAttackRange();
    }

    playDeathAnimation() {
        if (this.deathImageIndex < this.IMAGES_DEAD.length) {
            let path = this.IMAGES_DEAD[this.deathImageIndex];
            this.img = this.imageCache[path];
            this.deathImageIndex++;
        }
    }

    animate() {
        this.animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playDeathAnimation();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isCharacterInAttackRange()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.isCharacterNearby()) {
                this.playAnimation(this.IMAGES_ALERT);
                this.moveTowardsCharacter();

                if (!this.hasThrownChicken) {
                    this.throwChicken();
                    this.hasThrownChicken = true;

                    setTimeout(() => {
                        this.hasThrownChicken = false;
                    }, 6000);
                }

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    stopAnimation() {
        clearInterval(this.animationInterval);
    }
}