const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const card = document.querySelector('.card')
const message = card.querySelector('p')
const phrases = [
"Se você não puder ser o Batman, seja o melhor Robin que conseguir.",
"Às vezes, ser forte é reconhecer que precisamos de ajuda.",
"A humildade é um tipo de inteligência.",
"Só existe uma verdade, e ela foi sabiamente chamada de amor."
]
let index = 1

button1.addEventListener('click', showPhrase)
button2.addEventListener('click', resetPhrase)

function showPhrase(){
    toggleScreen()
    animation()
}

function resetPhrase(){
    if(index < phrases.length){
        message.innerText = phrases[index]
    }else{
        index = 0
        message.innerText = phrases[index]
    }
    index++
    
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function animation(){
    card.style.animation = "appear 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
}
