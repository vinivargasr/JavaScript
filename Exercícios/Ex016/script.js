function verificar () {
    var ano = document.getElementById('iano')
    var resultado = document.getElementById('res')
    var anonumber = Number(ano.value)

    var data = new Date()
    var anoatual = data.getFullYear()

    if (anonumber == 0 || anonumber > anoatual) {
        window.alert('Verifique os dados')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoatual - anonumber
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', '1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '3.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '5.png')
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', '7.png')
            } else {
                // :0
                img.setAttribute('src', '9.png')
            }


        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', '2.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '4.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '6.png')
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', '8.png')
            } else {
                // :0
                img.setAttribute('src', '9.png')
            }
        }

        resultado.innerHTML = `Você é ${genero} e sua idade é ${idade}`
        resultado.appendChild(img)
    }
}