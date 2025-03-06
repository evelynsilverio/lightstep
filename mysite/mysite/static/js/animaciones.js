
window.onload = function (){
    gsap.to(".logo", { x: 150,
    rotation: 360,
    x: 250,
    xPercent: -100,
    duration: 2,
    repeat: 1,
    yoyo: true,
    });
};

// Animacion de texto
let colors = [
    "0px 0px 5px #0FF, 0px 0px 10px #0FF, 0px 0px 15px #0FF, 0px 0px 20px #0FF, 0px 0px 25px #0FF, 0px 0px 30px #0FF",
    "none",
    "0px 0px 5px #e688f7, 0px 0px 10px #e688f7, 0px 0px 15px #e688f7, 0px 0px 20px #e688f7, 0px 0px 25px #e688f7, 0px 0px 30px #e688f7"
  ];
  
  let colorIndex = 0; // Índice para alternar colores

    gsap.to(".title", { 
    duration: 1.4, 
    delay: 0.5,
    repeat: colors.length - 2, // Se repite solo hasta llegar al rosa
    yoyo: false, 
    onRepeat: function() {
      colorIndex = (colorIndex + 1) % colors.length; // Alternar entre los colores en orden
      document.querySelector(".title").style.setProperty("text-shadow", colors[colorIndex], "important");
    },
    onStart: function() {
      document.querySelector(".title").style.setProperty("text-shadow", colors[0], "important");
    },
    onComplete: function() {
      document.querySelector(".title").style.setProperty("text-shadow", colors[2], "important"); // Se queda en rosa
    }
  });


// //  Animation
