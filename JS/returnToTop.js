const scrollToHeader = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
     window.scrollTo(0, currentScroll - (currentScroll / 55));
     window.requestAnimationFrame(scrollToHeader)
  

    }
  }

const btnScroll = document.querySelector(".btn-return-top");

    btnScroll.addEventListener("click", () => {
        setTimeout(() => scrollToHeader(),200);
      })


      // Hace que el boton de scroll to top aparezaca o desaperezca segun los pixeles que haya bajado o subido
      let disapear = () => {
        if(window.scrollY > 585 ){
         btnScroll.style.display = "block"; 
        } else{
          btnScroll.style.display = "none";
        }
      }
    window.onscroll = disapear;

    