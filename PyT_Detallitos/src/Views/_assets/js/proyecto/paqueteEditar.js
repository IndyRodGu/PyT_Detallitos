// Se recibe la data
const receivedData = localStorage.getItem('sharedData');
// Se construye la ruta
const ruta = "/api/paquete/items/" + receivedData;

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
        
        const _id = document.getElementById("idInvent");
        _id.value = data['_id'];

        const _nombre = document.getElementById("nombre");
        _nombre.value = data['nombre'];
        
        const _descrip = document.getElementById("descrip");
        _descrip.value = data['descripcion'];
        
        const _fc = document.getElementById("fechaC");
        _fc.value = data['fechaCreacion'];
        
        const _precio = document.getElementById("precio");
        _precio.value = data['precioCRC'];

        const _mon = document.getElementById("moneda");
        _mon.value = data['moneda'];

        const _nombreN = document.getElementById("nombreNorm");
        _nombreN.value = _nombre.value.toLowerCase();

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
    const _id = document.getElementById("idInvent").value;
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descrip").value;
    const fechaCreacion = document.getElementById("fechaC").value;
    const precioCRC = document.getElementById("precio").value;
    const moneda = document.getElementById("moneda").value;
    const nombreNorm = document.getElementById("nombreNorm").value;

    // Data a enviar al PUT
    const data = {
        _id, descripcion, fechaCreacion, moneda, nombre, nombreNorm, precioCRC
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
