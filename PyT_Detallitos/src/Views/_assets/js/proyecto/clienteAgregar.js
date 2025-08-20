
const ruta = "/api/cliente/items"

// Enviar el formulario
document.getElementById('editarCategoria').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const fechaRegistro = document.getElementById("fecha").value;
    const telefono = document.getElementById("tel").value;
    
    // Data a enviar al PUT
    const data = {
        nombre, email, fechaRegistro, telefono
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
            window.location.href = "/listaClientes"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al actualizar la data.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }

    
});
