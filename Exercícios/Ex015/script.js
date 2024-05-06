function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cor = document.getElementById('main')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <= 12) {
        img.src = '1.jpg'
        cor.style.backgroundColor = 'rgb(64, 160, 189)'
    } else if (hora >= 13 && hora < 18) {
        img.src = '2.jpg'
        cor.style.backgroundColor = '#cc7f2d'
    } else if (hora <= 23 || hora <= 6) {
        img.src = '3.jpg'
        cor.style.backgroundColor ='rgb(19, 19, 43)'
    }
}
