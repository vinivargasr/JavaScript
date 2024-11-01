class Login {
    static logado = false
    static matricula = null
    static nome = null
    static acesso = null
    static endpoint = 'http://localhost:3000/usuarios/teste'
    static senhaTeste = 321
    static usuarioTeste = 123
    
    static verificarLogin = () => {
            const mat = document.getElementById('iuser').value
            let pas = document.getElementById('isenha').value
            if (mat == '123' && pas == '321') {
                return true
            } else {
                return false
            }
        }

    static login = () => {
        fetch(this.endpoint)
        .then(res => res.json())
        .then(res => {
            if (res && this.usuarioTeste == mat && this.senhaTeste == pas) {
                this.logado = true
                this.matricula = mat
                this.nome = res.nome
                this.acesso = res.acesso
                console.log(res)
            } else {
                console.log(`Usuário não encontrado`)
            }
        })
    }
}

export {Login}