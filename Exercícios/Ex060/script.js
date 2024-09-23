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

const c1 = Object.assign({}, computador)

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)

console.log(o4)


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