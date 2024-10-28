import {Login} from './login.js'

fetch('https://vinivargasr.github.io/JavaScript/Exerc%C3%ADcios/Ex072/sla.js')
.then(resp => resp.json())
.then(json => console.log(json))


Login.login('123','321')