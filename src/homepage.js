export default function loadHomePage() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  const textDiv = document.createElement('div');

  headerDiv.className = 'header';
  contentDiv.appendChild(headerDiv);

  const myImage = new Image();
  myImage.src =
    'file:///C:/Users/Jayden%20Brown/Desktop/top/Restaurant%20Page/img/catering-g64e518873_1920.jpeg';
  myImage.setAttribute('id', 'img');
  contentDiv.appendChild(myImage);

  contentDiv.appendChild(textDiv);

  const btn1 = document.createElement('button');
  btn1.innerHTML = 'Home';
  btn1.setAttribute('id', 'btn1');
  const btn2 = document.createElement('button');
  btn2.innerHTML = 'Menu';
  btn2.setAttribute('id', 'btn2');
  const btn3 = document.createElement('button');
  btn3.innerHTML = 'Contact';
  btn3.setAttribute('id', 'btn3');
  headerDiv.appendChild(btn1);
  headerDiv.appendChild(btn2);
  headerDiv.appendChild(btn3);
  console.log('test');

  textDiv.innerHTML =
    "We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.";
  textDiv.setAttribute('id', 'text-div');
  const content = {
    contentDiv,
    headerDiv,
    myImage,
    textDiv,
    btn1,
    btn2,
    btn3,
  };
  return content;
}
