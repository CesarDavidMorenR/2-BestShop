// Varibles que almacenan el elmeno del

const modal = document.querySelector('#popModal');
/* const btnPrinci = document.querySelector('.buttonPrinci') 
// para hacer testing de la funcion
*/

const closeModal = document.querySelector('#closeModal');


/* let nombreee = 'davicito';
const Prueba = 'hola ' + nombreee +' ' + 99;
console.log(Prueba);
console.log(typeof Prueba) */

//Funciones

const timer = () => {
    setTimeout(() =>{

        // Tenia un bug porque use toggle como propiedad. Ahora uso add y no esta el bug
        modal.classList.add("popModalVisible");
        modal.classList.remove("popModalInvisible");
    },5000)
}

const modalScrollShow = () => {
    const percentageScroll = Math.trunc((window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight))
    if(percentageScroll >= 25){
        modal.classList.add("popModalVisible");
        modal.classList.remove("popModalInvisible");
        //Tengo que ponerla en la funcion de cierre
        /* sessionStorage.setItem('popModal', modal.classList.add("popModalInvisible")); */
    }
}

const fcloseModal = (event) => {
    /* event.cancelBubble = true */  
   /*  event.stopImmediatePropagation(); */
   if(event.target.matches("#closeModal") || !event.target.closest("#popModal")){
    /* modal.classList.toggle('popModalInvisible'); con toggle tenia que añadir revemove event listener descuri que con add no hace falta en los condicionales con if tampoco es obligatorio else*/
    
    modal.classList.add('popModalInvisible');
    window.removeEventListener('scroll',modalScrollShow);
    sessionStorage.setItem('popModal', document.getElementById('#popModal').value);
    
     }
  /*   document.removeEventListener('click',fcloseModal); */
   }
    /* event.stopPropagation(); */
    



//Listeners




/* window.addEventListener('load', timer) */


// EN este caso puede ser document o window 
window.addEventListener('click',fcloseModal)

window.addEventListener('keydown',fcloseModal)



/* btnPrinci.addEventListener('click',timer) 
// Boton de testing de la funcion
*/

window.addEventListener('scroll',modalScrollShow)