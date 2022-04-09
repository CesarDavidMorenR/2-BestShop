const scrollToHeader = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - (currentScroll / 25));
      window.requestAnimationFrame(scrollToHeader);

    }
  }

  

const btnScroll = document.querySelector(".btn-return-top");

    btnScroll.addEventListener("click", () => {
        setTimeout(() => scrollToHeader(),200);
      })
