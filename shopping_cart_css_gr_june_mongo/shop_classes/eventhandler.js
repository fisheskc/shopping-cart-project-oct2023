// MVC Project
// modal - the data
// view - the gui you see, webpage
// controller - eventhandler, clicked links/buttons etc

import {Product} from "./product.js";
import {PurchaseItem} from "./purchaseItem.js";
import {OrderReview} from "./orderReview.js";
import {CustomerOrder} from "./customerOrder.js";
import {ProductView} from "./productView.js";
// import {Checkout} from "./checkout.js";
const catalogueList = document.getElementById('catalogue');
const totalPrice = document.getElementById('total-price');
const order = document.getElementById('order');
let container = document.querySelector(".container");
const purchaseOrder = document.querySelector("form");
const customerMess = document.getElementById('total-price');
const submitOrder = document.getElementById('submit-order');
// let formElement = document.getElementById('your-order');
let orderId = document.getElementById("order-id");
// let orderMessage = document.getElementById("order-id");


let new_value; 
let mice = 'mice'
let letter = 's';

export class Eventhandler {
    // click handler here
    static quantityInput(event) {
        let productId = Number(event.target.parentNode.getAttribute("data-product-id"));

        let quantityValue = Number(event.currentTarget.value);
        // This displays the total price
        PurchaseItem.quantityOfPurchaseItem(productId, quantityValue)
        //  PurchaseItem quantityValue passed to orderReview       
        // finds the original id from the catalogue store in product.js - product._name
        const myProduct = Product.getProductById(productId);
      
        // Original product id is passed in from the catalogue store
        // let orderId = CustomerOrder.defineCustomerOrder(myProduct)
        // creates a new PurchaseItem object here
        let newItem = new PurchaseItem(productId, quantityValue, myProduct._name)
        console.log(newItem)
        // PurchaseItem is passed into this and OrderReview displays the customer items on the webpage
        OrderReview.showProductView(newItem)
        quantityValue = 0;
        return newItem
    }

    static PurchaseOrderId() {
        let orderIdValue = Number(orderId.getAttribute("value"));
        console.log(orderIdValue++)
        // orderId.setAttribute("value", orderIdValue)
        let divOrderId = document.createElement("div");
        // divOrderId.classList.add("orderId")
        // let valueOrderId = divOrderId.innerText = orderIdValue;
        let valueOrderId = divOrderId.innerText = orderIdValue;
        console.log(Number(valueOrderId))
        // orderMessage.appendChild(divOrderId);
        return valueOrderId;
     }

    static submitPurchaseOrder(event) {
        console.log("Form submitted here")
        event.preventDefault()
        // orderId.addEventListener("input", Eventhandler.PurchaseOrderId);
        // let yrOrderId = Eventhandler.PurchaseOrderId()
        // console.log(yrOrderId)
        purchaseOrder.reset();
    }

    // clicks the li product
    static productClicked(event) {
        // console.log("clicked");
        event.target.parentNode;
        event.currentTarget;
        
        // takes the users input here
        let productId = event.currentTarget.getAttribute("data-product-id")
        // purchaseItem needs connecting here
        let product = Product.getProductById(productId)
        return product;
    }
   
}
