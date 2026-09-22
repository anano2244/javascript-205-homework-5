const cart = ['Milk', 'Bread'];
function addItem(cartArray, item) {
    cartArray.push(item);
}
console.log('before addItem:', cart);

function withItem(cartArray, item) {
    return [...cartArray, item]
}
addItem(cart, 'eggs');
console.log('After addItem:', cart);
console.log('Before withItem:', cart);
const newCart = withItem(cart, 'Cheese');
console.log('Returned by withItem:', newCart);
console.log('After addItem:', cart);

// withItem is pure because it returns a new array copy without modifying the original array, 
// whereas addItem is not pure because it mutates (changes) the original array directly.

