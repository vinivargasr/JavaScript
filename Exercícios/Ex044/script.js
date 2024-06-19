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
times.forEach((time, index) => {
    const linha = document.createElement('tr');

    if (index == 0) {
        linha.classList.add('primeiro')
    }

    if (index == 1) {
        linha.classList.add('segundo')
    }

    if (index == 2) {
        linha.classList.add('terceiro')
    }

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

// Jogos Definidos
function getTeam(pais) {
    return times.find(team => team.pais === pais);
}

var jogosDia1 = [
    { jogo: 1, equipeA: getTeam('França'), equipeB: getTeam('Colômbia'), local: 'Stade de Lyon' },
    { jogo: 2, equipeA: getTeam('Canadá'), equipeB: getTeam('Nova Zelândia'), local: 'Stade Geoffroy-Guichard'},
    { jogo: 3, equipeA: getTeam('Estados Unidos'), equipeB: getTeam('Zâmbia'), local: 'Stade de Nice' },
    { jogo: 4, equipeA: getTeam('Alemanha'), equipeB: getTeam('Austrália'), local: 'Stade de Marseille' },
    { jogo: 5, equipeA: getTeam('Espanha'), equipeB: getTeam('Japão'), local: 'Stade de la Beaujoire, Nantes' },
    { jogo: 6, equipeA: getTeam('Nigéria'), equipeB: getTeam('Brasil'), local: 'Stade de Bordeaux' },
]

console.log(jogosDia1)

// Criando Partidas
var blocoPartidas = document.getElementById('p1')

jogosDia1.forEach((jogo,index) => {
    const divJogo = document.createElement('div')
    const cadaPartida = document.createElement('div')
    divJogo.id = 'blocoJogos'

    cadaPartida.innerHTML = `
    <h3>Jogo ${jogo.jogo}: ${jogo.equipeA.pais} x ${jogo.equipeB.pais} | ${jogo.local}</h3>
    <label for="game${index}-team1">${jogo.equipeA.pais} Gols: </label>
    <input type="number" id="game${index}-team1" name="game${index}-team1" min="0">
    <label for="game${index}-team2">${jogo.equipeB.pais} Gols: </label>
    <input type="number" id="game${index}-team2" name="game${index}-team2" min="0">
    <br><br>`

    divJogo.appendChild(cadaPartida)
    blocoPartidas.appendChild(divJogo)

    if (index === jogosDia1.length - 1) {
        const botaoMostrar = document.createElement('button');
        const divBotao = document.createElement('div')
        
        divBotao.id = 'divBotao'
        botaoMostrar.textContent = 'Proximo Dia ->';
        botaoMostrar.id = 'botaoNext'
        botaoMostrar.onclick = mostrarResultados;

        divBotao.appendChild(botaoMostrar)
        blocoPartidas.appendChild(divBotao);
    }
})

// Resultados dos Jogos
function mostrarResultados() {
    jogosDia1.forEach((jogo, index) => {
        var time1Gols = parseInt(document.getElementById(`game${index}-team1`).value) || 0
        var time2Gols = parseInt(document.getElementById(`game${index}-team2`).value) || 0
    
    if (time1Gols > time2Gols) {
        jogo.equipeA.vitoria++;
        jogo.equipeB.derrota++;
        jogo.equipeA.pontos += 3;

    } else if (time1Gols < time2Gols) {
        jogo.equipeB.vitoria++;
        jogo.equipeA.derrota++;
        jogo.equipeB.pontos += 3;

    } else {
        jogo.equipeA.empate++;
        jogo.equipeB.empate++;
        jogo.equipeA.pontos++;
        jogo.equipeB.pontos++;
    }
})
updateTable()
}

// Função para limpar a tabela dentro de blocoRank
function limparTabela() {
    const blocoRank = document.getElementById('p2');
    const tabelaAntiga = blocoRank.querySelector('table');

    if (tabelaAntiga) {
        blocoRank.removeChild(tabelaAntiga); // Remove a tabela antiga, se existir
    }
}

function updateTable() {
    times.sort((a,b) => b.pontos - a.pontos)

    limparTabela()

    const blocoRank = document.getElementById('p2');
    const tabela = document.createElement('table');
    const cabecalho = document.createElement('tr');

    // Títulos das colunas
    const tituloTabela = document.createElement('th');
    const vitoriasTabela = document.createElement('th');
    const empatesTabela = document.createElement('th');
    const derrotasTabela = document.createElement('th');
    const pontosTabela = document.createElement('th');

    tituloTabela.innerHTML = 'Times';
    vitoriasTabela.innerHTML = 'Vitórias';
    empatesTabela.innerHTML = 'Empates';
    derrotasTabela.innerHTML = 'Derrotas';
    pontosTabela.innerHTML = 'Pontos';

    cabecalho.appendChild(tituloTabela);
    cabecalho.appendChild(vitoriasTabela);
    cabecalho.appendChild(empatesTabela);
    cabecalho.appendChild(derrotasTabela);
    cabecalho.appendChild(pontosTabela);
    tabela.appendChild(cabecalho);

    // Adicionando os Times a tabela
    times.forEach((time, index) => {
        const linha = document.createElement('tr');

        if (index == 0) {
            linha.classList.add('primeiro')
        }

        if (index == 1) {
            linha.classList.add('segundo')
        }

        if (index == 2) {
            linha.classList.add('terceiro')
        }

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
}
