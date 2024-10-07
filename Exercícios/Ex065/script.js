const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')

q1.accessKey = 'b'
q2.accessKey = 'n'

const info = (el) => {
    let DOMRectQ1 = el.getBoundingClientRect()
    posx.innerHTML = `posx:${DOMRectQ1.x}`
    posy.innerHTML = `posy:${DOMRectQ1.y}`
    largura.innerHTML = `largura:${DOMRectQ1.width}`
    altura.innerHTML = `altura:${DOMRectQ1.height}`
}

q1.addEventListener('click', (evt) => {
    info(evt.target)
})

q2.addEventListener('click', (evt) => {
    info(evt.target)
})