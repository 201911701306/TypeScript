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

export default Food