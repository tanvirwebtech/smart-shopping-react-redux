// add to cart
export function addToCart(product) {
    return { type: "ADD_TO_CART", payload: product.id };
}
export function removeFromCart(product) {
    return { type: "REMOVE_FROM_CART", payload: product.id };
}
export function clearCart() {
    return { type: "CLEAR_CART" };
}
