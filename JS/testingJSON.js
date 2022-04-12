// Obteniendo los elementos html del formulario para leugo obtener los datos y tambien co

const namee = document.querySelector("#namee");
const emaiil = document.querySelector("#emaill");

// Varibales para almacenar los valores (datos introduciodos en el input) del formulario

const valorNombre = namee.value;
const valorEmail = emaiil.value;

// Evento para enviar los datos al JSON

const botonFormulario = document.querySelector("#btn-Formu")

botonFormulario.addEventListener("submit", fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: valorNombre,
    body: valorEmail,
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)))

