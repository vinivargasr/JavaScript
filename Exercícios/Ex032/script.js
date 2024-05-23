let boxBuscar = document.querySelector('.containerbuscar')
let lupaBuscar = document.querySelector('.lupabuscar')
let fecharBuscar = document.querySelector('.fecharbuscar')

lupaBuscar.addEventListener('click', () => {
    boxBuscar.classList.add('active')
})

fecharBuscar.addEventListener('click', () => {
    boxBuscar.classList.remove('active')
})