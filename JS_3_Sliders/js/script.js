const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlaide = document.querySelector('.main-slide')
const slidesCount = mainSlaide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

/* Нажатие стреловек на клавиатуре---------------------*/
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArroUp') {
    changeSlide('up')
  } else event.key === 'ArrowDown'
  {
    changeSlide('down')
  }
})

/* --------------------------------------------------- */

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      //если индекс активного слайда больше
      //  кол-ва слайдов(4), то
      activeSlideIndex = 0 // обнуляем активный индекс
    }
  } else if ((direction = 'down')) {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight

  mainSlaide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
