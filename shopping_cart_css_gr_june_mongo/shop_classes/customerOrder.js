import {PurchaseItem} from "./purchaseItem.js";

export class CustomerOrder {
    constructor(order_id) {
        this._order_id = order_id;
    }

    getOrder_id() {
        return this.order_id = +1
    }

    static defineCustomerOrder(order_id=0) {
        if(order_id == 0 && order_id==undefined) {
            
            
           order_id++;
          
        }
        let newOrder = new CustomerOrder(order_id)
        // PurchaseItem.itemsStore.push(newOrder);
        // console.log(PurchaseItem.itemsStore)
        console.log(newOrder)
        return newOrder
    }
   
}