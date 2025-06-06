function mostrarInfo(titulo, mensagem) {
  const infoBox = document.getElementById('info');
  infoBox.innerHTML = `<strong>${titulo}</strong><br>${mensagem}`;
  infoBox.style.display = 'block';

  event.stopPropagation();
  infoBox.style.top = (event.clientY - 100) + 'px';
  infoBox.style.left = (event.clientX - 100) + 'px';
}

document.body.addEventListener('click', function (e) {
  if (!e.target.classList.contains('ponto')) {
    document.getElementById('info').style.display = 'none';
  }
});