function diminuirbarra() {
    var seta = document.getElementById('seta')
    seta.classList.toggle('activeseta')

    var nav = document.getElementById('menubarra')
    nav.classList.toggle('activenav')

    var foto = document.getElementById('foto')
    foto.classList.toggle('activefoto')

    var grup = document.getElementById('gruposeb')
    grup.classList.toggle('activegrup')

    var main = document.getElementsByTagName('main')
    
    for (var i = 0; i < main.length; i++) {
        var posmain = main[i].classList.toggle('activemain')
    }

    var text = document.getElementsByTagName('label')

    for (var i = 0; i < text.length; i++) {
        var listadotext = text[i].classList.toggle('activetext')
    }

    var blocotam = document.getElementsByClassName('bloco')

    for (var i = 0; i < blocotam.length; i++) {
        var listadebloc = blocotam[i].classList.toggle('activebloc')
    }
}