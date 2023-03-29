export default function loadMenu() {
  const contentDiv2 = document.getElementById('content');
  const grid = document.createElement('div');
  const menuItem = document.createElement('div');
  const menuItem2 = document.createElement('div');
  const menuItem3 = document.createElement('div');
  const menuItem4 = document.createElement('div');

  contentDiv2.appendChild(grid).classList = 'grid-container';
  grid.appendChild(menuItem).classList = 'grid-item';
  grid.appendChild(menuItem2).classList = 'grid-item';
  grid.appendChild(menuItem3).classList = 'grid-item';
  grid.appendChild(menuItem4).classList = 'grid-item';

  const myImage = new Image();
  myImage.src = './images/mushroom.jpg';
  myImage.setAttribute('id', 'img2');
  menuItem.appendChild(myImage);

  const myImage2 = new Image();
  myImage2.src = './images/pepperoni.jpg';
  myImage2.setAttribute('id', 'img3');
  menuItem2.appendChild(myImage2);

  const myImage3 = new Image();
  myImage3.src = './images/onions.jpg';
  myImage3.setAttribute('id', 'img4');
  menuItem3.appendChild(myImage3);

  const myImage4 = new Image();
  myImage4.src = './images/cheese-onion.jpg';
  myImage4.setAttribute('id', 'img5');
  menuItem4.appendChild(myImage4);
}
