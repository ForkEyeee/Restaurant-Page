import loadHomePage, { loadElse } from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const homepage = loadHomePage();
const { headerDiv } = homepage.content;
// const menu = loadMenu();
// const contact = loadContact();

// I want whenever you press a button, it will clear all info from the page except the header,
// and then append the info for that tab to the DOM
// The button becomes disabled after the appending is done
function setDisabled(allButtons) {
  allButtons.forEach((element) => {
    element.disabled = false;
  });
}

// if (allButtons[0].disabled === true && event.currentTarget.disabled === false) {
//   allButtons[1].disabled = false;
//   allButtons[2].disabled = false;
// } else if (allButtons[1].disabled === true) {
//   allButtons[0].disabled = false;
//   allButtons[2].disabled = false;
// } else if (allButtons[2].disabled === true) {
//   allButtons[0].disabled = true;
//   allButtons[1].disabled = true;
// }

homepage.content.btn1.addEventListener('click', (event) => {
  const allButtons = document.querySelectorAll('button');

  // homepage.myImage.parentNode.removeChild(homepage.myImage);
  // loadHomePage();
  setDisabled(allButtons);
  event.currentTarget.disabled = true;
  clearPage();
  loadElse();
});

homepage.content.btn2.addEventListener('click', (event) => {
  const allButtons = document.querySelectorAll('button');
  // homepage.textDiv.remove();
  // homepage.imgDiv.remove();
  // homepage.myImage.parentNode.removeChild(homepage.myImage);
  setDisabled(allButtons);
  // loadMenu();
  event.currentTarget.disabled = true;
  clearPage();
  loadMenu();
});

homepage.content.btn3.addEventListener('click', (event) => {
  const allButtons = document.querySelectorAll('button');
  setDisabled(allButtons);
  event.currentTarget.disabled = true;
  clearPage();
  loadContact();
});

function clearPage() {
  const test = document.body.firstElementChild;
  test.innerHTML = '';
  test.appendChild(headerDiv);
}
