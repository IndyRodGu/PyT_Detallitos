
 // TEMPLATES -------------------------------------------------------

 window.addEventListener('load', async () => {

    // Cabecera de página
    fetch("_assets/templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecera').innerHTML = data;
        });


    // Se llama a la API interna
    fetch("_assets/templates/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
        });
  

    // Se llama a otro asset
    fetch("_assets/templates/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('piePagina').innerHTML = data;
        });


    });