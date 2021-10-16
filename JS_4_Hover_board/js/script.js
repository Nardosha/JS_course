const board = document.querySelector('#board')
const SQUARES_NAMBER = 500

for (let i = 0; i < SQUARES_NAMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  element.style.background = 'red'
}
function removeColor(element) {
  element.style.background = '#1d1d1d'
}
