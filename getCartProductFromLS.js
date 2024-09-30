import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocalStorage = ()=>{
    let cartProducts = localStorage.getItem("cartProductLS");
    
    if (!cartProducts) {
        cartProducts = [];
    } else {
        cartProducts = JSON.parse(cartProducts);
    };

    // Update the cart value button
    updateCartValue (cartProducts)
    
    return cartProducts
}