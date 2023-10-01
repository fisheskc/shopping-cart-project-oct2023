const mongoose = require('mongoose');
const Product = require('./productSch');
const Order = require('./orderSch');
const Schema = mongoose.Schema;

const purchaseItemSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    selectedpurchase: [],
    
    product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
    }, 
    order: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
    }
    
})

// Find the product price
module.exports.purchaseItemOrder = async (quantityVal) => {
    let foundPurchase = []
    console.log(quantity)
    let findProducts = await Product.find({})
    let findPurchaseItem = await Purchaseitem.find({quantity: quantityVal})
    console.log(`This is purchaseItem: ${quantityVal}`)
    console.log(`This is findPurchaseItem: ${findPurchaseItem}`)
    for(const PurchaseI in findPurchaseItem) {
        console.log("This is purchaseItem")
        console.log(`purchaseItems here ${PurchaseI} ${findPurchaseItem}`) 
        // let purchaseItemTotal = findProducts.price * findPurchaseItem.quantity
        // if()
        console.log(quantityVal)
        return quantityVal
    }

    
}


const Purchaseitem = mongoose.model('Purchaseitem', purchaseItemSchema);
module.exports = Purchaseitem;