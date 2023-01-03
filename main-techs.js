$(document).ready(function () {
  $.each(logosArray, function (index, item) {
    if (item.content === undefined) {
      item.content = "";
    }
    $("#technologies-list").append(
      `
        <img id="tech-list-${item.acronym}" 
        src=${item.src}
        title="${item.name}"
        tabindex="0"
        data-bs-toggle="popover"
        data-bs-trigger="hover focus"
        data-bs-content="${item.content}"
        />`
    );
  });
});

/*--------------------- Popover --------------------- */

$(document).ready(function () {
  $('[data-bs-toggle="popover"]').popover({
    placement: "top",
    delay: { show: 100, hide: 200 },
  });
});
