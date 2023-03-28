export default function loadHomePage() {
  const contentDiv = document.getElementById('content');
  const headerDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const para = document.createElement('p');
  const titleDiv = document.createElement('div');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(imgDiv);
  contentDiv.appendChild(textDiv);
  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(btn1);
  headerDiv.appendChild(btn2);
  headerDiv.appendChild(btn3);
  textDiv.appendChild(para);

  titleDiv.classList = 'title-div';
  imgDiv.classList = 'img-div';
  para.classList = 'para';
  headerDiv.classList = 'header';
  btn1.setAttribute('id', 'btn1');
  btn2.setAttribute('id', 'btn2');
  btn3.setAttribute('id', 'btn3');
  textDiv.setAttribute('id', 'text-div');

  titleDiv.innerHTML = 'Really Great Restaurant';
  btn1.innerHTML = 'Home';
  btn2.innerHTML = 'Menu';
  btn3.innerHTML = 'Contact';
  para.innerHTML =
    "We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.";

  const myImage = new Image();
  myImage.src = '../img/bacon.jpeg';
  myImage.setAttribute('id', 'img');
  imgDiv.appendChild(myImage);

  btn1.disabled = true;
}
