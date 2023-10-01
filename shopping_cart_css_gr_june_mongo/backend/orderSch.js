const mongoose = require('mongoose');
const PurchaseItemSch = require('./purchaseItemSch');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    createdDateAt: {
        type: Date,
        default: () => Date.now()
    },
    completedAt: {
        type: Date,
        default: () => Date.now(),
        ref: "PurchaseItem"
    },
    purchaseItem: {
        type: Schema.Types.ObjectId,
        ref: 'PurchaseItem'
    }

})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

