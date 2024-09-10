const data = new Date()
const mesCerto = data.getMonth() + 1

const dataDia = data.getDate() < 10 ? '0' + data.getDate(): data.getDate()
const dataMes = mesCerto < 10 ? '0' + mesCerto: mesCerto


const dataHJ = `${dataDia}/${dataMes}/${data.getFullYear()}`

const relogio = () => {
    const dataHora = data.getHours() < 10 ? '0' + data.getHours(): data.getHours()
    const dataMin = data.getMinutes() < 10 ? '0' + data.getMinutes(): data.getMinutes()
    const dataSec = data.getSeconds() < 10 ? '0' + data.getSeconds(): data.getSeconds()

    const dataHJ2 = `${dataHora}:${dataMin}:${dataSec}`
    
    console.log(dataHJ2)
    console.log()
}

console.log(dataHJ)
console.log('------------')


// const intervalo = setInterval(relogio, 1000)