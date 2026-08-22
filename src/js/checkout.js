const checkoutSummary = document.querySelector("#checkout-summary");

const checkoutForm = document.querySelector("#checkout-form");

function getCheckoutProducts() {
  const cart = getCart();

  return cart
    .map((item) => {
      const product = products.find((product) => product.id === item.productId);

      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: item.quantity,
      };
    })
    .filter(Boolean);
}

function renderCheckoutSummary() {
  const cartProducts = getCheckoutProducts();

  if (cartProducts.length === 0) {
    checkoutSummary.innerHTML = `
            <h2 class="text-lg font-semibold">
                Your Cart
            </h2>

            <p class="mt-4 text-sm text-slate-500">
                Your cart is empty.
            </p>

            <a
                href="./products.html"
                class="mt-6 block rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700"
            >
                Start Shopping
            </a>
        `;

    return;
  }

  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  checkoutSummary.innerHTML = `
        <h2 class="text-lg font-semibold">
            Order Summary
        </h2>

        <div class="mt-6 space-y-5">

            ${cartProducts
              .map(
                (product) => `
                <div class="flex gap-4">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="h-16 w-16 rounded-lg object-cover"
                    >

                    <div class="min-w-0 flex-1">

                        <p class="truncate text-sm font-medium">
                            ${product.name}
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Qty: ${product.quantity}
                        </p>

                    </div>

                    <p class="text-sm font-semibold">
                        $${(product.price * product.quantity).toLocaleString()}
                    </p>

                </div>
            `,
              )
              .join("")}

        </div>

        <div class="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">

            <div class="flex justify-between">
                <span class="text-slate-500">
                    Subtotal
                </span>

                <span class="font-medium">
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

        </div>

        <div class="mt-5 flex justify-between border-t border-slate-200 pt-5">

            <span class="font-semibold">
                Total
            </span>

            <span class="text-xl font-bold">
                $${subtotal.toLocaleString()}
            </span>

        </div>

        <button
            type="submit"
            form="checkout-form"
            class="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
            Place Order
        </button>

        <p class="mt-3 text-center text-xs text-slate-400">
            Your order is secure and encrypted.
        </p>
    `;
}

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cartProducts = getCheckoutProducts();

  if (cartProducts.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  const orderId = `GT-${Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase()}`;

  const formData = new FormData(checkoutForm);

  const paymentMethod = formData.get("payment");

  const order = {
    orderId,
    total: cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
    paymentMethod,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem("gojotech-last-order", JSON.stringify(order));

  localStorage.removeItem("gojotech-cart");

  updateCartCount();

  window.location.href = "./order-success.html";
});

renderCheckoutSummary();
