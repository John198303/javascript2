const goods = [
    { title: 'Shirt', price: 150, img: 'img/shirt.jpg' },
    { title: 'Jeans', price: 50, img: 'img/jins.jpg' },
    { title: 'Jacket', price: 350, img: 'img/jacket.jpg' },
    { title: 'Shoes', price: 250, img: 'img/shoose.jpg' }
];

const $goodsList = document.querySelector('.goods-list');

 goods.forEach(good => $goodsList.innerHTML += `<div class="goods-item"><h3><img width="100" src="${good.img}"></h3><hr><h3>${good.title}</h3><p><span class="span-price">${good.price}$</span></p>
 <div class="parent-add"><a class="a-class" href="#"> Добавить</a></div>
</div> `)






// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//     );

//     $goodsList.innerHTML = goodsList.join(" ");
// }

// renderGoodsList();


