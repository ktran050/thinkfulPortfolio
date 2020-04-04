projectList = [
  {
    name: "Quiz App",
    description:
      "A Disneyland quiz meant to showcase my progress in responsive, and scalable design as well as jQuery",
    technologies: ["html", "css", "js"],
    liveLink: "https://ktran050.github.io/quizApp/index.html",
    repoLink: "https://github.com/ktran050/quizApp",
    img: "https://i.picsum.photos/id/1008/200/200.jpg",
  },
];

function renderProjects() {
  const projectsHTML = `
  <h2> Projects</h2><br>
  <div class="container">
  <div class="pictureSide">
    <h3>QuizApp</h3>
    <img
      src="https://user-images.githubusercontent.com/9054819/76268751-013ab680-6267-11ea-9229-08e2f7806774.PNG"
      alt=""
      class="projectImg"
    /><br>
    <p>
    <div class="link-list"><a href="https://ktran050.github.io/quizApp/index.html" target="_blank">Live Demo</a><a href="https://github.com/ktran050/quizApp" target="_blank">Github Repo</a></div>
  </p>
  </div>
  <div class="linkSide">
  <p>
  A Disneyland quiz meant to showcase my progress in responsive, and scalable
  design as well as jQuery
</p>
  <div>
    <h3> Made With: </h3>
    <div class="badge-list">
      <div><img src="https://www.pinclipart.com/picdir/big/74-746817_contact-us-for-a-free-consultation-and-quote.png" alt="HTML5 Logo" class="big-badge"></div>
      <div><img src="https://www.pinclipart.com/picdir/big/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="CSS3 Logo" class="big-badge"></div>
      <div><img src="https://www.pinclipart.com/picdir/big/371-3712206_javascript-javascript-logo-png-clipart.png" alt="JS5 Logo" class="big-badge"></div>
      </div>
  </div>
  </div>
  `;
  $(".projects").html(projectsHTML);
}

$(renderProjects());
