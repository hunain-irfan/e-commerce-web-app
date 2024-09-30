import { getCartProductFromLocalStorage } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id)=>{

let selectedCartProducts = getCartProductFromLocalStorage();

selectedCartProducts = selectedCartProducts.filter((currentProduct)=> currentProduct.id !== id)

// update localStorage after removing the item onClick
localStorage.setItem("cartProductLS", JSON.stringify(selectedCartProducts))

// remove the div onClick
let removeDiv = document.getElementById(`card${id}`);

if(removeDiv){
    removeDiv.remove()
    showToast("delete", id)
}

updateCartValue(selectedCartProducts);

// calculating the card total in our cartProducts page
updateCartProductTotal()

}