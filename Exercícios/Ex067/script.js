const iNome = document.getElementById('iNome')
const iNota = document.getElementById('iNota')
const iMsg = document.getElementById('iMsg')
const btnValidar = document.getElementById('btnValidar')

btnValidar.addEventListener('click', (evt) => {
    let msg = null

    if (!iNome.checkValidity()) {
        msg = `${iNome.validationMessage} - Nome`
        iMsg.setAttribute('class', 'erro')
    } else if (!iNota.checkValidity()) {
        msg = `${iNota.validationMessage} - Nota`
        iMsg.setAttribute('class', 'erro')
    } else {
        msg = 'Validado'
        iMsg.setAttribute('class', 'valido')
    }

    iMsg.innerHTML = msg
    evt.preventDefault()
})
