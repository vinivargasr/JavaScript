const texto = document.getElementById('texto')

fetch('texto.txt')
.then(res => res.text())
.then(res => {
    res = JSON.parse(res)
    console.log(res.exemplo)
    console.log(res.sla)
})