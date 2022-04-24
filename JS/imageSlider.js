

//a Día 10 - Parte 2 - JavaScript Bootcamp CodeHouse para clase y constructor A partir de min 50

class Slider {
    constructor(id) {
        this.slider = document.getElementById(id);
/*         this.images = this.slider.getElementsByTagName("img");
        this.numImages = images.length; */
        this.slider.classList.add('slider-container');
        
    }

}

const eslaider = new Slider('slider'); // Puede declararse la instancia sin almacenar en una variable (Investigar porque)

/* document.addEventListener("load",eslaider); */