import projects from './projects.js';

const navToggleBtn = document.querySelector('.nav-top .btn-icon');
const navLinks = document.querySelector('.nav-links');

navToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-show');
});

const projectsContainer = document.querySelector('.projects-container');

for (let i = 0; i < projects.length; i++) {
  const name = projects[i].name;
  const id = projects[i].id;
  const imgPath = projects[i].imgPath;
  const url = projects[i].url;
  const languages = projects[i].languages;

  projectsContainer.innerHTML += `        <a href="${url}" class="project-box" id='${id}'>
          <h4 class="project-title">${name}</h4>
          <img
            src="${imgPath}"
            alt="${name}"
          />
          <div class="box-footer">
            <ul class="projects-lang">
             ${languages
               .map((item) => {
                 return `<li>${item}</li>`;
               })
               .join('')}
            </ul>
          </div>
        </a>`;
}

