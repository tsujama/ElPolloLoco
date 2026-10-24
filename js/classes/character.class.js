class Character extends MovableObject {

        height = 250;
        width = 150;
        positionY = 80; // 175
        speed = 10;
        IMAGES_WALKING = [
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png'
        ];

        IMAGES_JUMPING = [
            'img/2_character_pepe/3_jump/J-31.png',
            'img/2_character_pepe/3_jump/J-32.png',
            'img/2_character_pepe/3_jump/J-33.png',
            'img/2_character_pepe/3_jump/J-34.png',
            'img/2_character_pepe/3_jump/J-35.png',
            'img/2_character_pepe/3_jump/J-36.png',
            'img/2_character_pepe/3_jump/J-37.png',
            'img/2_character_pepe/3_jump/J-38.png',
            'img/2_character_pepe/3_jump/J-39.png',
        ];

        IMAGES_HURT = [
            'img/2_character_pepe/4_hurt/H-41.png',
            'img/2_character_pepe/4_hurt/H-42.png',
            'img/2_character_pepe/4_hurt/H-43.png',
        ]

        IMAGES_DEAD = [
            'img/2_character_pepe/5_dead/D-52.png',
            'img/2_character_pepe/5_dead/D-53.png',
            'img/2_character_pepe/5_dead/D-54.png',
            'img/2_character_pepe/5_dead/D-55.png',
            'img/2_character_pepe/5_dead/D-56.png',
            'img/2_character_pepe/5_dead/D-57.png',
        ]
        world;
        lastCollisionFeet = null;
        offsetTop = 110;
        offsetBottom = 10;
        offsetLeft = 40;
        offsetRight = 40;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.movementInterval = setInterval(() => {
            this.moveCharacter();
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            this.playCharacterAnimation();
        }, 100);
    }

    stopAnimation() {
        clearInterval(this.movementInterval);
        clearInterval(this.animationInterval);
        clearInterval(this.gravityIntervalId);
    }

    moveCharacter() {
        if (this.world.keyboard.RIGHT &&
            this.positionX < this.world.level.levelEndX) {
            this.moveRight();
            this.otherDirection = false;
        }

        if (this.world.keyboard.LEFT && this.positionX > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }

        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }

        this.updateCamera();
    }

    updateCamera() {
        this.world.camera_x = -this.positionX + 100;
    }

    playCharacterAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    jump() {
        this.speedY = 30;
    }
}