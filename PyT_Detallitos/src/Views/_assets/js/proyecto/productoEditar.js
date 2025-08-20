// Se recibe la data
const receivedData = localStorage.getItem('sharedData');
// Se construye la ruta
const ruta = "/api/producto/items/" + receivedData;
const ruta2 = "/api/categoria/items"

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

        const _id = document.getElementById("idProducto");
        _id.value = data['_id'];

        const _sku = document.getElementById("sku");
        _sku.value = data['sku'];

        const _nombre = document.getElementById("nombre");
        _nombre.value = data['nombre'];

        const _precio = document.getElementById("precioU");
        _precio.value = data['precioUnitario']['$numberDecimal'];

        const _stock = document.getElementById("stock");
        _stock.value = data['stock'];

        const _idProv = document.getElementById("proveedor");
        _idProv.value = data['proveedorId'];

        const _categ = document.getElementById("categoria");
        _categ.value = data['categoria']['nombre'];

        const _categId = document.getElementById("categId");
        _categId.value = data['categoriaId'];

        const _categNom = document.getElementById("categNom");
        _categNom.value = data['categoriaNombre'];

        const _stockS = document.getElementById("stockSource");
        _stockS.value = data['stockSource'];

        const _stockU = document.getElementById("stockUpdate");
        _stockU.value = data['stockUpdatedAt'];

    }
    // Si el 
    catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').textContent = 'Failed to fetch data.';
    }



    // Para la lista de categorias
    try {
      const respuesta = await fetch(ruta2);
      const datos = await respuesta.json();

      const select = document.getElementById('categorias');
      datos.forEach((elemento) => {
        const opcion = document.createElement('option');
        opcion.value = elemento.id; // Asigna el valor del ID
        opcion.textContent = elemento.nombre; // Asigna el texto visible
        select.appendChild(opcion);
      });

    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }

});



const valor = "";
const texto = "";
const seleccionador = document.getElementById('categorias');

seleccionador.addEventListener("change", () => {
    valor = seleccionador.value;
    texto = seleccionador.options[seleccionador.selectedIndex].text;
    document.getElementById("pru").value = texto;
  });


// Enviar el formulario -------------------------------------------------------------------------------

document.getElementById('modificarProducto').addEventListener('submit', 
    
    async (event) => {
    
    event.preventDefault(); // Para evitar que se refresque la página
    
    // Datos
    const _id = document.getElementById("idProducto").value;
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const precioUnitario = document.getElementById("precioU").value;
    const stock = document.getElementById("stock").value;
    const proveedorId = document.getElementById("proveedor").value;
    const categorias = document.getElementById("categorias"); // Viene del buscador
    const categoria = "";
    const categoriaId = document.getElementById("categId");
    const categoriaNombre = document.getElementById("categorias");
    const stockSource = document.getElementById("stockSource").value;
    const stockUpdatedAt = document.getElementById("stockUpdate").value;



    // Data a enviar al PUT
    const data = {
        _id, sku, nombre, precioUnitario, stock, proveedorId,
        categoria, categoriaId, categoriaNombre, stockSource, stockUpdatedAt
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
            window.location.href = "/listaProductos"
        } else {
            console.error('Error:', response.statusText);
            alert('Error al actualizar la data.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('An error occurred. Please try again.');
    }
});
