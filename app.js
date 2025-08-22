const products = [
    { id: 1, name: "Smartphone", price: 599, img: "https://via.placeholder.com/250x200?text=Smartphone" },
    { id: 2, name: "Headphones", price: 199, img: "https://via.placeholder.com/250x200?text=Headphones" },
    { id: 3, name: "Shoes", price: 99, img: "https://via.placeholder.com/250x200?text=Shoes" },
    { id: 4, name: "Laptop", price: 899, img: "https://via.placeholder.com/250x200?text=Laptop" },
    { id: 5, name: "Watch", price: 149, img: "https://via.placeholder.com/250x200?text=Watch" }
  ];
  
  let cart = [];
  
  function displayProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "";
    products.forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      cartList.innerHTML += `
        <li>${item.name} - $${item.price}
        <button onclick="removeFromCart(${index})">x</button></li>
      `;
    });
    document.getElementById("total").innerText = total;
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  function toggleCart() {
    const cartBox = document.getElementById("cart-box");
    cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
  }
  
  // Initialize
  displayProducts();
  