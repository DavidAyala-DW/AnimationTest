import './style.css'
import animationData from "./public/Kuru_Shoe_v3.json";

let lottieProgress = lottie.loadAnimation({
  container: document.querySelector(".lottie-progress"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "Kuru_Shoe_v3.json"
  });
  

const controller = new ScrollMagic.Controller();      

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 1000, offset: 1000 })

.setTween("#animate2", 1, { className: "+=up" })
.addIndicators({ name: "marcador2" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 1000, offset: 2000 })

.setTween("#animate2", 1, { className: "+=upAll" })
.addIndicators({ name: "marcador3" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 0, offset: 3000 })

.setTween("#animate", 1, { className: "+=animateLotti" })
.addIndicators({ name: "marcador3" })
.addTo(controller)
.on("enter", () => {

  window.addEventListener("scroll", () => {
    let totalHeight = 20000;
    let scrollFromTop = window.scrollY;
    let totalFrames = lottieProgress.totalFrames;
    let scrollPercentage = (scrollFromTop * 100) / totalHeight;
    let scrollPercentRounded = Math.round(scrollPercentage); // Just in case
  
    // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
    if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
      lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
    } else {
      return;
    }
  
  })

});


