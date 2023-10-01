const mongoose = require('mongoose');
const PurchaseItemSch = require('./purchaseItemSch');
const Schema = mongoose.Schema;
// let productName = document.getElementById("id-name");

const productSchema = new Schema({
    name: {
       type: String
    },
    price: {
        type: Number
    },
    // purchaseitem: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Purchaseitem'
    //     }
    // ]    
})

// productSchema.static('find', function(res, id) {
    
//     console.log("This is res")
//     console.log(id)
//     if(id) {
//        PurchaseItemSch.findById({
//           _id: {
//             $exists: id.PurchaseItemSch
            
//             }
//         })
//         productName.classList.add("product-name");
//     } else {
//         productName.classList.remove("product-name");
//     }
//     // res.render('products/index', {products})
//     res.send('New here')
// })

const Product = mongoose.model('Product', productSchema);
module.exports = Product;