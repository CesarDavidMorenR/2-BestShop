// Obteniendo los elementos html del formulario para leugo obtener los datos y tambien co

const namee = document.querySelector("#namee");
const emaiil = document.querySelector("#emaill");

// Varibales para almacenar los valores (datos introduciodos en el input) del formulario



// Evento para enviar los datos al JSON
// mejor event para no confudir error
const enviarJson = async (event) => {
  
  event.preventDefault();
// .. Recoger variables en el momento correcto... las variables que obtienen su valor de forma dinamica deben declarse justo antes de usarse no de manera global
  const valorNombre = namee.value;
  const valorEmail = emaiil.value;

  const btnForm = document.getElementById('btn-Formu');

  let validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let cajaCheck = document.querySelector("#checkbox");
  let compruebaCheckeo = cajaCheck.checked; 

if((valorNombre.length >= 3 && valorNombre.length <= 100) && (validation.test(valorEmail)) && compruebaCheckeo === true){
  try{

    // la respuesta en la misma variable
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        nombre: valorNombre,
        email: valorEmail,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
 // En el parametro de la condicion se checkea con ok(200) si es correcto entonces se devuelve la respuesta
    if(response.ok) {
      const jsonResponse = await response.json()
      /* const renderResponse = (jsonResponse) => {
        let structuredRes = JSON.stringify(jsonResponse).replace(/,/g, ", \n");
        structuredRes = `<pre>${structuredRes}</pre>`;
      } */
      console.log(jsonResponse)
      alert(`Envio de datos correctos. El nombre recibido es:${jsonResponse.nombre} y su email enviado es: ${jsonResponse.email}`)
       btnForm.disabled = true; 
    }
  }
    catch(err) {
      console.log(err.message)
    }  

    
}else{
  alert('Please confirm your consent and/or check if yout email and/or name are on incorrect format, correct that and please try again')
    
   } }


const formulario = document.querySelector("#contactoForm");

//El evento "submit" se usa obteniendo el elemento form 


// cuando el parametro de la funcion fetch asyncrona es el evento "event" y solo el evento para llamar a la funcion no se llama con las parentesis


  formulario.addEventListener("submit", enviarJson); 


