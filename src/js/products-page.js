const searchInput = document.querySelector("#product-search");
const productsGrid = document.querySelector("#products-grid");
const productCount = document.querySelector("#product-count");
const sortSelect = document.querySelector("#sort-products");
const categoryButtons = document.querySelectorAll(".category-filter");

let currentCategory = "all";
let currentSort = "featured";
function renderProducts(productsToRender) {
  productCount.textContent = `${productsToRender.length} ${
    productsToRender.length === 1 ? "product" : "products"
  }`;

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `
            <div class="col-span-full py-16 text-center">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                    <i data-lucide="search-x" class="h-6 w-6 text-slate-400"></i>
                </div>

                <h2 class="mt-4 text-lg font-semibold text-slate-900">
                    No products found
                </h2>

                <p class="mt-2 text-sm text-slate-500">
                    Try changing your search or category.
                </p>
            </div>
        `;

    lucide.createIcons();

    return;
  }

  productsGrid.innerHTML = productsToRender
    .map((product) => renderProductCard(product))
    .join("");

  lucide.createIcons();
  updateWishlistButtons();
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  switch (currentSort) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "featured":
    default:
      filteredProducts.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  renderProducts(filteredProducts);
}

searchInput.addEventListener("input", () => {
  applyFilters();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;

    categoryButtons.forEach((button) => {
      button.classList.remove("bg-slate-900", "text-white");

      button.classList.add(
        "border",
        "border-slate-300",
        "bg-white",
        "text-slate-600",
      );
    });

    button.classList.remove(
      "border",
      "border-slate-300",
      "bg-white",
      "text-slate-600",
    );

    button.classList.add("bg-slate-900", "text-white");

    applyFilters();
  });
});

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;

  applyFilters();
});

renderProducts(products);
