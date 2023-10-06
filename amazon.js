// JavaScript to toggle user menu
const userButton = document.querySelector('.user-button');
const userMenu = document.querySelector('.user-menu');

userButton.addEventListener('click', () => {
    userMenu.classList.toggle('show-menu');
});

// JavaScript to add products dynamically
const main = document.querySelector('main');

function addProduct(imageUrl, productName, description, price) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = productName;

    const name = document.createElement('h3');
    name.textContent = productName;

    const desc = document.createElement('p');
    desc.textContent = description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';

    productDiv.appendChild(image);
    productDiv.appendChild(name);
    productDiv.appendChild(desc);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addToCartButton);

    main.appendChild(productDiv);
}

// Add some sample products
addProduct('product1.jpg', 'Product 1', 'Description of Product 1', 49.99);
addProduct('product2.jpg', 'Product 2', 'Description of Product 2', 79.99);
addProduct('product3.jpg', 'Product 3', 'Description of Product 3', 129.99);
