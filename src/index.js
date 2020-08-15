import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'

let cnvs = document.getElementById("gameScreen")  //canvas
let ctx = cnvs.getContext("2d")            //context

const GAME_WIDTH = 800
const  GAME_HEIGHT = 600

ctx.clearRect(0, 0, 800, 600)

ctx.fillStyle = "white"
ctx.fillRect(20, 20, 100, 100)



let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT)

new InputHandler(paddle)

let lastTime = 0

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    paddle.update(deltaTime)
    paddle.draw(ctx)

    ball.update(deltaTime)
    ball.draw(ctx)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)