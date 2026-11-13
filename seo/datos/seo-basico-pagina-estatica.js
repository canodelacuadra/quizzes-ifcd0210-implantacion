window.QUIZ = {
  "mensajes": {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Dominas el SEO aplicado a páginas estáticas: estructura, metadatos, rastreo, indexación y publicación. Puedes aplicar estos conceptos directamente a tus proyectos."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy clara la implementación de SEO en sitios estáticos. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para consolidar los conceptos."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones, repasa los elementos clave de una página estática y vuelve a intentarlo."
    }
  },
  "preguntas": [
    {
      "pregunta": "¿Qué caracteriza a una página web estática?",
      "opciones": [
        "Se sirve como HTML, CSS y JavaScript ya preparados, sin generar el contenido en cada petición",
        "Se genera en el servidor con PHP y consultas a una base de datos",
        "Necesita WordPress para poder publicarse",
        "Solo puede contener texto, sin imágenes ni estilos"
      ],
      "correcta": 0,
      "explicacion": "Una página estática se entrega tal como está guardada en el servidor: el HTML, el CSS y el JavaScript no se generan por petición. Por eso suele ser rápida, segura y fácil de rastrear, aunque actualizar el contenido requiere editar los archivos."
    },
    {
      "pregunta": "¿Qué ventaja SEO suele aportar un sitio estático?",
      "opciones": [
        "Que Google lo indexa automáticamente sin necesidad de enlaces",
        "Que no necesita HTTPS",
        "Que el HTML ya contiene el contenido y suele cargar rápido",
        "Que evita tener que trabajar las palabras clave"
      ],
      "correcta": 2,
      "explicacion": "Al estar el contenido en el HTML inicial, los rastreadores lo encuentran sin depender de JavaScript y la página suele cargar más rápido. Aun así, sigue siendo necesario trabajar keywords, enlaces, metadatos y publicación."
    },
    {
      "pregunta": "¿En qué parte del documento HTML se define el `<title>`?",
      "opciones": [
        "En el `<body>`, dentro del primer párrafo",
        "En el `<head>`, junto a las metas",
        "En el pie de página",
        "En el archivo robots.txt"
      ],
      "correcta": 1,
      "explicacion": "El `<title>` se declara en el `<head>` del documento. Define el título de la pestaña y normalmente se usa como enlace en la SERP, por lo que debe ser único, descriptivo y contener la keyword principal de la página."
    },
    {
      "pregunta": "¿Cómo debería ser el `<title>` de una página?",
      "opciones": [
        "Igual en todas las páginas para reforzar la marca",
        "Lo más largo posible, aunque se corte en la SERP",
        "Una lista de palabras clave separadas por comas",
        "Único, descriptivo y con la keyword principal"
      ],
      "correcta": 3,
      "explicacion": "Cada página debe tener un title propio que describa su contenido y su intención. Repetir el mismo título en todo el sitio o rellenarlo de keywords empeora la relevancia y la experiencia en los resultados de búsqueda."
    },
    {
      "pregunta": "¿Qué afirmación sobre la meta description es correcta?",
      "opciones": [
        "Es un factor de ranking directo decisivo",
        "Resume la página, influye en el CTR y Google puede reescribirla",
        "Debe ir en el body y ser invisible para el usuario",
        "Solo puede haber una en todo el sitio"
      ],
      "correcta": 1,
      "explicacion": "La meta description es un resumen de la página. No es un factor de ranking directo, pero influye en el CTR y Google puede reescribirla si considera que otro fragmento del contenido responde mejor a la consulta. Cada página debe tener la suya."
    },
    {
      "pregunta": "¿Cuántos H1 conviene usar como norma general en una página?",
      "opciones": [
        "Tantos como párrafos haya",
        "Ninguno, porque el H1 no influye",
        "Uno principal, que resuma el tema de la página",
        "Uno por cada keyword que queramos posicionar"
      ],
      "correcta": 2,
      "explicacion": "Lo habitual y recomendable es un H1 principal por página que resuma el tema. Después se usan H2, H3, etc. para estructurar las secciones. El H1 ayuda tanto al usuario como al buscador a entender el contenido."
    },
    {
      "pregunta": "¿Cuál es una jerarquía de encabezados correcta?",
      "opciones": [
        "H1 para el título, H2 para secciones y H3 para subsecciones",
        "H1, H4 y H6 para ahorrar etiquetas",
        "Todos los títulos con H1 y los párrafos con H2",
        "H3 para el título principal y H1 para el pie"
      ],
      "correcta": 0,
      "explicacion": "La jerarquía debe reflejar la estructura del contenido: H1 como título principal, H2 para las secciones y H3 para las subsecciones. Saltarse niveles dificulta la comprensión del documento y el trabajo de las tecnologías de asistencia."
    },
    {
      "pregunta": "¿Qué URL es más amigable para SEO?",
      "opciones": [
        "`/pagina.php?id=27&cat=3`",
        "`/Servicios/Diseño Web.html`",
        "`/servicios/diseno-web/`",
        "`/p?=diseno_web_2026`"
      ],
      "correcta": 2,
      "explicacion": "Una URL amigable es corta, descriptiva y legible: minúsculas, palabras separadas por guiones y sin parámetros innecesarios. `/servicios/diseno-web/` comunica el contenido mucho mejor que una URL con IDs o caracteres especiales."
    },
    {
      "pregunta": "En un sitio estático, ¿qué archivo se sirve normalmente al acceder a un directorio?",
      "opciones": [
        "`home.php`",
        "`robots.txt`",
        "`sitemap.xml`",
        "`index.html`"
      ],
      "correcta": 3,
      "explicacion": "Los servidores web suelen buscar un archivo de índice por defecto, normalmente `index.html`. Por eso una URL limpia como `/servicios/` puede servir `/servicios/index.html` sin mostrar el nombre del archivo."
    },
    {
      "pregunta": "¿Para qué sirve el atributo `alt` de una imagen?",
      "opciones": [
        "Para describir la imagen a quienes no la ven y aportar contexto a los buscadores",
        "Para cambiar el tamaño de la imagen",
        "Para meter todas las keywords de la página",
        "Para ocultar la imagen en móvil"
      ],
      "correcta": 0,
      "explicacion": "El texto alternativo describe la imagen para personas que usan lectores de pantalla y para cuando la imagen no carga. También ayuda a los buscadores a entender su contenido. Debe ser específico y natural, no una lista de keywords."
    },
    {
      "pregunta": "¿Qué nombre de archivo es mejor para una imagen?",
      "opciones": [
        "`IMG_20261113_001.jpg`",
        "`zapatillas-trail-mujer.jpg`",
        "`foto final (1).JPG`",
        "`imagen-sin-nombre.png`"
      ],
      "correcta": 1,
      "explicacion": "Un nombre descriptivo, en minúsculas y con guiones aporta contexto sobre la imagen. Los nombres genéricos de cámara o con espacios y mayúsculas no ayudan ni a los usuarios ni a los buscadores."
    },
    {
      "pregunta": "¿Cómo deben ser los enlaces internos de un sitio estático?",
      "opciones": [
        "Rutas absolutas del disco, como `C:\\Users\\...`",
        "Siempre con `javascript:void(0)`",
        "Rutas relativas o del dominio, con un texto de enlace descriptivo",
        "Con el texto \"clic aquí\" en todos"
      ],
      "correcta": 2,
      "explicacion": "Los enlaces internos deben usar rutas relativas o absolutas del dominio, nunca rutas del disco local. El texto de enlace (anchor) debe describir la página de destino para aportar contexto y mejorar la navegación."
    },
    {
      "pregunta": "¿Qué hace el archivo `robots.txt`?",
      "opciones": [
        "Da instrucciones a los rastreadores sobre qué rutas no deben rastrear",
        "Elimina las páginas del índice de Google",
        "Genera automáticamente el sitemap",
        "Cifra la conexión con HTTPS"
      ],
      "correcta": 0,
      "explicacion": "`robots.txt` se coloca en la raíz del sitio y da instrucciones de rastreo a los bots. No garantiza que una página desaparezca del índice: para eso se usa `noindex` o se elimina la URL. Además, bloquear CSS o JavaScript puede impedir que Google entienda la página."
    },
    {
      "pregunta": "¿Para qué sirve `sitemap.xml`?",
      "opciones": [
        "Para bloquear el acceso de los usuarios",
        "Para definir el título de cada página",
        "Para sustituir a la meta description",
        "Para enumerar las URLs importantes y facilitar su descubrimiento"
      ],
      "correcta": 3,
      "explicacion": "Un sitemap XML enumera las URLs relevantes del sitio para ayudar a los buscadores a descubrirlas, especialmente si hay muchas páginas o enlaces internos limitados. Se complementa con `robots.txt` y no garantiza por sí solo la indexación."
    },
    {
      "pregunta": "¿Qué indica una etiqueta canonical?",
      "opciones": [
        "Que la página no debe indexarse",
        "La URL principal o preferida cuando hay contenido duplicado",
        "Que la página debe redirigirse con un 301",
        "El idioma principal del sitio"
      ],
      "correcta": 1,
      "explicacion": "La etiqueta canonical señala la URL que debe considerarse principal cuando existen varias versiones del mismo contenido. Se recomienda usar URLs absolutas y evitar cadenas de canonical que apunten a otras canonical."
    },
    {
      "pregunta": "¿Qué diferencia hay entre `noindex` y `robots.txt`?",
      "opciones": [
        "`noindex` pide no incluir la página en el índice; `robots.txt` regula el rastreo",
        "Son sinónimos exactos",
        "`noindex` bloquea el rastreo y `robots.txt` indexa",
        "`robots.txt` solo funciona en WordPress"
      ],
      "correcta": 0,
      "explicacion": "`noindex` es una directiva que se incluye en la propia página para pedir que no se indexe. `robots.txt` indica qué puede rastrear el bot. Si bloqueas una URL en `robots.txt`, el bot podría no llegar a leer el `noindex`, así que conviene no combinar ambas sin cuidado."
    },
    {
      "pregunta": "¿Qué hace una redirección 301?",
      "opciones": [
        "Muestra un error 404",
        "Duplica la página para posicionar más",
        "Traslada permanentemente una URL a otra y transmite la autoridad",
        "Borra el contenido del servidor"
      ],
      "correcta": 2,
      "explicacion": "Una redirección 301 indica que una URL se ha movido de forma permanente a otra. Se usa al cambiar rutas o dominios y ayuda a conservar las señales y la experiencia de los usuarios. Conviene evitar cadenas de redirecciones y apuntar directamente al destino final."
    },
    {
      "pregunta": "¿Cómo debe ser una página 404 personalizada?",
      "opciones": [
        "Debe devolver el estado HTTP 404 y ofrecer ayuda para seguir navegando",
        "Debe devolver 200 para que Google la indexe",
        "Debe redirigir siempre a la home con JavaScript",
        "Debe mostrar solo un texto \"error\" sin enlaces"
      ],
      "correcta": 0,
      "explicacion": "Una buena página 404 mantiene el código de estado HTTP 404, explica que la página no existe y ofrece enlaces útiles para continuar. Devolver 200 convierte el error en un soft 404 y confunde a los buscadores."
    },
    {
      "pregunta": "¿Para qué sirven las etiquetas Open Graph?",
      "opciones": [
        "Para mejorar directamente el ranking en Google",
        "Para controlar cómo se muestra la página al compartirla en redes sociales",
        "Para definir la estructura de encabezados",
        "Para comprimir las imágenes"
      ],
      "correcta": 1,
      "explicacion": "Open Graph (`og:title`, `og:description`, `og:image`, etc.) define cómo se presenta una página al compartirla en redes sociales y mensajería. No es un factor de ranking directo, pero mejora el atractivo y el CTR social."
    },
    {
      "pregunta": "¿Qué conviene hacer justo después de publicar el sitio?",
      "opciones": [
        "Esperar un mes sin revisar nada",
        "Enviar el sitio a todos los directorios de enlaces posibles",
        "Comprobar la indexación y el rendimiento con Search Console y Lighthouse",
        "Desactivar HTTPS para que cargue antes"
      ],
      "correcta": 2,
      "explicacion": "Tras publicar, conviene comprobar que las páginas se rastrean e indexan correctamente con Search Console, revisar el rendimiento y la accesibilidad con Lighthouse y verificar que no quedan `noindex` ni bloqueos de desarrollo."
    }
  ]
};
