import products from "./api/product.json"
import { fetchQuantityFromCartLs } from "./fetchQuantityFromCartLs";
import { getCartProductFromLocalStorage } from "./getCartProductFromLS"
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let selectedCartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((currentProductElement)=>{
    return selectedCartProducts.some((currentCartElement)=> currentCartElement.id === currentProductElement.id)
})

const cartContainer = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate")

filterProducts.forEach((currentProduct)=>{

    const {id, name, brand, category, description, image, price, stock} = currentProduct;


    const productClone = document.importNode(templateContainer.content, true);
    const isActualData = fetchQuantityFromCartLs(id, price)
    
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productPrice").textContent = isActualData.price;
    productClone.querySelector(".productQuantity").textContent = isActualData.quantity;

    productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event)=>{
            incrementDecrement(event, id, stock, price);
        })

    productClone.querySelector(".remove-to-cart-button").addEventListener("click",()=>{
        removeProductFromCart(id);
    })




    cartContainer.append(productClone);
})

// showing the Cart Products
// showCartProduct();

// calculating the card total in our cartProducts page
updateCartProductTotal()