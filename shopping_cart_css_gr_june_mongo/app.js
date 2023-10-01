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
    const product = await Product.findById(req.params.id).populate('purchaseItem')
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
    const order = new Order({createdDateAt})
    console.log("This is order date for the products")
    console.log(order)
   
    const purchaseitem = new Purchaseitem({quantity, product, order});
    purchaseitem.name = product.name;

    await order.save();
    await product.save();
    await purchaseitem.save();
    // res.send(purchaseitem)
    res.redirect(`/products/${id}`)
})

// find price in products
// total quantity * price
// let purchaseitemTotal = product.price * purchaseitem.quantity 
// store selectedItems in an array
// use object.enties on both Purchaseitem & Products - see new_nutrition_Aug_27 folder, line 181

// changed here
app.get('/products/:id/purchaseitems', async (req, res) => {
    let selectedpurchase = []
    const {id} = req.params;
    // const purchaseitem = await Purchaseitem.findById(req.params.id).populate('product');
    const purchaseitem = await Purchaseitem.findById(id)
    const purchaseitemPrice = await Purchaseitem.findById(id).populate('product', 'price').exec();
    const purchaseitemOrderDate = await Purchaseitem.findById(id).populate('product', 'createdDateAt').exec();
    console.log(purchaseitemPrice)
    // let findPrice = purchaseitemPrice.product.price
    // const populated = await purchaseitem Purchaseitem & 
    console.log("******* This is purchaseitem info *******");
    const product = await Product.findById(id);
    let storePurchaseOrder = (quantity) => {
    //   let selectedItemsName = name 
          Object.entries(product).forEach((item) => {
            console.log(item)
            let selectedItemsTotal = item.price * quantity
            console.log("******* selectedItemsTotal *******");
            console.log(selectedItemsTotal)
            return selectedItemsTotal
        })
           
            // let dateOfOrder = createdDateAt
            // selectedpurchase.push({orderDate: dateOfOrder, purchaseitem: purchaseitem, price: selectedItemsTotal})  
            // console.log("//////// storePurchaseOrder(selectedpurchase) ///////");
            // return selectedpurchase.map((item) => {
            // console.log(item)
            // let yourpurchase = `This is your purchase ${item.orderDate} ${item.purchaseitem} ${item.price}`
            // return yourpurchase
        // })
    }
      console.log(storePurchaseOrder())
    
    // res.render('purchaseitems/show', {purchaseitem})
    // res.render('purchaseitems/show', { populated})
    res.send('New here')
})

app.get('/purchaseitems/:id', async (req, res) => {
    const purchaseitem = await Purchaseitem.findById(req.params.id)
    console.log(purchaseitem)
    res.render('purchaseitems/purchaseShow', {purchaseitem})
    // res.send('Show page here')
})


app.listen(3000, () => {
    console.log("App is listening on Port 3000")
})











