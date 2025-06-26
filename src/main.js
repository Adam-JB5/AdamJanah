
import { initNameScene } from './name.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // 👈 Importa el plugin

gsap.registerPlugin(ScrollTrigger); // 👈 Registra el plugin

initNameScene();



  gsap.utils.toArray('.box').forEach(box => {
    gsap.fromTo(box,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.in",
        scrollTrigger: {
          trigger: box,
          start: "top 80%", // cuando el top del elemento entra en el 80% del viewport
          toggleActions: "play none none none" // solo una vez
        }
      }
    );
  });
