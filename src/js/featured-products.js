const featuredProductsContainer = document.querySelector("#featured-products");

const featuredProducts = products.filter((product) => product.featured);

featuredProductsContainer.innerHTML = featuredProducts
  .map((product) => renderProductCard(product))
  .join("");

lucide.createIcons();
