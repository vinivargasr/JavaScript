import {Login} from './login.js'

fetch('http://localhost:3000/usuarios/teste')
.then(resp => resp.json())
// .then(dados => console.log(dados))
// .catch(erro => console.log(erro))

Login.login('123','321')