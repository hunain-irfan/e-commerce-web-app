import { getCartProductFromLocalStorage } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage()


export const addToCart = (event, id, stock) => {
    const currentCardElement = document.querySelector(`#card${id}`)

    let arrayLocalStorageProduct = getCartProductFromLocalStorage();

    let quantity = Number(currentCardElement.querySelector(".productQuantity").innerText)



    let price = Number(currentCardElement.querySelector(".productPrice").innerText.replace("$", ""))

    let existingProduct = arrayLocalStorageProduct.find((currentProduct) => currentProduct.id === id)

    if (existingProduct ) {

        if (existingProduct.quantity + quantity > stock) {
            alert(`Sorry, adding ${quantity} more items exceeds the available stock of ${stock}.`);
            return false;
        }

        let newQuantity = existingProduct.quantity + quantity
        let newPrice = price * newQuantity;
        let updatedCart = { id, quantity : newQuantity, price : newPrice }

        updatedCart = arrayLocalStorageProduct.map((currentProductLs) => {
            if (currentProductLs.id === id) {
                return updatedCart;
            }
            return currentProductLs;

        })
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

        showToast("add", id)


    }

    if (existingProduct) {
        return false;
    }

    price = price * quantity;


    arrayLocalStorageProduct.push({ id, quantity, price })
    localStorage.setItem("cartProductLS", JSON.stringify(arrayLocalStorageProduct))


    // Update the cart value button
    updateCartValue(arrayLocalStorageProduct)
    showToast("add", id)

}