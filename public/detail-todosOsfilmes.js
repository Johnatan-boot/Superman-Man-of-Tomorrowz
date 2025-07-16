document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const titulo = params.get('titulo');
  const imagem = params.get('imagem');
  const descricao = params.get('descricao');

  if (titulo && imagem && descricao) {
    document.getElementById('titulo-filme').textContent = titulo;
    document.getElementById('imagem-filme').src = imagem;
    document.getElementById('imagem-filme').alt = titulo;
    document.getElementById('descricao-filme').textContent = descricao;
  } else {
    document.getElementById('conteudo-filme').innerHTML = "<p>Filme não encontrado.</p>";
  }
});
