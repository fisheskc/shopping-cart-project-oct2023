const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const Product = require('./backend/productSch');
// const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/shoppingcart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.set('', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/products', (req, res) => {
//     res.send('GET/ products response')
// })

// app.post('/products', (req, res) => {
//     const {name,price,quantity} = (req.body)
//     res.send("POST / products response")
// })

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})






