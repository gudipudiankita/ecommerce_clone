const products = [
    { id: 1, name: "Lipstick", price: 25, img: "shopping.webp" },
    { id: 2, name: "Foundation", price: 40, img: "foundation.webp" },
    { id: 3, name: "Perfume", price: 60, img: "Perfume.webp" },
    { id: 4, name: "Moisturizer", price: 30, img: "Skincare.webp" },
    { id: 5, name: "Nail Polish", price: 15, img: "Nailpolish.webp" },
    { id: 6, name: "Eyeliner", price: 20, img: "Eyeliner.jpg" }
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
  