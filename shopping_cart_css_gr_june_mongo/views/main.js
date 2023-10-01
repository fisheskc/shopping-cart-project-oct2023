import {ProductView} from "./productView.js";
import {Eventhandler} from "./eventhandler.js";
// import {OrderReview} from "./orderReview.js";
// import {PurchaseItem} from "./purchaseItem.js";
// import {Product} from "./product.js";
let purchaseOrder = document.getElementById("your-order")
console.log(purchaseOrder)
purchaseOrder.reset();

console.log("main")

console.log(ProductView.showCatalogue())

purchaseOrder.addEventListener("submit", Eventhandler.submitPurchaseOrder);

// purchaseOrder - 
// need to reset the purchaseOrder form with reset - purchaseOrder.reset();
