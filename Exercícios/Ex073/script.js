const configDGV = {
    endpoint: 'produtos.json',
    idDestino: 'ProdutosDGV'
}

const datagridview = (configDGV) => {
    const DadosDGV = document.getElementById('DadosDGV')
    DadosDGV.innerHTML = ''
    fetch(configDGV.endpoint)
    .then(res => res.json())
    .then(res => {
        res.forEach(el => {
            const tr = document.createElement('tr')
            
            const td1 = document.createElement('td')
            td1.setAttribute('class', 'c1')
            td1.innerHTML = el.id
            tr.appendChild(td1)

            const td2 = document.createElement('td')
            td2.setAttribute('class', 'c2')
            td2.innerHTML = el.produto
            tr.appendChild(td2)

            const td3 = document.createElement('td')
            td3.setAttribute('class', 'c3')
            td3.innerHTML = el.marca
            tr.appendChild(td3)

            const td4 = document.createElement('td')
            td4.setAttribute('class', 'c4')
            td4.innerHTML = el.modelo
            tr.appendChild(td4)

            const td5 = document.createElement('td')
            td5.setAttribute('class', 'c5')
            tr.appendChild(td5)

            const iconZoom = document.createElement('img')
            iconZoom.setAttribute('class', 'icons')
            iconZoom.setAttribute('src', 'zoomIcon.svg')
            td5.appendChild(iconZoom)

            const iconEdit = document.createElement('img')
            iconEdit.setAttribute('class', 'icons')
            iconEdit.setAttribute('src', 'editIcon.svg')
            td5.appendChild(iconEdit)

            const iconDelete = document.createElement('img')
            iconDelete.setAttribute('class', 'icons')
            iconDelete.setAttribute('src', 'deleteIcon.svg')
            td5.appendChild(iconDelete)

            ProdutosDGV.appendChild(tr)
        })

        console.log(res)
    })
}

datagridview(configDGV)
