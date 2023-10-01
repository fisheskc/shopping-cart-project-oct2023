const mongoose = require('mongoose');
const Product = require('./backend/productSch');
const Order = require('./backend/orderSch');

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

// const product = new Product({
//     name: "external harddrive",
//     price: 70,
//     quantity: 9
// })

// product.save().then(product => {
//     console.log(product)
// }).catch(e => {
//     console.log(e)
// })

const seedProducts = [
        {name: "screen", price: 200, quantity: 0},
        {name: "mouse", price: 30, quantity: 0},
        {name: "headphones", price: 50, quantity: 0},
        {name: "mobile phone", price: 800, quantity: 0},
        {name: "hard drive", price: 75, quantity: 0},
        {name: "ethernet cable 10m", price: 25, quantity: 0},
        {name: "office desk", price: 175, quantity: 0},
        {name: "office chair", price: 250, quantity: 0}
]

Product.insertMany(seedProducts).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})

const orderDate = new Order({
    createdDateAt: Date.now()
})

orderDate.save().then(orderDate => {
       console.log(orderDate)
    }).catch(e => {
       console.log(e)
    })
