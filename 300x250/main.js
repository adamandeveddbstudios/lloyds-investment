// Banner duration timer start time
var startTime;

// timelaine vars
var lightSwitchDelay = 0.15

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = gsap.timeline({ onComplete: endTime });

  animate();
  // setRollover(); CALLED IN endTime()
}

function animate() {
  tl.set(['#main_content'], { autoAlpha:1, rotation: 0.1, force3D:true });
  tl.set(['#copy1, #copy2'],{rotation: 0.1, force3D:true});

  tl.addLabel('frame1', 0)    
  .to(['#copy1'], 0.5, {left:'18px', autoAlpha: 1, ease: Power1.easeIn}, 'frame1+=0.5')
  tl.addLabel('frame2', 3)
  .to(['#copy1'], 0.5, {autoAlpha: 0, ease: Power1.easeIn}, 'frame2')
  .to(['#copy2'], 0.5, {left:'18px', autoAlpha: 1, ease: Power1.easeIn}, 'frame2+=0.5')
  tl.addLabel('frame3', 6)
  .to(['#copy2'], 0.5, {autoAlpha: 0, ease: Power1.easeIn}, 'frame3')
  .to(['#cover'], 0.5, {autoAlpha: 0, ease: Power1.easeIn}, '<')
  .to(['#logo'], 0.5, {autoAlpha: 0, ease: Power1.easeIn}, '<')
  .to(['#legal'], 0.5, {color: '#000', ease: Power1.easeIn}, '<')
  .to(['#copy3'], 0.5, {autoAlpha: 1, ease: Power1.easeIn}, 'frame3+=0.5')
  .to(['#copy4'], 0.5, {autoAlpha: 1, ease: Power1.easeIn}, 'frame3+=1')
  .to(['#cta'], 0.5, {autoAlpha: 1, ease: Power1.easeIn}, 'frame3+=1.5')
  .to(['#logo2'], 0.5, {autoAlpha: 1, ease: Power1.easeIn}, 'frame3+=2')

}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  gsap.to(["#cta"], 0.3, {scale:1.1, ease: Power1.easeInOut });
}

function default_out(event) {
  gsap.to(["#cta"], 0.3, {  scale:1, ease: Power1.easeInOut });
}

// End timer

function endTime() {
  setRollover()
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
