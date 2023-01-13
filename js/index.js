import projects from './projects.js';
import languages from './languages.js';
import { getLocalStorage, setLocalStorage } from './utils.js';

setLocalStorage('userLogedIn', { logIn: 'off' });

const langLocalStorage = localStorage.getItem('lang');
if (!langLocalStorage) {
  setLocalStorage('lang', languages);
}

const navToggleBtn = document.querySelector('.nav-top .btn-icon');
const navLinks = document.querySelector('.nav-links');

navToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-show');
});

if (document.getElementById('section-admin')) {
  const sectionAdmin = document.querySelector('#section-admin');
  const adminForm = document.getElementById('admin-form');
  adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = e.currentTarget[0].value;
    const userPassword = e.currentTarget[1].value;
    const userInfo = {
      name: 'johnDoe',
      password: 'universum',
    };
    if (userName === userInfo.name && userPassword === userInfo.password) {
      setLocalStorage('userLogedIn', { logIn: 'on' });

      e.currentTarget.style.display = 'none';

      const userLogin = getLocalStorage('userLogedIn');

      if (
        document.querySelector('.adminContainer') &&
        userLogin.logIn === 'on'
      ) {
        document.querySelector('.adminContainer').style.display = 'block';
        const tableForm = document.getElementById('tableChangeForm');
        tableForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const tableList = getLocalStorage('lang');
          const langName = e.currentTarget[0].value;
          const langExp = e.currentTarget[1].value;
          const langProjects = e.currentTarget[2].value;

          if (
            langName.trim() === '' ||
            langExp.trim() === '' ||
            langProjects.trim() === ''
          ) {
            alert('please fill in all the information to submit the form');
            return;
          }

          const newTableList = [
            ...tableList,
            {
              name: langName,
              skillExp: langExp,
              numOfProjects: langProjects,
            },
          ];
          setLocalStorage('lang', newTableList);
          alert(
            'You just added a new language to your list. Congratzzz.......'
          );
        });
      }
    } else {
      alert('Please enter correct credentials to log in to admin page');
    }
  });
}

if (document.getElementById('langTable')) {
  const langTable = document.getElementById('langTable');
  const tableData = getLocalStorage('lang');
  tableData.map((lang) => {
    const { name, skillExp, numOfProjects } = lang;
    langTable.innerHTML += `          <tr>
            <td colspan="2">${name}</td>
            <td><sup>${skillExp}</sup> / <sub>5</sub></td>
            <td>${numOfProjects}</td>
          </tr>`;
  });
}

if (document.querySelector('.projects-container')) {
  const projectsContainer = document.querySelector('.projects-container');

  for (let i = 0; i < projects.length; i++) {
    const name = projects[i].name;
    const id = projects[i].id;
    const imgPath = projects[i].imgPath;
    const url = projects[i].url;
    const languages = projects[i].languages;

    projectsContainer.innerHTML += `        <a href="${url}" class="project-box" id='${id}' target="_blank">
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
  }
}

const userInfo = getLocalStorage('userInfo');
if (userInfo.firstName !== '' && userInfo.lastName !== '') {
  if (document.querySelector('.form-container')) {
    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `<p class='alert'>Thank you very much <u>${
      userInfo.gender
    } ${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}</u> for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly by following the link below.</p>
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
    const radioMale = document.querySelector('#maleRad');
    const radioFemale = document.querySelector('#femaleRad');
    const genders = [radioMale, radioFemale];
    const result = genders.filter((gender) => gender.checked);

    const userMessage = {
      firstName,
      lastName,
      email,
      message,
      gender: result[0].value,
    };
    setLocalStorage('userInfo', userMessage);

    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `<p class='alert'>Thank you very much <u>${
      result[0].value
    } ${firstName.toUpperCase()} ${lastName.toUpperCase()}</u> for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly by following the link below.</p>
     <a href="contact.html" class="btn">click here</a>
    `;
  });
}
