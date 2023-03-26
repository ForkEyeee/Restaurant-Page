export default function loadContact() {
  const form = document.createElement('form');
  form.classList = 'form';
  const contentDiv = document.getElementById('content');
  const formDiv = document.createElement('div')
  formDiv.classList = 'form-container'
  const input1 = document.createElement('input');

  const flex1 = document.createElement('div')
  const flex2 = document.createElement('div')
  const flex3 = document.createElement('div')
  const flex4 = document.createElement('div')





  input1.setAttribute('type', 'text');
  input1.setAttribute('id', 'firstname');
  input1.setAttribute('name', 'fname');
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'fname');
  label1.innerHTML = "First Name"
  flex1.appendChild(label1)
  flex1.appendChild(input1)
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'lastname');
  input2.setAttribute('name', 'lname');
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'lname');
  label2.innerHTML = "Last Name"
  flex2.appendChild(label2)
  flex2.appendChild(input2)
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'email');
  input3.setAttribute('id', 'mail');
  input3.setAttribute('name', 'email');
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'email');
  label3.innerHTML = "Email Address"
  flex3.appendChild(label3)
  flex3.appendChild(input3)
  const input4 = document.createElement('input');
  input4.setAttribute('type', 'tel');
  input4.setAttribute('id', 'telephone');
  input4.setAttribute('name', 'tele');
  const label4 = document.createElement('label');
  label4.setAttribute('for', 'tele');
  label4.innerHTML = "Telephone #"
  flex4.appendChild(label4)
  flex4.appendChild(input4)




  form.appendChild(flex1);
  form.appendChild(flex2);
  form.appendChild(flex3);
  form.appendChild(flex4);
  input1.parentNode.insertBefore(label1, input1);
  input2.parentNode.insertBefore(label2, input2);
  input3.parentNode.insertBefore(label3, input3);
  input3.parentNode.insertBefore(label3, input3);
  input4.parentNode.insertBefore(label4, input4);
  contentDiv.appendChild(formDiv)
  formDiv.appendChild(form)
}
