const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const botao = document.getElementById('btn_transferir')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evento) => {
        const curso = evento.target
        curso.classList.toggle('selecionado')
    })
})

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]

    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})
