// Se recibe la data
const receivedData = localStorage.getItem('sharedData');
// Se construye la ruta
const ruta = "/api/proveedor/items/" + receivedData;

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
        
        const _id = document.getElementById("idProv");
        _id.value = data['_id'];

        const _nombre = document.getElementById("nombre");
        _nombre.value = data['nombre'];
        
        const _contact = document.getElementById("contacto");
        _contact.value = data['contacto'];
        
        const _tel = document.getElementById("tel");
        _tel.value = data['teléfono'];
        
        const _direc = document.getElementById("direc");
        _direc.value = data['dirección'];

        const _categsNow = document.getElementById("CategNow");
        _categsNow.value = data['categorías'];

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
    const _id = document.getElementById("idProv").value;
    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;
    const teléfono = document.getElementById("tel").value;
    const dirección = document.getElementById("direc").value;
    const categorías = document.getElementById("CategNow").value.replaceAll(", ", ",").replaceAll(" ,", ",").split(",");

    // Data a enviar al PUT
    const data = {
        _id, nombre, contacto, teléfono,dirección,categorías
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
