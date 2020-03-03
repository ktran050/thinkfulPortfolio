projectList = [
  {
    name: "Quiz App",
    description:
      "A Disneyland quiz meant to showcase my progress in responsive, and scalable design as well as jQuery",
    technologies: ["html", "css", "js"],
    liveLink: "https://ktran050.github.io/quizApp/index.html",
    repoLink: "https://github.com/ktran050/quizApp",
    img: "https://i.picsum.photos/id/1008/200/200.jpg"
  }
];

function renderProjects() {
  const projectsHTML = `
  <div class="pictureSide">
    QuizApp
    <img
      src="https://i.picsum.photos/id/1008/200/200.jpg"
      alt=""
      class="projectImg"
    />
    <p>
      "A Disneyland quiz meant to showcase my progress in responsive, and scalable
      design as well as jQuery",
    </p>
  </div>
  <div class="linkSide">
    <p>
      Live app:
      <a href="https://ktran050.github.io/quizApp/index.html">github.io</a>
    </p>
    <p>
      Repo link: <a href="https://github.com/ktran050/quizApp">Github Repo</a>
    </p>
    <ul>
      Technologies used
      <li>html</li>
      <li>css</li>
      <li>js</li>
    </ul>
  </div>
  `;
  $(".projects").html(projectsHTML);
}

$(renderProjects());
