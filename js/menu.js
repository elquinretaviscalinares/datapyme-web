// menu.js
// Menú que se colapsa en celular. En pantallas de 960 px o menos, el botón
// "Menú" abre y cierra la lista de enlaces. Sin JavaScript el menú se ve completo.

// Se avisa al CSS que el script cargó; solo entonces el CSS oculta el menú.
document.documentElement.classList.add('js');

// Elementos de la página con los que trabaja el script.
const boton = document.querySelector('.nav-toggle');
const lista = document.getElementById('menu-principal');
const anchoMaximo = 960;

// Solo se continúa si el botón y la lista existen en la página.
if (boton && lista) {

  // Abre el menú: muestra la lista y actualiza el botón.
  const abrirMenu = () => {
    lista.classList.add('abierto');
    boton.setAttribute('aria-expanded', 'true');
    boton.textContent = 'Cerrar';
  };

  // Cierra el menú: oculta la lista y deja el botón como al inicio.
  const cerrarMenu = () => {
    lista.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.textContent = 'Menú';
  };

  // Clic en el botón: si está abierto lo cierra, y si está cerrado lo abre.
  boton.addEventListener('click', () => {
    if (lista.classList.contains('abierto')) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  // Clic en cualquier enlace del menú: el menú se cierra.
  lista.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', cerrarMenu);
  });

  // Tecla Escape con el menú abierto: se cierra y el foco vuelve al botón.
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && lista.classList.contains('abierto')) {
      cerrarMenu();
      boton.focus();
    }
  });

  // Si la ventana se ensancha por encima de 960 px, el menú se reinicia.
  window.addEventListener('resize', () => {
    if (window.innerWidth > anchoMaximo) {
      cerrarMenu();
    }
  });
}