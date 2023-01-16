$(window).on("load", function () {
  /*------------- NAVBAR -------------*/
  const animations = () => {
    /*anime.timeline({}).add({
      targets: ".nav-animation",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 1000,
    });
    /*------------- NAVBAR -------------*/

    anime.timeline().add({
      targets: "#photo-frame",
      scale: [0, 1],
      delay: 500,
      easing: "easeOutBack",
    });

    anime
      .timeline()
      .add({
        targets: "#photo-frame",
        scale: [0, 1],
        delay: 500,
        easing: "easeOutBack",
      })
      .add({
        targets: "#profile-image",
        scale: [0, 1],
        rotate: "360deg",
        duration: 1200,
        easing: "easeOutSine",
      });

    anime({
      targets: ".scroll-illustration",
      delay: 500,
      opacity: [0, 1],
      easing: "easeOutBack",
      translateY: [-15, 10],
      loop: true,
      changeComplete: (anim) => setTimeout(() => anim.restart()),
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
