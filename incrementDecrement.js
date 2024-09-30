import { getCartProductFromLocalStorage } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`)
    const currentProductQuantityElement = currentCardElement.querySelector(".productQuantity")
    const currentProductPriceElement = currentCardElement.querySelector(".productPrice")

    let quantity = 1;
    let localStoragePrice = 0;

    let selectedCartProducts = getCartProductFromLocalStorage();
    let existingProduct = selectedCartProducts.find((currentProduct) => currentProduct.id === id)

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price
        price = price
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity = quantity + 1;
        } else if (quantity === stock) {
            quantity = stock;
            alert("You have reached the maximum available stock!");
            localStoragePrice = price * stock;
        }
    }

    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity = quantity - 1;
        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = { id, quantity, price: localStoragePrice }

    updatedCart = selectedCartProducts.map((currentProductLs) => {
        if (currentProductLs.id === id) {
            return updatedCart;
        }
        return currentProductLs;

    })
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

    currentProductQuantityElement.textContent = quantity
    currentProductPriceElement.textContent = localStoragePrice

    // calculating the card total in our cartProducts page
    updateCartProductTotal()
}