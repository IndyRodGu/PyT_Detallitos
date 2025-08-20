
const ruta = document.getElementById('ruta').value;

let botonEdit = "background-color: #19a0beff; font-weight: 500; color: white; border: none; border-radius: 10px; padding: 5px 15px 5px 15px; margin-bottom: 2px;"
let botonElim = "background-color: #c2294a; font-weight: 500; color: white; border: none; border-radius: 10px; padding: 5px 15px 5px 15px; margin-bottom: 2px;"

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

    // Construcción de la tabla
    const tabla = document.querySelector('#tabla-productos tbody');
    tabla.innerHTML = ''; // Se limpia en caso de que hubiese algo antes

    for (var i = 0; i < data.length; i++) {
      let row = document.createElement("tr");
      tabla.appendChild(row);

      // Categoria
      let categCell = document.createElement("td");
      categCell.innerText = data[i]['categoria']['nombre'] || '';
      row.appendChild(categCell);

      // SKU
      let skuCell = document.createElement('td');
      skuCell.innerText = data[i]['sku'] || '';
      row.appendChild(skuCell);

      // Nombre
      let nombCell = document.createElement('td');
      nombCell.innerText = data[i]['nombre'] || '';
      row.appendChild(nombCell);

      // Precio Unitario
      let precioUCell = document.createElement('td');
      precioUCell.innerText = data[i]['precioUnitario']['$numberDecimal'] || '';
      row.appendChild(precioUCell);

      // En Stock
      let stockCell = document.createElement('td');
      stockCell.innerText = data[i]['stock'] || '';
      row.appendChild(stockCell);

      // Fuente Stock
      let fuenteCell = document.createElement('td');
      fuenteCell.innerText = data[i]['stockSource'] || '';
      row.appendChild(fuenteCell);

      // Actualización Stock
      let updStockCell = document.createElement('td');
      updStockCell.innerText = data[i]['stockUpdatedAt'] || 'N/A';
      row.appendChild(updStockCell);

      // Obtener el valor del id
      let productID = document.createElement("input")
      productID.type = "hidden";
      productID.value = data[i]['_id'];

      // Botón Editar
      let btn_Editar = document.createElement('input');
      btn_Editar.id = productID;
      btn_Editar.type = "button";
      btn_Editar.value = "Editar";
      btn_Editar.style = botonEdit;
      btn_Editar.onclick =
        function Editar() {
          const data = productID.value;
          localStorage.setItem("sharedData", data);
          location.href = `/editarProducto`;
        };

      // Botón Eliminar
      let btn_Eliminar = document.createElement('input');
      btn_Eliminar.id = productID;
      btn_Eliminar.type = "button";
      btn_Eliminar.value = "Borrar";
      btn_Eliminar.style = botonElim;
      btn_Eliminar.onclick =
        async (event) => {
          event.preventDefault(); // Para evitar que se refresque la página
          const producto = productID.value;
          const rutaFinal = "/api/producto/items/" + producto;
          try {
            // Se realiza el fetch 
            const response = await fetch(rutaFinal, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              }
            });

            // Si la respuesta es positiva
            if (response.ok) {
              const result = await response.json();
              console.log('Se ha eliminado correctamente:', result);
              alert('Data borrada!');
              window.location.href = "/listaProductos"
            } else {
              console.error('Error:', response.statusText);
              alert('Error al borrar la data.');
            }
          } catch (error) {
            console.error('Network error:', error);
            alert('An error occurred. Please try again.');
          }
        };

      let Acciones = document.createElement('td');
      Acciones.append(btn_Editar)
      Acciones.append("")
      Acciones.append(btn_Eliminar)
      row.appendChild(Acciones);
    }

  }
  // Si el 
  catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('output').textContent = 'Failed to fetch data.';
  }

});


function validateDecimals(input) {
    const value = input.value;
    if (!/^\d*(\.\d{0,2})?$/.test(value)) {
        input.value = value.slice(0, -1); // Remove the last invalid character
    }
}