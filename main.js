const drawingArea = document.querySelector('#drawingArea')
const inputOfGridSize = document.getElementById('grid-size-input')
const selectDrawingColor = document.querySelector('fieldset')

let colorSelected = 'black'

selectDrawingColor.addEventListener('change', (e) => {
    if (e.target.id == 'random') {
        colorSelected = generateRandomColor()
    } else {
        colorSelected = e.target.id
    }
    
})



inputOfGridSize.addEventListener('change', (e) => {
    createGrid(e.target.value)
})

drawingArea.addEventListener('mouseover', (e) => {
    if (e.target.className == 'grid-unit') {
        console.log(typeof colorSelected);
        
        switch (colorSelected) {
            case 'black':
                e.target.style.backgroundColor = 'black';
                break;
            case 'rainbow':
                e.target.style.backgroundColor = generateRandomColor()
                break;

            default:
                e.target.style.backgroundColor = colorSelected;
                break;
        }
    }
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


function generateRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    return rgb

}

createGrid(inputOfGridSize.value)
