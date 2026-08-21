const cartContent = document.querySelector("#cart-content");

function getCartProducts() {
  const cart = getCart();

  return cart.map((item) => {
    const product = products.find((product) => product.id === item.productId);

    return {
      ...product,
      quantity: item.quantity,
    };
  });
}
function renderCart() {
  const cartProducts = getCartProducts();

  if (cartProducts.length === 0) {
    renderEmptyCart();
    return;
  }

  const subtotal = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  cartContent.innerHTML = `
        <!-- Cart Items -->

        <div class="space-y-4">

            ${cartProducts
              .map(
                (product) => `
                <article
                    class="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row"
                >

                    <!-- Image -->
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="h-32 w-full rounded-lg object-cover sm:w-32"
                    >

                    <!-- Information -->
                    <div class="flex flex-1 flex-col">

                        <div class="flex flex-1 justify-between gap-4">

                            <div>

                                <p class="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    ${product.category}
                                </p>

                                <h2 class="mt-1 font-semibold text-slate-900">
                                    ${product.name}
                                </h2>

                                <p class="mt-2 text-lg font-bold text-slate-900">
                                    $${product.price.toLocaleString()}
                                </p>

                            </div>

                            <!-- Remove -->
                            <button
                                type="button"
                                data-remove-cart="${product.id}"
                                aria-label="Remove ${product.name}"
                                class="h-fit text-slate-400 transition-colors hover:text-red-500"
                            >
                                <i data-lucide="trash-2" class="h-5 w-5"></i>
                            </button>

                        </div>


                        <!-- Quantity -->
                        <div class="mt-4 flex items-center justify-between">

                            <div class="flex items-center rounded-lg border border-slate-300">

                                <button
                                    type="button"
                                    data-decrease-quantity="${product.id}"
                                    class="px-3 py-2 text-slate-600 hover:bg-slate-50"
                                >
                                    −
                                </button>

                                <span
                                    class="min-w-10 px-3 text-center text-sm font-medium"
                                >
                                    ${product.quantity}
                                </span>

                                <button
                                    type="button"
                                    data-increase-quantity="${product.id}"
                                    class="px-3 py-2 text-slate-600 hover:bg-slate-50"
                                >
                                    +
                                </button>

                            </div>

                            <p class="font-semibold text-slate-900">
                                $${(
                                  product.price * product.quantity
                                ).toLocaleString()}
                            </p>

                        </div>

                    </div>

                </article>
            `,
              )
              .join("")}

        </div>


        <!-- Summary -->

        <aside class="h-fit rounded-xl border border-slate-200 bg-white p-6">

            <h2 class="text-lg font-semibold text-slate-900">
                Order Summary
            </h2>

            <div class="mt-6 space-y-4 text-sm">

                <div class="flex justify-between">
                    <span class="text-slate-500">
                        Subtotal
                    </span>

                    <span class="font-medium text-slate-900">
                        $${subtotal.toLocaleString()}
                    </span>
                </div>

                <div class="flex justify-between">
                    <span class="text-slate-500">
                        Shipping
                    </span>

                    <span class="font-medium text-emerald-600">
                        Free
                    </span>
                </div>

                <div class="border-t border-slate-200 pt-4">

                    <div class="flex justify-between">

                        <span class="font-semibold text-slate-900">
                            Total
                        </span>

                        <span class="text-xl font-bold text-slate-900">
                            $${subtotal.toLocaleString()}
                        </span>

                    </div>

                </div>

            </div>

            <button
                type="button"
                class="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
                Checkout
            </button>

            <a
                href="./products.html"
                class="mt-3 block text-center text-sm font-medium text-slate-600 hover:text-slate-900"
            >
                Continue Shopping
            </a>

        </aside>
    `;

  lucide.createIcons();
}

function renderEmptyCart() {
  cartContent.innerHTML = `
        <div class="col-span-full rounded-xl border border-slate-200 bg-white px-6 py-20 text-center">

            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <i
                    data-lucide="shopping-cart"
                    class="h-7 w-7 text-slate-400"
                ></i>
            </div>

            <h2 class="mt-5 text-xl font-semibold text-slate-900">
                Your cart is empty
            </h2>

            <p class="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Looks like you haven't added anything to your cart yet.
            </p>

            <a
                href="./products.html"
                class="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
                Start Shopping
            </a>

        </div>
    `;

  lucide.createIcons();
}

document.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase-quantity]");

  if (increaseButton) {
    const productId = Number(increaseButton.dataset.increaseQuantity);

    const cart = getCart();

    const item = cart.find((item) => item.productId === productId);

    if (item) {
      updateCartQuantity(productId, item.quantity + 1);

      renderCart();
    }

    return;
  }

  const decreaseButton = event.target.closest("[data-decrease-quantity]");

  if (decreaseButton) {
    const productId = Number(decreaseButton.dataset.decreaseQuantity);

    const cart = getCart();

    const item = cart.find((item) => item.productId === productId);

    if (item) {
      updateCartQuantity(productId, item.quantity - 1);

      renderCart();
    }

    return;
  }

  const removeButton = event.target.closest("[data-remove-cart]");

  if (removeButton) {
    const productId = Number(removeButton.dataset.removeCart);

    removeFromCart(productId);

    renderCart();
  }
});

renderCart();
