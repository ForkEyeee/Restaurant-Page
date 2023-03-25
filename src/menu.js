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
  console.log('sawd');
  const content = {
    grid,
    menuGrid,
    menuItem1,
    menuItem2,
    menuItem3,
  };
  return { content };
}
