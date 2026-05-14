// Product Class
class Product {

    // Constructor
    constructor(id, name, price, quantity) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total
    getTotalPrice() {
        return this.price * this.quantity;
    }
}

// Cart Class
class Cart {

    // Constructor
    constructor() {
        this.products = [];
    }

    // Method to add product
    addProduct(product) {
        this.products.push(product);
    }

    // Method to update quantity
    updateQuantity(id, change) {

        this.products.forEach(product => {

            if (product.id === id) {

                product.quantity += change;

                // Prevent negative quantity
                if (product.quantity < 1) {
                    product.quantity = 1;
                }
            }
        });

        this.displayCart();
    }

    // Method to calculate grand total
    calculateGrandTotal() {

        let total = 0;

        this.products.forEach(product => {
            total += product.getTotalPrice();
        });

        return total;
    }

    // Method to display cart
    displayCart() {

        // Selector
        const cartBody = document.getElementById("cart-body");

        cartBody.innerHTML = "";

        this.products.forEach(product => {

            const row = `
                <tr>
                    <td>${product.name}</td>

                    <td>₹${product.price}</td>

                    <td>
                        <button onclick="cart.updateQuantity(${product.id}, -1)">-</button>

                        ${product.quantity}

                        <button onclick="cart.updateQuantity(${product.id}, 1)">+</button>
                    </td>

                    <td>₹${product.getTotalPrice()}</td>
                </tr>
            `;

            // DOM Method
            cartBody.innerHTML += row;
        });

        // Selector + DOM Method
        document.getElementById("grand-total").innerText =
            "Grand Total: ₹" + this.calculateGrandTotal();
    }
}

// Create Cart Object
const cart = new Cart();

// Create Product Objects
// Create Product Objects

cart.addProduct(new Product(1, "Laptop", 50000, 1));

cart.addProduct(new Product(2, "T-Shirt", 800, 2));

cart.addProduct(new Product(3, "Rice Bag", 1200, 1));

cart.addProduct(new Product(4, "Mobile Phone", 25000, 1));

cart.addProduct(new Product(5, "Shoes", 2000, 1));

cart.addProduct(new Product(6, "Milk", 60, 3));

cart.addProduct(new Product(7, "EarPods", 2000, 1));

cart.addProduct(new Product(8, "Chocolate", 150, 5));

cart.addProduct(new Product(9, "Face Cream", 450, 2));

// Display Cart
cart.displayCart();