class Login {
    static logado = false
    static matricula = null
    static nome = null
    static acesso = null
    static endpoint = 'http://localhost:3000/usuarios'
    static senhaTeste = 321
    static usuarioTeste = 123

    static login = (mat, pas) => {
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