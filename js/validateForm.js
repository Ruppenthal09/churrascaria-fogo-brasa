export function validarFormulario() {
  const form = document.getElementById("contatoForm");
  const mensagem = document.getElementById("mensagem");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("mensagemTexto").value.trim();

    if (nome.length < 3) {
      mensagem.textContent = "❌ O nome deve ter pelo menos 3 caracteres.";
      mensagem.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      mensagem.textContent = "❌ E-mail inválido.";
      mensagem.style.color = "red";
      return;
    }

    if (texto.length < 5) {
      mensagem.textContent = "❌ A mensagem está muito curta.";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "✅ Mensagem enviada com sucesso!";
    mensagem.style.color = "green";
    form.reset();
  });
}
