const formulario = document.querySelector('.contacto__formulario');
const nombreInput = document.querySelector('.contacto__campo[type="text"]');
const emailInput = document.querySelector('.contacto__campo[type="email"]');
const mensajeTextarea = document.querySelector('.contacto__campo--textarea');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const nombre = nombreInput.value;
  const email = emailInput.value;
  const mensaje = mensajeTextarea.value;

  
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);

  nombreInput.value = '';
  emailInput.value = '';
  mensajeTextarea.value = '';

  alert('¡Tu mensaje ha sido enviado correctamente!');
});