const btnMenu = document.querySelector("#btn-menu");
const fondoEnlace = document.querySelector("#fondo-enlace");

btnMenu.addEventListener("click", (e) => {
  document.querySelector(".barra-lateral-izquierda").className += " active";
  document.querySelector(".fondo-enlace").className += " active";
  e.preventDefault();
});

fondoEnlace.addEventListener("click", () => {
  document.querySelector(".barra-lateral-izquierda").classList.remove("active");
  document.querySelector(".fondo-enlace").classList.remove("active");
});
