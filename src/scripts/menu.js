  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("max-h-0")) {
      menu.classList.remove("max-h-0", "opacity-0");
      menu.classList.add("max-h-96", "opacity-100", "pb-4");
    } else {
      menu.classList.add("max-h-0", "opacity-0");
      menu.classList.remove("max-h-96", "opacity-100", "pb-4");
    }
  });