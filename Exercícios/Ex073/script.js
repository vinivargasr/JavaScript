const configDGV = {
    endpoint: 'http://localhost:1880/produtos',
    idDestino: 'ProdutosDGV'
}

const datagridview = (configDGV) => {
    const DadosDGV = document.getElementById('DadosDGV')
    DadosDGV.innerHTML = ''
    fetch(configDGV.endpoint)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        res.forEach(el => {
            const tr = document.createElement('tr')
            
            const td1 = document.createElement('td')
            td1.setAttribute('class', 'c1')
            td1.innerHTML = el.n_id_produto
            tr.appendChild(td1)

            const td2 = document.createElement('td')
            td2.setAttribute('class', 'c2')
            td2.innerHTML = el.s_nome_produto
            tr.appendChild(td2)

            const td3 = document.createElement('td')
            td3.setAttribute('class', 'c3')
            td3.innerHTML = el.s_marca_produto
            tr.appendChild(td3)

            const td4 = document.createElement('td')
            td4.setAttribute('class', 'c4')
            td4.innerHTML = el.s_modelo_produto
            tr.appendChild(td4)

            const td5 = document.createElement('td')
            td5.setAttribute('class', 'c5')
            tr.appendChild(td5)

            const iconZoom = document.createElement('img')
            iconZoom.setAttribute('class', 'icons')
            iconZoom.setAttribute('src', 'zoomIcon.svg')
            iconZoom.addEventListener('click', (evt) => {
                document.getElementById('janelaVisualizar').classList.remove('ocultar')
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpoint = `http://localhost:1880/produtos/${id}`
                fetch(endpoint)
                .then(res => res.json())
                .then(res => {
                    document.getElementById('iid').value = res[0].n_id_produto
                    document.getElementById('iproduto').value = res[0].s_nome_produto
                    document.getElementById('imarca').value = res[0].s_marca_produto
                    document.getElementById('imodelo').value = res[0].s_modelo_produto
                })
            })
            td5.appendChild(iconZoom)

            const iconEdit = document.createElement('img')
            iconEdit.setAttribute('class', 'icons')
            iconEdit.setAttribute('src', 'editIcon.svg')
            td5.appendChild(iconEdit)

            const iconDelete = document.createElement('img')
            iconDelete.setAttribute('class', 'icons')
            iconDelete.setAttribute('src', 'deleteIcon.svg')
            iconDelete.addEventListener('click', (evt) => {
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const linha = evt.target.parentNode.parentNode
                const endpoint = `http://localhost:1880/removeproduto/${id}`
                fetch(endpoint)
                .then(res => {
                    if (res.status == 200) {
                        linha.remove()
                    }
                })
            })
            td5.appendChild(iconDelete)

            ProdutosDGV.appendChild(tr)
        })
    })
}

datagridview(configDGV)


document.getElementById('btnOK').addEventListener('click', (evt) => {
    document.getElementById('janelaVisualizar').classList.add('ocultar')
    document.getElementById('iid').value = ''
    document.getElementById('iproduto').value = ''
    document.getElementById('imarca').value = ''
    document.getElementById('imodelo').value = ''
})