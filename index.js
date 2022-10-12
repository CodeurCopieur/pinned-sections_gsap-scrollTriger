gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.section').forEach(function(element, i) {
  console.log(element, i);
  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    snap: 1
  })
  gsap.from(element.children, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "top top",
      toggleActions: 'play none reverse reset'
    }
  })
});