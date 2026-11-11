window.QUIZ = {
  mensajes: {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Has acertado todas las preguntas. Dominas Git, GitHub, GitHub Pages y Netlify: repositorios, publicación, despliegue continuo y formularios."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claro cómo se publica una web con Git y GitHub. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones, repasa los comandos de Git y vuelve a intentarlo."
    }
  },
  preguntas: [
    {
      pregunta: '¿Para qué sirve Git?',
      opciones: [
        'Para controlar las versiones de un proyecto y registrar sus cambios',
        'Para alojar páginas web de forma gratuita',
        'Para diseñar la interfaz gráfica de una web',
        'Para sustituir al servidor web Apache'
      ],
      correcta: 0,
      explicacion: 'Git es un sistema de control de versiones distribuido: guarda un historial de cambios, permite trabajar con ramas y colaborar sin pisar el trabajo de los demás. GitHub es la plataforma de alojamiento, no Git.'
    },
    {
      pregunta: '¿Qué diferencia existe entre Git y GitHub?',
      opciones: [
        'Git es una plataforma en la nube y GitHub es el programa local',
        'Son dos nombres para el mismo programa',
        'Git es la herramienta de control de versiones; GitHub es una plataforma para alojar repositorios y colaborar',
        'Git solo funciona con GitHub y no con otros servicios'
      ],
      correcta: 2,
      explicacion: 'Git es el sistema de control de versiones que se instala localmente. GitHub es un servicio en la nube que aloja repositorios Git y añade colaboración, issues, pull requests y GitHub Pages.'
    },
    {
      pregunta: '¿Qué entendemos por despliegue web?',
      opciones: [
        'El proceso de publicar una aplicación para que esté disponible a los usuarios en Internet',
        'El proceso de diseñar la base de datos',
        'La instalación de un editor de código',
        'La fase de maquetación de la web'
      ],
      correcta: 0,
      explicacion: 'El despliegue web es el conjunto de pasos que llevan la aplicación desde el entorno de desarrollo hasta un servidor o plataforma donde los usuarios pueden acceder a ella.'
    },
    {
      pregunta: '¿Qué función tiene Netlify?',
      opciones: [
        'Un sistema de control de versiones',
        'Una plataforma de hosting y despliegue que publica sitios desde un repositorio Git',
        'Un editor de código online',
        'Un lenguaje de programación para el servidor'
      ],
      correcta: 1,
      explicacion: 'Netlify es una plataforma de hosting y despliegue: conecta un repositorio, construye el sitio y lo publica en una URL con CDN, HTTPS, formularios y despliegues automáticos.'
    },
    {
      pregunta: '¿Para qué sirve el atributo data-netlify="true"?',
      opciones: [
        'Cifra los datos del formulario',
        'Envía el formulario por correo electrónico automáticamente',
        'Valida que el usuario ha rellenado todos los campos',
        'Indica a Netlify que detecte y procese ese formulario sin necesidad de backend'
      ],
      correcta: 3,
      explicacion: 'El atributo data-netlify="true" (o netlify) marca el formulario para que Netlify lo detecte al desplegar y gestione los envíos. No cifra ni valida por sí solo; la validación se hace con HTML o JavaScript.'
    },
    {
      pregunta: '¿Por qué necesitamos que los campos tengan un atributo name?',
      opciones: [
        'Porque sin name el formulario no se puede diseñar',
        'Porque Netlify usa el name para identificar el formulario y cada campo en los envíos',
        'Porque name cambia el color de los campos',
        'Porque name es obligatorio solo en los formularios de pago'
      ],
      correcta: 1,
      explicacion: 'Netlify identifica el formulario por su atributo name y cada dato por el name de su campo. Si faltan o se repiten, los envíos pueden llegar vacíos o incompletos.'
    },
    {
      pregunta: '¿Necesitamos desarrollar un servidor para recibir los formularios de esta práctica?',
      opciones: [
        'Sí, hay que programar un servidor con PHP o Node.js',
        'Sí, pero solo si el formulario tiene más de dos campos',
        'No, Netlify Forms se encarga de recibir y almacenar los envíos',
        'No, pero hay que instalar una base de datos en el navegador'
      ],
      correcta: 2,
      explicacion: 'Netlify Forms ofrece un servicio gestionado para recibir formularios estáticos. No necesitas desarrollar ni mantener un servidor propio para esta práctica.'
    },
    {
      pregunta: '¿Qué sucede cuando hacemos un nuevo git push?',
      opciones: [
        'Borra el historial de cambios del repositorio local',
        'Descarga los cambios del repositorio remoto',
        'Crea una copia de seguridad automática en el escritorio',
        'Sube los commits al repositorio remoto y, si hay despliegue conectado, lanza una nueva publicación'
      ],
      correcta: 3,
      explicacion: 'git push envía los commits locales al repositorio remoto, por ejemplo GitHub. Si Netlify o GitHub Pages están conectados a esa rama, el push puede disparar un nuevo build y despliegue.'
    },
    {
      pregunta: '¿Dónde podemos consultar los mensajes recibidos?',
      opciones: [
        'En la pestaña Code del repositorio de GitHub',
        'En el panel de Netlify, en la sección Forms del sitio',
        'En la consola del navegador del visitante',
        'En un archivo local del ordenador del profesor'
      ],
      correcta: 1,
      explicacion: 'Los envíos se consultan en Netlify, en la sección Forms del sitio, donde puedes ver las respuestas verificadas y las marcadas como spam. También se pueden configurar notificaciones por correo.'
    },
    {
      pregunta: '¿Qué diferencia hay entre tener una web subida a GitHub y tenerla publicada en Internet?',
      opciones: [
        'No hay diferencia: si está en GitHub ya está publicada',
        'El repositorio es la versión pública y la web es solo una copia local',
        'El repositorio guarda el código; publicarla la sirve en una URL accesible desde Internet',
        'Publicar solo cambia el color de la web'
      ],
      correcta: 2,
      explicacion: 'Tener el código en GitHub no significa que la web esté publicada. Para que sea accesible hace falta activar GitHub Pages, conectar Netlify u otro servicio que la sirva en una URL.'
    },
    {
      pregunta: '¿Qué es un repositorio local y qué es un repositorio remoto?',
      opciones: [
        'El local está en tu ordenador; el remoto está en un servidor como GitHub',
        'El local está en GitHub; el remoto en tu ordenador',
        'Ambos están siempre en el mismo ordenador',
        'El remoto solo existe si trabajas en equipo'
      ],
      correcta: 0,
      explicacion: 'El repositorio local es la copia de trabajo en tu equipo. El remoto es la copia alojada en un servicio como GitHub, GitLab o Bitbucket, que permite compartir y respaldar el proyecto.'
    },
    {
      pregunta: '¿Qué hace el comando git clone?',
      opciones: [
        'Crea un repositorio vacío en GitHub',
        'Descarga una copia completa de un repositorio remoto a tu ordenador',
        'Sube los cambios locales al remoto',
        'Elimina una rama del repositorio'
      ],
      correcta: 1,
      explicacion: 'git clone copia un repositorio remoto en local, con su historial y sus ramas. Es lo habitual para empezar a trabajar en un proyecto que ya existe.'
    },
    {
      pregunta: '¿Qué es un commit?',
      opciones: [
        'Una copia de seguridad automática de todo el disco',
        'Un archivo de configuración del servidor',
        'Una rama secundaria de Git',
        'Una instantánea de los cambios con un mensaje que describe qué se ha hecho'
      ],
      correcta: 3,
      explicacion: 'Un commit registra un conjunto de cambios en el historial del repositorio junto con un mensaje. Los commits permiten volver atrás, entender la evolución y colaborar.'
    },
    {
      pregunta: '¿Qué diferencia hay entre git push y git pull?',
      opciones: [
        'push sube cambios al remoto; pull los trae del remoto al local',
        'push descarga cambios; pull los sube',
        'Ambos hacen exactamente lo mismo',
        'pull solo funciona con GitHub Pages'
      ],
      correcta: 0,
      explicacion: 'git push envía tus commits al repositorio remoto; git pull descarga los cambios del remoto y los integra en tu copia local. Son operaciones complementarias.'
    },
    {
      pregunta: '¿Qué es una rama (branch) y cuál es la rama principal habitual?',
      opciones: [
        'Un archivo que guarda las contraseñas',
        'Una carpeta del servidor web',
        'Una línea de trabajo independiente; la rama principal habitual es main',
        'Un tipo de commit especial'
      ],
      correcta: 2,
      explicacion: 'Una rama permite desarrollar cambios sin afectar a la línea principal. main (antes master) es el nombre habitual de la rama principal en los repositorios actuales.'
    },
    {
      pregunta: '¿Cómo se configura GitHub Pages para publicar desde una rama?',
      opciones: [
        'En la pestaña Code, pulsando el botón Clone',
        'En Settings → Pages, eligiendo Deploy from a branch y la rama y carpeta de publicación',
        'En la configuración del navegador',
        'En un archivo robots.txt'
      ],
      correcta: 1,
      explicacion: 'GitHub Pages se activa en Settings → Pages. Puedes publicar desde una rama y una carpeta (/ (root) o /docs), o mediante un flujo de GitHub Actions. El archivo de entrada debe ser index.html.'
    },
    {
      pregunta: '¿Qué es un sitio web estático y por qué encaja en GitHub Pages o Netlify?',
      opciones: [
        'Un sitio con HTML, CSS y JavaScript que no necesita ejecutar código en el servidor',
        'Un sitio que solo funciona en localhost',
        'Un sitio que obliga a usar una base de datos en el servidor',
        'Un sitio que no puede usar imágenes'
      ],
      correcta: 0,
      explicacion: 'Un sitio estático entrega archivos ya preparados y no requiere un backend para generar cada página. Por eso encaja en GitHub Pages y Netlify, que sirven archivos estáticos.'
    },
    {
      pregunta: '¿Qué diferencia hay entre GitHub Pages y Netlify?',
      opciones: [
        'Pages es de pago y Netlify es gratuito',
        'Netlify solo sirve para repositorios privados',
        'No hay ninguna diferencia entre ambos',
        'Pages publica desde GitHub; Netlify conecta repositorios y añade build, CDN, formularios y despliegues automáticos'
      ],
      correcta: 3,
      explicacion: 'GitHub Pages está integrado en GitHub y es ideal para sitios estáticos sencillos. Netlify ofrece además configuración de build, despliegues continuos, deploy previews, formularios y funciones.'
    },
    {
      pregunta: '¿Qué es el despliegue continuo (CD) en Netlify?',
      opciones: [
        'Hay que subir los archivos a mano por FTP cada vez',
        'Solo se despliega una vez al mes',
        'Cada push a la rama conectada lanza un build y publica automáticamente la nueva versión',
        'El despliegue continuo impide usar Git'
      ],
      correcta: 2,
      explicacion: 'El despliegue continuo (CD) de Netlify conecta el repositorio con la plataforma: al hacer push, Netlify construye el sitio y publica la nueva versión sin intervención manual.'
    },
    {
      pregunta: '¿Qué es un dominio personalizado y qué aporta HTTPS?',
      opciones: [
        'Un dominio personalizado elimina la necesidad de HTTPS',
        'Un dominio propio sustituye la URL de la plataforma; HTTPS cifra la conexión y aporta confianza',
        'HTTPS solo sirve para el correo electrónico',
        'El dominio personalizado impide publicar en Netlify'
      ],
      correcta: 1,
      explicacion: 'Puedes configurar un dominio propio, por ejemplo tudominio.com, en GitHub Pages o Netlify. HTTPS cifra la comunicación entre el navegador y el servidor y es un requisito básico de seguridad y confianza.'
    }
  ]
};
