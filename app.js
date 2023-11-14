if (window.matchMedia("(min-width: 1200px)").matches) {
    class Example {
        constructor(options) {
            this.root = options.root;
            this.init();
            setTimeout(this.showImages.bind(this), 1000);
        }

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
let open = false;

burgerMenu.addEventListener('click', function () {
    if (!open) {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
        open = true;
    } else {
        this.classList.remove("close");
        overlay.classList.remove("overlay");
        open = false;
    }
});

overlay.addEventListener('click', function () {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
    open = false;
});

document.querySelector("#ul-elements li:nth-child(1) a").addEventListener('click', function (event) {
    event.preventDefault();
    const photosSection = document.querySelector(".headline");
    photosSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#ul-elements li:nth-child(2) a").addEventListener('click', function (event) {
    event.preventDefault();
    const photosSection = document.querySelector(".handy-aboutme");
    photosSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#ul-elements li:nth-child(3) a").addEventListener('click', function (event) {
    event.preventDefault();
    const photosSection = document.querySelector(".handy-photos");
    photosSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#ul-elements li:nth-child(4) a").addEventListener('click', function (event) {
    event.preventDefault();
    const photosSection = document.querySelector(".handy-footer");
    photosSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener('scroll', function() {
    const scrollDown = document.getElementById("scroll-down");
    const firstLine = document.querySelector('.firstline');
    const secondLine = document.querySelector('.secondline');
    const thirdLine = document.querySelector('.thirdline');
    const rena = document.getElementById('rena');

    scrollIndex = window.scrollY;

    if (scrollIndex > 0) {
        scrollDown.style.opacity = 0;
    }

    const scrollPosition = (window.scrollY / 10) - 10;

    if (scrollPosition > 0 && scrollPosition < 10) {
        firstLine.style.opacity = 1;
    } else if (scrollPosition >= 10 && scrollPosition <= 30) {
        secondLine.style.opacity = 1;
    } else if (scrollPosition > 30 && scrollPosition <= 40) {
        thirdLine.style.opacity = 1;
    } else if (scrollPosition > 40) {
        rena.style.opacity = 1;
    }
});
