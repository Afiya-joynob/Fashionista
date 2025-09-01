// script.js

// Cart array to store added products
let cart = [];

// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".product-card button");

// Select Cart link in header to update count
const cartLink = document.querySelector("header nav ul li a[href='#']");

// Function to update cart count in header
function updateCartCount() {
    let count = cart.length;
    cartLink.textContent = `Cart (${count})`;
}

// Add event listeners to each Add to Cart button
addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector("p").textContent;
        const productImg = productCard.querySelector("img").src;

        // Check if product already exists in cart
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: productImg,
                quantity: 1
            });
        }

        updateCartCount();
        alert(`${productName} has been added to your cart!`);
    });
});

// Newsletter subscription alert
const newsletterForm = document.querySelector(".newsletter form");
newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    } else {
        alert("Please enter a valid email address.");
    }
});

// Optional: Smooth scroll to Shop section
const shopBtn = document.querySelector(".hero .btn");
shopBtn.addEventListener("click", () => {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});
