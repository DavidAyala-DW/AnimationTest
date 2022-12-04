import './style.css'

window.minHeight = 3643.75;
window.globalHeight = 3643.75;
window.accumulated_height = 0;

function setHeight(height) {
  const set_height_el = document.querySelector("#set-height");
  set_height_el.style.minHeight = `${height}px`;
}

function lottiePosition(){

  setTimeout(() => {

    const lottie = document.querySelector(".lottie-progress svg");
    const lottieWrapper = document.querySelector(".lottie-progress-parent");
    const alternImage = document.querySelector("#alternImage");
    let topValue;
    const topValueList = {
      "desktop": "58%",
      "tablet": "52%",
      "mobile": "46.5%"
    }

    if(lottie.clientHeight != 0){
      lottieWrapper.style.height = `${lottie.clientHeight*1.066}px`;
    }else{
      lottieWrapper.style.height = `${alternImage.clientHeight*1.066}px`;
    }
      
    if(window.innerWidth >= 1024){
      topValue = topValueList["desktop"];
    }
  
    if(window.innerWidth < 1024 && window.innerHeight >= 768){
      topValue = topValueList["tablet"];
    }
  
    if(window.innerWidth < 768){
      topValue = topValueList["mobile"];
    }
  
    if(lottie.clientHeight != 0){
      lottieWrapper.style.top = `calc(${topValue} - ${lottie.clientHeight*1.066/2}px )`;
    }else{
      lottieWrapper.style.top = `calc(${topValue} - ${alternImage.clientHeight*1.066/2}px )`;
    }

  }, 100);

}

lottiePosition();
window.addEventListener("resize", lottiePosition);

setHeight(window.globalHeight);

let lottieProgress = lottie.loadAnimation({
  container: document.querySelector(".lottie-progress"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "Kuru_Shoe_v4.json"
  });

function handleScroll(h){
  let totalHeight = window.globalHeight*.35; // 35% only first animation, 25% only second animation
  let scrollFromTop = (window.scrollY + window.innerHeight/2) - window.globalHeight*0.15;
  if(scrollFromTop <= 0 || scrollFromTop >= window.globalHeight*0.60) return;
  let totalFrames = lottieProgress.totalFrames;
  let scrollPercentage;
  if(scrollFromTop >= totalHeight){
    lottieProgress.setDirection(-1);
    const difference = scrollFromTop - totalHeight;
    scrollPercentage = ( (totalHeight - difference)/3 * 100) / totalHeight;
  }else{
    scrollPercentage = (scrollFromTop * 100) / totalHeight;
  }
  // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
  if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
    lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
  } else {
    return;
  }
}

function makeScrollMagic(){

  window.controller = new ScrollMagic.Controller();      

  //Banner
   
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 0, offset: 0 })  
  .setTween(".trigger", 1, { className: "+=init" })
  .addTo(controller);
  
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.125, offset: window.innerHeight*.50 })  
  .setTween("#animate2", 1, { className: "+=upAll" })
  .addTo(controller);

  // Altern Image

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.05, offset: window.globalHeight*0.15 })  
  .setTween(".lottie-progress-parent", 1, { className: "-=lottie-progress-hide" })
  .addTo(controller)
  .on("enter", () => {  
    window.addEventListener("scroll", handleScroll, true);  
  });

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.05, offset: window.globalHeight*0.15 })  
  .setTween("#alternImage", 1, { className: "+=alternImage-hide" })
  .addTo(controller)
  .on("enter", () => {  
    window.addEventListener("scroll", handleScroll, true);  
  });

  //Shoe
      
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 0, offset: window.globalHeight*0.15 })  
  .setTween("#animate", 1, { className: "+=animateLotti" })
  .addTo(controller)
  .on("enter", () => {  
    window.addEventListener("scroll", handleScroll, true);  
  });

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.12, offset: window.globalHeight*0.15 })  
  .setTween("#heading", 1, { className: "+=heading-translate" })
  .addTo(controller)

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.1, offset: window.globalHeight*0.75 })  
  .setTween("#animate", 1, { className: "+=upAllAll" })
  .addTo(controller)

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.02, offset: window.globalHeight*0.625 })  
  .setTween("#heading", 1, { className: "+=heading-translate-none" })
  .addTo(controller)

  //Ultimate Insole

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.24 }) //
  .setTween("#ultimate_insole", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: (window.globalHeight*0.015 + window.globalHeight*0.24) })
  .setTween("#ultimate_insole", 1, { className: "+=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.24 })
  .setTween("#ultimate_insole_content", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.325 })
  .setTween("#ultimate_insole_content", 1, { className: "-=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.325 })
  .setTween("#ultimate_insole", 1, { className: "-=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: (window.globalHeight*0.495 + window.globalHeight*0.015) })
  .setTween("#ultimate_insole", 1, { className: "-=opactity-active" })
  .addTo(controller);

  //kuru_cloud

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.24 })
  .setTween("#kuru_cloud", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.325 })
  .setTween("#kuru_cloud", 1, { className: "+=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.425 })
  .setTween("#kuru_cloud", 1, { className: "-=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.325 })
  .setTween("#kuru_cloud_content", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.425 })
  .setTween("#kuru_cloud_content", 1, { className: "-=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: (window.globalHeight*0.495 + window.globalHeight*0.015) })
  .setTween("#kuru_cloud", 1, { className: "-=opactity-active" })
  .addTo(controller);

  //Sole

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.24 })
  .setTween("#kuru_sole", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.425 })
  .setTween("#kuru_sole", 1, { className: "+=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.495 })
  .setTween("#kuru_sole", 1, { className: "-=active_card" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.425 })
  .setTween("#kuru_sole_content", 1, { className: "+=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: window.globalHeight*0.495 })
  .setTween("#kuru_sole_content", 1, { className: "-=opactity-active" })
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.015, offset: (window.globalHeight*0.495 + window.globalHeight*0.015) })
  .setTween("#kuru_sole", 1, { className: "-=opactity-active" })
  .addTo(controller);

  //Last Content
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: window.globalHeight*0.10, offset: window.globalHeight*0.74})
  .setTween("#last_section", 1, { className: "+=upAll opactity-active" })
  .addTo(controller);

}

makeScrollMagic();
