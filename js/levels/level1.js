function createLevel1() {
    return new Level(
        [
            new Chicken(400 + Math.random() * 200),
            new Chicken(900 + Math.random() * 200),
            new Chicken(1400 + Math.random() * 200),
            new Chicken(1900 + Math.random() * 200),
            new Chicken(2400 + Math.random() * 200),
            new Chicken(2900 + Math.random() * 200),
            new Chicken(3400 + Math.random() * 200),
            new Chicken(4000 + Math.random() * 200),
            new ChickenSmall(1600),
            new ChickenSmall(3200),
            new Endboss()
        ],
        [
            new Cloud()
        ],
        [
            new Coins(400 + Math.random() * 200, 0),
            new Coins(800 + Math.random() * 200, 100),
            new Coins(1200 + Math.random() * 200, 200),
            new Coins(1700 + Math.random() * 200, 100),
            new Coins(2100 + Math.random() * 200, 0),
            new Coins(2600 + Math.random() * 200, 100),
            new Coins(3000 + Math.random() * 200, 200),
            new Coins(3400 + Math.random() * 200, 0),
            new Coins(3900 + Math.random() * 200, 100),
            new Coins(4300 + Math.random() * 200, 0),
        ],
        [
            new VendingMachine()
        ],
        [
            new BackgroundObjects("img/5_background/layers/air.png", -720),
            new BackgroundObjects("img/5_background/layers/3_third_layer/2.png", -720),
            new BackgroundObjects("img/5_background/layers/2_second_layer/2.png", -720),
            new BackgroundObjects("img/5_background/layers/1_first_layer/2.png", -720),

            new BackgroundObjects("img/5_background/layers/air.png", 0),
            new BackgroundObjects("img/5_background/layers/3_third_layer/1.png", 0),
            new BackgroundObjects("img/5_background/layers/2_second_layer/1.png", 0),
            new BackgroundObjects("img/5_background/layers/1_first_layer/1.png", 0),

            new BackgroundObjects("img/5_background/layers/air.png", 720),
            new BackgroundObjects("img/5_background/layers/3_third_layer/2.png", 720),
            new BackgroundObjects("img/5_background/layers/2_second_layer/2.png", 720),
            new BackgroundObjects("img/5_background/layers/1_first_layer/2.png", 720),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 2),
            new BackgroundObjects("img/5_background/layers/3_third_layer/1.png", 720 * 2),
            new BackgroundObjects("img/5_background/layers/2_second_layer/1.png", 720 * 2),
            new BackgroundObjects("img/5_background/layers/1_first_layer/1.png", 720 * 2),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 3),
            new BackgroundObjects("img/5_background/layers/3_third_layer/2.png", 720 * 3),
            new BackgroundObjects("img/5_background/layers/2_second_layer/2.png", 720 * 3),
            new BackgroundObjects("img/5_background/layers/1_first_layer/2.png", 720 * 3),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 4),
            new BackgroundObjects("img/5_background/layers/3_third_layer/1.png", 720 * 4),
            new BackgroundObjects("img/5_background/layers/2_second_layer/1.png", 720 * 4),
            new BackgroundObjects("img/5_background/layers/1_first_layer/1.png", 720 * 4),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 5),
            new BackgroundObjects("img/5_background/layers/3_third_layer/2.png", 720 * 5),
            new BackgroundObjects("img/5_background/layers/2_second_layer/2.png", 720 * 5),
            new BackgroundObjects("img/5_background/layers/1_first_layer/2.png", 720 * 5),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 6),
            new BackgroundObjects("img/5_background/layers/3_third_layer/1.png", 720 * 6),
            new BackgroundObjects("img/5_background/layers/2_second_layer/1.png", 720 * 6),
            new BackgroundObjects("img/5_background/layers/1_first_layer/1.png", 720 * 6),

            new BackgroundObjects("img/5_background/layers/air.png", 720 * 7),
            new BackgroundObjects("img/5_background/layers/3_third_layer/2.png", 720 * 7),
            new BackgroundObjects("img/5_background/layers/2_second_layer/2.png", 720 * 7),
            new BackgroundObjects("img/5_background/layers/1_first_layer/2.png", 720 * 7),
        ]
    );
}d