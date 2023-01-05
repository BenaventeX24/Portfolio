/*--------------------- Actual logos --------------------- */

$(document).ready(function () {
  $.each(logosArray, function (index, item) {
    if (
      item.acronym === "bash" ||
      item.acronym === "axios" ||
      item.acronym === "linux"
    )
      return;

    $("#hero-background").append(
      `<img id="frame-${item.acronym}" src="${item.src}"/>`
    );
  });
});

/*--------------------- Decoration --------------------- */

$(document).ready(function () {
  $("#hero-background").append(`
    <div id="frame-rectanglegreenone"></div>
    <div id="frame-rectanglegreentwo"></div>
    <div id="frame-rectangleyellow"></div>
    <div id="frame-squarered"></div>
    <div id="frame-circlepinktwo"></div>
    <div id="frame-rectangleblue"></div>
    <div id="frame-rectanglegreenthree"></div>
    <div id="frame-rectanglebluetwo"></div>`);
});
