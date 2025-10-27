import { routes } from "./router.js";
import { validarFormulario } from "./validateForm.js";

const app = document.getElementById("app");

function navegar(hash) {
  const rota = hash.replace("#", "") || "home";
  app.innerHTML = routes[rota] || "<h2>Página não encontrada</h2>";

  if (rota === "cardapio") configurarCardapio();
  if (rota === "contato") validarFormulario();
}

function configurarCardapio() {
  const itens = document.querySelectorAll(".menu li");
  const imgPrato = document.getElementById("imgPrato");

  itens.forEach(item => {
    item.addEventListener("click", () => {
      const novaImg = item.getAttribute("data-img");
      imgPrato.classList.remove("ativo");
      setTimeout(() => {
        imgPrato.src = `img/${novaImg}`;
        imgPrato.classList.add("ativo");
      }, 200);
    });
  });
}

window.addEventListener("hashchange", () => navegar(location.hash));
navegar(location.hash);
