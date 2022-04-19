//! Varibles que almacenan el elmeno del

const modal = document.querySelector('#popModal');
/* const btnPrinci = document.querySelector('.buttonPrinci') 
// para hacer testing de la funcion
*/

const closeModal = document.querySelector('#closeModal');



const funCerrarAbrir = () =>{

    
    if(!sessionStorage.getItem('visto')) /* getItem obtiene el setItem que cuando ejecutado esta siempre activado */ {
        modal.classList.add("popModalVisible");
        modal.classList.remove("popModalInvisible");
         // Tenia un bug porque use toggle como propiedad. Ahora uso add y no esta el bug
    } 

}

/* let nombreee = 'davicito';
const Prueba = 'hola ' + nombreee +' ' + 99;
console.log(Prueba);
console.log(typeof Prueba) */

//! Funciones

const timer = () => {
    setTimeout(() =>{
     funCerrarAbrir();
    
    },5000)
}

const modalScrollShow = () => {
    const percentageScroll = Math.trunc((window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight))
    if(percentageScroll >= 25){
        funCerrarAbrir();
   
        //Tengo que ponerla en la funcion de cierre
        /* sessionStorage.setItem('popModal', modal.classList.add("popModalInvisible")); */
    }
}

/* modal.style.display = 'none' */



/* const sesionCerrada = () => {sessionStorage.setItem('popModal', modal.style.display = 'none'); } */

const fcloseModal = () => {
    /* event.cancelBubble = true */  
   /*  event.stopImmediatePropagation(); */
   

   /* if(event.target.matches("#closeModal") || !event.target.closest(".contenidoModal") QUitan para probar funcionalidad de solo esc  ) */ {
    /* modal.classList.toggle('popModalInvisible'); con toggle tenia que añadir revemove event listener descuri que con add no hace falta en los condicionales con if tampoco es obligatorio else*/
    
    sessionStorage.setItem('visto','modalCerrado');
    modal.classList.add('popModalInvisible');
    modal.classList.remove("popModalVisible");
    
    /* Ya no es necesario porque borro(remove) la clase visible algo que he añadido despues de esta anaizando el codigo
    
    window.removeEventListener('scroll',modalScrollShow); */
    /* sesionCerrada(); */
    
     }
  /*   Pruebas de codigo fallidas para cerrar modal, pero ya solucionado document.removeEventListener('click',fcloseModal); 
  
   .value);*/
   }
    /* event.stopPropagation(); */
    
    const cerrarEquis = () =>{
        /* funCerrarAbrir(); */
        sessionStorage.setItem('visto','modalCerrado');
        modal.classList.add('popModalInvisible');
        modal.classList.remove("popModalVisible");
    }

    const cerrarFuera = (event) =>{

        
        if(event.target == modal && event.type == 'click'){
            sessionStorage.setItem('visto','modalCerra');
            modal.classList.add('popModalInvisible');
            modal.classList.remove("popModalVisible");
            /* funCerrarAbrir(); */
    }}

    const cerrarEsc = (event) =>{
        if(event.keyCode === 27){
            sessionStorage.setItem('visto','modalCerra');
            modal.classList.add('popModalInvisible');
            modal.classList.remove("popModalVisible");
        }
    }





//! Listeners




/* Para acitvar modal por tiempo */

/* window.addEventListener('load', timer)  */


// EN este caso puede ser document o window 
/* window.addEventListener('click',fcloseModal) */

/*  window.addEventListener('keyup', fcloseModal);  */

closeModal.addEventListener('click', cerrarEquis);
modal.addEventListener('click', cerrarFuera);
document.addEventListener('keydown', cerrarEsc); //* NOTA: aplicando el evento al modal no funciona

/* btnPrinci.addEventListener('click',timer) 
// Boton de testing de la funcion
*/

window.addEventListener('scroll',modalScrollShow)