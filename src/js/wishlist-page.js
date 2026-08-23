const wishlistContent = document.querySelector("#wishlist-content");

function getWishlistProducts() {
  const wishlist = getWishlist();

  return wishlist
    .map((productId) => {
      return products.find((product) => product.id === productId);
    })
    .filter(Boolean);
}
function renderWishlist() {
  const wishlistProducts = getWishlistProducts();

  if (wishlistProducts.length === 0) {
    renderEmptyWishlist();

    return;
  }

  wishlistContent.innerHTML = `

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            ${wishlistProducts
              .map(
                (product) => `

                <article
                    class="group overflow-hidden rounded-xl border border-slate-200 bg-white"
                >

                    <!-- Image -->

                    <div class="relative aspect-square overflow-hidden bg-slate-100">

                        <a
                            href="./product.html?id=${product.id}"
                            class="block h-full"
                        >

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            >

                        </a>


                        <!-- Remove -->

                        <button
                            type="button"
                            data-remove-wishlist="${product.id}"
                            aria-label="Remove ${product.name} from wishlist"
                            class="absolute right-3 top-3 rounded-full bg-white p-2 text-red-500 shadow-sm transition-colors hover:bg-red-50"
                        >

                            <i
                                data-lucide="heart"
                                class="h-5 w-5 fill-current"
                            ></i>

                        </button>

                    </div>


                    <!-- Information -->

                    <div class="p-5">

                        <p class="text-xs font-medium uppercase tracking-wide text-slate-500">
                            ${product.category}
                        </p>

                        <a
                            href="./product.html?id=${product.id}"
                            class="mt-1 block font-semibold text-slate-900 hover:text-indigo-600"
                        >
                            ${product.name}
                        </a>

                        <p class="mt-2 text-lg font-bold">
                            $${product.price.toLocaleString()}
                        </p>


                        <!-- Add to Cart -->

                        <button
                            type="button"
                            data-add-to-cart="${product.id}"
                            class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                        >

                            <i
                                data-lucide="shopping-cart"
                                class="h-4 w-4"
                            ></i>

                            Add to Cart

                        </button>

                    </div>

                </article>

            `,
              )
              .join("")}

        </div>
    `;

  lucide.createIcons();
}

function renderEmptyWishlist() {
  wishlistContent.innerHTML = `

        <div class="rounded-xl border border-slate-200 bg-white px-6 py-20 text-center">

            <div
                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100"
            >

                <i
                    data-lucide="heart"
                    class="h-7 w-7 text-slate-400"
                ></i>

            </div>


            <h2 class="mt-5 text-xl font-semibold">
                Your wishlist is empty
            </h2>


            <p class="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Save products you love and come back to them later.
            </p>


            <a
                href="./products.html"
                class="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
                Browse Products
            </a>

        </div>
    `;

  lucide.createIcons();
}
document.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-wishlist]");

  if (!removeButton) {
    return;
  }

  const productId = Number(removeButton.dataset.removeWishlist);

  removeFromWishlist(productId);

  renderWishlist();
});
renderWishlist();
