
const ruta = "/api/producto/items"

// Enviar el formulario
document.getElementById('agregarProducto').addEventListener('submit', async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const precioUnitario = document.getElementById("precioU").value;
    const stock = document.getElementById("stock").value;
    const proveedorId = document.getElementById("proveedor").value;
    const categoria = document.getElementById("categoria").value;
    const categoriaId = document.getElementById("categId").value;
    const categoriaNombre = document.getElementById("categNom").value;
    const stockSource = document.getElementById("stockSource").value;
    const stockUpdatedAt = document.getElementById("stockUpdate").value;
    
    // Data a enviar al PUT
    const data = {
        sku, nombre, precioUnitario, stock, proveedorId,
        categoria, categoriaId, categoriaNombre, stockSource, stockUpdatedAt
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
            console.log('Se ha agregado el producto:', result);
            alert('Producto guardado!');
            window.location.href = "/listaProductos"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al guardar producto.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }
});