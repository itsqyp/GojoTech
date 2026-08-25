const header = document.querySelector("#site-header");

if (header) {
  header.innerHTML = `
        <header class="border-b border-slate-200 bg-white">

            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div class="flex h-16 items-center justify-between">

                    <!-- Logo -->

                    <a
                        href="./index.html"
                        class="text-xl font-bold tracking-tight"
                    >
                        GojoTech
                    </a>


                    <!-- Desktop Navigation -->

                    <nav
                        class="hidden items-center gap-8 md:flex"
                        aria-label="Main navigation"
                    >

                        <a
                            href="./index.html"
                            class="text-sm font-medium text-slate-600 hover:text-slate-900"
                        >
                            Home
                        </a>

                        <a
                            href="./products.html"
                            class="text-sm font-medium text-slate-600 hover:text-slate-900"
                        >
                            Products
                        </a>

                        <a
                            href="./wishlist.html"
                            class="text-sm font-medium text-slate-600 hover:text-slate-900"
                        >
                            Wishlist
                        </a>

                    </nav>


                    <!-- Actions -->

                    <div class="flex items-center gap-5">

                        <!-- Wishlist -->

                        <a
                            href="./wishlist.html"
                            aria-label="Wishlist"
                            class="text-slate-600 hover:text-red-500"
                        >

                            <i
                                data-lucide="heart"
                                class="h-5 w-5"
                            ></i>

                        </a>


                        <!-- Cart -->

                        <a
                            href="./cart.html"
                            aria-label="Shopping cart"
                            class="relative text-slate-600 hover:text-slate-900"
                        >

                            <i
                                data-lucide="shopping-cart"
                                class="h-5 w-5"
                            ></i>

                            <span
                                data-cart-count
                                class="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-semibold text-white"
                            >
                                0
                            </span>

                        </a>


                        <!-- Account -->

                        <button
                            type="button"
                            aria-label="Account"
                            class="text-slate-600 hover:text-slate-900"
                        >

                            <i
                                data-lucide="user"
                                class="h-5 w-5"
                            ></i>

                        </button>


                        <!-- Mobile Menu Button -->

                        <button
                            type="button"
                            id="mobile-menu-button"
                            aria-label="Open menu"
                            aria-expanded="false"
                            class="text-slate-700 md:hidden"
                        >

                            <i
                                data-lucide="menu"
                                class="h-6 w-6"
                            ></i>

                        </button>

                    </div>

                </div>

            </div>


            <!-- Mobile Menu -->

            <div
                id="mobile-menu"
                class="hidden border-t border-slate-200 md:hidden"
            >

                <nav
                    class="mx-auto max-w-7xl px-4 py-4 sm:px-6"
                    aria-label="Mobile navigation"
                >

                    <div class="flex flex-col gap-4">

                        <a
                            href="./index.html"
                            class="text-sm font-medium text-slate-700"
                        >
                            Home
                        </a>

                        <a
                            href="./products.html"
                            class="text-sm font-medium text-slate-700"
                        >
                            Products
                        </a>

                        <a
                            href="./wishlist.html"
                            class="text-sm font-medium text-slate-700"
                        >
                            Wishlist
                        </a>

                    </div>

                </nav>

            </div>

        </header>
    `;

  lucide.createIcons();
}
