
const ruta = "/api/curso/items";

// Enviar el formulario
document.getElementById('editarCategoria').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descrip").value;
    const precio = document.getElementById("precio").value;
    const cupos = document.getElementById("cupos").value;
    const horario = document.getElementById("horarios").value.replaceAll(", ", ",").replaceAll(" ,", ",").split(",");

    // Data a enviar al PUT
    const data = {
        titulo, descripcion, precio, cupos, horario
    }; 

    try {
        // Se realiza el fetch 
        const response = await fetch(ruta, {
            method: 'POST',
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
