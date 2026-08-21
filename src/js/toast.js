function showToast(message) {
  const existingToast = document.querySelector("#toast");

  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");

  toast.id = "toast";

  toast.className = `
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-slate-200
        bg-white
        px-4
        py-3
        shadow-lg
        transition-all
        duration-300
    `;

  toast.innerHTML = `
        <div class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
            <i
                data-lucide="check"
                class="h-4 w-4 text-emerald-600"
            ></i>
        </div>

        <p class="text-sm font-medium text-slate-800">
            ${message}
        </p>
    `;

  document.body.appendChild(toast);

  lucide.createIcons();

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
  }, 1800);

  setTimeout(() => {
    toast.remove();
  }, 2200);
}
