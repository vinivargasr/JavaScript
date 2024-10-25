class Login {
    static logado = false
    static matricula = null
    static nome = null
    static acesso = null
    static endpoint = 'https://loginv1.cfbcursos.repl.co/'

    static login = (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
        .then(res => res.json())
        .then(res => {
            if (res) {
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