export default class Paddle {

    constructor (gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.width = 150
        this.height = 20

        this.maxSpeed = 10
        this.speed = 0

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    draw (ctx) {
        ctx.fillStyle = "#0ff"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update (deltaTime){
        this.position.x += this.speed

        if(this.position.x + this.width < 0){   //Cuando sobrepase 0 en x por la izq
            this.position.x = this.gameWidth    //Lleve el paddle al finale del game width
        }
        if (this.position.x  > this.gameWidth ) {   //Cuando sobrepase 800px en x por la derecha
            this.position.x = 0 - this.width        //Lleve el paddle al principio del game width
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop () {
        this.speed = 0
    }
}