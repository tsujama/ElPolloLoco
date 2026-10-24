class DrawableObject {
    // Position des Objekts
    positionX = 120;
    positionY = 280;

    // Größe des Objekts
    width = 100;
    height = 150;

    // Bild des Objekts
    img;

    // Speicher für mehrere Bilder
    imageCache = {};

    // Aktuelles Bild einer Animation
    currentImage = 0;

    // Offsets for character/enemy/objects hitbox
    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight = 0;

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
            ctx.rect(
                this.positionX + this.offsetLeft,
                this.positionY + this.offsetTop,
                this.width - this.offsetLeft - this.offsetRight,
                this.height - this.offsetTop - this.offsetBottom
            );
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}