import { getLocalStorage, setLocalStorage } from './utils.js';

if (document.querySelectorAll('.accordion-link')) {
  const accordionLinks = document.querySelectorAll('.accordion-link');

  accordionLinks.forEach(function (accordionLink) {
    accordionLink.addEventListener('click', function () {
      let accordionItem = this.closest('.accordion-item');
      accordionItem.classList.toggle('open');
    });
  });
}
let userInfo = getLocalStorage('userInfo');
if (userInfo.firstName !== '' && userInfo.lastName !== '') {
  const formContainer = document.querySelector('.form-container');
  formContainer.innerHTML = `<p class='alert'>Thank you very much <u>${
    userInfo.gender
  } ${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}</u> for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly through the email given below in the contact info.</p>
    `;
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
    formContainer.innerHTML = `<p>Thank you very much <u>${
      result[0].value
    } ${firstName.toUpperCase()} ${lastName.toUpperCase()} </u> for your message. Unfortunately, we cannot receive your message through this form. We apologize in advance for the inconvenience. Please try to email us directly by following the link below.</p>
    `;
  });
}
