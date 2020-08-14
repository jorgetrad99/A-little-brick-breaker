import Paddle from './paddle.js'

let cnvs = document.getElementById("gameScreen")  //canvas
let ctx = cnvs.getContext("2d")            //context

const GAME_WIDTH = 800
const  GAME_HEIGHT = 600

ctx.clearRect(0, 0, 800, 600)

ctx.fillStyle = "white"
ctx.fillRect(20, 20, 100, 100)



var paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

paddle.draw(ctx)