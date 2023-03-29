import loadHomePage from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './styles.css';
import baconImage from '../img/bacon.jpeg';
import onionsImage from '../img/onions.jpg';
import pepperoniImage from '../img/pepperoni.jpg';
import cheeseOnionImage from '../img/cheese-onion.jpg';
import mushroomImage from '../img/mushroom.jpg';

function setEnabled(allButtons) {
  allButtons.forEach((element) => {
    element.disabled = false;
  });
}

function clearPage(event) {
  let elementsAfterHeader;
  if (event.currentTarget !== btn1) {
    elementsAfterHeader = document.body.querySelectorAll(
      ':not(.header):not(#content):not(.title-div):not(button)'
    );
  } else {
    elementsAfterHeader = document.body.querySelectorAll(':not(#content');
  }
  elementsAfterHeader.forEach((element) => {
    element.outerHTML = '';
  });
}

function handleHomeButtonClick(event) {
  const allButtons = document.querySelectorAll('button');
  setEnabled(allButtons);
  event.currentTarget.disabled = true;
  clearPage(event);
  loadHomePage();
  initEventListeners();
}

function handleMenuButtonClick(event) {
  const allButtons = document.querySelectorAll('button');
  setEnabled(allButtons);
  event.currentTarget.disabled = true;
  clearPage(event);
  loadMenu();
  initEventListeners();
}

function handleContactButtonClick(event) {
  const allButtons = document.querySelectorAll('button');
  setEnabled(allButtons);
  event.currentTarget.disabled = true;
  clearPage(event);
  loadContact();
  initEventListeners();
}

function initEventListeners() {
  const homeBtn = document.getElementById('btn1');
  const menuBtn = document.getElementById('btn2');
  const contactBtn = document.getElementById('btn3');

  homeBtn.addEventListener('click', handleHomeButtonClick);
  menuBtn.addEventListener('click', handleMenuButtonClick);
  contactBtn.addEventListener('click', handleContactButtonClick);
}

loadHomePage();
initEventListeners();
