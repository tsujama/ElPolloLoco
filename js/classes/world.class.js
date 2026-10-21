class World {
    character = new Character();
    level = level1;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.setWorld();
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }
    
    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.statusbar);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.positionX = movableObject.positionX * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.positionX, movableObject.positionY, movableObject.width, movableObject.height);

        this.ctx.beginPath();
        this.ctx.lineWidth = "10";
        this.ctx.strokeStyle = "blue";
        this.ctx.rect(50, 50, 150, 80);
        this.ctx.stroke();

        if (movableObject.otherDirection) {
            movableObject.positionX = movableObject.positionX * -1;
            this.ctx.restore();
        }
    }
}