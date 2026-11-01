let products = [];


// Load data from JSON file

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        products = data.graph;

        displayProducts(products);

    })
    .catch(error => {

        console.log("Error loading data:", error);

    });


// Display products

function displayProducts(productList) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";


    if (productList.length === 0) {

        container.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `
            <h3>${product.name}</h3>

            <p class="category">
                Category: ${product.category}
            </p>

            <p class="description">
                ${product.description}
            </p>

            <p class="price">
                Rs.${product.price}
            </p>

            <p class="stock">
                Stock: ${product.stock}
            </p>
        `;


        container.appendChild(card);

    });

}


// Search

const searchBox = document.getElementById("searchBox");


searchBox.addEventListener("input", function () {

    const searchText =
        searchBox.value.toLowerCase();


    const filteredProducts = products.filter(product => {

        return (
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
        );

    });


    displayProducts(filteredProducts);

});
