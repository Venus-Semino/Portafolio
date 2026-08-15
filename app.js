const tl = gsap.timeline();

// 1. Dibujo desde la izquierda
tl.from(".contenedor-dibujo", {
    x: -300,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
})

// 2. Caen letras de BIENVENIDO (stagger)
.from(".recorte", {
    y: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "bounce.out" 
}, "-=0.5")        

// 3. Papelito "a mi"
.from(".papelito", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)" 
}, "-=0.2") 

// 4. Palabra Portafolio
.from(".lettering-brillante", { 
    clipPath: "inset(0 100% 0 0)", 
    duration: 2, 
    ease: "power2.inOut" 
}, "+=0.2");