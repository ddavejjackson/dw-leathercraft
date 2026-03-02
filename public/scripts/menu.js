const button = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("scale-y-0");
  menu.classList.toggle("scale-y-100");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("opacity-100");
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("scale-y-0", "opacity-0");
    menu.classList.remove("scale-y-100", "opacity-100");
  });
});
