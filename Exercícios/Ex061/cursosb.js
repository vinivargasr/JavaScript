class Cursos {
    static cursos = ['Javascript','HTML','CSS','Arduino','Raspberry','C++','Python','Java','C#']
    
    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (iCurso) => {
        return this.cursos[iCurso]
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }
    
    static apagarCurso = () => {
        this.cursos = []
    }
}

export default Cursos