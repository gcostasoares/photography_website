
if (window.matchMedia("(min-width: 1200px)").matches)  {
    class Example {
        constructor(options) {
            this.root = options.root;
    
            this.init();
    
            setTimeout(this.showImages.bind(this), 1000);
        }
    
        if
        init() {
            this.scroll = new LocomotiveScroll({
                el: this.root,
                direction: 'horizontal',
                smooth: true,
                lerp: 0.05,
                tablet: {       
                    smooth: true
                },
                smartphone: {
                    smooth: true
                }
            });
    
    
            this.images = this.root.querySelectorAll('.image');
    
            [].forEach.call(this.images, (image) => {
                image.addEventListener('click', () => {
                    image.classList.add('-clicked');
                    this.hideImages();
                });
            });
        }
    
        showImages() {
            [].forEach.call(this.images, (image) => {
                image.classList.remove('-clicked');
                image.classList.add('-active');
            });
        }
    
        hideImages() {
            [].forEach.call(this.images, (image) => {
                image.classList.remove('-active');
            });
    
            setTimeout(this.showImages.bind(this), 2000);
        }
    }
    
    
    window.addEventListener('DOMContentLoaded', (event) => {
        const example = new Example({
            root: document.querySelector('.scroll-animations-example')
        });
    });
    
    } 


    
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');

    burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
    });

    window.addEventListener('scroll', function() {
        const firstLine = document.querySelector('.firstline');
        const secondLine = document.querySelector('.secondline');
        const thirdLine = document.querySelector('.thirdline');
        let secondIndex = 3;
    
        // Get the current scroll position
        const scrollPosition = (window.scrollY / 10) - 10;
    
        if (scrollPosition < 0) {
          firstLine.style.left = scrollPosition + 1.5 + 'vw';
        } else if (scrollPosition >= 0 && scrollPosition < secondIndex) {
          secondLine.style.left = 12 + 'vw';
        } else if (scrollPosition >= secondIndex && scrollPosition < 9) {
          const scrollIndex = scrollPosition - secondIndex;
          secondLine.style.left = -scrollIndex + 12 + 'vw';
          console.log(scrollIndex);
          if (scrollIndex <= 0) {
            secondLine.style.left = 6 + 'vw';
            
          }
        }

        if (scrollPosition > 30) {
            thirdLine.style.opacity = 1;
        }
      });
    
    

      
