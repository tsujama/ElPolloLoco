class DrawableObject {
    positionX = 120;
    positionY = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
           ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.positionX, this.positionY, this.width, this.height);
            ctx.stroke(); 
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });  
    }

}