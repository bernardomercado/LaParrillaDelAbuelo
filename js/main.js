const form = document.querySelector('.formulario');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const guests = document.querySelector('#guests');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (name.value.trim() === '') {
      alert('Por favor, escriba su nombre');
      name.focus();
      return;
    }
  
    if (email.value.trim() === '') {
      alert('Por favor, escriba su email');
      email.focus();
      return;
    }
  
    if (phone.value.trim() === '') {
      alert('Por favor, escriba su celular');
      phone.focus();
      return;
    }
  
    if (date.value.trim() === '') {
      alert('Por favor, seleccione una fecha');
      date.focus();
      return;
    }
  
    if (time.value.trim() === '') {
      alert('Por favor, seleccione una hora');
      time.focus();
      return;
    }
  
    if (guests.value === '') {
      alert('Por favor, seleccione el número de personas');
      guests.focus();
      return;
    }
  
    // Enviar formulario al servidor
    form.submit();
  });