$(window).on("load", function () {
  /*------------- NAVBAR -------------*/
  const animations = () => {
    /*anime.timeline({}).add({
      targets: ".container-fluid",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 1000,
    });*/

    anime({
      targets: ".nav-item, .navbar-toggler",
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeOutBack",
      delay: 1000,
    });

    anime({
      targets: "#nav-logo",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutBack",
      delay: 1000,
    });
    /*------------- NAVBAR -------------*/

    anime
      .timeline()
      .add({
        targets: "#photo-frame",
        scale: [0, 1],
        delay: 500,
        easing: "easeOutElastic",
      })
      .add({
        targets: "#profile-image",
        scale: [0, 1],
        rotate: "360deg",
        duration: 1250,
        easing: "easeOutQuart",
      });

    anime({
      targets: "#get-to-know-me",
      easing: "easeOutBack",

      translateY: [-10, 10],
      duration: 3000,
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });

    let scrollPath = anime({
      targets: ".scroll-illustration-path",
      easing: "easeOutBack",
      translateX: [0, 30, 0],
      delay: 800,
      duration: 1500,
      direction: "alternate",
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });

    $("#internships").on("scroll", () => {
      $(".scroll-illustration-path").css({
        transition: "visibility 0s, opacity 0.5s linear",
        visibility: "visible",
        opacity: 0,
      });
      scrollPath.pause();
    });

    let scrollTechs = anime({
      targets: ".scroll-illustration-techs",
      easing: "easeOutBack",
      translateX: [0, 30, 0],
      delay: 900,
      duration: 1500,
      direction: "alternate",
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
    });

    $("#technologies-list").on("scroll", () => {
      scrollTechs.pause();
    });
    /*------------- Content One -------------*/

    /*------------- Hero -------------*/

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
