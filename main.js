const drawingArea = document.querySelector('#drawingArea')
const inputOfGridSize = document.getElementById('grid-size-input')

inputOfGridSize.addEventListener('change', (e) => {
    console.log(e.target.value);
    createGrid(e.target.value)
    
})

function createGrid(num) {
    const totalSquares = num * num
    const areaHeight = drawingArea.clientHeight
    const areaWidth = drawingArea.clientWidth
    let gridElement = []
    for (let index = 0; index < totalSquares; index++) {
        let unit = document.createElement('div')
        unit.className = 'grid-unit'
        unit.style.height = areaHeight / num + 'px'
        unit.style.width = areaWidth / num + 'px'
        gridElement.push(unit)
    }

    drawingArea.replaceChildren(...gridElement)

    let textOfGridSize = document.querySelector('#grid-size label')
    textOfGridSize.innerText = `${inputOfGridSize.value} by ${inputOfGridSize.value}`    
}


drawingArea.addEventListener('mouseover', (e) => {
    if (e.target.className == 'grid-unit') {
        e.target.style.backgroundColor = 'black';   
    }
})

function draw() {
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    createGrid(inputOfGridSize.value)
})