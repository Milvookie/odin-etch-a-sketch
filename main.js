const drawingArea = document.querySelector('#drawingArea')
const inputOfGridSize = document.getElementById('grid-size-input')

inputOfGridSize.addEventListener('change', (e) => {
    createGrid(e.target.value)
})

function createGrid(num) {
    const totalSquares = num * num

    let gridElement = []
    for (let index = 0; index < totalSquares; index++) {
        let unit = document.createElement('div')
        unit.className = 'grid-unit'
        unit.style.height = (100 / num) + '%'
        unit.style.width = (100 / num) + '%'
        gridElement.push(unit)
    }
    displayGridSize()
    drawingArea.replaceChildren(...gridElement)
}

function displayGridSize() {
    const textOfGridSize = document.querySelector('#grid-size label')
    textOfGridSize.innerText = `${inputOfGridSize.value} by ${inputOfGridSize.value}`
}


drawingArea.addEventListener('mouseover', (e) => {
    if (e.target.className == 'grid-unit') {
        e.target.style.backgroundColor = 'black';
    }
})




function draw() {
}

createGrid(inputOfGridSize.value)

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
})