export default function loadMenu() {
  const contentDiv2 = document.getElementById('content');
  const grid = document.createElement('div');
  const menuGrid = document.createElement('div');
  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  const menuItem3 = document.createElement('div');

  contentDiv2.appendChild(grid).classList = 'grid-container';
  grid.appendChild(menuGrid).classList = 'grid-item';
  grid.appendChild(menuItem1).classList = 'grid-item';
  grid.appendChild(menuItem2).classList = 'grid-item';
  grid.appendChild(menuItem3).classList = 'grid-item';
  

  const myImage2 = new Image();
  myImage2.src = '../img/onions.jpg';
  myImage2.setAttribute('id', 'img2');
  menuGrid.appendChild(myImage2);
  const myImage3 = new Image();
  myImage3.src = '../img/pepperoni.jpg';
  myImage3.setAttribute('id', 'img3');
  menuItem1.appendChild(myImage3);
  const myImage4 = new Image();
  myImage4.src = '../img/cheese-onion.jpg';
  myImage3.setAttribute('id', 'img4');
  menuItem2.appendChild(myImage4);
  const myImage5 = new Image();
  myImage5.src = '../img/mushroom.jpg';
  myImage5.setAttribute('id', 'img5');
  menuItem3.appendChild(myImage5);
  
  const content = {
    grid,
    menuGrid,
    menuItem1,
    menuItem2,
    menuItem3,
  };
  return { content };
}
