import content from './homepage.js';
import content2 from './menu.js';
import content3 from './contact.js';

content();

document.getElementById('btn2').addEventListener('click', () => {
 let img = document.getElementById('img');
 img.parentNode.removeChild(img)
document.getElementById('text-div').innerHTML = '';

  content2();
});

document.getElementById('btn3').addEventListener('click', () => {
  let img = document.getElementById('img');

  img.parentNode.removeChild(img)
document.getElementById('text-div').innerHTML = '';
  content3();
});
