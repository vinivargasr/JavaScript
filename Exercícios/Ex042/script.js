const bloco = document.getElementById('p2');

const adicionarDia = (data, jogos, proximosJogos) => {
    const dia = document.createElement('h2');
    dia.innerHTML = data;
    dia.style = 'margin: 30px 0px 0px 10px;';
    bloco.appendChild(dia);

    const partidas = [];
    const resultados = {};

    for (let i = 0; i < jogos.length; i++) {
        const j = document.createElement('p');
        j.style = 'width: 600px; height: 40px; margin: 20px 0px 0px 10px; background-color: white; color: black; border: 2px solid gray; display:flex; align-items: center; text-indent: 30px;';
        j.innerHTML = jogos[i].descricao;

        partidas.push(j);
        bloco.appendChild(j);

        const resultContainer = document.createElement('div');
        resultContainer.style = 'display:flex; align-items:center; justify-content:space-between; margin-top: 10px; margin-left:20px; width:580px';

        const opcoes = [`Vitória ${jogos[i].timeA}`, 'Empate', `Vitória ${jogos[i].timeB}`];

        for (let k = 0; k < opcoes.length; k++) {
            const label = document.createElement('label');

            const radio = document.createElement('input');
            radio.style = 'margin-right:5px';
            radio.type = 'radio';
            radio.name = `resultado${i}`;
            radio.value = opcoes[k];

            radio.addEventListener('change', () => {
                resultados[`jogo ${i + 1}`] = radio.value;
                console.log(resultados);
            });

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opcoes[k]));

            resultContainer.appendChild(label);
        }

        bloco.appendChild(resultContainer);
    }

    const botaoNext = document.createElement('button');
    botaoNext.innerText = 'Próxima Fase ⮕';
    botaoNext.style = 'color:black; padding:10px; margin-top: 30px; margin-left: 495px';
    botaoNext.addEventListener('click', () => {
        const totalJogos = jogos.length;
        const totalResultados = Object.keys(resultados).length;

        if (totalResultados < totalJogos) {
            alert('Por favor, preencha todos os resultados antes de prosseguir.');
        } else {
            console.log('Resultados Finais:', resultados);
            bloco.innerHTML = '';
            if (proximosJogos) {
                adicionarDia(proximosJogos.data, proximosJogos.jogos, proximosJogos.proximosJogos);
            } else {
                criarFaseEliminatoria(resultados);
            }
        }
    });

    bloco.appendChild(botaoNext);
};

// Função para criar a fase eliminatória
const criarFaseEliminatoria = (resultadosGrupos) => {
    const vencedores = determinarVencedores(resultadosGrupos);
    console.log('Vencedores dos Grupos:', vencedores);

    const jogosEliminatoria = [
        { descricao: `${vencedores['Grupo A'][0]} x ${vencedores['Grupo B'][1]} | 21:00 | Stade de la Beaujoire, Nantes (Jogo 19)`, timeA: vencedores['Grupo A'][0], timeB: vencedores['Grupo B'][1] },
        { descricao: `${vencedores['Grupo B'][0]} x ${vencedores['Grupo C'][1]} | 15:00 | Parc des Princes, Paris (Jogo 20)`, timeA: vencedores['Grupo B'][0], timeB: vencedores['Grupo C'][1] },
        { descricao: `${vencedores['Grupo C'][0]} x ${vencedores['Grupo A'][1]} | 17:00 | Stade de Lyon (Jogo 21)`, timeA: vencedores['Grupo C'][0], timeB: vencedores['Grupo A'][1] },
        { descricao: `${vencedores['Grupo A'][2]} x ${vencedores['Grupo B'][2]} | 19:00 | Stade de Marseille (Jogo 22)`, timeA: vencedores['Grupo A'][2], timeB: vencedores['Grupo B'][2] }
    ];

    adicionarDia('Sábado, 3 de agosto 2024', jogosEliminatoria);
};

// Função para determinar os vencedores dos grupos
const determinarVencedores = (resultadosGrupos) => {
    const grupos = {
        'Grupo A': ['França', 'Colômbia', 'Canadá', 'Nova Zelândia'],
        'Grupo B': ['EUA', 'Zâmbia', 'Alemanha', 'Austrália'],
        'Grupo C': ['Espanha', 'Japão', 'Nigéria', 'Brasil']
    };

    const vencedores = {
        'Grupo A': [],
        'Grupo B': [],
        'Grupo C': []
    };

    
    for (let grupo in grupos) {
        const times = grupos[grupo];
        vencedores[grupo] = times.sort(() => 0.5 - Math.random());
    }

    return vencedores;
};

// Jogos do primeiro dia
const jogos = [
    { descricao: 'França x Colômbia | 21:00 | Stade de Lyon (Jogo 1)', timeA: 'França', timeB: 'Colômbia' },
    { descricao: 'Canadá x Nova Zelândia | 17:00 | Stade Geoffroy-Guichard (Jogo 2)', timeA: 'Canadá', timeB: 'Nova Zelândia' },
    { descricao: 'EUA x Zâmbia | 21:00 | Stade de Nice (Jogo 3)', timeA: 'EUA', timeB: 'Zâmbia' },
    { descricao: 'Alemanha x Austrália | 19:00 | Stade de Marseille (Jogo 4)', timeA: 'Alemanha', timeB: 'Austrália' },
    { descricao: 'Espanha x Japão | 17:00 | Stade de la Beaujoire, Nantes (Jogo 5)', timeA: 'Espanha', timeB: 'Japão' },
    { descricao: 'Nigéria x Brasil | 19:00 | Stade de Bordeaux (Jogo 6)', timeA: 'Nigéria', timeB: 'Brasil' }
];

// Jogos do segundo dia
const jogos2 = [
    { descricao: 'França x Canadá | 21:00 | Stade Geoffroy-Guichard, Saint-Etienne (Jogo 7)', timeA: 'França', timeB: 'Canadá' },
    { descricao: 'Nova Zelândia x Colômbia | 17:00 | Stade de Lyon (Jogo 8)', timeA: 'Nova Zelândia', timeB: 'Colômbia' },
    { descricao: 'EUA x Alemanha | 21:00 | Stade de Marseille (Jogo 9)', timeA: 'EUA', timeB: 'Alemanha' },
    { descricao: 'Austrália x Zâmbia | 19:00 | Stade de Nice (Jogo 10)', timeA: 'Austrália', timeB: 'Zâmbia' },
    { descricao: 'Espanha x Nigéria | 19:00 | Stade de la Beaujoire, Nantes (Jogo 11)', timeA: 'Espanha', timeB: 'Nigéria' },
    { descricao: 'Brasil x Japão | 17:00 | Parc des Princes, Paris (Jogo 12)', timeA: 'Brasil', timeB: 'Japão' }
];

// Jogos do terceiro dia
const jogos3 = [
    { descricao: 'França x Nigéria | 21:00 | Stade de Lyon (Jogo 13)', timeA: 'França', timeB: 'Nigéria' },
    { descricao: 'Brasil x Canadá | 17:00 | Stade Geoffroy-Guichard, Saint-Etienne (Jogo 14)', timeA: 'Brasil', timeB: 'Canadá' },
    { descricao: 'Alemanha x Japão | 21:00 | Stade de Nice (Jogo 15)', timeA: 'Alemanha', timeB: 'Japão' },
    { descricao: 'Espanha x Zâmbia | 19:00 | Stade de Marseille (Jogo 16)', timeA: 'Espanha', timeB: 'Zâmbia' },
    { descricao: 'EUA x Austrália | 17:00 | Stade de la Beaujoire, Nantes (Jogo 17)', timeA: 'EUA', timeB: 'Austrália' },
    { descricao: 'Nova Zelândia x Colômbia | 19:00 | Stade de Bordeaux (Jogo 18)', timeA: 'Nova Zelândia', timeB: 'Colômbia' }
];

// Adicionar o primeiro dia de jogos
adicionarDia('Terça-feira, 25 de julho 2024', jogos, { data: 'Domingo, 28 de julho 2024', jogos: jogos2, proximosJogos: { data: 'Quarta-feira, 31 de julho 2024', jogos: jogos3 } });
