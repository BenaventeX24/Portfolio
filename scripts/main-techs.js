const logosArray = [
  { name: "Javascript", acronym: "js", src: "./media/logos/JS.svg" },
  { name: "HTML", acronym: "html", src: "./media/logos/HTML.svg" },
  { name: "CSS", acronym: "css", src: "./media/logos/CSS.svg" },
  { name: "React", acronym: "react", src: "./media/logos/React.svg" },
  {
    name: "JQuery",
    acronym: "jquery",
    src: "./media/logos/JQuery.svg",
  },
  { name: "Typescript", acronym: "ts", src: "./media/logos/TS.svg" },
  { name: "Java", acronym: "java", src: "./media/logos/Java.svg" },
  {
    name: "MySQL",
    acronym: "sql",
    src: "./media/logos/MySQL.svg",
  },
  {
    name: "Linux servers",
    acronym: "linux",
    src: "./media/logos/LinuxSV.svg",
  },
  { name: "C#", acronym: "csharp", src: "./media/logos/CSharp.svg" },
  { name: "Material UI", acronym: "mui", src: "./media/logos/MUI.svg" },
  { name: "Jest", acronym: "jest", src: "./media/logos/Jest.svg" },
  {
    name: "Styled Components",
    acronym: "styled",
    src: "./media/logos/Styled.svg",
  },
  { name: "SASS", acronym: "sass", src: "./media/logos/SASS.svg" },
  {
    name: "Formik",
    acronym: "formik",
    src: "./media/logos/Formik.svg",
  },
  { name: "Power Apps", acronym: "papps", src: "./media/logos/Power-Apps.svg" },
  {
    name: "Power Automate",
    acronym: "pautomate",
    src: "./media/logos/Power-Automate.svg",
  },
  {
    name: "Vite",
    acronym: "vite",
    src: "./media/logos/Vite.svg",
  },
  { name: "ExpressJS", acronym: "express", src: "./media/logos/ExpressJS.svg" },
  {
    name: "Prisma ORM",
    acronym: "prisma",
    src: "./media/logos/Prisma.svg",
  },
  {
    name: "Spring Boot",
    acronym: "spring",
    src: "./media/logos/SpringBoot.svg",
  },
  {
    name: "Bash",
    acronym: "bash",
    src: "./media/logos/Bash.svg",
  },
];

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
