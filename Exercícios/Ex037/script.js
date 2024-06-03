var todosCursos = [...document.getElementsByClassName('curso')]
var cursos1 = [...document.getElementsByClassName('c1')]
var cursos2 = [...document.getElementsByClassName('c2')]
var cursoEspecial = document.getElementsByClassName('curso')[0]


cursos2.map((el) => {
    el.classList.add('destaque')
})