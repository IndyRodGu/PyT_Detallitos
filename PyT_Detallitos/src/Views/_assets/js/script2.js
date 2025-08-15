// script.js
const ruta = document.getElementById('ruta').value;
window.addEventListener('load', async () => {
  try {
    // Se llama a la API interna
    const response = await fetch(ruta); 
    // Si la API no responde
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // En caso de que sí se acepte la data
    const data = await response.json();
    console.log(data);

    // Igresar los datos en puntos específicos
    const output = document.getElementById('output');
    output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

    const _id = document.getElementById("_id");
    _id.value = data['_id'];

    const nombre = document.getElementById("nombre");
    nombre.value = data['nombre'];
  } 
  // Si el 
  catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('output').textContent = 'Failed to fetch data.';
  }

 
});
