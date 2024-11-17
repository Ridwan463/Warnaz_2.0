// Define the product list element
const productList = document.getElementById('product-list');

// API URL from Sheety (update with the correct project ID and sheet name)
const API_URL = "https://api.sheety.co/a3d097db8d561a3b1cabc1e52684d8fd/warznazSpreadsheet/sheet1"; 

// Function to fetch products from the Sheety API
async function fetchProducts() {
    const response = await fetch(API_URL);  // Fetch data from the Sheety API
    const data = await response.json();     // Parse the JSON response
    displayProducts(data.warnazSpreadsheet); // Use the correct sheet name (in lowercase, as per Sheety)
}

// Function to display products on the webpage
function displayProducts(products) {
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

// Load products when the page loads
fetchProducts();
