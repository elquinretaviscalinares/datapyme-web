# DataPyme Consultoría

Página web de DataPyme Consultoría, un emprendimiento ficticio de consultoría en datos e inteligencia artificial para pymes de Bogotá. Es el proyecto final de la Electiva 1, Herramientas de IA para la transformación digital (UNICAFAM, 2026).

Página publicada: https://elquinretaviscalinares.github.io/datapyme-web/

Equipo: Elquin Retavisca Linares y Carlos Marín.

## De qué trata

DataPyme ayuda a restaurantes, comercios, distribuidores, colegios y droguerías con equipos pequeños a decidir con los datos que ya tienen. Ofrece cuatro servicios: tableros de ventas, reportes automáticos, pronósticos de demanda y asistentes de IA para WhatsApp.

La oferta se apoya en cuatro reglas que la página repite en varios lugares:

- Diagnóstico sin costo ni compromiso, en los días 1 a 3.
- Precio cerrado por escrito antes de construir.
- Plazo fijo de 14 días, del diagnóstico a la entrega.
- Capacitación incluida para que el equipo del cliente use y mantenga la herramienta.

## Estructura del repositorio

```
datapyme-web/
├── index.html        Estructura y contenido de la página
├── css/
│   └── styles.css    Estilos, paleta y diseño adaptable a celular
├── img/              Logo, ícono de pestaña e imágenes generadas con IA
└── README.md         Este archivo
```

La página es estática: no necesita instalar nada. Para verla en el computador basta con abrir `index.html` en un navegador.

## Decisiones de diseño

- Paleta: azul marino #0B2545, turquesa #13A89E, naranja #F28C28 (solo para llamados a la acción y datos destacados) y blanco.
- Tipografía: Bricolage Grotesque para títulos y Onest para el texto.
- Tono: se trata al cliente de usted, con frases cortas y sin vocabulario técnico.
- Diseño adaptable: el CSS se escribió primero para pantallas grandes y se ajusta con tres puntos de corte (960, 720 y 380 px). Se probó sin desborde horizontal a 1280, 768, 390 y 320 px.
- Accesibilidad: texto alternativo en las imágenes, enlace para saltar al contenido, foco visible con teclado y gráfico con descripción para lectores de pantalla.
- Imágenes en formato WebP para que la página cargue rápido.

## Reparto del trabajo

Elquin:
- Concepto, nombre y contenido de cada sección.
- HTML y CSS, incluido el diseño adaptable.
- Logo, imagen de portada e imagen de equipo generados con IA, y su integración en la página.
- Repositorio de GitHub y publicación en GitHub Pages.
- Pruebas en celular y en otro navegador.
- Este README.

Carlos:
- JavaScript: menú que se colapsa en celular, validación del formulario de contacto y autodiagnóstico.
- Una imagen generada con IA por cada servicio.
- Registro de los prompts de código.
- Documento de evidencias en Word.
- Entrega final en el aula virtual.

Los dos revisan el trabajo del otro y explican en la presentación la parte de su compañero.

## Uso de inteligencia artificial

Cada prompt se documentó en Notion con su propósito, el texto completo, el resultado y el ajuste posterior. La galería de imágenes guarda cada imagen junto con el prompt que la generó.

- Imágenes: ChatGPT. Todas se pidieron con una línea de estilo común (paleta, formas geométricas, sin texto dentro de la imagen) para que se vean como un conjunto.
- Texto y código: Claude, como apoyo para redactar y revisar el texto de la página, escribir y ajustar HTML y CSS, y guiar el trabajo con Git.
- Logo: se generaron tres opciones y se eligió la letra D formada con barras, porque lleva la inicial de la marca y se lee bien reducida. El generador no logró centrar el símbolo, así que se recentró con edición de imagen. Ese paso se documentó como edición manual y no como resultado de la IA.

## Forma de trabajo en Git

- Cada persona sube lo que generó o escribió, para que el historial muestre quién hizo qué.
- Un cambio por commit, con un mensaje en español que dice qué cambió y por qué. El historial cuenta el proceso: estructura, estilos, diseño para celular, titular, texto comercial, imágenes y política de la oferta.
- Antes de empezar a trabajar se hace `git pull`, para no pisar los cambios del compañero.
- La página se publica con GitHub Pages desde la rama `main`, carpeta raíz.

## Nota

DataPyme es un emprendimiento ficticio creado para un proyecto académico. El correo, el teléfono y los datos del gráfico de ejemplo son inventados.
