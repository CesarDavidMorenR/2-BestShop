/*  
 let pru = document.getElementsByClassName('prueba');
 pru[0].style.color = "blue"; 
 
 Con getElementsByClassName se devuelve un array. Siempre es un array aunque haya un elemento. Entonces ese solo elemento es una arrray por tanto index 0 
 */


 
 const email = document.querySelector("#emaill");
 const namee = document.querySelector("#namee")
 
let validacionNombre = (nameee)=>{
 if(nameee.length >= 3 && nameee.length <= 100){
    namee.style.borderColor = "green";
 }else{
     namee.style.borderColor = "red";
 }}



const valor = namee.innerHTML

validacionNombre(valor)



