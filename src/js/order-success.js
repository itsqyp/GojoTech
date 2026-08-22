const orderSuccess = document.querySelector("#order-success");

const order = JSON.parse(localStorage.getItem("gojotech-last-order"));

if (!order) {
  orderSuccess.innerHTML = `
        <div class="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">

            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">

                <i
                    data-lucide="file-question"
                    class="h-7 w-7 text-slate-400"
                ></i>

            </div>

            <h1 class="mt-5 text-2xl font-bold">
                Order not found
            </h1>

            <p class="mt-2 text-sm text-slate-500">
                We couldn't find a recent order.
            </p>

            <a
                href="./products.html"
                class="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
                Continue Shopping
            </a>

        </div>
    `;

  lucide.createIcons();
} else {
  renderOrderSuccess(order);
}

function renderOrderSuccess(order) {
  orderSuccess.innerHTML = `
        <div class="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">

            <!-- Success Icon -->

            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">

                <i
                    data-lucide="check"
                    class="h-8 w-8 text-emerald-600"
                ></i>

            </div>


            <!-- Heading -->

            <h1 class="mt-6 text-3xl font-bold tracking-tight">
                Order Confirmed!
            </h1>


            <p class="mx-auto mt-3 max-w-md text-slate-500">
                Thank you for your purchase.
                We've received your order and will
                begin processing it shortly.
            </p>


            <!-- Order ID -->

            <div class="mt-8 rounded-xl bg-slate-50 p-5">

                <p class="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Order Number
                </p>

                <p class="mt-2 font-mono text-lg font-bold text-slate-900">
                    ${order.orderId}
                </p>

            </div>


            <!-- Order Details -->

            <div class="mt-6 text-left">

                <div class="flex justify-between border-b border-slate-200 pb-4">

                    <span class="text-sm text-slate-500">
                        Order Total
                    </span>

                    <span class="font-semibold">
                        $${order.total.toLocaleString()}
                    </span>

                </div>


                <div class="flex justify-between pt-4">

                    <span class="text-sm text-slate-500">
                        Payment
                    </span>

                    <span class="text-sm font-medium capitalize">
                        ${
                          order.paymentMethod === "card"
                            ? "Credit / Debit Card"
                            : "Cash on Delivery"
                        }
                    </span>

                </div>

            </div>


            <!-- Actions -->

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

                <a
                    href="./index.html"
                    class="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                    Continue Shopping
                </a>

                <a
                    href="./products.html"
                    class="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                    Browse Products
                </a>

            </div>

        </div>
    `;

  lucide.createIcons();
}
