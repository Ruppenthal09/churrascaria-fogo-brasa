document.addEventListener("DOMContentLoaded", () => {
  const itens = document.querySelectorAll(".menu li");
  const imgPrato = document.getElementById("imgPrato");

  itens.forEach(item => {
    item.addEventListener("click", () => {
      const novaImg = item.getAttribute("data-img");
      imgPrato.style.opacity = 0;

      setTimeout(() => {
        imgPrato.src = `img/${novaImg}`;
        imgPrato.style.opacity = 1;
      }, 300);
    });
  });
});
