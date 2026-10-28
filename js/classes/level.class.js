class Level {
    enemies;
    clouds;
    coins;
    vendingMachine;
    backgroundObjects;
    levelEndX = 5000;

    constructor(enemies, clouds, coins, vendingMachine, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.vendingMachine = vendingMachine;
        this.backgroundObjects = backgroundObjects;
    }

}