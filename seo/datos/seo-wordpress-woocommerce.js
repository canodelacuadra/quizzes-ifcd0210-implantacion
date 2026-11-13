window.QUIZ = {
  "mensajes": {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Dominas el SEO en WordPress y WooCommerce: configuración, taxonomías, productos, contenido duplicado, rendimiento y publicación."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claro cómo optimizar WordPress y una tienda WooCommerce. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para afianzar la configuración SEO de WordPress y WooCommerce."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: revisa las explicaciones, repasa los ajustes clave de WordPress y WooCommerce y vuelve a intentarlo."
    }
  },
  "preguntas": [
    {
      "pregunta": "¿Dónde se cambia la estructura de URLs en WordPress?",
      "opciones": [
        "En Apariencia > Temas",
        "En Ajustes > Enlaces permanentes",
        "En Usuarios > Perfil",
        "En Plugins > Añadir nuevo"
      ],
      "correcta": 1,
      "explicacion": "La estructura de los enlaces permanentes se configura en Ajustes > Enlaces permanentes. Conviene elegir una estructura legible con el slug de la entrada o página, evitar los parámetros `?p=123` y no cambiarla a menudo sin planificar redirecciones."
    },
    {
      "pregunta": "¿Qué estructura de enlaces permanentes es más recomendable para SEO?",
      "opciones": [
        "`/%postname%/` o una variante legible con el slug",
        "`/?p=123`",
        "`/archives/2026/11/13/`",
        "Una con `?id=` y muchos parámetros"
      ],
      "correcta": 0,
      "explicacion": "Una estructura basada en el nombre de la entrada o página (`/%postname%/`) produce URLs cortas, legibles y con la keyword. Incluir la fecha completa o IDs no aporta relevancia y dificulta la lectura de la URL."
    },
    {
      "pregunta": "¿Qué hace la opción \"Desanimar a los motores de búsqueda\" de WordPress?",
      "opciones": [
        "Envía el sitemap a Google",
        "Activa el modo mantenimiento",
        "Añade `noindex` y bloquea la indexación del sitio",
        "Elimina los enlaces permanentes"
      ],
      "correcta": 2,
      "explicacion": "Esa opción, pensada para sitios en desarrollo, añade una directiva `noindex` para que los buscadores no indexen el sitio. Es un error habitual olvidarla activa al publicar: hay que desmarcarla y comprobar en Search Console que el sitio se indexa."
    },
    {
      "pregunta": "¿Qué funciones cubre un plugin como Yoast SEO o Rank Math?",
      "opciones": [
        "Solo el diseño del tema",
        "Títulos y metas, canonical, sitemap, schema y análisis de contenido",
        "La gestión de pedidos",
        "La seguridad del servidor"
      ],
      "correcta": 1,
      "explicacion": "Los plugins SEO permiten editar títulos y meta descriptions, gestionar canonical y `noindex`, generar sitemaps, añadir datos estructurados y recibir sugerencias de contenido. No sustituyen a una buena arquitectura, contenido ni rendimiento."
    },
    {
      "pregunta": "¿El título y el lema del sitio sustituyen al SEO de cada página?",
      "opciones": [
        "Sí, siempre",
        "Sí, si usas WooCommerce",
        "Solo en la página de inicio",
        "No: cada página debe tener su propio title y meta description"
      ],
      "correcta": 3,
      "explicacion": "El título y el lema del sitio identifican la marca, pero no sustituyen a los metadatos de cada página. Cada entrada, página o producto necesita un title y una meta description propios que respondan a su intención de búsqueda."
    },
    {
      "pregunta": "¿Cuál es la diferencia principal entre categorías y etiquetas?",
      "opciones": [
        "Las categorías agrupan jerárquicamente; las etiquetas son transversales",
        "Las etiquetas son obligatorias y las categorías no",
        "Las categorías solo sirven para productos",
        "No hay ninguna diferencia"
      ],
      "correcta": 0,
      "explicacion": "Las categorías organizan el contenido de forma jerárquica y suelen formar parte de la arquitectura principal. Las etiquetas son descriptores transversales. Abusar de etiquetas con poco contenido genera páginas duplicadas o de bajo valor."
    },
    {
      "pregunta": "¿Qué se recomienda hacer con páginas de etiquetas con muy poco contenido?",
      "opciones": [
        "Indexarlas siempre para tener más URLs",
        "Duplicarlas en varios idiomas",
        "Valorar `noindex` o eliminar las etiquetas finas para evitar contenido duplicado",
        "Bloquearlas con contraseña"
      ],
      "correcta": 2,
      "explicacion": "Las etiquetas con una o dos entradas suelen crear páginas casi vacías y duplicadas. Conviene eliminarlas, unificarlas o aplicarles `noindex` para que no compitan con las categorías y el contenido principal."
    },
    {
      "pregunta": "¿Por qué a veces se aplica `noindex` a los archivos de autor o de fecha?",
      "opciones": [
        "Porque contienen el mejor contenido del sitio",
        "Porque generan listados duplicados o de poco valor para las búsquedas",
        "Porque impiden cargar imágenes",
        "Porque son obligatorios en WooCommerce"
      ],
      "correcta": 1,
      "explicacion": "Los archivos de autor, fecha y otros listados pueden duplicar el contenido de las entradas y aportar poco valor. En muchos proyectos se desindexan o se eliminan, sobre todo si hay pocos autores o el blog no tiene una estrategia de autores."
    },
    {
      "pregunta": "¿Cómo debe tratarse la paginación de un blog o una tienda?",
      "opciones": [
        "Bloquearla siempre con `robots.txt`",
        "Redirigir todas las páginas a la primera",
        "Añadir `noindex` a todas las páginas paginadas",
        "Mantenerla rastreable y con enlaces claros entre páginas"
      ],
      "correcta": 3,
      "explicacion": "La paginación debe poder rastrearse y tener enlaces claros hacia las páginas siguientes y anteriores. Bloquearla o aplicar `noindex` de forma indiscriminada puede impedir que los buscadores descubran contenidos más antiguos. Cada página paginada debe ser coherente con su contenido."
    },
    {
      "pregunta": "¿Qué fuente típica de contenido duplicado debe revisarse en WordPress?",
      "opciones": [
        "Adjuntos, feeds, búsquedas internas y parámetros de URL",
        "El archivo `.htaccess`",
        "El título del sitio",
        "Los comentarios aprobados"
      ],
      "correcta": 0,
      "explicacion": "WordPress puede generar versiones duplicadas en adjuntos, feeds, resultados de búsqueda interna, archivos de fecha y URLs con parámetros. Los plugins SEO ayudan a controlar canonical y `noindex`, pero conviene revisar qué se está indexando realmente."
    },
    {
      "pregunta": "¿Qué problema puede generar cada variación de producto con su propia URL?",
      "opciones": [
        "Que se dupliquen los pedidos",
        "Que se rompa el carrito",
        "Contenido duplicado y dispersión de señales; conviene usar canonical a la URL principal",
        "Que se desactive el pago"
      ],
      "correcta": 2,
      "explicacion": "Las variaciones pueden crear URLs con parámetros o fichas casi idénticas. Si se indexan todas, compiten entre sí y dispersan las señales. Lo habitual es canonicalizar a la ficha principal o controlar qué variaciones deben indexarse."
    },
    {
      "pregunta": "¿Qué elementos debe cuidar la ficha de un producto?",
      "opciones": [
        "Solo el precio",
        "Título, descripciones, atributos, imágenes con alt y datos estructurados",
        "Solo la imagen destacada",
        "Únicamente las reseñas"
      ],
      "correcta": 1,
      "explicacion": "Una ficha de producto completa incluye un título descriptivo, descripción corta y larga, atributos útiles, imágenes optimizadas con texto alternativo y datos estructurados `Product` con precio y disponibilidad. Todo ello ayuda a posicionar y a mostrar resultados enriquecidos."
    },
    {
      "pregunta": "¿Qué buena práctica se aplica a las imágenes de producto?",
      "opciones": [
        "Subirlas sin comprimir en PNG de 5 MB",
        "Nombrarlas IMG_001, IMG_002...",
        "Usar el mismo alt genérico en todas",
        "Nombres descriptivos, formatos comprimidos, tamaño adecuado y alt específico"
      ],
      "correcta": 3,
      "explicacion": "Las imágenes deben tener nombres descriptivos, estar comprimidas y en el formato adecuado, servirse en el tamaño necesario y usar un `alt` específico. Así mejora la accesibilidad, el rendimiento y la relevancia de la ficha."
    },
    {
      "pregunta": "¿Qué aporta un buen texto descriptivo en una categoría de producto?",
      "opciones": [
        "Contexto y contenido único para posicionar la categoría, además de ayudar al usuario",
        "Nada, Google ignora las categorías",
        "Duplicar la descripción de todos los productos",
        "Ocultar los productos"
      ],
      "correcta": 0,
      "explicacion": "Una categoría con texto propio explica qué ofrece, resuelve dudas y aporta contenido único que puede posicionar para búsquedas más amplias. No conviene copiar la misma descripción en todas las categorías ni rellenar por rellenar."
    },
    {
      "pregunta": "¿Cómo deben gestionarse las reseñas para SEO?",
      "opciones": [
        "Inventar reseñas positivas para conseguir estrellas",
        "Ocultar todas las reseñas",
        "Permitir reseñas reales y usar datos estructurados `Product` y `Review` correctamente",
        "Copiar reseñas de otra tienda"
      ],
      "correcta": 2,
      "explicacion": "Las reseñas reales aportan confianza y pueden habilitar estrellas en la SERP mediante datos estructurados. Inventar o copiar reseñas incumple las directrices y puede provocar penalizaciones o la retirada de los resultados enriquecidos."
    },
    {
      "pregunta": "¿Qué riesgo tienen los filtros y facetas de WooCommerce?",
      "opciones": [
        "Que desaparecen los productos",
        "Generar muchas URLs con parámetros y contenido duplicado",
        "Que se desactiva el IVA",
        "Que no se pueden usar imágenes"
      ],
      "correcta": 1,
      "explicacion": "Los filtros por atributo, precio o categoría pueden crear combinaciones infinitas de URLs con contenido similar. Conviene decidir qué facetas merecen indexarse, bloquear o canonicalizar el resto y evitar que los bots rastreen URLs sin valor."
    },
    {
      "pregunta": "¿Qué páginas de la tienda no deberían indexarse?",
      "opciones": [
        "Las categorías principales",
        "Las fichas de producto",
        "El blog",
        "Carrito, checkout y mi cuenta"
      ],
      "correcta": 3,
      "explicacion": "El carrito, el proceso de compra y el área de cliente son páginas funcionales que no aportan valor en los resultados y pueden exponer parámetros o datos de sesión. Deben llevar `noindex` y no incluirse en el sitemap."
    },
    {
      "pregunta": "¿Qué medida mejora el rendimiento de WooCommerce?",
      "opciones": [
        "Caché, imágenes optimizadas, tema ligero y controlar los plugins pesados",
        "Instalar todos los plugins disponibles",
        "Subir imágenes sin límite de tamaño",
        "Desactivar la caché"
      ],
      "correcta": 0,
      "explicacion": "El rendimiento de una tienda mejora con caché de página y objetos, imágenes comprimidas y servidas en el tamaño adecuado, un tema ligero y solo los plugins necesarios. WooCommerce añade consultas y scripts, así que conviene medir antes y después de cada cambio."
    },
    {
      "pregunta": "¿Dónde se envía el sitemap de WordPress y WooCommerce?",
      "opciones": [
        "A FileZilla",
        "Al archivo `.htaccess`",
        "A Google Search Console",
        "Al panel de pedidos"
      ],
      "correcta": 2,
      "explicacion": "El sitemap generado por el plugin SEO o por WordPress se envía en Google Search Console para facilitar su descubrimiento y revisar su estado. También conviene comprobar que incluye productos, categorías y páginas relevantes, y que no incluye carrito o checkout."
    },
    {
      "pregunta": "¿Qué error grave debe comprobarse tras publicar una tienda WordPress?",
      "opciones": [
        "Que el logo sea cuadrado",
        "Que no quede activo `noindex` ni el bloqueo de motores",
        "Que haya demasiadas categorías",
        "Que el carrito tenga animaciones"
      ],
      "correcta": 1,
      "explicacion": "Antes de publicar hay que desactivar \"Desanimar a los motores de búsqueda\", revisar que no haya `noindex` en las páginas principales y comprobar que `robots.txt` no bloquea CSS, JavaScript ni las URLs de producto. Después se verifica la indexación en Search Console."
    }
  ]
};
