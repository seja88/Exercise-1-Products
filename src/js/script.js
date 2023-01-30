import Product from './Product'
import { products } from './Product'

products.forEach(element => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.className = 'product'
    div.innerHTML = `Product choosen:  ${element.name}| Cost of the product:  ${element.price}$| In store:  ${element.quantity} left.`
    const button = document.createElement('button')
    document.body.appendChild(button)
    button.className = 'button'
    button.innerHTML = 'BUY'
    button.addEventListener('click', () => {
        element.sell()
        div.innerHTML = `Product choosen:  ${element.name}| Cost of the product:  ${element.price}$| In store:  ${element.quantity} left.`
    })
});

