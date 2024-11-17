// script.js

// Example: Fetch products from a JSON file or CMS (e.g., Firebase, Airtable)
const productList = document.getElementById('product-list');

async function fetchProducts() {
    const response = await fetch('https://api.example.com/products'); // Replace with your API
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Load products on page load
fetchProducts();

