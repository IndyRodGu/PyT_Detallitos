
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

    // Se llama al cliente ---------------------------------------------------------
    // Se llama a la API interna

    

     // Se llama al producto ---------------------------------------------------------
    // Se llama a la API interna
    const producto = await fetch(ruta);
    // Si la API no responde
    if (!producto.ok) {
      throw new Error(`HTTP error! status: ${producto.status}`);
    }
    // En caso de que sí se acepte la data
    const dataPro = await producto.json();
    console.log(dataPro);


    // Se llama al cliente ---------------------------------------------------------


    // Construcción de la tabla
    const tabla = document.querySelector('#tabla-productos tbody');
    tabla.innerHTML = ''; // Se limpia en caso de que hubiese algo antes

    for (var i = 0; i < data.length; i++) {
      let row = document.createElement("tr");
      tabla.appendChild(row);

      /*
      {
    "_id": "686596744953bd59e3060990",
    "calificacion": 5,
    "comentario": "Excelente producto, muy resistente.",
    "fechaReview": "2025-06-16T10:00:00.000Z",
    "cliente": {
      "nombre": "María López Rodríguez",
      "email": "maria.lopez@mail.com"
    },
    "producto": {
      "nombre": "Cinta de raso 1 pulgada"
    }
  }, */


      // Nombre
      let nombCell = document.createElement('td');
      nombCell.innerText = data[i]['cliente']['nombre'] || '';
      row.appendChild(nombCell);

      // Contacto
      let productoCell = document.createElement('td');
      productoCell.textContent = data[i]['producto']['nombre'] || '';
      row.appendChild(productoCell);

      // Telefono
      let califCell = document.createElement('td');
      califCell.textContent = data[i]['calificacion'] || '';
      row.appendChild(califCell);

      // Contacto
      let comentCell = document.createElement('td');
      comentCell.textContent = data[i]['comentario'] || '';
      row.appendChild(comentCell);

      // Contacto
      let fechaCell = document.createElement('td');
      fechaCell.textContent = data[i]['fechaReview'] || '';
      row.appendChild(fechaCell);

     
      // Obtener el valor del id
      let reviewID = document.createElement("input")
      reviewID.type = "hidden";
      reviewID.value = data[i]['_id'];

      // Botón Editar
      let btn_Editar = document.createElement('input');
      btn_Editar.id = reviewID;
      btn_Editar.type = "button";
      btn_Editar.value = "Editar";
      btn_Editar.style = botonEdit;
      btn_Editar.onclick =
        function Editar() {
          const data = reviewID.value;
          localStorage.setItem("sharedData", data);
          location.href = `/editarReview`;
        };

      // Botón Eliminar
      let btn_Eliminar = document.createElement('input');
      btn_Eliminar.id = reviewID;
      btn_Eliminar.type = "button";
      btn_Eliminar.value = "Borrar";
      btn_Eliminar.style = botonElim;
      btn_Eliminar.onclick =
        async (event) => {
          event.preventDefault(); // Para evitar que se refresque la página
          const categ = reviewID.value;
          const rutaFinal = "/api/review/items/" + categ;
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



 