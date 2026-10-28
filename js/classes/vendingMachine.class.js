class VendingMachine extends DrawableObject {
    IMAGES_VENDING = [
        'img/vending_m/vending_01.png',
        'img/vending_m/vending_02.png',
        'img/vending_m/vending_03.png',
        'img/vending_m/vending_04.png',
        'img/vending_m/vending_05.png',
        'img/vending_m/vending_06.png',
        'img/vending_m/vending_07.png',
        'img/vending_m/vending_08.png',
        'img/vending_m/vending_09.png',
        'img/vending_m/vending_10.png',
        'img/vending_m/vending_11.png',
        'img/vending_m/vending_12.png',
    ];

    positionX = 3800;
    positionY = 250;
    width = 200;
    height = 200;

    isAnimating = false;

    constructor() {
        super();
        this.loadImage(this.IMAGES_VENDING[0]);
        this.loadImages(this.IMAGES_VENDING);
    }

    animate() {
        this.isAnimating = true;
        let frameCount = 0;

        let intervalId = setInterval(() => {
            this.playAnimation(this.IMAGES_VENDING);
            frameCount++;

            if (frameCount >= this.IMAGES_VENDING.length) {
                this.isAnimating = false;
                clearInterval(intervalId);
            }
        }, 150);
    }
}