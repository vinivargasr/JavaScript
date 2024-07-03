const caixa = document.getElementById('caixa')

let mapa = new Map()

mapa.set('Curso', 'Javascript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('Canal', 100)

console.log(mapa)

let pes = 10
if (mapa.has(pes)) {
    caixa.innerHTML = `A chave existe, com o value: ${mapa.get(pes)}`
} else {
    caixa.innerHTML = 'A chave não exsite'
}

let musicas = new Set(['musica1', 'musica7', 'musica10'])

musicas.add('musica4')

console.log(musicas)

musicas.forEach((el) => {
    caixa.innerHTML += `${el}<br>`
})

for (let m of musicas) {
    caixa.innerHTML += `${m}<br>`
}