const productDetailsContainer = document.querySelector("#product-details");

const urlParams = new URLSearchParams(window.location.search);

const productId = Number(urlParams.get("id"));

const product = products.find((product) => product.id === productId);

function renderProductDetails(product) {
  document.title = `${product.name} | GojoTech`;

  productDetailsContainer.innerHTML = `
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">

            <!-- Product Image -->
            <div class="overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="h-full max-h-[600px] w-full object-cover"
                >
            </div>


            <!-- Product Information -->
            <div class="flex flex-col justify-center">

                <!-- Category -->
                <p class="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                    ${product.category}
                </p>


                <!-- Name -->
                <h1 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    ${product.name}
                </h1>


                <!-- Rating -->
                <div class="mt-4 flex items-center gap-3">

                    <div class="flex items-center text-amber-500">

                        <i
                            data-lucide="star"
                            class="h-5 w-5 fill-current"
                        ></i>

                    </div>

                    <span class="font-medium text-slate-900">
                        ${product.rating}
                    </span>

                    <span class="text-sm text-slate-500">
                        Customer rating
                    </span>

                </div>


                <!-- Price -->
                <p class="mt-6 text-3xl font-bold text-slate-900">
                    $${product.price.toLocaleString()}
                </p>


                <!-- Description -->
                <p class="mt-6 leading-7 text-slate-600">
                    ${product.description}
                </p>


                <!-- Stock -->
                <div class="mt-6 flex items-center gap-2">

                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>

                    <span class="text-sm font-medium text-emerald-700">
                        ${product.stock} in stock
                    </span>

                </div>


                <!-- Actions -->
                <div class="mt-8 flex flex-col gap-3 sm:flex-row">

                    <button
                        type="button"
                        class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
                    >
                        <i
                            data-lucide="shopping-cart"
                            class="h-5 w-5"
                        ></i>

                        Add to Cart
                    </button>

                    <button
                        type="button"
                        aria-label="Add to wishlist"
                        class="flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <i
                            data-lucide="heart"
                            class="h-5 w-5"
                        ></i>
                    </button>

                </div>

            </div>

        </div>
    `;
}

if (!product) {
  productDetailsContainer.innerHTML = `
        <div class="py-20 text-center">

            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <i data-lucide="package-x" class="h-6 w-6 text-slate-400"></i>
            </div>

            <h1 class="mt-4 text-2xl font-bold text-slate-900">
                Product not found
            </h1>

            <p class="mt-2 text-slate-500">
                The product you're looking for doesn't exist.
            </p>

            <a
                href="./products.html"
                class="mt-6 inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
                Back to Products
            </a>

        </div>
    `;

  lucide.createIcons();
} else {
  renderProductDetails(product);
}
