const iNome = document.getElementById('iNome')
const iNota = document.getElementById('iNota')
const iMsg = document.getElementById('iMsg')
const btnValidar = document.getElementById('btnValidar')

// btnValidar.addEventListener('click', (evt) => {
//     let msg = null

//     if (!iNome.checkValidity()) {
//         msg = `${iNome.validationMessage} - Nome`
//         iMsg.setAttribute('class', 'erro')
//     } else if (!iNota.checkValidity()) {
//         msg = `${iNota.validationMessage} - Nota`
//         iMsg.setAttribute('class', 'erro')
//     } else {
//         msg = 'Validado'
//         iMsg.setAttribute('class', 'valido')
//     }

//     iMsg.innerHTML = msg
//     evt.preventDefault()
// })

btnValidar.addEventListener('click', (evt) => {
    let estadoValidacao = iNota.validity

    if (estadoValidacao.valueMissing) {
        iNota.setCustomValidity('Escreve algum número ae')
    } else if (estadoValidacao.rangeOverflow) {
        iNota.setCustomValidity('Sa nota tá muito alta, diminue ae')
    } else if (estadoValidacao.rangeUnderflow) {
        iNota.setCustomValidity('Sa nota ta muito baixa, aumenta ae')
    }

    iMsg.innerHTML = msg
    evt.preventDefault()
})