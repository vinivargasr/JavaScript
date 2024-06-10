const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evento) => {
    console.log(evento.target)
})

cursos.map((el) => {
    el.addEventListener('click', (evento) => {
        evento.stopPropagation()
    })
})