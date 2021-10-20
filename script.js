class GoodsItem {
    constructor(title, price) {
        this.title = title
        this.price = price
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = []
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'Shoes', price: 250 },
        ]
    }
    render() {
        let listHtml = ""
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price)
            listHtml += goodItem.render()
        })
        document.querySelector(".goods-list").innerHTML = listHtml
    }

    summ() {
        return this.goods.reduce((acc, currentValue) => acc + currentValue.price, 0)
    }
}

const list = new GoodsList()
list.fetchGoods()
list.render()
list.summ()



// Корзина

class Cart {
    constructor() {
        this.cart = []
    }


    deleteAllGoods() {

    }


}
class CartItem {
    constructor(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    deleteGood() {

    }
    plusGood() {

    }
    minusGood() {

    }

}



class Hamburger {
    constructor(size, stuffing) {
        this.stuffing = stuffing
        this.size = size
    }






    addTopping(topping) {  //добавить добавку

    }
    removeTopping(topping) {  // убрать добавку

    }
    getToppings(topping) {  // получить спсок добавок

    }

    getSize() { // получить размер гамбургера
        return size
    }
    getStuffing() { //узнать начинку гамбургера

    }
    calculatePrice() { // Узнать цену

    }
    calculateCalories() { // Узнать калорийность

    }
}

let hun = new Hamburger()
hun(15, 50)
hun.size()

