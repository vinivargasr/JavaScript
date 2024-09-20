const objetos = document.getElementById('objetos')

const computador = {
    cpu: 'i9',
    ram: '64Gb',
    hd: '2Tb',
    info: function() {
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

const computadores = [
    {
        cpu: 'i9',
        ram: '64Gb',
        hd: '2Tb',
    },
    {
        cpu: 'i7',
        ram: '32Gb',
        hd: '2Tb',
    },
    {
        cpu: 'i5',
        ram: '16Gb',
        hd: '1Tb',
    }
]

computadores.forEach((c) => {
    const div = document.createElement('div')
    div.innerHTML = `${c.cpu} ${c.ram} ${c.hd}`
    div.setAttribute('class','computador')
    objetos.appendChild(div)
})

computador.info()
// objetos.innerHTML = JSON.stringify(computadores)