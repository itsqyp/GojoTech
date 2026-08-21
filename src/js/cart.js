const CART_KEY = "gojotech-cart";

function getCart() {
  const cart = localStorage.getItem(CART_KEY);

  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  saveCart(cart);

  updateCartCount();

  const product = products.find((product) => product.id === productId);

  if (product) {
    showToast(`${product.name} added to your cart`);
  }
}

function removeFromCart(productId) {
  const cart = getCart();

  const updatedCart = cart.filter((item) => item.productId !== productId);

  saveCart(updatedCart);

  updateCartCount();
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();

  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    return;
  }

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = quantity;

  saveCart(cart);

  updateCartCount();
}

function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

function updateCartCount() {
  const cartCountElements = document.querySelectorAll("[data-cart-count]");

  const count = getCartCount();

  cartCountElements.forEach((element) => {
    element.textContent = count;
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.addToCart);

  addToCart(productId);
});
