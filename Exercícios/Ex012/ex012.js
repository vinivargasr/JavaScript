var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora >= 6 && hora <= 12) {
    console.log('Bom Dia')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa Tarde')
} else if (hora > 18 && hora < 24) {
    console.log('Boa Noite')
} else if (hora >= 0 && hora < 5) {
    console.log('Boa Madrugada')
} else {
    console.log('? isso não é horário')
}