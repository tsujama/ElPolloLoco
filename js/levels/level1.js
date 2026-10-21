const level1 = new Level(
    [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss()
],
[
    new Cloud()
],
[
    new Coins(400, 0),
    new Coins(800, 100),
    new Coins(1000, 300),
    new Coins(1700, 100),
    new Coins(2100, 0),
],
[
    new Statusbar("img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png", 0),
    new Statusbar("img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png", 40),
    new Statusbar("img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png", 80)
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
]
);