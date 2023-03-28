export default function loadContact() {
  const contentDiv = document.getElementById('content');

  const form = document.createElement('form');
  const formDiv = document.createElement('div');
  const input = document.createElement('input');
  const flex = document.createElement('div');
  const flex2 = document.createElement('div');
  const flex3 = document.createElement('div');
  const flex4 = document.createElement('div');
  const contactDiv = document.createElement('div');
  const label = document.createElement('label');
  const input2 = document.createElement('input');
  const label2 = document.createElement('label');
  const input3 = document.createElement('input');
  const label3 = document.createElement('label');
  const input4 = document.createElement('input');
  const label4 = document.createElement('label');

  form.classList = 'form';
  formDiv.classList = 'form-container';
  contactDiv.classList = 'contact-div';

  input.setAttribute('type', 'text');
  input.setAttribute('id', 'firstname');
  input.setAttribute('name', 'fname');
  label.setAttribute('for', 'fname');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'lastname');
  input2.setAttribute('name', 'lname');
  label2.setAttribute('for', 'lname');
  input3.setAttribute('type', 'email');
  input3.setAttribute('id', 'mail');
  input3.setAttribute('name', 'email');
  label3.setAttribute('for', 'email');
  input4.setAttribute('type', 'tel');
  input4.setAttribute('id', 'telephone');
  input4.setAttribute('name', 'tele');
  label4.setAttribute('for', 'tele');

  label.innerHTML = 'First Name';
  label2.innerHTML = 'Last Name';
  label3.innerHTML = 'Email Address';
  label4.innerHTML = 'Telephone #';
  contactDiv.innerHTML = 'Contact Us';

  flex.appendChild(label);
  flex.appendChild(input);
  flex2.appendChild(label2);
  flex2.appendChild(input2);
  flex3.appendChild(label3);
  flex3.appendChild(input3);
  flex4.appendChild(label4);
  flex4.appendChild(input4);
  form.appendChild(flex);
  form.appendChild(flex2);
  form.appendChild(flex3);
  form.appendChild(flex4);

  input.parentNode.insertBefore(label, input);
  input2.parentNode.insertBefore(label2, input2);
  input3.parentNode.insertBefore(label3, input3);
  input3.parentNode.insertBefore(label3, input3);
  input4.parentNode.insertBefore(label4, input4);
  formDiv.appendChild(contactDiv);
  contentDiv.appendChild(formDiv);
  formDiv.appendChild(form);
}
