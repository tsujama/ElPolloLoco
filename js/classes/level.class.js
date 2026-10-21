class Level {

    enemies;
    clouds;
    coins;
    statusbar;
    backgroundObjects;
    levelEndX = 2200;

    constructor(enemies, clouds, coins, statusbar, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.statusbar = statusbar;
        this.backgroundObjects = backgroundObjects;
    }

}