import {PurchaseItem} from "./purchaseItem.js";
import {Product} from "./product.js";
import {Eventhandler} from "./eventhandler.js";

let submitButton = document.getElementById("submit-order");
// ul itemsStore
const itemsStoreList = document.getElementById('itemsStore');
// const yourOrder = document.getElementById('order');
let container = document.querySelector(".container");
let orderList = document.querySelector(".order-list");
let orderMessage = document.getElementById("order-message");

const totalPrice = document.getElementById('total-price');
let mice = 'mice'
let letter = 's';

export class OrderReview {
   
    static showProductView(purchaseItem) {
        // console.log(purchaseItem) 
     
        const myProduct = Product.getProductById(purchaseItem.product_id);
       
        let divItemPrice = document.createElement("div");
       
        PurchaseItem.getTotalPurchasePrice()
        // productId look up here
        
        PurchaseItem.quantityOfPurchaseItem._quantity

        let divOrder = document.createElement("li");
        divOrder.classList.add("order-id");

        orderMessage.innerHTML = `This is your order number here: ${Eventhandler.PurchaseOrderId()}`

        // Total price of the basket purchase is output here using the ID totalPrice.
        totalPrice.innerHTML = `This is the total price is: <b>£${PurchaseItem.getTotalPurchasePrice()}</b>`;
            
        totalPrice.appendChild(divItemPrice);

        divOrder.innerHTML = `This is the price <b>£${purchaseItem._costPrice}</b> for your selected <b>${purchaseItem._quantity}</b> products: <b></b> ${myProduct._name}</b>`

        // divOrder.appendChild(itemDiv);
        orderList.appendChild(divOrder);
        container.appendChild(divItemPrice);
      
        PurchaseItem.getTotalPurchasePrice() 
 
        return myProduct
    }
}



