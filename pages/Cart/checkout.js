document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkout-btn');

        checkoutButton.addEventListener('click', function() {
            document.getElementById("container-cart").style.display = "none";
            document.getElementById("container-checkout").style.display = "block";
        }); 
});

const validateForm = () => {
    // const form = document.getElementById("checkout-form");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const zip = document.getElementById("zip");

    const cardNumber = document.getElementById("cardNumber")
    const expDate = document.getElementById("expDate");
    const cvv = document.getElementById("cvv");

    if (firstName.value.trim() === "" || !/^[a-zA-Z]+$/.test(firstName.value)) {
        alert("Please enter a valid first name.");
        firstName.focus();
        return false;
    }
    if (lastName.value.trim() === "" || !/^[a-zA-Z]+$/.test(lastName.value)) {
        alert("Please enter a valid last name.");
        lastName.focus();
        return false;
    }
    if (email.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }
    if (zip.value.trim() === "" || !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(zip.value)) {
        alert("Please enter a valid zip code.");
        zip.focus();
        return false;
    }
    if (cardNumber.value.trim() === "" || !/^\d{16}$/.test(cardNumber.value)) {
        alert("Please enter a valid 16-digit card number.");
        cardNumber.focus();
        return false;
    }
    if (expDate.value.trim() === "" || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expDate.value)) {
        alert("Please enter a valid expiration date in MM/YY format.");
        expDate.focus();
        return false;
    }
    if (cvv.value.trim() === "" || !/^\d{3}$/.test(cvv.value)) {
        alert("Please enter a valid 3-digit CVV.");
        cvv.focus();
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("checkout-form");
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            alert("Order placed!")
        }
    });
});
