const container = document.getElementById('container')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
const SQUARES = 2013

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseout', () => {
        removeColor(square)
    })
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * 6)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#2e2e2e'
}