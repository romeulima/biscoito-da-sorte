const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const card = document.querySelector('.card')

button1.addEventListener('click', () => {
    toggleScreen()
    card.style.animation = "appear 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
})

button2.addEventListener('click', toggleScreen)

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}