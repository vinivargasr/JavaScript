const verde = document.getElementById('verde')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const azul = document.getElementById('azul')
const cores = [verde, vermelho, amarelo, azul]

verde.addEventListener(('click'), () => {
    verde.style.backgroundColor = '#3BFF00'
    setTimeout(() => {
        verde.style.backgroundColor = 'rgb(58, 194, 58)';
    }, 350);
    checkUserSelection(verde)
})

vermelho.addEventListener(('click'), () => {
    vermelho.style.backgroundColor = '#F40000'
    setTimeout(() => {
        vermelho.style.backgroundColor = 'rgb(199, 62, 62)';
    }, 350);
    checkUserSelection(vermelho)
})

amarelo.addEventListener(('click'), () => {
    amarelo.style.backgroundColor = '#FFD200'
    setTimeout(() => {
        amarelo.style.backgroundColor = 'rgb(190, 205, 50)';
    }, 350);
    checkUserSelection(amarelo)
})



azul.addEventListener(('click'), () => {
    azul.style.backgroundColor = '#00BFFF'
    setTimeout(() => {
        azul.style.backgroundColor = 'rgb(49, 82, 189)';
    }, 350);
    checkUserSelection(azul)
})

const start = document.getElementById('start')
let corCerta = false;
let gameStarted = false

start.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        gameStarted = true;
    } else {
        resetGame();
    }
});

function startGame() {
    corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    corAleatoria.click();
    corCerta = true;
}

function resetGame() {
    corAleatoria = null;
    corPrimeiraRodada = null;
    corCerta = false;
    awaitingUserSelection = false;
    gameStarted = false;

    verde.style.backgroundColor = 'rgb(58, 194, 58)';
    vermelho.style.backgroundColor = 'rgb(199, 62, 62)';
    amarelo.style.backgroundColor = 'rgb(190, 205, 50)';
    azul.style.backgroundColor = 'rgb(49, 82, 189)';
}

function checkUserSelection(corEscolhida) {
    if (corCerta && corEscolhida === corAleatoria) {
        alert('BOA')
    } else if (corCerta) {
        corCerta = false
        const piscaCinza = setInterval(() => {
            verde.style.backgroundColor = '#808080';
            vermelho.style.backgroundColor = '#808080';
            amarelo.style.backgroundColor = '#808080';
            azul.style.backgroundColor = '#808080';
    
            setTimeout(() => {
                verde.style.backgroundColor = 'rgb(58, 194, 58)';
                vermelho.style.backgroundColor = 'rgb(199, 62, 62)';
                amarelo.style.backgroundColor = 'rgb(190, 205, 50)';
                azul.style.backgroundColor = 'rgb(49, 82, 189)';
            }, 150);
        }, 300);
    
        setTimeout(() => {
            clearInterval(piscaCinza);
            verde.style.backgroundColor = 'rgb(58, 194, 58)';
            vermelho.style.backgroundColor = 'rgb(199, 62, 62)';
            amarelo.style.backgroundColor = 'rgb(190, 205, 50)';
            azul.style.backgroundColor = 'rgb(49, 82, 189)';
        }, 900);
    }
}

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;