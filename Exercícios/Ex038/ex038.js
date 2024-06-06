const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const botao = document.getElementById('btn_copiar')
const botao2 = document.getElementById('btn_voltar')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evento) => {
        const curso = evento.target
        curso.classList.toggle('selecionado')
    })
})

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

botao2.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})