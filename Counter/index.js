const counter = document.querySelector('.counter')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')


decrease.addEventListener('click', () => {
    counter.innerText = +counter.innerText - 1
})
reset.addEventListener('click', () => {
    counter.innerText = 0
})
increase.addEventListener('click', () => {
    counter.innerText = +counter.innerText + 1
})