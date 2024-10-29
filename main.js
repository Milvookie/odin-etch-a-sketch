const drawingArea = document.querySelector('#drawingArea')

function createGrid() {
    for (let index = 0; index < 16; index++) {
        let div = document.createElement('div')
        div.className = 'grid-unit'
        drawingArea.append(div)
    }
}

createGrid()

let gridUnits = document.querySelectorAll('.grid-unit')
console.log(gridUnits);

drawingArea.addEventListener('click', (e) => {
    let posX = e.offsetX
    let posY = e.offsetY
    let target = e.target
    console.log(target);
    console.log(e);
    
})

function draw() {

}


document.addEventListener('load', () => {

    console.log('loaded');
    
})