import {OrderReview} from "./orderReview.js";
import {Eventhandler} from "./eventhandler.js";

export class Product {
     static catalogue = []
    constructor(name, price, id) {
        this._name = name;
        this._price = price;
        this._id = id
    }
    // add the product here
    static defineProduct(name, price, id=0) {
        if(id == 0) {
           id = Product.catalogue.length + 1;
        }
        let newProduct = new Product(name, price, id)
        Product.catalogue.push(newProduct);
        return newProduct
        }

    static getProductById(id) {
        let productFound = Product.catalogue.find(product => id == product._id)
        // console.log(productFound)
        return productFound 
    }   
}

Product.defineProduct("keyboard", 50, 3);
Product.defineProduct("screen", 200, 4);
Product.defineProduct("mouse", 30, 5);
Product.defineProduct("headphones", 50, 6);
Product.defineProduct("mobile phone", 800, 7);
Product.defineProduct("hard drive", 75, 8);
Product.defineProduct("ethernet cable 10m", 25, 9);
Product.defineProduct("office desk", 175, 10);
Product.defineProduct("office chair", 250, 11);
