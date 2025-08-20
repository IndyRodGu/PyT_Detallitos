
const ruta = "/api/paquete/items"

// Enviar el formulario
document.getElementById('agregarCategoria').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descrip").value;
    const fechaCreacion = document.getElementById("fechaC").value;
    const precioCRC = document.getElementById("precio").value;
    const moneda = document.getElementById("moneda").value;
    const nombreNorm = document.getElementById("nombre").value.toLowerCase();

    // Data a enviar al PUT
    const data = {
       nombre, descripcion, fechaCreacion, precioCRC, moneda, nombreNorm 
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
            window.location.href = "/listaPaquetes"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al actualizar la data.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }

    
});
