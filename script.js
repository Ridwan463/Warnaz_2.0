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
const API_URL = "https://api.sheety.co/<your_project_id>/sheet_name"; // Replace with your API URL

async function fetchProducts() {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayProducts(data.sheet_name); // Use the sheet name from Sheety
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Call fetchProducts to load data
fetchProducts();

