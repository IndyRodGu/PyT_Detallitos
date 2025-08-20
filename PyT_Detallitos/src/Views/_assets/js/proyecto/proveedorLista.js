
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

      // Nombre
      let nombCell = document.createElement('td');
      nombCell.innerText = data[i]['nombre'] || '';
      row.appendChild(nombCell);

      // Contacto
      let contacCell = document.createElement('td');
      contacCell.textContent = data[i]['contacto'] || '';
      row.appendChild(contacCell);

      // Telefono
      let telefCell = document.createElement('td');
      telefCell.textContent = data[i]['teléfono'] || '';
      row.appendChild(telefCell);

      // Contacto
      let dirCell = document.createElement('td');
      dirCell.textContent = data[i]['dirección'] || '';
      row.appendChild(dirCell);

      // Contacto
      let categCell = document.createElement('td');
      categCell.textContent = data[i]['categorías'] || '';
      row.appendChild(categCell);

     
      // Obtener el valor del id
      let proveedorID = document.createElement("input")
      proveedorID.type = "hidden";
      proveedorID.value = data[i]['_id'];

      // Botón Editar
      let btn_Editar = document.createElement('input');
      btn_Editar.id = proveedorID;
      btn_Editar.type = "button";
      btn_Editar.value = "Editar";
      btn_Editar.style = botonEdit;
      btn_Editar.onclick =
        function Editar() {
          const data = proveedorID.value;
          localStorage.setItem("sharedData", data);
          location.href = `/editarProveedor`;
        };

      // Botón Eliminar
      let btn_Eliminar = document.createElement('input');
      btn_Eliminar.id = proveedorID;
      btn_Eliminar.type = "button";
      btn_Eliminar.value = "Borrar";
      btn_Eliminar.style = botonElim;
      btn_Eliminar.onclick =
        async (event) => {
          event.preventDefault(); // Para evitar que se refresque la página
          const categ = proveedorID.value;
          const rutaFinal = "/api/proveedor/items/" + categ;
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
              window.location.href = "/listaProveedores"
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
      Acciones.append(" ")
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



 