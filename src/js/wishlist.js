const WISHLIST_KEY = "gojotech-wishlist";

function getWishlist() {
  const wishlist = localStorage.getItem(WISHLIST_KEY);

  return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

function isInWishlist(productId) {
  const wishlist = getWishlist();

  return wishlist.includes(productId);
}

function addToWishlist(productId) {
  const wishlist = getWishlist();

  if (wishlist.includes(productId)) {
    return;
  }

  wishlist.push(productId);

  saveWishlist(wishlist);

  updateWishlistButtons();

  const product = products.find((product) => product.id === productId);

  if (product) {
    showToast(`${product.name} added to wishlist`);
  }
}

function removeFromWishlist(productId) {
  const wishlist = getWishlist();

  const updatedWishlist = wishlist.filter((id) => id !== productId);

  saveWishlist(updatedWishlist);

  updateWishlistButtons();

  const product = products.find((product) => product.id === productId);

  if (product) {
    showToast(`${product.name} removed from wishlist`);
  }
}

function toggleWishlist(productId) {
  if (isInWishlist(productId)) {
    removeFromWishlist(productId);
  } else {
    addToWishlist(productId);
  }
}

function updateWishlistButtons() {
  const buttons = document.querySelectorAll("[data-wishlist]");

  buttons.forEach((button) => {
    const productId = Number(button.dataset.wishlist);

    const active = isInWishlist(productId);

    const icon = button.querySelector("[data-wishlist-icon]");

    if (active) {
      button.setAttribute("aria-label", "Remove from wishlist");

      button.classList.add("text-red-500");

      button.classList.remove("text-slate-400", "text-slate-600");

      if (icon) {
        icon.classList.add("fill-current");
      }
    } else {
      button.setAttribute("aria-label", "Add to wishlist");

      button.classList.remove("text-red-500");

      button.classList.add("text-slate-400");

      if (icon) {
        icon.classList.remove("fill-current");
      }
    }
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-wishlist]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.wishlist);

  toggleWishlist(productId);
});
updateWishlistButtons();
