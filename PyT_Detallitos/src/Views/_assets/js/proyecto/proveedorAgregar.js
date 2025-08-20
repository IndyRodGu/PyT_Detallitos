
const ruta = "/api/proveedor/items";

// Enviar el formulario
document.getElementById('editarCategoria').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;
    const teléfono = document.getElementById("tel").value;
    const dirección = document.getElementById("direc").value;
    const categorías = document.getElementById("CategNow").value.replaceAll(", ", ",").replaceAll(" ,", ",").split(",");

    // Data a enviar al PUT
    const data = {
        nombre, contacto, teléfono,dirección,categorías
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
            window.location.href = "/listaProveedores"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al actualizar la data.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }

    
});
