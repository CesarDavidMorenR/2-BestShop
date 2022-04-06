     /* Se pone cualquier nombre despues de let y luego llama a las clases que se va a usar para funcionar hamburguesa (.hamburger y .triggermenu) */

      /* "Var" se puede usar, pero usar preferiblemnte "let" */
      let cualquiernombre = document.querySelector(".hamburger");
      let menu = document.querySelector(".triggerMenu");

      /*  Hace que hamburguesa se mueva llama a clase "is-active" de hamburguer.css */
      cualquiernombre.addEventListener("click", function() {
          cualquiernombre.classList.toggle("is-active");
      });

      cualquiernombre.addEventListener('click', function () {
          /* Se pone cualquier nombre entre parentesis llamando a clase en el css principal para hacer visible el menu despues pinchar hamburguesa */
          menu.classList.toggle("hacer_menu_responsi_visible")
      })