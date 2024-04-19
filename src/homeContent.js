let homeBtn = document.getElementById('home')
let divContent = document.getElementById('content')


homeBtn.addEventListener('click', ()=> {
    buttonHome()
})

function buttonHome() {  
    divContent.innerHTML = ''
    let homeDiv = document.createElement('div')
    let title = document.createElement('p')
    let pDiv = document.createElement('p')

    title.innerHTML = "Ristorante  Siracusa"
    title.style.color= 'white'
    title.style.fontSize = '50px'
    title.style.position = 'relative';
    title.style.textAlign = 'center';
    title.style.padding = '20px'
    title.style.fontWeight = '700'
    title.style.fontFamily = 'Parisienne'

    pDiv.innerText = 'Experience the best of Michelin-starred dining in Syracuse,\n with exquisite dishes highlighting modern Sicilian-Mediterranean inspired cuisine\n delivered with flawless service in beautiful surroundings.'
    pDiv.style.color = 'white'
    pDiv.style.textAlign = 'center'
    pDiv.style.position = 'relative'
    pDiv.style.fontSize = '20px'
    pDiv.style.fontFamily = 'coco gothic'

    homeDiv.appendChild(pDiv)
    divContent.appendChild(title)
    divContent.appendChild(homeDiv)
}


export {buttonHome}