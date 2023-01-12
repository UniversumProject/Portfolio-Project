import projects from './projects.js';
import { getLocalStorage, setLocalStorage } from './utils.js';

const navToggleBtn = document.querySelector('.nav-top .btn-icon');
const navLinks = document.querySelector('.nav-links');

navToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-show');
});

if (document.querySelector('.projects-container')) {
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
}

const userInfo = getLocalStorage('userInfo');
if (userInfo.firstName !== '' && userInfo.lastName !== '') {
  if (document.querySelector('.form-container')) {
    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `<p class='alert'>Thank you very much ${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()} for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly by following the link below.</p>
    <a href="contact.html" class="btn">click here</a>
    `;
  }
}

if (document.querySelector('#contact-form')) {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#inputFirstName').value;

    const lastName = document.querySelector('#inputLastName').value;
    const email = document.querySelector('#inputEmail').value;
    const message = document.querySelector('#inputMessage').value;

    const userMessage = {
      firstName,
      lastName,
      email,
      message,
    };
    setLocalStorage('userInfo', userMessage);

    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `<p class='alert'>Thank you very much ${firstName.toUpperCase()} ${lastName.toUpperCase()} for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly by following the link below.</p>
     <a href="contact.html" class="btn">click here</a>
    `;
  });
}
