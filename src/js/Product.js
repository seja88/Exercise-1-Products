class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    sell = (name) => {
        if (this.quantity > 0)
        this.quantity--;
    }
    store(count) {
        this.quantity += count
    }
}

export const products = [
    new Product('phone', 1200, 50),
    new Product('PS5', 350, 1255),
    new Product('laptop', 2500, 30),
    new Product('mouse', 50, 1222),
    new Product('charger', 25, 99),
    new Product('airpods', 349, 60),
    new Product('chip', 399, 19)

]
// console.log(products[0]);
// products[0].sell()
// products[0].sell()
// console.log(products[0])

console.log(`Before storing: ${products[0].quantity}`);
products[0].store(10);
console.log(`After storing: ${products[0].quantity}`);
console.log('IT WORKS :D');
export default Product