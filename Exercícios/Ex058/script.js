const url = document.getElementById('url')
const btnUrl = document.getElementById('btnUrl')

btnUrl.addEventListener('click',(evt) => {
    // window.location = "https://www.google.com"
    // window.location.replace('https://www.google.com')
    // window.location.assign('https://www.google.com')
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go()
    // console.log(window.history.length)
    window.location = url.value
})