
import { buttonHome } from "./homeContent"

export function background(){
    let backgroundImg = document.getElementById('background')

    let img = document.createElement('img')
    img.src = '../src/img/pexels-pixabay-260922.jpg'
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.position = 'absolute'
    img.style.top = '0';
    img.style.left = '0';
    img.style.zIndex = '-1'

    backgroundImg.appendChild(img)
    buttonHome()
    return backgroundImg
}

