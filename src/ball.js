export default class Ball {

    constructor (gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.r = 8

        this.speed = { x: 8, y: 5 }

        this.position = { x: 10, y: 10 }
    }

    draw (ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, 
            this.position.y, 
            this.r, 0, Math.PI * 2)
        ctx.fillStyle = "#f0f"
        ctx.fill()
    }

    update (deltaTime){
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if(this.position.x + this.r > this.gameWidth || this.position.x < 0 + this.r){
            this.speed.x = -this.speed.x
        }
        if(this.position.y + this.r  > this.gameHeight || this.position.y < 0 + this.r){
            this.speed.y = -this.speed.y
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