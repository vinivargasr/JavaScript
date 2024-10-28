import {Login} from './login.js'

fetch('http://127.0.0.1:5500/Exerc%C3%ADcios/Ex072/sla.js')
.then(resp => resp.json())
.then(json => console.log(json))


Login.login('123','321')