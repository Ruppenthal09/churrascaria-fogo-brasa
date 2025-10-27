export const routes = {
  home: `
    <section class="home">
      <h2>Bem-vindo à Churrascaria Fogo & Brasa</h2>
      <p>Há mais de 20 anos servindo carnes nobres e o autêntico sabor do churrasco brasileiro.</p>
      <img src="img/ambiente-rustico.jpg" alt="Ambiente da churrascaria" class="img-home">
    </section>
  `,
  cardapio: `
    <section class="menu">
      <h2>Nosso Cardápio</h2>
      <ul>
        <li data-img="picanha-grelha.jpg">Picanha na Grelha</li>
        <li data-img="costela-fogo-lento.jpg">Costela Fogo Lento</li>
        <li data-img="espetinhos-gauchos.jpg">Espetinhos Gaúchos</li>
        <li data-img="utensilios-churrasco.jpg">Tábua do Mestre</li>
      </ul>
      <div class="imagem-cardapio">
        <img id="imgPrato" src="img/fogo-brasa.jpg" alt="Imagem do prato">
      </div>
    </section>
  `,
  contato: `
    <section class="contato">
      <h2>Entre em Contato</h2>
      <form id="contatoForm">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" required>

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagemTexto" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
      <div id="mensagem"></div>
    </section>
  `
};
