const sliderDiv = document.querySelector('#slider')

//a Día 10 - Parte 2 - JavaScript Bootcamp CodeHouse para clase y constructor A partir de min 50

class Slider {
    constructor(slider,prueba) {
        this.next = slider;
        this.pruebilla = prueba || 'No lee pruebilla';
        
    }

    anotherMethod() {
        console.log(`Prueba duda bootcam ${this.next}`)
    }
}

const prueba = new Slider('JEJEJ');
const prieba2 = new Slider('eslaider','lelo')

prueba.anotherMethod();
prieba2.anotherMethod();