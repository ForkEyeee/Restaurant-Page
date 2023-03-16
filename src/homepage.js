const contentDiv = document.getElementById('content');
const headerDiv = document.createElement('div');
headerDiv.className = 'header';
contentDiv.appendChild(headerDiv);

const p1 = document.createElement('p');
p1.innerHTML = 'Home';
const p2 = document.createElement('p');
p2.innerHTML = 'Menu';
const p3 = document.createElement('p');
p3.innerHTML = 'Contact';
headerDiv.appendChild(p1);
headerDiv.appendChild(p2);
headerDiv.appendChild(p3);
