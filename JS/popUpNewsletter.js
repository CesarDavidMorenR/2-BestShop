// Varibles que almacenan el elmeno del

const modal = document.querySelector('#popModal');
/* const btnPrinci = document.querySelector('.buttonPrinci') 
// para hacer testing de la funcion
*/

const closeModal = document.querySelector('#closeModal');

const funCerrarAbrir = () =>{

    if(!sessionStorage.getItem('visto') ){
        modal.classList.add("popModalVisible");
        modal.classList.remove("popModalInvisible");
    } 

}

/* let nombreee = 'davicito';
const Prueba = 'hola ' + nombreee +' ' + 99;
console.log(Prueba);
console.log(typeof Prueba) */

//Funciones

const timer = () => {
    setTimeout(() =>{
     funCerrarAbrir();
        // Tenia un bug porque use toggle como propiedad. Ahora uso add y no esta el bug

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

const fcloseModal = event => {
    /* event.cancelBubble = true */  
   /*  event.stopImmediatePropagation(); */
   if(event.target.matches("#closeModal") || !event.target.closest(".contenidoModal")){
    /* modal.classList.toggle('popModalInvisible'); con toggle tenia que añadir revemove event listener descuri que con add no hace falta en los condicionales con if tampoco es obligatorio else*/
    
    sessionStorage.setItem('visto', 'none');
    modal.classList.add('popModalInvisible');
    window.removeEventListener('scroll',modalScrollShow);
    /* sesionCerrada(); */
    
     }
  /*   Pruebas de codigo fallidas para cerrar modal, pero ya solucionado document.removeEventListener('click',fcloseModal); 
  
   .value);*/
   }
    /* event.stopPropagation(); */
    



//Listeners




/* Para acitvar modal por tiempo */

/* window.addEventListener('load', timer) 
 */

// EN este caso puede ser document o window 
window.addEventListener('click',fcloseModal)

window.addEventListener('keydown',fcloseModal)



/* btnPrinci.addEventListener('click',timer) 
// Boton de testing de la funcion
*/

window.addEventListener('scroll',modalScrollShow)