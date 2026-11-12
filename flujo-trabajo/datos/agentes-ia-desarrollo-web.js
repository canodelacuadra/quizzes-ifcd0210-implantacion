window.QUIZ = {
  mensajes: {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Sabes usar un agente de IA con criterio: contexto, permisos, revisión, verificación y responsabilidad sobre el código."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes claras las bases del trabajo con agentes de IA. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Repasa cómo dar contexto, revisar cambios y verificar el resultado antes de aceptar nada."
    }
  },
  preguntas: [
    {
      pregunta: '¿Qué es un agente de IA para desarrollo web?',
      opciones: [
        'Un sistema que solo autocompleta líneas de código',
        'Un navegador web con búsqueda integrada',
        'Una herramienta que puede leer el proyecto, proponer cambios y ejecutar acciones con supervisión',
        'Un servidor que aloja la aplicación en producción'
      ],
      correcta: 2,
      explicacion: 'Un agente de IA puede usar herramientas para explorar archivos, buscar en el proyecto, editar código y ejecutar comandos. Siempre debe trabajar con supervisión y permisos adecuados.'
    },
    {
      pregunta: '¿Qué diferencia principal hay entre un chat de IA y un agente?',
      opciones: [
        'El agente puede usar herramientas y actuar sobre el proyecto, no solo responder texto',
        'El chat siempre es más rápido',
        'El agente no necesita contexto',
        'El chat solo funciona sin conexión'
      ],
      correcta: 0,
      explicacion: 'Un chat se limita a conversar y devolver texto. Un agente puede leer archivos, ejecutar comandos, modificar el proyecto y comprobar el resultado usando herramientas.'
    },
    {
      pregunta: '¿Por qué es importante dar contexto al agente?',
      opciones: [
        'Para que responda más rápido aunque invente datos',
        'Para que no necesite revisar los archivos',
        'Para que pueda publicar sin permisos',
        'Para que entienda la estructura, las convenciones y el objetivo del proyecto'
      ],
      correcta: 3,
      explicacion: 'Cuanto mejor entienda el agente la estructura, las tecnologías, las convenciones y el objetivo, más útil será su propuesta. El contexto reduce respuestas genéricas y cambios fuera de lugar.'
    },
    {
      pregunta: '¿Qué es el modo plan en un agente como opencode?',
      opciones: [
        'Un modo que publica la web automáticamente',
        'Un modo para analizar y proponer un plan antes de modificar archivos',
        'Un modo que desactiva la revisión humana',
        'Un modo para borrar el historial de Git'
      ],
      correcta: 1,
      explicacion: 'El modo plan permite investigar el proyecto y acordar una estrategia sin editar archivos. Después se pasa a la implementación con un plan revisado.'
    },
    {
      pregunta: '¿Qué debe hacer el agente antes de ejecutar comandos peligrosos?',
      opciones: [
        'Ejecutarlos siempre sin avisar',
        'Pedir permiso o aplicar las reglas de permisos configuradas',
        'Ocultarlos en el historial',
        'Desactivar Git'
      ],
      correcta: 1,
      explicacion: 'Los agentes deben respetar las reglas de permisos y pedir confirmación antes de acciones destructivas o sensibles, como borrar archivos, reescribir historial o ejecutar comandos con privilegios.'
    },
    {
      pregunta: '¿Qué información no deberías pegar en el chat de un agente?',
      opciones: [
        'Claves privadas, tokens y contraseñas',
        'El nombre de una función',
        'Un mensaje de error',
        'La ruta de un archivo del proyecto'
      ],
      correcta: 0,
      explicacion: 'Las claves, tokens y contraseñas no deben compartirse con servicios externos. Usa variables de entorno, archivos .env ignorados por Git y revisa qué información envías al agente.'
    },
    {
      pregunta: '¿Por qué conviene revisar el diff antes de aceptar cambios?',
      opciones: [
        'Para que el agente aprenda más rápido',
        'Porque el diff publica la web',
        'Para comprobar que el agente no ha modificado archivos o líneas no deseadas',
        'Porque sin diff Git no funciona'
      ],
      correcta: 2,
      explicacion: 'El diff muestra exactamente qué líneas cambian. Revisarlo permite detectar borrados accidentales, cambios de estilo innecesarios, código inseguro o archivos que no debían tocarse.'
    },
    {
      pregunta: '¿Qué significa verificar los cambios del agente?',
      opciones: [
        'Confiar en el agente sin mirar',
        'Subir directamente a producción',
        'Ejecutar tests, lint o typecheck y comprobar el resultado',
        'Borrar los archivos modificados'
      ],
      correcta: 2,
      explicacion: 'Verificar es comprobar que el cambio funciona y no rompe nada: ejecutar tests, lint, typecheck, abrir la página y revisar el resultado. La respuesta del agente no es una prueba por sí sola.'
    },
    {
      pregunta: '¿Cuál es una buena práctica al usar un agente en un proyecto con Git?',
      opciones: [
        'Hacer un commit gigante sin revisar',
        'Desactivar el control de versiones',
        'Compartir el token de GitHub en el prompt',
        'Trabajar en una rama y revisar los cambios antes de hacer merge'
      ],
      correcta: 3,
      explicacion: 'Trabajar en una rama aísla los cambios del agente. Así puedes revisar el diff, probar con calma y decidir si se integran en la rama principal.'
    },
    {
      pregunta: '¿Qué es una alucinación de la IA?',
      opciones: [
        'Un error de conexión a Internet',
        'Un comando de Git mal escrito',
        'Una actualización automática del agente',
        'Una respuesta plausible pero incorrecta o inventada'
      ],
      correcta: 3,
      explicacion: 'Una alucinación es una respuesta que suena convincente pero es falsa: una función que no existe, una opción inventada o una explicación incorrecta. Siempre hay que contrastarla.'
    },
    {
      pregunta: '¿Qué hacer si el agente propone una librería o API que no conoces?',
      opciones: [
        'Aceptarla siempre porque la IA no se equivoca',
        'Comprobar la documentación oficial y la versión real antes de usarla',
        'Instalarla sin leer nada',
        'Eliminar el proyecto'
      ],
      correcta: 1,
      explicacion: 'Antes de instalar o usar una dependencia, comprueba que existe, que está mantenida y que la versión y la API son las correctas. La documentación oficial es la fuente de verdad.'
    },
    {
      pregunta: '¿Qué es AGENTS.md en un proyecto?',
      opciones: [
        'Un archivo de configuración de Apache',
        'Un archivo con instrucciones y convenciones para los agentes de IA',
        'Una base de datos de usuarios',
        'Un script que publica en Netlify'
      ],
      correcta: 1,
      explicacion: 'AGENTS.md es un archivo que recoge instrucciones del proyecto para los agentes: comandos de verificación, estilo de código, estructura, normas de seguridad y tareas habituales.'
    },
    {
      pregunta: '¿Qué precaución hay que tener con datos sensibles al usar un agente en la nube?',
      opciones: [
        'Enviar siempre toda la base de datos',
        'Publicar el archivo .env en GitHub',
        'Revisar qué información se envía y evitar datos personales o secretos',
        'Desactivar HTTPS'
      ],
      correcta: 2,
      explicacion: 'Antes de enviar datos a un servicio externo, revisa qué información contiene y si es necesaria. Evita datos personales, secretos y volcados completos de bases de datos.'
    },
    {
      pregunta: '¿Quién es responsable del código que se sube al repositorio?',
      opciones: [
        'La persona o equipo que revisa y acepta los cambios',
        'El agente, porque ha escrito el código',
        'GitHub, por alojar el repositorio',
        'Nadie, si el código lo ha generado una IA'
      ],
      correcta: 0,
      explicacion: 'La responsabilidad final es humana. El agente es una herramienta: quien revisa, aprueba y publica el código debe asegurarse de que es correcto, seguro y cumple los requisitos.'
    },
    {
      pregunta: '¿Qué son las skills o herramientas de un agente?',
      opciones: [
        'Los archivos CSS del proyecto',
        'Las ramas de Git',
        'Los usuarios del repositorio',
        'Capacidades adicionales que le permiten ejecutar tareas especializadas'
      ],
      correcta: 3,
      explicacion: 'Las skills o herramientas amplían lo que el agente puede hacer: buscar en la web, consultar documentación, ejecutar pruebas, revisar código o seguir un flujo de trabajo concreto.'
    },
    {
      pregunta: '¿Qué es MCP en el contexto de agentes de IA?',
      opciones: [
        'Un lenguaje de programación para servidores',
        'Un tipo de commit de Git',
        'Un formato de imagen',
        'Un protocolo para conectar el agente con herramientas y fuentes de datos'
      ],
      correcta: 3,
      explicacion: 'MCP (Model Context Protocol) es un protocolo abierto que permite conectar agentes de IA con herramientas, servicios y fuentes de datos de forma estandarizada.'
    },
    {
      pregunta: '¿Qué límite importante tienen los agentes de IA?',
      opciones: [
        'Nunca cometen errores',
        'Solo funcionan sin conexión',
        'Pueden equivocarse y no sustituyen la revisión humana',
        'No pueden leer archivos'
      ],
      correcta: 2,
      explicacion: 'Los agentes pueden ser muy útiles, pero no son infalibles. Pueden inventar, malinterpretar requisitos o introducir errores. La revisión y las pruebas humanas siguen siendo necesarias.'
    },
    {
      pregunta: '¿Cuándo conviene dividir una tarea grande en pasos pequeños?',
      opciones: [
        'Siempre que sea posible, para revisar y verificar cada cambio',
        'Nunca, porque el agente se aburre',
        'Solo cuando la tarea es de CSS',
        'Solo si no hay Git'
      ],
      correcta: 0,
      explicacion: 'Dividir el trabajo en pasos pequeños facilita revisar cada diff, detectar errores antes y mantener commits comprensibles. Es más seguro que aceptar un cambio enorme de una sola vez.'
    },
    {
      pregunta: '¿Qué deberías hacer si el agente ejecuta un comando que no entiendes?',
      opciones: [
        'Aceptar todo sin leer',
        'Detenerte, leer qué hace y pedir explicación antes de continuar',
        'Cerrar el proyecto y no volver',
        'Publicarlo en producción'
      ],
      correcta: 1,
      explicacion: 'No aceptes comandos que no comprendas. Detente, revisa qué hacen y pide una explicación. Un comando mal entendido puede borrar archivos o reescribir el historial.'
    },
    {
      pregunta: '¿Cuál es un uso adecuado de un agente en desarrollo web?',
      opciones: [
        'Publicar en producción sin pruebas',
        'Sustituir por completo el aprendizaje de los fundamentos',
        'Compartir contraseñas para que las recuerde',
        'Generar un borrador, revisarlo, probarlo y ajustarlo con criterio'
      ],
      correcta: 3,
      explicacion: 'El agente es un acelerador, no un sustituto del criterio. Un buen flujo es proponer, revisar, probar, corregir y documentar, manteniendo siempre el control humano.'
    }
  ]
};
