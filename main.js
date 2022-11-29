import './style.css'

window.minHeight = 3312.5;
window.totalHeight = 3312.5;
window.bg_color = "#262626";

const velocity_value = document.querySelector("#velocity_value");
velocity_value.onchange = e => {
  const read_value = document.querySelector("#read_value");
  read_value.textContent = e.target.value;
}

const color_value = document.querySelector("#color_value");
color_value.onchange = e => {
  const read_value = document.querySelector("#read_color_value");
  window.bg_color = e.target.value;
  read_value.textContent = e.target.value;
}

const save_value_button = document.querySelector("#save_value");
save_value_button.onclick = e => {
  e.preventDefault();
  resetAll();
  const velocity = document.querySelector("#velocity_value").value;
  window.totalHeight = window.minHeight + window.minHeight*(velocity/10);
  setHeight(window.totalHeight);
  setColor(window.bg_color);
  makeScrollMagic();
}

function setHeight(height) {
  const set_height_el = document.querySelector("#set-height");
  set_height_el.style.height = `${height}px`;
}

function setColor(color) {
  const set_height_el = document.querySelector("#animate2");
  set_height_el.style.backgroundColor = color ;
}

setHeight(window.totalHeight);
setColor(window.bg_color);

let lottieProgress = lottie.loadAnimation({
  container: document.querySelector(".lottie-progress"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "Kuru_Shoe_v4.json"
  });

function handleScroll(h){

  let totalHeight = window.totalHeight*.6; // replace to window variable
  let scrollFromTop = window.scrollY;
  let totalFrames = lottieProgress.totalFrames;
  let scrollPercentage;
  if(scrollFromTop >= totalHeight){
    lottieProgress.setDirection(-1);
    const difference = scrollFromTop - totalHeight;
    console.log(totalHeight - difference);
    scrollPercentage = ( (totalHeight - difference)/4 * 100) / totalHeight;
    console.log(scrollPercentage,"reverse");
  }else{
    scrollPercentage = (scrollFromTop * 100) / totalHeight;
    console.log(scrollPercentage);
  }
  

  // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
  // console.log((scrollPercentage * totalFrames) / 100 < totalFrames);
  if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
    lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
  } else {
    return;
  }
}

function makeScrollMagic(){

  window.controller = new ScrollMagic.Controller();      
   
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: totalHeight*0.07547169811, offset: totalHeight*0.03773584905 })
  
  .setTween("#animate2", 1, { className: "+=up" })
  .addTo(controller);
  
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: totalHeight*0.07547169811, offset: totalHeight*0.07547169811 })
  
  .setTween("#animate2", 1, { className: "+=upAll" })
  .addTo(controller);
  
  
  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 0, offset: totalHeight*0.05 })
  
  .setTween("#animate", 1, { className: "+=animateLotti" })
  .addTo(controller)
  .on("enter", () => {  
    window.addEventListener("scroll", handleScroll, true);  
  });

  new ScrollMagic.Scene({ triggerElement: ".trigger", duration: totalHeight*0.07547169811, offset: totalHeight*.95})

  .setTween("#animate", 1, { className: "+=opactity-disabled upAllAll" })
  .addTo(controller);

  // new ScrollMagic.Scene({ triggerElement: ".trigger", duration: totalHeight*0.13207547169 , offset: totalHeight})

  // .setTween("#last_section", 1, { className: "+=upAll opactity-active" })
  // .addTo(controller);

}


makeScrollMagic();



// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

// .setTween("#ultimate_insole", 1, { className: "+=opactity-active" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

// .setTween("#kuru_cloud", 1, { className: "+=opactity-active" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 2000, offset: 4150 })

// .setTween("#kuru_sole", 1, { className: "+=opactity-active" })
// .addTo(controller);

// //Content

// //Ultimate Insole

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 3200, offset: 4800 })

// .setTween("#ultimate_insole", 1, { className: "+=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 4800 })

// .setTween("#ultimate_insole_content", 1, { className: "+=opactity-active" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

// .setTween("#ultimate_insole", 1, { className: "-=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

// .setTween("#ultimate_insole_content", 1, { className: "-=opactity-active" })
// .addTo(controller);

// //kuru_cloud

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 5500, offset: 9000 })

// .setTween("#kuru_cloud", 1, { className: "+=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 9000 })

// .setTween("#kuru_cloud_content", 1, { className: "+=opactity-active"  })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

// .setTween("#kuru_cloud", 1, { className: "-=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

// .setTween("#kuru_cloud_content", 1, { className: "-=opactity-active"  })
// .addTo(controller);

// //Sole

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 5700, offset: 14300 })

// .setTween("#kuru_sole", 1, { className: "+=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 14300 })

// .setTween("#kuru_sole_content", 1, { className: "+=opactity-active"  })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 19800 })

// .setTween("#kuru_sole", 1, { className: "-=active_card" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 200, offset: 19800 })

// .setTween("#kuru_sole_content", 1, { className: "-=opactity-active"  })
// .addTo(controller);


// //Clear All

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

// .setTween("#ultimate_insole", 1, { className: "-=opactity-active" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

// .setTween("#kuru_cloud", 1, { className: "-=opactity-active" })
// .addTo(controller);

// new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 500, offset: 20000 })

// .setTween("#kuru_sole", 1, { className: "-=opactity-active" })
// .addTo(controller);

function resetAll(){
  window.controller.destroy(true);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  lottieProgress.goToAndStop(0, true);
  window.removeEventListener("scroll", handleScroll, true);    
}

setTimeout(() => {
  // makeScrollMagic();
}, 5000);