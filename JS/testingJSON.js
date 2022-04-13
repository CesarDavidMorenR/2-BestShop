// Obteniendo los elementos html del formulario para leugo obtener los datos y tambien co

const namee = document.querySelector("#namee");
const emaiil = document.querySelector("#emaill");

// Varibales para almacenar los valores (datos introduciodos en el input) del formulario

const valorNombre = namee.value;
const valorEmail = emaiil.value;

// Evento para enviar los datos al JSON

const enviarJson = async () => {
  
  try{
    const theFetch = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        nombre: valorNombre,
        email: valorEmail,
        userId: 2,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if(response.ok) {
      const jsonResponse = await response.json()
      /* const renderResponse = (jsonResponse) => {
        let structuredRes = JSON.stringify(jsonResponse).replace(/,/g, ", \n");
        structuredRes = `<pre>${structuredRes}</pre>`;
      } */
      console.log(jsonResponse)
    }
  }
    catch(err) {
      console.log(err.message)
    }  

  }


const botonFormulario = document.querySelector("#btn-Formu");

botonFormulario.addEventListener("submit", enviarJson);

