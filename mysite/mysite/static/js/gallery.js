var currentImg = undefined,
    currentImgProps = {x:0, y:0},
    isZooming = false,
    column = -1,
    mouse = {x:0, y:0},
    delayedPlay;

// Verifica que haya imágenes
if (images.length === 0) {
    console.error("No hay imágenes disponibles.");
} else {
    console.log("Las imágenes han sido cargadas correctamente.");
}

// Selecciona el contenedor donde irán las imágenes
var container = document.querySelector('.mainBoxes');

for (var i = 0; i < images.length; i++) {
    if (i % 4 == 0) column++;

    var b = document.createElement('div');
    container.appendChild(b);

    gsap.set(b, {
        attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
        backgroundImage: 'url(' + images[i] + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        x: [60, 280, 500][column],
        width: 400,
        height: 640,
        x: 0,
        scale: 1,
        borderRadius: 20,
        overflow: 'visible', /* Esto asegurará que las imágenes no se recorten */
        scale: 0.5,
        zIndex: 1
    });

    b.tl = gsap.timeline({ paused: true, repeat: -1 })
        .fromTo(b, { y: [-575, 800, 800][column], rotation: -0.05 }, 
                   { duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none' })
        .progress(i % 4 / 4);
}

// Función para pausar animaciones
function pauseBoxes(b) {
    var classStr = 'pb-col0';
    if (b.classList.contains('pb-col1')) classStr = 'pb-col1';
    if (b.classList.contains('pb-col2')) classStr = 'pb-col2';

    document.querySelectorAll('.' + classStr).forEach(el => {
        gsap.to(el.tl, { timeScale: 0, ease: 'sine' });
    });
}

// Función para reanudar animaciones
function playBoxes() {
    document.querySelectorAll('.photoBox').forEach(el => {
        el.tl.play();
        gsap.to(el.tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
    });
}


// Llama a la animación cuando la página carga
window.onload = function () {
    gsap.timeline({ onStart: playBoxes })
        .set('.main', { perspective: 800 })
        .set('.photoBox', { opacity: 1, cursor: 'pointer' })
        .set('.mainBoxes', { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 })
        .fromTo('.main', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2);
};


