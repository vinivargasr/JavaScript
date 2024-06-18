const bloco = document.getElementById('p2');

let tabelaJogos = document.querySelector('.tabelaJogos')

fetch('jogos-fase1.json')
.then( response => response.json())
.then( data => data.forEach( jogo => {

    let linha = document.createElement('tr')
    tabelaJogos.appendChild(linha)

    linha.innerHTML = `
        <td>${jogo.diaSemana}</td>
        <td>${jogo.data}</td>
        <td>${jogo.hora}</td>
        <td>${jogo.grupo}</td>
        <td class='centralizar'>
            <img class='imagens' src='./imagens/bandeiras/${jogo.mandante}'>
            <span class='gols'>${jogo.gols_mandante}</span>
            ${jogo.partida}
            <span class='gols'>${jogo.gols_visitante}</span>
            <img class='imagens' src='./imagens/bandeiras/${jogo.visitante}'>
        </td>
        <td class='alinhamentoesq'>${jogo.estadio}</td>
    `
}))
