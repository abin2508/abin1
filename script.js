// Generate a list of 30 sample products
const products = [];
for (let i = 1; i <= 30; i++) {
    products.push({
        id: i,
        title: `Product ${i}`,
        price: (Math.random() * 100 + 10).toFixed(2),
        description: "This is a great product that you'll love!",
        image: `https://picsum.photos/seed/${i}/200/200`
    });
}

// Render products
const productList = document.getElementById("product-list");
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Product image
    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image;
    img.alt = product.title;

    // Product title
    const title = document.createElement("div");
    title.className = "product-title";
    title.textContent = product.title;

    // Product price
    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = `$${product.price}`;

    // Product description
    const desc = document.createElement("div");
    desc.className = "product-description";
    desc.textContent = product.description;

    // Buy button (for demo purposes)
    const button = document.createElement("button");
    button.className = "buy-button";
    button.textContent = "Buy Now";
    button.onclick = () => {
        alert(`You clicked Buy Now for ${product.title}!`);
    };

    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(desc);
    productCard.appendChild(button);

    productList.appendChild(productCard);
});