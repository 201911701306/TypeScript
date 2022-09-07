import './style/index.less'

class Food {
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')!

    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    change() {

        //最小是0 最大298
        let X = Math.round(Math.random() * 29) * 10
        let Y = Math.round(Math.random() * 29) * 10

        this.element.style.left = X + 'px'
        this.element.style.top = Y + 'px'
    }


}

class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement

    maxLevel: number

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
    }

    addScore() {
        this.score++
        this.scoreEle.innerHTML = ++this.score + ""
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ""
        }
    }

}

const scorePanel = new ScorePanel()

