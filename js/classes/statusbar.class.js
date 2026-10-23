class Statusbar extends MovableObject {

    IMAGES_LIFE = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];

    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];

    percentage = 100;

    constructor(positionY) {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.loadImages(this.IMAGES_COINS);
        this.loadImages(this.IMAGES_BOTTLES);
        this.positionX = 20;
        this.positionY = positionY;
        this.width = 175;
        this.height = 50;
    }

    setPercentageLife(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    setPercentageCoins(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    setPercentageBottles(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_BOTTLES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
    if (this.percentage >= 100) {
        return 5;
    } else if (this.percentage >= 80) {
        return 4;
    } else if (this.percentage >= 60) {
        return 3;
    } else if (this.percentage >= 40) {
        return 2;
    } else if (this.percentage >= 20) {
        return 1;
    } else {
        return 0;
    }
}

    
}