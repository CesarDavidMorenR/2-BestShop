

//a Día 10 - Parte 2 - JavaScript Bootcamp CodeHouse para clase y constructor A partir de min 50

class Slider {
    constructor(id) {
        this.slider = document.getElementById(id);
        this.images = this.slider.getElementsByTagName("img");
        this.numImages = this.images.length; 
        this.slider.classList.add('slider-container');
        this.slider.style.height = this.maximumImageHeight();
        this.createDots();
        this.createArrows();
        this.activeIndex = 0;
        this.activeImage = this.images[this.activeIndex];
        this.activeDot = this.dots[this.activeIndex];
        this.showImage(0);
        /* this.interval = null;  */
        this.startInterval();
        
    }

    startInterval() {
        /* clearInterval(this.interval); */
        this.invterval = setInterval(() => {
            this.nextImage();
        }, 3700);
    }

    maximumImageHeight() {
        let maxHeight = 500;
        for (let image of this.images) {
            image.style['max-width'] = '100%';
            const height = image.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
            return maxHeight;
        }
    }

    createDots() {
        const dotsContainer = document.createElement('ul');
        dotsContainer.className = 'slider__dots'
        this.dots = [];
        for (let i = 0; i < this.numImages; i++){
            const dot = document.createElement('li');
            dot.dataset.index = i;
            dot.className = 'slider__undot'
            dot.addEventListener('click', (event) => {
               /*  this.startInterval(); */
                this.showImage(parseInt(event.target.dataset.index));
            });
            dotsContainer.appendChild(dot);
            this.dots.push(dot);
    }
        this.slider.appendChild(dotsContainer);

    }

   createArrows() {
       const leftArrow = document.createElement('button');
       leftArrow.className = 'slider__arrow slider__arrow--left';
       this.slider.appendChild(leftArrow);
       leftArrow.addEventListener('click', () =>{
           this.prevImage();
          /*  this.startInterval(); */
       });
       
       
       const rightArrow = document.createElement('button');
       rightArrow.className = 'slider__arrow slider__arrow--right';
       this.slider.appendChild(rightArrow);
       rightArrow.addEventListener('click', () =>{
           this.nextImage();
           /* this.startInterval(); */
       });
   }

 showImage(index) {
    this.activeImage.classList.remove('slider_image-active');
    this.activeDot.classList.remove('slider_dot-active');
    this.images[index].classList.add('slider_image-active');
    this.dots[index].classList.add('slider_dot-active');
    this.activeImage = this.images[index];
    this.activeDot = this.dots[index];
    this.activeIndex = index;
}

nextImage() {
    if(this.activeIndex === this.numImages - 1) {
        this.showImage(0);
    } else {
        this.showImage(this.activeIndex + 1);
    }
}

prevImage() {
    if(this.activeIndex === 0){
        this.showImage(this.numImages - 1);
    } else {
        this.showImage(this.activeIndex - 1);
    }
}

 }

const eslaider = new Slider('slider'); // Puede declararse la instancia sin almacenarse en una variable (Investigar porque). Se ejecuta el codigo al delcara la instancia

/* document.addEventListener("load",eslaider);  No hace falta. Se ejecuta sola la intancia */