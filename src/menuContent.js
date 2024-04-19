let menuButton = document.getElementById('menu')
let divContent = document.getElementById('content')


function buttonMenu(){
menuButton.addEventListener('click', () => {
    divContent.innerHTML = ''
    let menuDiv = document.createElement('div')
    menuDiv.id = 'menuDiv'

    function menuStyle(dish){
        menuDiv.appendChild(dish)
        dish.id = 'dish'
    }

    let dish1 = document.createElement('p')
    dish1.innerText = 'Gin and Salt of Mothia-Marinated Red Shrimps \n on Oyster Mayonnaise and Crispy Algae, \n Smoked with Juniper'
    menuStyle(dish1)

    let dish2 = document.createElement('p')
    dish2.innerText = 'Syracuse Potato Cream, with Sea Lettuce Algae \n    and Cooked-Raw Oyster Sponge'
    menuStyle(dish2)

    let dish3 = document.createElement('p')
    dish3.innerText = 'Cuttlefish ink Crepe Roll \n with Langoustine in Sea Urchin Sauce'
    menuStyle(dish3)

    let dish4 = document.createElement('p')
    dish4.innerText = 'Mancini Mezze Maniche Pasta \n with Smokend Prawns with Flakes of Jack Daniel’s \n Barrels and Egg Yolk Cream'
    menuStyle(dish4)    

    let dish5 = document.createElement('p')
    dish5.innerText = 'Sicilian Tuna “Tortelli” \n on Tomato Cream Datterino with Mint'
    menuStyle(dish5)
    
    let dish6 = document.createElement('p')
    dish6.innerText = 'Cod Fillet with Iblea Saffron and Zucchini Cream'
    menuStyle(dish6)

    divContent.appendChild(menuDiv)

})
}

export {buttonMenu}

