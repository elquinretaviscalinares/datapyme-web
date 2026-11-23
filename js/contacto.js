// contacto.js
// Validación del formulario de contacto. Es un formulario de demostración:
// no envía datos a ningún sitio y no guarda nada.

const formulario = document.getElementById('form-contacto');
const estado = document.getElementById('form-estado');

// Expresión sencilla para revisar que el correo tenga forma de correo.
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reglas de los campos obligatorios: su id, el mensaje de error y la prueba.
const reglas = [
  {
    id: 'nombre',
    error: 'Escriba su nombre.',
    valido: (valor) => valor.length >= 2
  },
  {
    id: 'correo',
    error: 'Escriba un correo válido, por ejemplo nombre@empresa.com.',
    valido: (valor) => patronCorreo.test(valor)
  },
  {
    id: 'mensaje',
    error: 'Cuéntenos en al menos 10 caracteres qué le quita más tiempo.',
    valido: (valor) => valor.length >= 10
  }
];

// Solo se continúa si el formulario y el área de estado existen.
if (formulario && estado) {

  // Quita la marca de error de un campo y borra su mensaje.
  const quitarError = (campo) => {
    campo.removeAttribute('aria-invalid');
    campo.removeAttribute('aria-describedby');
    const aviso = document.getElementById('error-' + campo.id);
    if (aviso) {
      aviso.remove();
    }
  };

  // Marca el campo con error y agrega el mensaje debajo, conectado con aria-describedby.
  const mostrarError = (campo, texto) => {
    const aviso = document.createElement('p');
    aviso.className = 'campo-error';
    aviso.id = 'error-' + campo.id;
    aviso.textContent = texto;
    campo.parentElement.appendChild(aviso);
    campo.setAttribute('aria-invalid', 'true');
    campo.setAttribute('aria-describedby', aviso.id);
  };

  // Al enviar, se cancela el envío y se revisa cada campo.
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let primerError = null;

    reglas.forEach((regla) => {
      const campo = document.getElementById(regla.id);
      quitarError(campo);
      // trim() recorta los espacios del inicio y del final.
      if (!regla.valido(campo.value.trim())) {
        mostrarError(campo, regla.error);
        if (!primerError) {
          primerError = campo;
        }
      }
    });

    // Si hay errores: se avisa y el foco va al primer campo con error.
    if (primerError) {
      estado.classList.add('es-error');
      estado.textContent = 'Revise los campos marcados.';
      primerError.focus();
      return;
    }

    // Si todo está bien: mensaje de demostración y se limpia el formulario.
    const nombre = document.getElementById('nombre').value.trim();
    estado.classList.remove('es-error');
    estado.textContent = 'Gracias, ' + nombre + '. Este formulario es de demostración ' +
      'y su mensaje no se envió. En una versión real le responderíamos el siguiente día hábil.';
    formulario.reset();
  });
}