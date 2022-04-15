// Varibles que almacenan el elmeno del

const modal = document.querySelector('#popModal');
/* const btnPrinci = document.querySelector('.buttonPrinci') 
// para hacer testing de la funcion
*/

const closeModal = document.querySelector('#closeModal');

//Funciones

const timer = () => {
    setTimeout(() =>{

        // Tenia un bug porque use toggle como propiedad. Ahora uso add y no esta el bug
        modal.classList.add("popModalVisible");
    },5000)
}


const fcloseModal = (event) => {
    /* event.cancelBubble = true */
   /*  event.stopImmediatePropagation(); */
   if(event.target.matches("#closeModal") || !event.target.closest("#popModal")){
    /* modal.classList.toggle('popModalInvisible'); con toggle tenia que añadir revemove event listener descuri que con add no hace falta en los condicionales con if tampoco es obligatorio else*/
    modal.classList.add('popModalInvisible');
  /*   document.removeEventListener('click',fcloseModal); */
   }
    /* event.stopPropagation(); */
    
}


//Listeners

window.addEventListener('load', timer)


// EN este caso puede ser document o window 
window.addEventListener('click',fcloseModal)

/* btnPrinci.addEventListener('click',timer) 
// Boton de testing de la funcion
*/