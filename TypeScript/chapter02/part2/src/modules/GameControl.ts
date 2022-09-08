import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";




class GameControl {
    snake: Snake
    scorePanel: ScorePanel
    food: Food

    //方向 什么按键
    direction: string = ''

    isLive: boolean = true

    // _this = this

    constructor() {
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
        this.food = new Food()

        //初始化游戏
        this.init()

    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()

    }

    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key);
        if (event.key != this.direction) {
            this.direction = event.key

        }
        // this.run()

    }
    //
    run() {
        /**
         * 向上移动 -top
         * 向下移动 +top
         * 向左移动 -left
         * 向右移动 +left
         */



        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
                Y += 10
                break
            case "ArrowRight":
            case "Right":
                X += 10
                break
            case "ArrowLeft":
            case "Left":
                X -= 10
                break

            default:
                break;
        }

        this.eatFood(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            console.log((e as any).message);

            this.isLive = false
        }


        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);

    }

    eatFood(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // console.log('success');
            this.food.change()
            this.scorePanel.addScore()

            this.snake.addBody()

        }
    }
}

export default GameControl