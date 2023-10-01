const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const ejsMate = require('ejs-mate');
const ejsMate = require('ejs');
const methodOverride = require('method-override');
const Product = require('./backend/productSch');
const Purchaseitem = require('./backend/purchaseItemSch');
const Order = require('./backend/orderSch');
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

// localhost:3000 - home page
app.get('/', (req, res) => {
    res.render('home')
})

// display the product to the webpage, {products} - this will render
// the products to the webpage
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
    // res.send('New here')
})

app.get('/products/new', async (req, res) => {
    res.render('products/new')
    // res.send('New here')
})

app.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    const purchaseitems = await Purchaseitem.find({ product: product }, 'quantity');
    // const product = await Product.findById(req.params.id).populate('purchaseitem').exec()
    // const product = await Product.findById(req.params.id).populate({path: 'purchaseitem', populate:'quantity'})
    console.log("This Get product ID")
    console.log(product)
    res.render('products/show', {product, purchaseitems})
    // res.send('New here')
})

app.post('/products', async(req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products')
})

// this shows the purchaseitem on products show.ejs
app.get('/products/:id/purchaseitems/purchaseNew', async (req, res) => {
    const {id} = req.params
    console.log("This is purchaseitem new here")
    console.log(id)
    const product = await Product.findById(id)
    console.log(product)
    // res.send('New here')
    res.render('purchaseitems/purchaseNew', {product})
    // res.send('New purchaseitems here')
})

app.post('/products/:id/purchaseitems', async(req, res) => {
    const {id} = req.params;
    console.log("This is the id of the product")
    console.log(id)
    const product = await Product.findById(id);
    console.log("This is product");
    console.log(product)
    const {name, price, quantity, createdDateAt} = req.body;
    // const purchaseitem = new Purchaseitem({price, quantity});
    // console.log(name)
    console.log(quantity)
    const order = new Order({createdDateAt})
    console.log("This is order date for the products")
    console.log(order)
    const purchaseitem = new Purchaseitem({quantity, product, order});
    purchaseitem.name = product.name;
    // purchaseitem.order = product.order;
    console.log("This is purchaseitem.order for the product")
    console.log(purchaseitem.order)
    console.log("This is purchaseitem for the products")
    console.log(purchaseitem)
    // product.purchaseitem.push(purchaseitem)
    await order.save();
    await product.save();
    await purchaseitem.save();
    // res.send(purchaseitem)
    res.redirect(`/products/${id}`)
})

// changed here
app.get('/purchaseitems/:id', async (req, res) => {
    // const purchaseitem = await Purchaseitem.findById(req.params.id).populate('product');
    const purchaseitem = await Purchaseitem.findById(req.params.id);
    const product = await Product.findById(req.params.id);
    const populated = await purchaseitem.populate('product');
    console.log(req.params.id);
    console.log(purchaseitem);
    console.log(populated);
    // res.render('purchaseitems/show', {purchaseitem})
    res.render('purchaseitems/show', { populated})
    // res.send('New here')
})

app.listen(3000, () => {
    console.log("App is listening on Port 3000")
})









