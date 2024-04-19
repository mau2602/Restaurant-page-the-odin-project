
let contentDiv = document.getElementById('content')
let aboutBtn = document.getElementById('about')


function buttonAbout(){

    aboutBtn.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    let aboutDiv = document.createElement('div')
    let aboutP = document.createElement('p')
    aboutP.id = 'aboutP'

    aboutP.innerText = 'Contact Us!'

    aboutDiv.appendChild(aboutP)
    contentDiv.appendChild(aboutDiv)
})
}
export {buttonAbout}