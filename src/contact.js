export default function pageMake() {
  const form = document.createElement('form');
  document.body.appendChild(form);

  const input1 = document.createElement('input');

  const input2 = document.createElement('input');

  const input3 = document.createElement('input');

  const input4 = document.createElement('input');

  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(input4);
}
