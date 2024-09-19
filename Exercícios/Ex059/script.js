const btnImprimir = document.getElementById('imprimir')
const table = document.querySelector('table')

btnImprimir.addEventListener('click', (evt) => {
    // const conteudo = document.getElementById('tabela').innerHTML
    // let estilo ='<style>'
    // estilo += 'table {width = 100%; font: 25px;}'
    // estilo += 'table, th, td {border: 1px solid #888; border-collapse: collapse;}'
    // estilo += 'padding: 4px 8px; text-aling: center;'
    // estilo += '</style>'

    // const win = window.open('', '', 'height = 700, width = 700')
    // win.document.write('<html><head>')
    // win.document.write('<title>Imprimir</title>')
    // win.document.write(estilo)
    // win.document.write('</head>')
    // win.document.write('<body>')
    // win.document.write(conteudo)
    // win.document.write('</body></html>')

    // win.print()

    table.style.width = '700px'
    table.style.height = '300px'
    btnImprimir.style.display = 'none'
    window.print()
    table.style.width = '300px'
    table.style.height = '100px'
    btnImprimir.style.display = 'block'
})