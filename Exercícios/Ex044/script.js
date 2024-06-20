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

const grupos = {
    GrupoA: [
        getTeam('França'),
        getTeam('Colômbia'),
        getTeam('Canadá'),
        getTeam('Nova Zelândia')
    ],
    GrupoB: [
        getTeam('Estados Unidos'),
        getTeam('Zâmbia'),
        getTeam('Alemanha'),
        getTeam('Austrália')
    ],
    GrupoC: [
        getTeam('Espanha'),
        getTeam('Japão'),
        getTeam('Nigéria'),
        getTeam('Brasil')
    ]
}

var jogosDia1 = [
    { jogo: 1, equipeA: getTeam('França'), equipeB: getTeam('Colômbia'), local: 'Stade de Lyon' },
    { jogo: 2, equipeA: getTeam('Canadá'), equipeB: getTeam('Nova Zelândia'), local: 'Stade Geoffroy-Guichard'},
    { jogo: 3, equipeA: getTeam('Estados Unidos'), equipeB: getTeam('Zâmbia'), local: 'Stade de Nice' },
    { jogo: 4, equipeA: getTeam('Alemanha'), equipeB: getTeam('Austrália'), local: 'Stade de Marseille' },
    { jogo: 5, equipeA: getTeam('Espanha'), equipeB: getTeam('Japão'), local: 'Stade de la Beaujoire, Nantes' },
    { jogo: 6, equipeA: getTeam('Nigéria'), equipeB: getTeam('Brasil'), local: 'Stade de Bordeaux' },
]

var jogosDia2 = [
    { jogo: 7, equipeA: getTeam('França'), equipeB: getTeam('Canadá'), local: 'Stade Geoffroy-Guichard' },
    { jogo: 8, equipeA: getTeam('Nova Zelândia'), equipeB: getTeam('Colômbia'), local: 'Stade de Lyon'},
    { jogo: 9, equipeA: getTeam('Estados Unidos'), equipeB: getTeam('Alemanha'), local: 'Stade de Marseille' },
    { jogo: 10, equipeA: getTeam('Austrália'), equipeB: getTeam('Zâmbia'), local: 'Stade de Nice' },
    { jogo: 11, equipeA: getTeam('Espanha'), equipeB: getTeam('Nigéria'), local: 'Stade de la Beaujoire, Nantes' },
    { jogo: 12, equipeA: getTeam('Brasil'), equipeB: getTeam('Japão'), local: 'Parc des Princes, Paris' },
]

var jogosDia3 = [
    { jogo: 13, equipeA: getTeam('Nova Zelândia'), equipeB: getTeam('França'), local: 'Stade de Lyon' },
    { jogo: 14, equipeA: getTeam('Colômbia'), equipeB: getTeam('Canadá'), local: 'Stade de Nice'},
    { jogo: 15, equipeA: getTeam('Austrália'), equipeB: getTeam('Estados Unidos'), local: 'Stade de Marseille' },
    { jogo: 16, equipeA: getTeam('Zâmbia'), equipeB: getTeam('Alemanha'), local: 'Stade Geoffroy-Guichard' },
    { jogo: 17, equipeA: getTeam('Brasil'), equipeB: getTeam('Espanha'), local: '	Stade de Bordeaux' },
    { jogo: 18, equipeA: getTeam('Japão'), equipeB: getTeam('Nigéria'), local: 'Stade de la Beaujoire, Nantes' },
]

// Criando Partidas
var blocoPartidas = document.getElementById('p1')


function renderDia(dia) {
    limparJogos()

    dia.forEach((jogo, index) => {
        const divJogo = document.createElement('div')
        const cadaPartida = document.createElement('div')
        const titulo = document.createElement('h1')
        divJogo.id = 'blocoJogos'
        
        if(index == 0) {
            titulo.innerHTML = 'Partidas olimpícas'
            blocoPartidas.appendChild(titulo)
        }

        cadaPartida.innerHTML = `
        <h3>Jogo ${jogo.jogo}: ${jogo.equipeA.pais} x ${jogo.equipeB.pais} | ${jogo.local}</h3>
        <label for="game${index}-team1">${jogo.equipeA.pais} Gols: </label>
        <input type="number" id="game${index}-team1" name="game${index}-team1" min="0">
        <label for="game${index}-team2">${jogo.equipeB.pais} Gols: </label>
        <input type="number" id="game${index}-team2" name="game${index}-team2" min="0">
        <br><br>`

        divJogo.appendChild(cadaPartida)
        blocoPartidas.appendChild(divJogo)

        if (index === dia.length - 1) {
            const botaoMostrar = document.createElement('button')
            const divBotao = document.createElement('div')
            
            divBotao.id = 'divBotao'
            botaoMostrar.textContent = 'Proximo Dia ->'
            botaoMostrar.id = 'botaoNext'
            botaoMostrar.onclick = () => {
                mostrarResultados(dia)
            }

            divBotao.appendChild(botaoMostrar)
            blocoPartidas.appendChild(divBotao)
        }
    })
}

renderDia(jogosDia1); // Renderiza o dia 1 inicialmente

// Resultados dos Jogos
function mostrarResultados(dia) {
    dia.forEach((jogo, index) => {
        var time1Gols = parseInt(document.getElementById(`game${index}-team1`).value) || 0
        var time2Gols = parseInt(document.getElementById(`game${index}-team2`).value) || 0
    
        if (time1Gols > time2Gols) {
            jogo.equipeA.vitoria++
            jogo.equipeB.derrota++
            jogo.equipeA.pontos += 3

        } else if (time1Gols < time2Gols) {
            jogo.equipeB.vitoria++
            jogo.equipeA.derrota++
            jogo.equipeB.pontos += 3

        } else {
            jogo.equipeA.empate++
            jogo.equipeB.empate++
            jogo.equipeA.pontos++
            jogo.equipeB.pontos++
        }
    })
    updateTable()
    updateGrupos()
    limparJogos()
    if (dia === jogosDia1) {
        renderDia(jogosDia2)
    } else if (dia === jogosDia2) {
        renderDia(jogosDia3)
    }
}

function limparJogos() {
    const blocoPartidas = document.getElementById('p1');
    while (blocoPartidas.firstChild) {
        blocoPartidas.removeChild(blocoPartidas.firstChild);
    }
}

// Função para limpar a tabela dentro de blocoRank
function limparTabela() {
    const blocoRank = document.getElementById('p2');
    const tabelaAntiga = blocoRank.querySelector('table');

    if (tabelaAntiga) {
        blocoRank.removeChild(tabelaAntiga); // Remove a tabela antiga, se existir
    }
}

function limparTabelasGrupos() {
    const blocoRank = document.getElementById('p2');
    const tabelasGrupos = blocoRank.querySelectorAll('.todos-grupos');

    tabelasGrupos.forEach(grupo => {
        blocoRank.removeChild(grupo);
    });
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



function updateGrupos() {
    limparTabelasGrupos()

    const blocoRank = document.getElementById('p2');
    const gruposKeys = Object.keys(grupos);

    // Cria um contêiner div para todas as tabelas de grupos
    const divTodosGrupos = document.createElement('div');
    divTodosGrupos.classList.add('todos-grupos')

    gruposKeys.forEach(grupo => {
        const divGrupo = document.createElement('div')
        divGrupo.classList.add('grupo')

        const tabelaGrupos = document.createElement('table');
        
        const grupoNome = grupo.slice(0, 5)
        const grupoNumero = grupo.slice(5)

        const thGrupo = document.createElement('th');
        thGrupo.innerHTML = `${grupoNome} ${grupoNumero}`;
        tabelaGrupos.appendChild(thGrupo);

        const thPontos = document.createElement('th');
        thPontos.innerHTML = 'Pontos';
        tabelaGrupos.appendChild(thPontos);

        // Obtém os países do grupo atual e ordena por pontos
        const paises = grupos[grupo].sort((a, b) => b.pontos - a.pontos);

        // Cria uma linha para cada país no grupo
        paises.forEach(pais => {
            const tr = document.createElement('tr');

            const tdNomePais = document.createElement('td');
            tdNomePais.innerHTML = pais.pais;
            tr.appendChild(tdNomePais);

            const tdPontosPais = document.createElement('td');
            tdPontosPais.innerHTML = pais.pontos;
            tr.appendChild(tdPontosPais);

            tabelaGrupos.appendChild(tr);
        });

        // Adiciona a tabela ao contêiner do grupo (divGrupo)
        divGrupo.appendChild(tabelaGrupos);

        // Adiciona o contêiner do grupo ao contêiner de todas as tabelas de grupos
        divTodosGrupos.appendChild(divGrupo);
    });

    // Adiciona o contêiner de todas as tabelas de grupos ao blocoRank
    blocoRank.appendChild(divTodosGrupos);
}

updateGrupos()