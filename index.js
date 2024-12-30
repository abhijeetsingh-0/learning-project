const main = document.querySelector(".main")

const box = document.createElement('div')
box.classList.add('box')
box.textContent = 'Box'
main.appendChild(box)

box.addEventListener('click', () => {
    if(box.style.backgroundColor === 'green') {
        box.style.backgroundColor = 'orange'
    } else {
        box.style.backgroundColor = 'green'
    }
})