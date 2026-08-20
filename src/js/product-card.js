function renderProductCard(product) {
  return `
        <article
            class="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

            <!-- Product Image -->
            <a
                href="./product.html?id=${product.id}"
                class="block overflow-hidden bg-slate-100"
            >
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
            </a>

            <!-- Product Information -->
            <div class="p-5">

                <!-- Category -->
                <p class="text-xs font-medium uppercase tracking-wide text-slate-500">
                    ${product.category}
                </p>

                <!-- Product Name -->
                <h3 class="mt-2 text-base font-semibold text-slate-900">
                    ${product.name}
                </h3>

                <!-- Rating -->
                <div class="mt-2 flex items-center gap-2">

                    <div class="flex items-center text-amber-500">
                        <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                    </div>

                    <span class="text-sm text-slate-600">
                        ${product.rating}
                    </span>

                </div>

                <!-- Price + Wishlist -->
                <div class="mt-4 flex items-center justify-between">

                    <p class="text-lg font-bold text-slate-900">
                        $${product.price.toLocaleString()}
                    </p>

                    <button
                        type="button"
                        aria-label="Add ${product.name} to wishlist"
                        class="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-red-500"
                    >
                        <i data-lucide="heart" class="h-5 w-5"></i>
                    </button>

                </div>

                <!-- Add to Cart -->
                <button
                    type="button"
                    class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
                >
                    <i data-lucide="shopping-cart" class="h-4 w-4"></i>

                    Add to Cart
                </button>

            </div>

        </article>
    `;
}
