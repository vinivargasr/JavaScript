// Criando os Times
var times = [
    {pais: 'França', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Colômbia', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Canadá', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Nova Zelândia', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Estados Unidos', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Zâmbia', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Alemanha', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Austrália', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Espanha', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Japão', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Nigéria', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    {pais: 'Brasil', vitoria: 0, empate: 0, derrota: 0, pontos: 0},
]

// Definindo pontos por vitorias e empates
times.forEach(federacao => {
    federacao.pontos = federacao.vitoria * 3 + federacao.empate * 1
})

// colocando os Times em ordem decrescente
times.sort((a,b) => b.pontos - a.pontos)

// Rank Geral
times.forEach((federacao, indice) => {
    console.log(`${indice + 1}. ${federacao.pais} - Pontos: ${federacao.pontos}`)
})

// Criando a Tabela no HTML
const blocoRank = document.getElementById('p2')
const tabela = document.createElement('table')
const cabecalho = document.createElement('tr')

// Títulos das colunas
const tituloTabela = document.createElement('th')
const vitoriasTabela = document.createElement('th')
const empatesTabela = document.createElement('th')
const derrotasTabela = document.createElement('th')
const pontosTabela = document.createElement('th')

tituloTabela.innerHTML = 'Times'
vitoriasTabela.innerHTML = 'Vitórias'
empatesTabela.innerHTML = 'Empates'
derrotasTabela.innerHTML = 'Derrotas'
pontosTabela.innerHTML = 'Pontos'


cabecalho.appendChild(tituloTabela)
cabecalho.appendChild(vitoriasTabela)
cabecalho.appendChild(empatesTabela)
cabecalho.appendChild(derrotasTabela)
cabecalho.appendChild(pontosTabela)
tabela.appendChild(cabecalho)


// Adicionando os Times a tabela
times.forEach(time => {
    const linha = document.createElement('tr');

    const nomeTime = document.createElement('td');
    nomeTime.style = 'text-align: left'
    const vitorias = document.createElement('td');
    const empates = document.createElement('td');
    const derrotas = document.createElement('td');
    const pontos = document.createElement('td');

    nomeTime.innerHTML = time.pais;
    vitorias.innerHTML = time.vitoria;
    empates.innerHTML = time.empate;
    derrotas.innerHTML = time.derrota;
    pontos.innerHTML = time.pontos;

    linha.appendChild(nomeTime);
    linha.appendChild(vitorias);
    linha.appendChild(empates);
    linha.appendChild(derrotas);
    linha.appendChild(pontos);
    tabela.appendChild(linha);
});

blocoRank.appendChild(tabela);