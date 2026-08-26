const footer = document.querySelector("#site-footer");

if (footer) {
  footer.innerHTML = `
    <footer class="border-t border-slate-200 bg-slate-950 text-slate-300">

      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <!-- Brand -->

          <div>

            <a
              href="./index.html"
              class="text-xl font-bold tracking-tight text-white"
            >
              GojoTech
            </a>

            <p class="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Premium technology designed for modern life.
            </p>

          </div>


          <!-- Shop -->

          <div>

            <h2 class="text-sm font-semibold text-white">
              Shop
            </h2>

            <ul class="mt-4 space-y-3">

              <li>
                <a
                  href="./products.html"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="./wishlist.html"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Wishlist
                </a>
              </li>

              <li>
                <a
                  href="./cart.html"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Shopping Cart
                </a>
              </li>

            </ul>

          </div>


          <!-- Company -->

          <div>

            <h2 class="text-sm font-semibold text-white">
              Company
            </h2>

            <ul class="mt-4 space-y-3">

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>

          </div>


          <!-- Support -->

          <div>

            <h2 class="text-sm font-semibold text-white">
              Support
            </h2>

            <ul class="mt-4 space-y-3">

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Shipping Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Returns
                </a>
              </li>

            </ul>

          </div>

        </div>


        <!-- Bottom -->

        <div
          class="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >

          <p class="text-sm text-slate-500">
            © ${new Date().getFullYear()} GojoTech. All rights reserved. Made By Abir Bro.
          </p>


          <!-- Social Links -->

          <div class="flex items-center gap-4">

            <a
              href="#"
              aria-label="GitHub"
              class="text-slate-500 transition-colors hover:text-white"
            >
              <i data-lucide="github" class="h-5 w-5"></i>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              class="text-slate-500 transition-colors hover:text-white"
            >
              <i data-lucide="twitter" class="h-5 w-5"></i>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              class="text-slate-500 transition-colors hover:text-white"
            >
              <i data-lucide="instagram" class="h-5 w-5"></i>
            </a>

          </div>

        </div>

      </div>

    </footer>
  `;

  lucide.createIcons();
}
