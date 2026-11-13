window.QUIZ = {
  "mensajes": {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Dominas el SEO avanzado en sitios estáticos: datos estructurados, Core Web Vitals, renderizado, internacionalización y auditoría técnica."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes un nivel muy alto de SEO técnico aplicado a páginas estáticas. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para afianzar los conceptos avanzados."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: el SEO técnico requiere práctica. Revisa las explicaciones, repasa los conceptos clave y vuelve a intentarlo."
    }
  },
  "preguntas": [
    {
      "pregunta": "¿Qué formato de datos estructurados recomienda Google para una página estática?",
      "opciones": [
        "Un archivo CSV aparte",
        "Microdatos obligatoriamente",
        "JSON-LD dentro de `<script type=\"application/ld+json\">`",
        "Un comentario HTML"
      ],
      "correcta": 2,
      "explicacion": "Google recomienda JSON-LD, que se incluye en un `<script type=\"application/ld+json\">`. Es más fácil de mantener y de validar que los microdatos y no mezcla la estructura con el HTML visible."
    },
    {
      "pregunta": "¿Qué indica el tipo `Article` en JSON-LD?",
      "opciones": [
        "Que la página es un artículo con titular, autor y fecha",
        "Que la página es un producto en venta",
        "Que la página no debe indexarse",
        "Que el sitio usa HTTPS"
      ],
      "correcta": 0,
      "explicacion": "`Article` describe un contenido editorial e incluye propiedades como `headline`, `author`, `datePublished` y `image`. No garantiza un rich result, pero ayuda a los buscadores a entender el contenido y puede habilitar mejoras visuales."
    },
    {
      "pregunta": "¿Para qué sirve el schema `BreadcrumbList`?",
      "opciones": [
        "Para bloquear las migas de pan",
        "Para describir la ruta de navegación jerárquica de la página",
        "Para crear un menú desplegable",
        "Para redirigir al inicio del sitio"
      ],
      "correcta": 1,
      "explicacion": "`BreadcrumbList` describe la ruta jerárquica desde la home hasta la página actual. Puede hacer que Google muestre migas de pan en la SERP en lugar de la URL completa, lo que mejora la orientación y el CTR."
    },
    {
      "pregunta": "¿Qué schema ayuda a identificar la marca y el sitio en los resultados?",
      "opciones": [
        "`Review`",
        "`Product`",
        "`FAQPage`",
        "`Organization` y `WebSite`"
      ],
      "correcta": 3,
      "explicacion": "`Organization` describe la entidad o marca y `WebSite` describe el sitio, su nombre y su URL. Juntos ayudan a Google a identificar la marca, el nombre preferido del sitio y el cuadro de búsqueda interna en algunos casos."
    },
    {
      "pregunta": "¿Con qué herramienta compruebas que tus datos estructurados son válidos?",
      "opciones": [
        "El validador de CSS",
        "Rich Results Test o el validador de Schema.org",
        "FileZilla",
        "phpMyAdmin"
      ],
      "correcta": 1,
      "explicacion": "Rich Results Test comprueba si el marcado puede optar a resultados enriquecidos y muestra errores y advertencias. El validador de Schema.org es útil para revisar la sintaxis y las propiedades del vocabulario."
    },
    {
      "pregunta": "¿Qué mide LCP (Largest Contentful Paint)?",
      "opciones": [
        "El tiempo hasta que se muestra el elemento visible más grande de la página",
        "El número de clics en los enlaces",
        "La estabilidad visual del diseño",
        "El tiempo de respuesta a una interacción"
      ],
      "correcta": 0,
      "explicacion": "LCP mide cuándo se renderiza el elemento visible más grande, normalmente la imagen principal o un bloque de texto. Es una métrica de Core Web Vitals y se considera buena cuando está en torno a 2,5 segundos o menos."
    },
    {
      "pregunta": "¿Qué mide INP (Interaction to Next Paint)?",
      "opciones": [
        "El tamaño de las imágenes",
        "La velocidad de resolución DNS",
        "La capacidad de respuesta de la página a las interacciones del usuario",
        "El número de enlaces internos"
      ],
      "correcta": 2,
      "explicacion": "INP mide la latencia de las interacciones, es decir, cuánto tarda la página en responder visualmente a clics, toques o teclas. Sustituyó a FID como métrica de interactividad y se considera buena por debajo de 200 ms."
    },
    {
      "pregunta": "¿Qué mide CLS (Cumulative Layout Shift)?",
      "opciones": [
        "La velocidad de carga inicial",
        "El tiempo hasta el primer byte",
        "La respuesta a los clics",
        "Los cambios inesperados de diseño que afectan a la estabilidad visual"
      ],
      "correcta": 3,
      "explicacion": "CLS cuantifica cuánto se mueven los elementos de la página de forma inesperada mientras se carga. Un CLS bajo (en torno a 0,1 o menos) evita que el usuario pulse donde no debe y mejora la experiencia."
    },
    {
      "pregunta": "¿Qué medida ayuda a mejorar el LCP de una imagen principal?",
      "opciones": [
        "Comprimirla, servirla en el tamaño adecuado y usar `preload` o `fetchpriority`",
        "Cargarla siempre con `loading=\"lazy\"`",
        "Ocultarla con CSS hasta que cargue todo",
        "Usarla como imagen de fondo de 5 MB"
      ],
      "correcta": 0,
      "explicacion": "Comprimir la imagen, servirla en el tamaño y formato adecuados y priorizar su carga con `preload` o `fetchpriority=\"high\"` reduce el LCP. El `loading=\"lazy\"` se reserva para imágenes que están fuera de la primera pantalla."
    },
    {
      "pregunta": "¿Cómo se evita el CLS en una página estática?",
      "opciones": [
        "Cargando todas las fuentes externas sin control",
        "Reservando espacio con `width` y `height` o `aspect-ratio` en imágenes y vídeos",
        "Insertando banners dinámicos en la parte superior",
        "Usando `display: none` en las imágenes"
      ],
      "correcta": 1,
      "explicacion": "Reservar el espacio que ocuparán imágenes, vídeos, anuncios y fuentes evita que el contenido salte cuando terminan de cargar. También ayuda usar `font-display` y no insertar elementos dinámicos por encima del contenido ya visible."
    },
    {
      "pregunta": "¿Qué riesgo SEO tiene construir todo el contenido con JavaScript del lado del cliente?",
      "opciones": [
        "Ninguno, Google ejecuta siempre todo el JavaScript al instante",
        "Que el sitio deja de ser accesible",
        "Que el contenido puede no estar disponible cuando el rastreador lo procesa",
        "Que se pierde el HTTPS"
      ],
      "correcta": 2,
      "explicacion": "Google puede ejecutar JavaScript, pero el renderizado tiene coste y no es inmediato. Si el contenido depende de peticiones lentas o de interacciones, puede no verse en el momento del rastreo. Por eso se recomienda SSG, SSR o prerenderizar el contenido importante."
    },
    {
      "pregunta": "¿Qué diferencia hay entre SSG y SSR?",
      "opciones": [
        "SSG genera el HTML en el build; SSR lo genera en cada petición",
        "SSG solo funciona con WordPress",
        "SSR impide la indexación",
        "Son exactamente lo mismo"
      ],
      "correcta": 0,
      "explicacion": "En SSG (Static Site Generation) el HTML se genera al construir el sitio y se sirve estático. En SSR (Server-Side Rendering) el HTML se genera en el servidor para cada petición. Ambos entregan HTML inicial al rastreador, a diferencia del renderizado solo en cliente."
    },
    {
      "pregunta": "¿Para qué se usa `hreflang`?",
      "opciones": [
        "Para redirigir a los usuarios según su navegador",
        "Para indicar las versiones de una página por idioma o región",
        "Para cifrar el contenido",
        "Para bloquear el acceso desde otros países"
      ],
      "correcta": 1,
      "explicacion": "`hreflang` indica a los buscadores qué versiones de una página existen para cada idioma o región, incluida la versión `x-default`. Ayuda a mostrar el resultado adecuado, pero no impide que un usuario acceda a otra versión."
    },
    {
      "pregunta": "¿Qué es la canibalización de palabras clave?",
      "opciones": [
        "Usar la misma keyword en el title y el H1",
        "Enlazar dos páginas entre sí",
        "Que varias URLs compiten por la misma consulta y se restan visibilidad",
        "Repetir la keyword en el contenido"
      ],
      "correcta": 2,
      "explicacion": "La canibalización ocurre cuando varias páginas del mismo sitio intentan posicionar para la misma intención de búsqueda. Los buscadores no saben cuál mostrar y se reparten enlaces y señales. Se corrige unificando contenidos, diferenciando intenciones o usando canonical y enlaces internos."
    },
    {
      "pregunta": "¿Qué estructura de contenidos ayuda a demostrar autoridad sobre un tema?",
      "opciones": [
        "Publicar solo páginas sueltas sin enlaces",
        "Crear una página por cada keyword sin relación",
        "Duplicar el mismo artículo con distintos títulos",
        "Un contenido pilar con artículos satélite enlazados entre sí"
      ],
      "correcta": 3,
      "explicacion": "Los clusters de contenido agrupan una página pilar sobre el tema principal con artículos satélite más específicos, enlazados entre sí. Esta arquitectura facilita la navegación, reparte autoridad y demuestra cobertura y profundidad sobre la materia."
    },
    {
      "pregunta": "¿Qué problema genera una cadena de redirecciones 301?",
      "opciones": [
        "Pierde eficiencia y puede diluir señales; conviene redirigir directamente al destino final",
        "Mejora siempre el ranking",
        "Elimina automáticamente el contenido duplicado",
        "Convierte la página en HTTPS"
      ],
      "correcta": 0,
      "explicacion": "Cada salto adicional en una cadena añade latencia y puede diluir parte de las señales. Lo recomendable es actualizar los enlaces internos y redirigir cada URL antigua directamente a la URL final, evitando saltos intermedios."
    },
    {
      "pregunta": "¿Qué es un soft 404?",
      "opciones": [
        "Una página que devuelve 404 y muestra un error",
        "Una página sin contenido útil que devuelve 200 y confunde al buscador",
        "Un error del servidor 500",
        "Una redirección 301"
      ],
      "correcta": 1,
      "explicacion": "Un soft 404 es una URL que responde con estado 200 pero muestra contenido vacío, genérico o de error. Google puede marcarla como soft 404 en Search Console. Lo correcto es devolver un 404 real o redirigir a contenido equivalente."
    },
    {
      "pregunta": "¿Cuándo es especialmente relevante gestionar el crawl budget?",
      "opciones": [
        "En cualquier web de cinco páginas",
        "Solo en webs con HTTPS",
        "En sitios grandes con muchas URLs y contenido de bajo valor",
        "Solo en WordPress"
      ],
      "correcta": 2,
      "explicacion": "El crawl budget es la cantidad de URLs que un buscador rastrea en un sitio en un periodo. Es especialmente relevante en sitios grandes o con muchas URLs generadas automáticamente. Se optimiza reduciendo duplicados y URLs basura, mejorando la arquitectura y usando `noindex` o `robots.txt` con criterio."
    },
    {
      "pregunta": "¿Para qué sirve IndexNow?",
      "opciones": [
        "Para notificar cambios de URL a buscadores compatibles",
        "Para sustituir a Google Search Console",
        "Para generar el sitemap automáticamente",
        "Para bloquear bots"
      ],
      "correcta": 0,
      "explicacion": "IndexNow es un protocolo que permite avisar a buscadores compatibles de que una URL se ha creado, actualizado o eliminado. Acelera el descubrimiento, pero no garantiza la indexación ni sustituye al sitemap o a Search Console."
    },
    {
      "pregunta": "¿Qué combinación es adecuada para una auditoría SEO técnica?",
      "opciones": [
        "Solo mirar la web en el navegador",
        "Solo preguntar a los usuarios",
        "Solo usar la herramienta de diseño",
        "Screaming Frog, Search Console y PageSpeed Insights"
      ],
      "correcta": 3,
      "explicacion": "Una auditoría completa combina un rastreador como Screaming Frog para revisar URLs, títulos, metas, redirecciones y errores; Search Console para ver indexación, consultas y problemas reales; y PageSpeed Insights para rendimiento y Core Web Vitals. Después se priorizan los arreglos por impacto."
    }
  ]
};
