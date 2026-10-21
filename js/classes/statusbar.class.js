class Statusbar extends MovableObject {

    width = 175;
    height = 50;

    positionX = 20;

    constructor(imagePath, positionY) {
        super().loadImage(imagePath);
        this.positionY = positionY;
    }
}