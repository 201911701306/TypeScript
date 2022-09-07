console.log('hellp');

let a = 10

function fn(a: number, b: number) {
    // console.log(this);

    return a + b
}

let bx = document.getElementById('box1')
if (bx != null) {
    bx.addEventListener('click', function () {
        console.log(132);

    })
}
