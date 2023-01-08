$(window).on("load", function () {
  /*------------- NAVBAR -------------*/
  const animations = () => {
    anime.timeline({}).add({
      targets: ".nav-animation",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
    });
    /*------------- NAVBAR -------------*/

    /*------------- Content One -------------*/
    var experienceElements = document.querySelectorAll(".experience-logo");

    anime
      .timeline({})
      .add({
        targets: "#experience-text",
        translateX: [90, 0],
        opacity: [0, 1],
        easing: "easeInElastic",
      })
      .add(
        {
          targets: experienceElements,
          translateX: [90, 0],
          opacity: [0, 1],
          easing: "easeInOutElastic",
        },
        "-=300"
      );
    /*--- Experience Illustration ---*/

    /*--- Presentation text ---*/
    // Wrap every letter in a span
    var textWrapper = document.querySelector("#presentation-text-p");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: "#presentation-text-p .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      delay: (el, i) => 12 * (i + 1),
    });

    /*------------- Content One -------------*/

    /*------------- Hero -------------*/

    anime({
      targets: "#profile-info-container h1",
      translateX: [-200, 0],
      opacity: [0, 1],
      easing: "easeInOutElastic",
    });
    anime({
      targets: "#profile-info-container h2",
      translateX: [200, 0],
      opacity: [0, 1],
      easing: "easeInOutElastic",
    });
    anime({
      targets: "#profile-contact-section",
      opacity: [0, 1],
      duration: 8000,
      delay: 1000,
    });

    /*
    const heroObs = document.querySelector("#hero-profile");
    const contentOneObs = document.querySelector(
      "#experience-and-presentation"
    );
    const pathObs = document.querySelector("#path-section");

    hero.observe(heroObs);
    contentOne.observe(contentOneObs);
    path.observe(pathObs);
*/
    /*$(window).on("resize", function () {
      animations();
    });*/
  };

  animations();
});
