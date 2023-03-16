const hover = document.getElementById('hover')
const container = document.querySelector('.container')

hover.addEventListener('mouseenter', () => {
    container.classList.add('show-txt')
})