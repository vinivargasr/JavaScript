const umArray = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')

const elementosArray = [10, 5, 8, 2, 9, 15, 20]
umArray.innerHTML = `[${elementosArray}]`

btnPesquisar.addEventListener('click',(evt) => {
    const retorno = elementosArray.find((el, index) => {
        if (el == txt_pesquisar.value) {
            resultado.innerHTML = `${el} na posição ${index + 1}`
            return el
        } else {
            resultado.innerHTML = 'Valor não encontrado :/'
        }
    })

    console.log(retorno)
})

