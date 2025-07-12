console.clear();

gsap.registerPlugin(Flip, ScrollTrigger);

let flipCtx;

const createTimeline = () => {
  flipCtx && flipCtx.revert();

  flipCtx = gsap.context(() => {
    const secondState = Flip.getState(".small");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        pin: true,
        top: "top top",
        end: "+=2000px",
        scrub: true
        // markers: true
      }
    });

    tl.add(
      Flip.fit(".fullWidth", secondState, {
        ease: "none",
        duration: 1
      })
    );
  });
};

createTimeline();

window.addEventListener("resize", createTimeline);