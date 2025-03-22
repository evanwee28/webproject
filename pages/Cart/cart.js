const calculateTotal = () => {
    const priceElements = document.querySelectorAll('.cart-item-price');
    let total = 0;

    priceElements.forEach(element => {
        const price = parseFloat(element.textContent.replace('$', ''));
        total += price;
    });

    document.getElementById("subtotal").textContent = "$" + total.toFixed(2);
    document.getElementById("summary-subtotal").textContent = "$" + total.toFixed(2);
    calculateTax(total);
    
}

const calculateTax = (price) => {
    let taxPrice = price * 0.13;

    document.getElementById("tax").textContent = "$" + taxPrice.toFixed(2);
    document.getElementById("total").textContent = "$" + (price + taxPrice).toFixed(2);

    document.getElementById("summary-tax").textContent = "$" + taxPrice.toFixed(2);
    document.getElementById("summary-total").textContent = "$" + (price + taxPrice).toFixed(2);
}

const calculateItems = () => {
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    return removeButtons.length
}

document.addEventListener('DOMContentLoaded', function() {
    calculateTotal();

    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            document.getElementById("total-items").textContent = "Subtotal (" + calculateItems() + " items)";
            
            calculateTotal();
        });
    });

    document.getElementById("total-items").textContent = "Subtotal (" + calculateItems() + " items)";
});

