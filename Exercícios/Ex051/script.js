const militar = document.getElementById('botaoMilitar_')
const normal = document.getElementById('botaoNormal_')
const blindagem = document.querySelectorAll('.blinda')
const municao = document.querySelectorAll('.muni')
const iblindagem = document.getElementById('iblindagem')
const imunicao = document.getElementById('imunicao')

const carros = document.querySelector('#carros')
const btn_addCarro = document.getElementById('btn_addCarro')
const nomeCarro = document.getElementById('inome')
const portasCarro = document.getElementById('iportas')

militar.click()
let a_carros = []

function verificarEstado() {
    if (normal.checked) {
        imunicao.setAttribute('disabled','disabled')
        iblindagem.setAttribute('disabled','disabled')
        imunicao.value = ''
        iblindagem.value = ''        
    } else if (militar.checked) {
        imunicao.removeAttribute('disabled')
        iblindagem.removeAttribute('disabled')

        municao.forEach((elemento) => {
            elemento.style.display = 'block'
        });

        blindagem.forEach((elemento) => {
            elemento.style.display = 'block'
        });
    }
}

verificarEstado();

normal.addEventListener('change', verificarEstado)
militar.addEventListener('change', verificarEstado)
var numCarros = 0
const maxBlocos = 16

const gerenciarCarros = () => {
    carros.innerHTML = ''
    a_carros.map((c, index) => {
        const div = document.createElement('div')
        const p = document.createElement('p')
        const pportas = document.createElement('p')
        const span = document.createElement('span')
        const btn_remove = document.createElement('button')

        p.setAttribute('class','nomeDcarro')
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c.nome)
        span.setAttribute('class', 'spanRemove')
        btn_remove.setAttribute('class', 'remove')

        btn_remove.innerHTML = 'X'
        p.innerHTML += `Nome: ${c.nome}`
        p.innerHTML += `<br>Portas: ${c.portas}`
        p.innerHTML += `<br>Cor: ${c.cor}`
        if (c.blindagem !== undefined) {
            p.innerHTML += `<br>Blindagem: ${c.blindagem}`
            p.innerHTML += `<br>Munição: ${c.municao}`
        }
        
        span.appendChild(btn_remove)
        div.appendChild(span)
        div.appendChild(p)
        carros.appendChild(div)

        btn_remove.addEventListener('click', () => {
            carros.removeChild(div)
            a_carros.splice(index, 1)
            numCarros--
            gerenciarCarros()

            if (numCarros < maxBlocos) {
                btn_addCarro.disabled = false;
            }
        })

        btn_remove.onmouseup = () => {
            btn_remove.style.backgroundColor = '#3AB56E'
        }
    })
}

var qntsBlocos = 0


btn_addCarro.addEventListener('click', () => {
    if (nomeCarro.value !== '' && portasCarro.value !== '') {
    if (numCarros < maxBlocos) {
        if (botaoNormal_.checked) {
            const c = new Carro(nomeCarro.value, portasCarro.value);
            a_carros.push(c)
        } else if (botaoMilitar_.checked) {
            if (iblindagem.value !== '' && imunicao.value !== '') {
                const c = new Militar(nomeCarro.value, portasCarro.value, iblindagem.value, imunicao.value);
                a_carros.push(c)
            } else {
                return
            }
        }
        numCarros++
        gerenciarCarros();
        nomeCarro.value = ''
        portasCarro.value = ''
        imunicao.value = ''
        iblindagem.value = ''
        qntsBlocos++
    } else {
        alert("Número máximo de carros atingido!");
        btn_addCarro.disabled = true
    }
}
})

class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 80
        this.cor = 'Preto'
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }
    
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
        this.vel = 60
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
    tiroinimigo = function() {
        if(this.blindagem > 0) {
            this.blindagem = this.blindagem - 25
        }
    }
}

class Utilitario extends Carro {

}

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('Militar', 2, 100, 5)
c2.ligar()
c2.tiroinimigo()
c2.tiroinimigo()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado? 'Sim':'Não'}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('----------------------------------')
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado? 'Sim':'Não'}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)