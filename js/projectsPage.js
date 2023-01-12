import projects from './projects.js';

const searchInput = document.querySelector('#searchForm input');

searchInput.addEventListener('keyup', (e) => {
  const searchValue = e.currentTarget.value;
  const newProjects = projects.filter((item) =>
    item.name.includes(searchValue.toLowerCase())
  );

  document.querySelector('.projects-container').innerHTML = newProjects
    .map((item) => {
      const { url, id, name, imgPath, languages } = item;

      return `        <a href="${url}" class="project-box" id='${id}' target="_blank">
   <h4 class="project-title">${name}</h4>
   <span>
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
    </span>
             </div>
             </a>`;
    })
    .join('');
  if (searchValue.trim() === '') {
    projects.map((item) => {
      const { url, id, name, imgPath, languages } = item;

      return `        <a href="${url}" class="project-box" id='${id}' target="_blank">
   <h4 class="project-title">${name}</h4>
   <span>
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
    </span>
             </div>
             </a>`;
    });
  }
});
