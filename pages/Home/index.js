function sayHello() {

    const popup = document.getElementById("discountPopup");
    
    popup.style.display = "flex";

    const removeButton = document.getElementById("removeButton");

    removeButton.addEventListener('click', function() {
        popup.style.display = "none";
    });
}

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(sayHello, 3000);

    const addButtons = document.querySelectorAll('.addToCartButton');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Added to cart!");
        });
    });

});