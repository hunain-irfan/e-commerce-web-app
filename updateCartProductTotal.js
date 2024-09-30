import { getCartProductFromLocalStorage } from "./getCartProductFromLS";

export const updateCartProductTotal = ()=>{

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let selectedCartProducts = getCartProductFromLocalStorage();
    let initialValue = 0;
    let totalSelectedProductPrice = selectedCartProducts.reduce((accumulated, currentElement)=>{
        let productPrice = parseInt(currentElement.price) || 0;
        return accumulated + productPrice
    }, initialValue)

    productSubTotal.textContent = "$" + totalSelectedProductPrice;
    productFinalTotal.textContent =  "$"+ totalSelectedProductPrice + 30
}