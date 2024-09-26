const cursos = ['Javascript','HTML','CSS','Arduino','Raspberry','C++','Python','Java','C#']
const carros = ['Polo','T-Cross','Golf','Onix','Cruze','Argo','Cronos']

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso) {
    return cursos[i_curso]
}

export {cursos, getCurso}