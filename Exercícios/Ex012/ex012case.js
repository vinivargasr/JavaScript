var agora = new Date()
var hora = agora.getHours()
switch (true) {
    case hora >= 6 && hora <= 12:
        console.log('Bom dia!')
        break
    case hora >= 12 && hora < 18:
        console.log('Boa tarde!')
        break
    case hora >= 18 && hora <= 23:
        console.log('Boa Noite!')
        break
    case hora >= 0 && hora < 6:
        console.log('Boa Madrugada!')
        break
    default:
        console.log('? isso não é hora')
}