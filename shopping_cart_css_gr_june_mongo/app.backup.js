const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const ejsMate = require('ejs-mate');
const ejsMate = require('ejs');
const methodOverride = require('method-override');
const Product = require('./backend/productSch');
const Purchaseitem = require('./backend/purchaseItemSch');
const { v4: uuidv4 } = require('uuid');

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
    
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'));

// app.get('/products', async (req, res) => {
//     const products = await Product.find({})
//         console.log(products)
//     res.render('products/index', {products})
//     // res.send('Products here')
// })

// localhost:3000 - home page
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/products/new', async (req, res) => {
    const products = await Product.find({})
    res.render('products/new')
    // res.send('New here')
})

// display the product to the webpage, {products} - this will render
// the products to the webpage
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
    // res.send('New here')
})

app.post('/products', async(req, res) => {
    const product = new Product(req.body.product);
    await product.save();
    res.redirect(`/products/${product._id}`)
})

// looks up the product in the DB here, using the ID, will then display the 
// product on show.ejs
app.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('products/show', {product})
    // res.send('New here')
})

// connects to the mongo DB through express here to create a new product
// app.get('/backend', async (req, res) => {
//     const product = new Product({name: 'special mouse', price: 45, quantity: 15 });
//     await product.save();
//     res.send(product);
// })

app.get('/purchaseitems/purchaseNew', async (req, res) => {
    const purchaseitems = await Purchaseitem.find({})
    res.render('purchaseitems/purchaseNew')
    // res.send('New purchaseitems here')
})

// display the product to the webpage, {products} - this will render
// the products to the webpage
app.get('/purchaseitems', async (req, res) => {
    const purchaseitem = await Purchaseitem.find({})
    res.render('purchaseitems/purchaseIndex', {purchaseitem})
    // res.send('New here')
})

// app.post('/purchaseitems', async(req, res) => {
//     const purchaseitem = await Purchaseitem(req.body.purchaseitem);
//     await purchaseitem.save();
//     res.redirect(`/purchaseitems/${purchaseitem._id}`)
// })



// looks up the product in the DB here, using the ID, will then display the 
// product on show.ejs
// app.get('/purchaseitems/:id', async (req, res) => {
//     const purchaseitem = await Purchaseitem.findById(req.params.id)
//     console.log(purchaseitem)
//     res.render('purchaseitems/purchaseShow', {purchaseitem})
//     // res.send('Show page here')
// })


app.listen(3000, () => {
    console.log("App is listening on Port 3000")
})











