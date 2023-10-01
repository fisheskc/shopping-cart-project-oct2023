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
    purchaseItem: {
        type: Schema.Types.ObjectId,
        ref: 'PurchaseItem'
    } 
})
// productSchema.methods.getPurchaseItem(id) {
// let findPurchaseItem = Purchaseitem.findById(id).then(data => console.log(data))
//     console.log("This is findPurchaseItem")
//     console.log(findPurchaseItem)
// }
// console.log(getPurchaseItem())

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

