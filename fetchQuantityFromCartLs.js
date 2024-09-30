import { getCartProductFromLocalStorage } from "./getCartProductFromLS";

export const fetchQuantityFromCartLs = (id, price)=>{
let selectedCartProducts = getCartProductFromLocalStorage();

let existingProduct = selectedCartProducts.find((currentProduct)=> currentProduct.id === id)

let quantity = 1;

if(existingProduct){
    quantity = existingProduct.quantity
    price = existingProduct.price
}
return{price, quantity}
}
