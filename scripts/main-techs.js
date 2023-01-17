$(document).ready(function () {
  $.each(logosArray, function (index, item) {
    if (item.content === undefined) {
      item.content = "";
    }
    $("#technologies-list").append(
      `
      <div class="card">
        <img id="tech-list-${item.acronym}" src=${item.src} />
        <div class="card-body">
          ${item.name}
        </div>
      </div>
      `
    );
  });
});

/*--------------------- Popover --------------------- */
