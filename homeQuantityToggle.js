export const homeQuantityToggle = (event, id, stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`)

    const currentProductQuantity = currentCardElement.querySelector(".productQuantity")

    let quantity =  parseInt(currentProductQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity = quantity + 1;
        } else if(quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity = quantity - 1;
        }
    }


    currentProductQuantity.textContent = quantity;
    currentProductQuantity.setAttribute("data-quantity",  quantity.toString());
    return quantity;



}