import loadHomePage from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const homepage = loadHomePage();
// const menu = loadMenu();
// const contact = loadContact();

homepage.btn1.addEventListener('click', (event) => {
  homepage.myImage.parentNode.removeChild(homepage.myImage);
  loadHomePage();
  event.currentTarget.disabled = true;
});

homepage.btn2.addEventListener('click', (event) => {
  homepage.textDiv.remove();
  homepage.myImage.parentNode.removeChild(homepage.myImage);
  // loadMenu()
  // event.currentTarget.disabled = true
});

homepage.btn3.addEventListener('click', (event) => {
  document.body.innerHTML = '';
  loadHomePage();
  event.currentTarget.disabled = true;
});
