$(document).bind("DOMContentLoaded", function () {
  anime.timeline({}).add({
    targets: ".nav-animation",
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
  });

  const observer = new IntersectionObserver((entries) => {
    var experienceElements = document.querySelectorAll(".experience-logo");
    experience = anime.timeline({});
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime
          .timeline({})
          .add({
            targets: "#experience-text",
            translateX: [90, 0],
            opacity: [0, 1],
            easing: "easeInElastic",
          })
          .add({
            targets: experienceElements,
            translateX: [90, 0],
            opacity: [0, 1],
            easing: "easeInOutElastic",
          });
        anime.timeline({}).add({
          targets: ".presentation-text-division",
          translateY: [90, 0],
          opacity: [0, 1],
          delay: (el, i) => 300 * i,
        });
        anime.timeline({}).add({
          targets: "#hero-section",
          translateX: [-300, 0],
          opacity: [0, 1],
          easing: "easeInOutElastic",
        });
        if ($("body").width() <= 510) {
          anime.timeline({}).add({
            targets: "#profile-image-container",
            translateY: [-100, -25],
            opacity: [0, 1],
            easing: "easeInOutElastic",
          });
        }
      }
    });
  });

  const element = document.querySelector("#experience");
  observer.observe(element);
});
