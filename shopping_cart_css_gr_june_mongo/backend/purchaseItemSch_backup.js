const mongoose = require('mongoose');
const ProductSch = require('./productSch');
const OrderSch = require('./orderSch');
const Schema = mongoose.Schema;

const purchaseItemSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    grandTotalOfPurchases: {
        type: Number
    },
    product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
    }, 
    order: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
    }
    
})

const Purchaseitem = mongoose.model('Purchaseitem', purchaseItemSchema);
module.exports = Purchaseitem;