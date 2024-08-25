function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // pegar a imagem
    const img = document.querySelector('#profile img');

    // substituir a imagem
    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'Light Mode');
    } else {
        img.setAttribute('alt', 'Dark Mode');
    }
}