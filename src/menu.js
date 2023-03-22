export default function pageCreate () {
	const header = document.createElement('div')
	const grid = document.createElement('div')
const menuGrid = document.createElement('div');
const menuItem1 = document.createElement('div');
const menuItem2 = document.createElement('div');
const menuItem3 = document.createElement('div');
	document.body.appendChild(header)
	header.appendChild(grid).classList = "grid-container"
	grid.appendChild(menuGrid).classList = "grid-item"
	grid.appendChild(menuItem1).classList = "grid-item"
	grid.appendChild(menuItem2).classList = "grid-item"
	grid.appendChild(menuItem3).classList = "grid-item"
	console.log('sawd')
}



