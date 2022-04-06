window.addEventListener("scroll", () => {
    const percentageScroll = Math.trunc((window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight))
    document.querySelector(".percentage-scroller").style.width = percentageScroll + "%"
  })