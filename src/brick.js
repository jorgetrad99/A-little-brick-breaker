export default class Brick {

    constructor (game, position) {
        this.game = game
        this.width = 80
        this.height = 24

        this.position = position
    }

    draw(ctx) {
        ctx.fillStyle = "#920"
        ctx.strokeStyle = "#880"
        ctx.lineWidth = 5;
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(ctx) { }
}
