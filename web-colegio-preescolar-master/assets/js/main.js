const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menu = document.querySelector("#menuLateral");
const overlay = document.querySelector("#overlay");

abrir.addEventListener("click", () => {
  menu.classList.add("visible");
  overlay.classList.add("visible");
  abrir.style.display = "none";
});

cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
  overlay.classList.remove("visible");
  abrir.style.display = "block";
});

overlay.addEventListener("click", () => {
  menu.classList.remove("visible");
  overlay.classList.remove("visible");
  abrir.style.display = "block";
});







