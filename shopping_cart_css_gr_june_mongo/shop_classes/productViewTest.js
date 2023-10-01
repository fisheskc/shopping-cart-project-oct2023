import {Product} from "./product.js";
import {Eventhandler} from "./eventhandler.js";
// ul catalogue
const catalogueList = document.getElementById('catalogue');
let orderId = document.getElementById("order-id");

export class ProductView {
    // this generates DOM elements
    static showCatalogue() {
        let orderIdValue = Number(orderId.getAttribute("value"));
        console.log(orderIdValue++)
        orderId.setAttribute("value", orderIdValue)
        console.log(Product.catalogue)
        Product.catalogue.forEach((product) => {
            let liTag = document.createElement("li");
            liTag.setAttribute("data-product-id", product._id)
            // name element
            let divName = document.createElement("div");
            divName.classList.add("product-name")
            divName.innerHTML = product._name;
            liTag.appendChild(divName);
            // price element
            let divPrice = document.createElement("div");
            divPrice.classList.add("product-price")
            divPrice.innerHTML = product._price;
            liTag.appendChild(divPrice);
    
            // quantity element
            let inputQuantity = document.createElement("input");
            inputQuantity.classList.add("product-quantity");
            inputQuantity.setAttribute("type", "text");
            // quantity to be added here, value is the JS value of the input box
            inputQuantity.value = 0
            // console.log(inputQuantity);
            liTag.appendChild(inputQuantity);
    
            catalogueList.appendChild(liTag);
            
            inputQuantity.addEventListener("input", Eventhandler.quantityInput);

            liTag.addEventListener("click", Eventhandler.productClicked);

            // submit the form
           
        })
       
    }
    
}