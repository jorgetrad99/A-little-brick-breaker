export default class Ball {

    constructor (game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game;
        this.r = 8

        this.speed = { x: 8, y: 4 }

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
    
        //Wall on left or right
        if(this.position.x + this.r > this.gameWidth || this.position.x < 0 + this.r){
            this.speed.x = -this.speed.x
        }
    
        //Wall on top or bottom
        if(this.position.y + this.r  > this.gameHeight || this.position.y < 0 + this.r){
            this.speed.y = -this.speed.y
        }
    
        //Check collision with paddle
        let bottomOfBall = this.position.y + this.r
        let topOfPaddle = this.game.paddle.position.y
        let leftSideOfPaddle = this.game.paddle.position.x
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width

        if(
            bottomOfBall >= topOfPaddle && 
            this.position.x >= leftSideOfPaddle &&
            this.position.x + this.r <= rightSideOfPaddle) {
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.r
        }
    }
}