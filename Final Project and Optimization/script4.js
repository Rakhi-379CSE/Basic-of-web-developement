const products = [
  {
     id: 1,
      name: 'Wireless Earbuds',
       price: 39, 
       desc: 'Hi-Fi audio, 28hr battery, Waterproof.',
       image: 'airbuds.webp',
        badge: 'Best Seller', 
        rating: 4.5
       },
  {
     id: 2,
      name: 'Fitness Smartwatch', 
      price: 69,
       desc: 'Heart rate, step count, multi-sport modes.',
        image: 'shopping.webp',
         badge: 'Top Rated',
          rating: 4.7 
        },
  { 
    id: 3, 
    name: 'Eco Water Bottle',
     price: 19, 
     desc: 'BPA-free, 1L, keeps drinks cold for 24hr.', 
     image: 'waterbottol.jpg',
      badge: 'Hot Deal', 
      rating: 4.3
     },
  {
     id: 4,
      name: 'Bluetooth Speaker',
       price: 56, 
       desc: 'Portable, deep bass, 360° sound.',
        image: 'bluetoothspeaker.jpeg', 
        badge: '', 
        rating: 4.1 
      },
  {
     id: 5,
      name: 'Boys Oversized Cotton Printed T-Shirt ',
       price: 6,
        desc: 'Round Neck, Short Sleeves, Casual Wear',
         image: 'boysoversizetshirt.jpg', 
         badge: '', 
         rating: 4
         },
  {
     id: 6,
      name: 'Girls Oversized Cotton Printed T-Shirt',
       price: 4, 
       desc: 'HELLCAT Graphic Printed Round Neck Oversized T-shirt', 
       image: 'girlsoversizetshirt.webp', 
       badge: '',
        rating: 4.3 
      },
  {
     id: 7,
      name: 'Baggy jeans',
       price: 7,
        desc: 'Baggy denim jeans',
         image: 'boysjeans.avif',
          badge: '', 
          rating: 4.4
         },
  {
     id: 8,
      name: 'Woman jeans', 
      price: 5, 
      desc: "The Roadster Lifestyle Co. Women's Wide Leg High-Rise Jeans", 
      image: 'girlsjeans.webp',
       badge: '', 
       rating: 3.5
       },
  {
     id: 9,
      name: 'Gear Vintage2 Anti-Theft Faux Leather Laptop Backpack', 
      price: 10,
       desc: 'Laptop Backpack',
        image: 'laptopbag.webp', 
        badge: '', 
        rating: 4 
      },
  {
     id: 10
     , name: 'Laptop',
      price: 1000,
       desc: 'LOQ 15IRX9 | 15 inch Intel-powered AI-tuned gaming laptop | Lenovo LOQ', 
       image: 'lenovoloq.webp',
        badge: '',
         rating: 4
         },
  {
     id: 11
     , name: "Boy's Shoes", 
     price: 80, 
     desc: 'Server White Sneakers Shoes For Men Mo',
      image: 'snikers.webp',
       badge: '', 
       rating: 3.9
       },
  {
     id: 12
     , name: "Girl's Sneakers",
      price: 100, 
      desc: 'Best White Sneakers for Women | The Strategist', 
      image: 'girlsnniker.jpeg',
       badge: '',
        rating: 3.5
       }
];

const productList = document.getElementById("product-list");
products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="price">$${p.price}</div>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = ${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>;
    cartItems.appendChild(div);
  });

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

const cartModal = document.getElementById("cart-modal");
document.getElementById("cart-btn").onclick = () => cartModal.style.display = "block";
document.getElementById("close-cart").onclick = () => cartModal.style.display = "none";
window.onclick = e => { if (e.target === cartModal) cartModal.style.display = "none"; }