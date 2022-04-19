/*  
 let pru = document.getElementsByClassName('prueba');
 pru[0].style.color = "blue"; 
 
 Con getElementsByClassName se devuelve un array. Siempre es un array aunque haya un elemento. Entonces ese solo elemento es una arrray por tanto index 0 
 */


// Declaracion de variables globales 

/*  const formulario = document.querySelector("#contactoForm"); */
 const nombre = document.querySelector("#namee")
 const email = document.querySelector("#emaill");


/*  formulario.addEventListener("submit", function(e) {
     e.preventDefault();
 })
  */


 // Validar nombre En rojo sino tiene el largo entre 3 y 100
 
let validacionNombre = (event)=>{
    let largo = event.target.value;
 if(largo.length >= 3 && largo.length <= 100){
    nombre.style.borderColor = "green";
 }else{
     nombre.style.borderColor = "red";
 }}


 nombre.addEventListener('input',validacionNombre)

// Validar Correo electronico

let validacionEmail = (event)=>{
    let validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let nombreCorreo = event.target.value;
 if(validation.test(nombreCorreo)){
    email.style.borderColor = "green";
 }else{
     email.style.borderColor = "red";
 }}

 email.addEventListener('input',validacionEmail)

 //Validar que checkbox a sido aceptada

 let cajaCheck = document.querySelector("#checkbox");

 const validacionCheck = (event) =>{
    let compruebaCheckeo = event.target.checked; 
    if(compruebaCheckeo === true){
        cajaCheck.style.borderColor = "green";
    }else{
        cajaCheck.style.borderColor = "red";
    }
 }

 cajaCheck.addEventListener('input',validacionCheck)