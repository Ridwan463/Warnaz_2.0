// Define the product list element
const productList = document.getElementById('product-list');

// API URL from Sheety (update with your API URL)
const API_URL = "https://api.sheety.co/<your-project-id>/<spreadsheet-name>/<sheet-name>";

// Function to fetch products from the Sheety API
async function fetchProducts() {
    try {
        productList.innerHTML = '<p>Loading products...</p>'; // Loading message

        const response = await fetch(API_URL); // Fetch data from Sheety API
        if (!response.ok) throw new Error('Failed to fetch products'); // Handle API error

        const data = await response.json(); // Parse JSON response
        displayProducts(data.sheet1); // Use the correct sheet name (adjust if needed)
    } catch (error) {
        console.error('Error fetching products:', error);
        productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    }
}

// Function to display products on the webpage
function displayProducts(products) {
    productList.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl || 'https://via.placeholder.com/150'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Load products when the page loads
fetchProducts();
