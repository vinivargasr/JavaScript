function diminuirbarra() {
    var seta = document.getElementById('seta')
    var barra = document.getElementById('menubarra')
    var nomes = document.querySelectorAll('.textopainel')
    var img = document.getElementsByName('.bloco')

    nomes.forEach(function(elemento) {
        elemento.innerHTML = ''
    })
    
    img.forEach(function(blocos){
        blocos.style.height = '40px'
        blocos.style.backgroundColor = 'gray'
    })

    seta.style.transform = 'rotateY(180deg)'
    barra.style.width = '64px'
}