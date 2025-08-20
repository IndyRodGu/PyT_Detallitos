// Se recibe la data
const receivedData = localStorage.getItem('sharedData');
// Se construye la ruta
const ruta = "/api/curso/items/" + receivedData;

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
        
        const _id = document.getElementById("idCurso");
        _id.value = data['_id'];

        const _nombre = document.getElementById("titulo");
        _nombre.value = data['titulo'];
        
        const _contact = document.getElementById("descrip");
        _contact.value = data['descripcion'];
        
        const _tel = document.getElementById("precio");
        _tel.value = data['precio'];
        
        const _direc = document.getElementById("cupos");
        _direc.value = data['cupos'];

        const _categsNow = document.getElementById("horarios");
        _categsNow.value = data['horario'];
        
    }
    // Si el 
    catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').textContent = 'Failed to fetch data.';
    }


});


// Enviar el formulario
document.getElementById('editarCategoria').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const _id = document.getElementById("idCurso").value;
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descrip").value;
    const precio = document.getElementById("precio").value;
    const cupos = document.getElementById("cupos").value;
    const horario = document.getElementById("horarios").value.replaceAll(", ", ",").replaceAll(" ,", ",").split(",");

    // Data a enviar al PUT
    const data = {
        _id, titulo, descripcion, precio, cupos, horario
    }; 

    try {
        // Se realiza el fetch 
        const response = await fetch(ruta, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Si la respuesta es positiva
        if (response.ok) {
            const result = await response.json();
            console.log('Se ha actulizado correctamente:', result);
            alert('Data actualizada!');
            window.location.href = "/listarCursos"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al actualizar la data.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }

    
});
