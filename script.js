function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./saeeam/saeeam (1).png
./saeeam/saeeam (2).png
./saeeam/saeeam (3).png
./saeeam/saeeam (4).png
./saeeam/saeeam (5).png
./saeeam/saeeam (6).png
./saeeam/saeeam (7).png
./saeeam/saeeam (8).png
./saeeam/saeeam (9).png
./saeeam/saeeam (10).png
./saeeam/saeeam (11).png
./saeeam/saeeam (12).png
./saeeam/saeeam (13).png
./saeeam/saeeam (14).png
./saeeam/saeeam (15).png
./saeeam/saeeam (16).png
./saeeam/saeeam (17).png
./saeeam/saeeam (18).png
./saeeam/saeeam (19).png
./saeeam/saeeam (20).png
./saeeam/saeeam (21).png
./saeeam/saeeam (22).png
./saeeam/saeeam (23).png
./saeeam/saeeam (24).png
./saeeam/saeeam (25).png
./saeeam/saeeam (26).png
./saeeam/saeeam (27).png
./saeeam/saeeam (28).png
./saeeam/saeeam (29).png
./saeeam/saeeam (30).png
./saeeam/saeeam (31).png
./saeeam/saeeam (32).png
./saeeam/saeeam (33).png
./saeeam/saeeam (34).png
./saeeam/saeeam (35).png
./saeeam/saeeam (36).png
./saeeam/saeeam (37).png
./saeeam/saeeam (38).png
./saeeam/saeeam (39).png
./saeeam/saeeam (40).png
./saeeam/saeeam (41).png
./saeeam/saeeam (42).png
./saeeam/saeeam (43).png
./saeeam/saeeam (44).png
./saeeam/saeeam (45).png
./saeeam/saeeam (46).png
./saeeam/saeeam (47).png
./saeeam/saeeam (48).png
./saeeam/saeeam (49).png
./saeeam/saeeam (50).png
./saeeam/saeeam (51).png
./saeeam/saeeam (52).png
./saeeam/saeeam (53).png
./saeeam/saeeam (54).png
./saeeam/saeeam (55).png
./saeeam/saeeam (56).png
./saeeam/saeeam (57).png
./saeeam/saeeam (58).png
./saeeam/saeeam (59).png
./saeeam/saeeam (60).png
./saeeam/saeeam (61).png
./saeeam/saeeam (62).png
./saeeam/saeeam (63).png
./saeeam/saeeam (64).png
./saeeam/saeeam (65).png
./saeeam/saeeam (66).png
./saeeam/saeeam (67).png
./saeeam/saeeam (68).png
./saeeam/saeeam (69).png
./saeeam/saeeam (70).png
./saeeam/saeeam (71).png
./saeeam/saeeam (72).png
./saeeam/saeeam (73).png
./saeeam/saeeam (74).png
./saeeam/saeeam (75).png
./saeeam/saeeam (76).png
./saeeam/saeeam (77).png
./saeeam/saeeam (78).png
./saeeam/saeeam (79).png
./saeeam/saeeam (80).png
./saeeam/saeeam (81).png
./saeeam/saeeam (82).png
./saeeam/saeeam (83).png
./saeeam/saeeam (84).png
./saeeam/saeeam (85).png
./saeeam/saeeam (86).png
./saeeam/saeeam (87).png
./saeeam/saeeam (88).png
./saeeam/saeeam (89).png
./saeeam/saeeam (90).png
./saeeam/saeeam (91).png
./saeeam/saeeam (92).png
./saeeam/saeeam (93).png
./saeeam/saeeam (94).png
./saeeam/saeeam (95).png
./saeeam/saeeam (96).png
./saeeam/saeeam (97).png
./saeeam/saeeam (98).png
./saeeam/saeeam (99).png
./saeeam/saeeam (100).png
./saeeam/saeeam (101).png
 `;
  return data.split("\n")[index];
}

const frameCount = 101;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./Mic/mic (1).png
./Mic/mic (2).png
./Mic/mic (3).png
./Mic/mic (4).png
./Mic/mic (5).png
./Mic/mic (6).png
./Mic/mic (7).png
./Mic/mic (8).png
./Mic/mic (9).png
./Mic/mic (10).png
./Mic/mic (11).png
./Mic/mic (12).png
./Mic/mic (13).png
./Mic/mic (14).png
./Mic/mic (15).png
./Mic/mic (16).png
./Mic/mic (17).png
./Mic/mic (18).png
./Mic/mic (19).png
./Mic/mic (20).png
./Mic/mic (21).png
./Mic/mic (22).png
./Mic/mic (23).png
./Mic/mic (24).png
./Mic/mic (25).png
./Mic/mic (26).png
./Mic/mic (27).png
./Mic/mic (28).png
./Mic/mic (29).png
./Mic/mic (30).png
./Mic/mic (31).png
./Mic/mic (32).png
./Mic/mic (33).png
./Mic/mic (34).png
./Mic/mic (35).png
./Mic/mic (36).png
./Mic/mic (37).png
./Mic/mic (38).png
./Mic/mic (39).png
./Mic/mic (40).png
./Mic/mic (41).png
./Mic/mic (42).png
./Mic/mic (43).png
./Mic/mic (44).png
./Mic/mic (45).png
./Mic/mic (46).png
./Mic/mic (47).png
./Mic/mic (48).png
./Mic/mic (49).png
./Mic/mic (50).png
`;
return data.split("\n")[index];
}

const frameCount = 50;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})
