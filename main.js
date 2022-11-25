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
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 1000, offset: 2000 })

.setTween("#animate2", 1, { className: "+=upAll" })
.addTo(controller);


new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 0, offset: 3000 })

.setTween("#animate", 1, { className: "+=animateLotti" })
.addTo(controller)
.on("enter", () => {

  window.addEventListener("scroll", () => {
    let totalHeight = 20000;
    let scrollFromTop = window.scrollY;
    let totalFrames = lottieProgress.totalFrames;
    let scrollPercentage;
    console.log(scrollFromTop);
    if(scrollFromTop >= 20000){
      scrollPercentage = ( totalHeight - (scrollFromTop*(.7)) ) * 100 / totalHeight;
      console.log(scrollPercentage);
    }else{
      scrollPercentage = (scrollFromTop * 100) / totalHeight;
      console.log(scrollPercentage);
    }
    
  
    // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
    console.log((scrollPercentage * totalFrames) / 100 < totalFrames);
    if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
      lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
    } else {
      return;
    }
  
  })

});

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

.setTween("#ultimate_insole", 1, { className: "+=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

.setTween("#kuru_cloud", 1, { className: "+=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

.setTween("#kuru_sole", 1, { className: "+=opactity-active" })
.addTo(controller);

//Content

//Ultimate Insole

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 3200, offset: 4800 })

.setTween("#ultimate_insole", 1, { className: "+=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 4800 })

.setTween("#ultimate_insole_content", 1, { className: "+=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

.setTween("#ultimate_insole", 1, { className: "-=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

.setTween("#ultimate_insole_content", 1, { className: "-=opactity-active" })
.addTo(controller);

//kuru_cloud

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 5500, offset: 9000 })

.setTween("#kuru_cloud", 1, { className: "+=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

.setTween("#kuru_cloud_content", 1, { className: "+=opactity-active"  })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

.setTween("#kuru_cloud", 1, { className: "-=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

.setTween("#kuru_cloud_content", 1, { className: "-=opactity-active"  })
.addTo(controller);

//Sole

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 5700, offset: 14300 })

.setTween("#kuru_sole", 1, { className: "+=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

.setTween("#kuru_sole_content", 1, { className: "+=opactity-active"  })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 19800 })

.setTween("#kuru_sole", 1, { className: "-=active_card" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 19800 })

.setTween("#kuru_sole_content", 1, { className: "-=opactity-active"  })
.addTo(controller);


//Clear All

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

.setTween("#ultimate_insole", 1, { className: "-=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

.setTween("#kuru_cloud", 1, { className: "-=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

.setTween("#kuru_sole", 1, { className: "-=opactity-active" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 1000, offset: 25000 })

.setTween("#animate", 1, { className: "+=opactity-disabled upAllAll" })
.addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 1750, offset: 25000 })

.setTween("#last_section", 1, { className: "+=upAll opactity-active" })
.addTo(controller);