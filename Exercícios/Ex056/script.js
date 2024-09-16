const olhos = [...document.getElementsByClassName('olho')]

let posXmouse = 0
let posYmouse = 0

window.addEventListener('mousemove',(evt) => {
    posXmouse = evt.clientX
    posYmouse = evt.clientY

    const rot = Math.atan2(posYmouse, posXmouse)*180 / Math.PI

    olhos.forEach((o) => {
        o.style.transform = 'rotate('+ rot +'deg)'
    })
})
