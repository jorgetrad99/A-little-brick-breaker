import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import { buildLevel, level1 } from './levels.js'

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAME_OVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.gameState = GAME_STATE.MENU
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)

        this.gameObjects = []

        new InputHandler(this.paddle, this)
    }

    start() {
        if(this.gameState !== GAME_STATE.MENU) return

        let bricks = buildLevel(this, level1)
        this.gameObjects = [ this.ball, this.paddle, ...bricks ]
        this.gameState = GAME_STATE.RUNNING
    }

    update(deltaTime) {
        /* this.paddle.update(deltaTime)
        this.ball.update(deltaTime) */
        /* console.log("Estoy corriendo") */
        if(this.gameState === GAME_STATE.PAUSED || 
        this.gameState === GAME_STATE.MENU) {
            return       //Detiene las actualizaciones de pantalla
        }
        this.gameObjects.forEach((object) => object.update(deltaTime))
        this.gameObjects = this.gameObjects.filter(
            object => !object.markedForDeletion)
    }

    draw(ctx) {
        /* this.paddle.draw(ctx)
        this.ball.draw(ctx) */
        this.gameObjects.forEach(object => object.draw(ctx))

        if( this.gameState == GAME_STATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
            ctx.fill()

            ctx.font = "40px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2)

        }

        if( this.gameState == GAME_STATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0, 0, 0, 1)"
            ctx.fill()

            ctx.font = "40px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("Press SPACE-BAR to  Start", this.gameWidth / 2, this.gameHeight / 2)

        }
    }

    togglePause(){
        if( this.gameState == GAME_STATE.PAUSED ) {
            this.gameState = GAME_STATE.RUNNING
        } else {
            this.gameState = GAME_STATE.PAUSED
        }
    }
}