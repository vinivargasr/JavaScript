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

    const form = document.createElement('form')
    form.id = 'formPartidas'
    
    dia.forEach((jogo, index) => {
        const divJogo = document.createElement('div')
        const cadaPartida = document.createElement('div')
        const titulo = document.createElement('h1')
        divJogo.id = 'blocoJogos'
        
        if(index == 0) {
            titulo.innerHTML = 'Partidas olímpicas'
            blocoPartidas.appendChild(titulo)
        }

        cadaPartida.innerHTML = `
        <h3>Jogo ${jogo.jogo}: ${jogo.equipeA.pais} x ${jogo.equipeB.pais} | ${jogo.local}</h3>
        <label for="game${index}-team1">${jogo.equipeA.pais} Gols: </label>
        <input type="number" id="game${index}-team1" name="game${index}-team1" min="0" required>
        <label for="game${index}-team2">${jogo.equipeB.pais} Gols: </label>
        <input type="number" id="game${index}-team2" name="game${index}-team2" min="0" required>
        <br><br>`

        divJogo.appendChild(cadaPartida)
        form.appendChild(divJogo)
    })

    const divBotao = document.createElement('div')
    divBotao.id = 'divBotao'
    
    const botaoMostrar = document.createElement('button')
    botaoMostrar.textContent = 'Proximo dia ->'
    botaoMostrar.id = 'botaoNext'
    botaoMostrar.type = 'submit' // Define o botão como tipo submit

    const botaoAleatorio = document.createElement('button')
    botaoAleatorio.textContent = 'Jogos aleatórios'
    botaoAleatorio.id = 'botaoRandom'
    botaoAleatorio.type = 'button' // Define o botão como tipo button

    botaoAleatorio.onclick = () => {
        dia.forEach((jogo, index) => {
            const team1Input = document.getElementById(`game${index}-team1`);
            const team2Input = document.getElementById(`game${index}-team2`);

            // Gerando números aleatórios para os gols
            const randomGoalsTeam1 = Math.random() < 0.005 ? 999 : Math.floor(Math.random() * 8)
            const randomGoalsTeam2 = Math.random() < 0.005 ? 999 : Math.floor(Math.random() * 8)

            // Atualizando os valores nos inputs
            team1Input.value = randomGoalsTeam1;
            team2Input.value = randomGoalsTeam2;
        });
    };

    divBotao.appendChild(botaoAleatorio)
    divBotao.appendChild(botaoMostrar)
    form.appendChild(divBotao)
    blocoPartidas.appendChild(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault() // Previne o envio do formulário
        mostrarResultados(dia) // Chama a função de mostrar resultados
    })
}

renderDia(jogosDia1); // Renderiza o dia 1 inicialmente

// Resultados dos Jogos
let diaAtual = 1;
let jogosResultados = []

function mostrarResultados(dia) {
    dia.forEach((jogo, index) => {
        var time1Gols = parseInt(document.getElementById(`game${index}-team1`).value) || 0;
        var time2Gols = parseInt(document.getElementById(`game${index}-team2`).value) || 0;
    
        // Atualizar resultados do jogo
        if (time1Gols > time2Gols) {
            jogo.resultado = { vencedor: jogo.equipeA, perdedor: jogo.equipeB, golsA: time1Gols, golsB: time2Gols };
            jogo.equipeA.vitoria++;
            jogo.equipeB.derrota++;
            jogo.equipeA.pontos += 3;
        } else if (time1Gols < time2Gols) {
            jogo.resultado = { vencedor: jogo.equipeB, perdedor: jogo.equipeA, golsA: time2Gols, golsB: time1Gols };
            jogo.equipeB.vitoria++;
            jogo.equipeA.derrota++;
            jogo.equipeB.pontos += 3;
        } else {
            jogo.resultado = { empate: true, golsA: time1Gols, golsB: time2Gols };
            jogo.equipeA.empate++;
            jogo.equipeB.empate++;
            jogo.equipeA.pontos++;
            jogo.equipeB.pontos++;
        }
    });

    updateTable();
    updateGrupos();
    limparJogos();

    // Armazenar os resultados dos jogos processados
    jogosResultados = dia.map(jogo => ({ ...jogo }));

    diaAtual++;

    if (diaAtual === 2) {
        renderDia(jogosDia2);
    } else if (diaAtual === 3) {
        renderDia(jogosDia3);
    } else if (diaAtual === 4) {
        renderDia4();
    } else if (diaAtual === 5) {
        renderDia(definirPartidasDia5());
    } else if (diaAtual === 6) {
        renderDia(definirPartidasDia6());
    } else if (diaAtual === 7) {
        renderDiaFinal()
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

function definirPartidasDia4() {
    // Classificar times dentro de cada grupo com base nos pontos
    Object.values(grupos).forEach(grupo => grupo.sort((a, b) => b.pontos - a.pontos));

    const grupoA = grupos.GrupoA;
    const grupoB = grupos.GrupoB;
    const grupoC = grupos.GrupoC;

    // Definir as equipes para os jogos do Dia 4
    let jogo19, jogo20, jogo21, jogo22;

    // Definir partida 19
    if (grupoB[2].pontos >= grupoC[2].pontos) {
        jogo19 = { jogo: 19, equipeA: grupoA[0], equipeB: grupoB[2], local: 'Stade de la Beaujoire, Nantes'};
    } else {
        jogo19 = { jogo: 19, equipeA: grupoA[0], equipeB: grupoC[2], local: 'Stade de la Beaujoire, Nantes'};
    }

    // Definir partida 21 garantindo que o time 3A seja escolhido se o time 3B foi escolhido para o jogo 19
    if (jogo19.equipeB === grupoB[2]) {
        jogo21 = { jogo: 21, equipeA: grupoC[0], equipeB: grupoA[2], local: 'Stade de Lyon'};
    } else {
        // Se o time 3B não foi escolhido para o jogo 19, escolher entre o time 3B e 3A com mais pontos
        if (grupoA[2].pontos >= grupoB[2].pontos) {
            jogo21 = { jogo: 21, equipeA: grupoC[0], equipeB: grupoA[2], local: 'Stade de Lyon'};
        } else {
            jogo21 = { jogo: 21, equipeA: grupoC[0], equipeB: grupoB[2], local: 'Stade de Lyon'};
        }
    }

    // Definir as demais partidas
    jogo20 = { jogo: 20, equipeA: grupoB[0], equipeB: grupoC[1], local: 'Parc des Princes, Paris', horario: '15:00' };
    jogo22 = { jogo: 22, equipeA: grupoA[1], equipeB: grupoB[1], local: 'Stade de Marseille', horario: '19:00' };

    return [jogo19, jogo20, jogo21, jogo22];
}

function renderDia4() {
    const jogosDia4 = definirPartidasDia4();
    renderDia(jogosDia4);
}

function definirPartidasDia5() {
    // Definir os jogos do Dia 5 com base nos resultados armazenados (jogosResultados)
    const vencedorJogo19 = jogosResultados[0].resultado.vencedor;
    const vencedorJogo21 = jogosResultados[2].resultado.vencedor;
    const vencedorJogo20 = jogosResultados[1].resultado.vencedor;
    const vencedorJogo22 = jogosResultados[3].resultado.vencedor;

    const jogo23 = {
        jogo: 23,
        equipeA: vencedorJogo19,
        equipeB: vencedorJogo21,
        local: 'Stade de Marseille',
        horario: '21:00'
    };

    const jogo24 = {
        jogo: 24,
        equipeA: vencedorJogo20,
        equipeB: vencedorJogo22,
        local: 'Stade de Lyon',
        horario: '18:00'
    };

    return [jogo23, jogo24];
}

function renderDia5() {
    return definirPartidasDia5();
}

function definirPartidasDia6() {
    // Definir os jogos do Dia 6 com base nos resultados armazenados (jogosResultados)
    const vencedorJogo23 = jogosResultados[0].resultado.vencedor;
    const vencedorJogo24 = jogosResultados[1].resultado.vencedor;
    const perdedorJogo23 = jogosResultados[0].resultado.perdedor;
    const perdedorJogo24 = jogosResultados[1].resultado.perdedor;

    const jogo25 = {
        jogo: 25,
        equipeA: perdedorJogo23,
        equipeB: perdedorJogo24,
        local: 'Stade de la Beaujoire, Nantes',
        horario: '18:00',
        titulo: 'Decisão do 3º Lugar'
    };

    const jogo26 = {
        jogo: 26,
        equipeA: vencedorJogo23,
        equipeB: vencedorJogo24,
        local: 'Stade de France, Paris',
        horario: '21:00',
        titulo: 'Final'
    };

    return [jogo25, jogo26];
}

function renderDia6() {
    const jogosDia6 = definirPartidasDia6();
    renderDia(jogosDia6);
}

function renderDiaFinal() {
    limparJogos();
    const divFinal = document.createElement('div');
    const titulo = document.createElement('h1');
    titulo.innerHTML = 'Final das olimpíadas';
    const divNomes = document.createElement('div')
    divNomes.id = 'vencedores'
    divFinal.appendChild(titulo);

    const vencedorFinal = jogosResultados[1].resultado.vencedor
    const viceFinal = jogosResultados[1].resultado.perdedor
    const terceiroFinal = jogosResultados[0].resultado.vencedor
    

    const h3Vencedor = document.createElement('h2');
    h3Vencedor.innerHTML = `1° ${vencedorFinal.pais}`;
    divNomes.appendChild(h3Vencedor);
    h3Vencedor.id = 'top1'
    
    const h3Vice = document.createElement('h2');
    h3Vice.innerHTML = `2° ${viceFinal.pais}`;
    divNomes.appendChild(h3Vice);
    h3Vice.id = 'top2'

    const h3Terceiro = document.createElement('h2');
    h3Terceiro.innerHTML = `3° ${terceiroFinal.pais}`;
    divNomes.appendChild(h3Terceiro);
    h3Terceiro.id = 'top3'
    
    divFinal.appendChild(divNomes)
    blocoPartidas.appendChild(divFinal);

    const btn_confetes = document.createElement('button');
btn_confetes.id = 'animate_confetti';
btn_confetes.innerHTML = '🎉';

btn_confetes.addEventListener("click", () => {
    let params = {
        particleCount: 500, // Quantidade de confetes
        spread: 190, // O quanto eles se espalham
        startVelocity: 70, // Velocidade inicial
        origin: { x: 0, y: 1 }, // Posição inicial na tela
        angle: 90 // Ângulo em que os confetes serão lançados
    };

    // Joga confetes da esquerda pra direita
    confetti(params);

    // Joga confetes da direita para a esquerda
    params.origin.x = 1;
    params.angle = 90;
    confetti(params);
});

// Adiciona o botão ao elemento pai
divNomes.appendChild(btn_confetes)
}