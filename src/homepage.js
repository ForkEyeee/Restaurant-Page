export default function createUI() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  const textDiv = document.createElement('div');

  headerDiv.className = 'header';
  contentDiv.appendChild(headerDiv);
  
	const myImage = new Image();
  myImage.src =
    'file:///C:/Users/Jayden%20Brown/Desktop/top/Restaurant%20Page/img/catering-g64e518873_1920.jpeg';
  myImage.classList = 'image';
  contentDiv.appendChild(myImage);

  contentDiv.appendChild(textDiv);

  const p1 = document.createElement('p');
  p1.innerHTML = 'Home';
  const p2 = document.createElement('p');
  p2.innerHTML = 'Menu';
  const p3 = document.createElement('p');
  p3.innerHTML = 'Contact';
  headerDiv.appendChild(p1);
  headerDiv.appendChild(p2);
  headerDiv.appendChild(p3);
  console.log('test');



  textDiv.innerHTML =
    "We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.";
}
