// Sample data for products (replace with your actual data)
const productsData = [
    { name: 'Strict Push-Ups', imageUrl: 'images/P_1.jpg' },
    { name: 'Wide Hands push-Ups', imageUrl: 'images/P_2.avif' },
    { name: 'Traingle Push-UPS', imageUrl: 'images/P_3.jpg' },
    { name: 'Pike Push-Ups',  imageUrl: 'images/P_4.png' },
    { name: 'Super Push-Ups',  imageUrl: 'images/P_5.jpg' },
    

    // Add more products as needed
];

// Function to dynamically create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.imageUrl;
    image.alt = product.name;
    image.classList.add('product-image');

    const name = document.createElement('div');
    name.textContent = product.name;
    name.classList.add('product-name');

    

    card.appendChild(image);
    card.appendChild(name);


    return card;
}

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');

    productsData.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchBar.addEventListener('keyup', () => {
    const searchTerm = searchBar.value.toLowerCase();

    // Replace this with your actual search logic (e.g., searching an array, database, etc.)
    const results = ['Surgical mask', 'Barrier Face Covering', 'Cotton face mask','General N95','N95','Nylon face mask','Silk mask'].filter(item => item.toLowerCase().includes(searchTerm));

    searchResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            searchResults.appendChild(listItem);
        });
    } else {
        searchResults.innerHTML = '<li>No results found.</li>';
    }
});

