document.addEventListener('DOMContentLoaded', function() {

    const addButtons = document.querySelectorAll('.addToCartButton');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Added to cart!");
        });
    });

});