window.QUIZ = {
  mensajes: {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Dominas el flujo de trabajo con Git: staging, commits, ramas, remotos, conflictos y buenas prácticas."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claro el día a día con Git. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Repasa los comandos, practica en un repositorio de prueba y vuelve a intentarlo."
    }
  },
  preguntas: [
    {
      pregunta: '¿Qué es el staging area o área de preparación?',
      opciones: [
        'Una zona intermedia donde seleccionas los cambios que formarán el próximo commit',
        'Una carpeta del servidor donde se publican los archivos',
        'El historial completo de commits del repositorio',
        'Un archivo de configuración de GitHub'
      ],
      correcta: 0,
      explicacion: 'El staging area es la zona intermedia entre el directorio de trabajo y el repositorio. Con git add seleccionas qué cambios quieres incluir en el próximo commit.'
    },
    {
      pregunta: '¿Qué comando muestra el estado de los archivos y los cambios pendientes?',
      opciones: [
        'git log',
        'git status',
        'git push',
        'git clone'
      ],
      correcta: 1,
      explicacion: 'git status indica en qué rama estás, qué archivos han cambiado, cuáles están preparados para el commit y cuáles no están siendo rastreados por Git.'
    },
    {
      pregunta: '¿Qué hace git add?',
      opciones: [
        'Guarda los cambios en el repositorio remoto',
        'Crea una rama nueva',
        'Añade cambios al área de preparación para el próximo commit',
        'Deshace el último commit'
      ],
      correcta: 2,
      explicacion: 'git add prepara los cambios para el siguiente commit. No los sube a GitHub ni los guarda en el historial todavía; eso ocurre con git commit y git push.'
    },
    {
      pregunta: '¿Qué diferencia hay entre git init y git clone?',
      opciones: [
        'git init descarga un repositorio remoto y git clone lo crea vacío',
        'git init crea un repositorio local vacío y git clone copia uno remoto',
        'Ambos crean una rama nueva en GitHub',
        'git clone solo funciona con repositorios privados'
      ],
      correcta: 1,
      explicacion: 'git init inicializa un repositorio nuevo en una carpeta local. git clone descarga una copia completa de un repositorio remoto, con su historial y sus ramas.'
    },
    {
      pregunta: '¿Qué comando crea un commit con los cambios preparados?',
      opciones: [
        'git commit -m "mensaje"',
        'git push -m "mensaje"',
        'git add -m "mensaje"',
        'git status -m "mensaje"'
      ],
      correcta: 0,
      explicacion: 'git commit -m registra en el historial los cambios que están en el staging area y les asocia un mensaje descriptivo.'
    },
    {
      pregunta: '¿Para qué sirve .gitignore?',
      opciones: [
        'Para borrar archivos del disco automáticamente',
        'Para ocultar el repositorio en GitHub',
        'Para indicar archivos y carpetas que Git no debe rastrear',
        'Para comprimir el historial de commits'
      ],
      correcta: 2,
      explicacion: 'El archivo .gitignore contiene patrones de archivos y carpetas que Git debe ignorar, como node_modules, archivos .env, logs o archivos generados automáticamente.'
    },
    {
      pregunta: '¿Qué comando crea y cambia a una rama nueva?',
      opciones: [
        'git branch nueva-rama',
        'git switch -c nueva-rama',
        'git checkout nueva-rama',
        'git merge nueva-rama'
      ],
      correcta: 1,
      explicacion: 'git switch -c nueva-rama crea la rama y cambia a ella. También se puede usar git checkout -b nueva-rama. git branch solo la crea y git merge fusiona ramas.'
    },
    {
      pregunta: '¿Qué hace git merge?',
      opciones: [
        'Fusiona los cambios de una rama en la rama actual',
        'Elimina una rama remota',
        'Sube la rama actual a GitHub',
        'Crea un commit vacío'
      ],
      correcta: 0,
      explicacion: 'git merge integra el historial de otra rama en la rama en la que estás situado. Si las ramas han tocado las mismas líneas, puede aparecer un conflicto.'
    },
    {
      pregunta: '¿Qué indica un conflicto de merge?',
      opciones: [
        'Que Git ha perdido el historial',
        'Que dos ramas han modificado las mismas líneas y hay que resolverlo manualmente',
        'Que el repositorio remoto está lleno',
        'Que la rama no tiene permisos'
      ],
      correcta: 1,
      explicacion: 'Un conflicto aparece cuando Git no puede decidir automáticamente qué cambio conservar. Hay que editar los archivos afectados, elegir el resultado correcto y confirmar la resolución con un commit.'
    },
    {
      pregunta: '¿Qué comando descarga los cambios del remoto sin integrarlos en tu rama?',
      opciones: [
        'git pull',
        'git fetch',
        'git push',
        'git commit'
      ],
      correcta: 1,
      explicacion: 'git fetch actualiza la información del repositorio remoto pero no modifica tu rama de trabajo. Después puedes revisar los cambios e integrarlos cuando quieras.'
    },
    {
      pregunta: '¿Qué diferencia hay entre git fetch y git pull?',
      opciones: [
        'fetch descarga y no integra; pull descarga e integra en la rama actual',
        'fetch integra y pull solo descarga',
        'Ambos son idénticos',
        'pull solo funciona con GitHub Pages'
      ],
      correcta: 0,
      explicacion: 'git fetch descarga las novedades del remoto sin integrarlas. git pull hace fetch y además integra los cambios en tu rama actual, normalmente con merge o rebase.'
    },
    {
      pregunta: '¿Qué hace git push?',
      opciones: [
        'Descarga los commits del remoto',
        'Borra la rama local',
        'Sube los commits locales al repositorio remoto',
        'Crea un archivo .gitignore'
      ],
      correcta: 2,
      explicacion: 'git push envía los commits de tu rama local al repositorio remoto. La primera vez suele necesitar configurar la rama upstream con -u.'
    },
    {
      pregunta: '¿Qué es origin en Git?',
      opciones: [
        'La rama principal del proyecto',
        'El nombre por defecto del repositorio remoto principal',
        'El primer commit del historial',
        'El usuario que creó el repositorio'
      ],
      correcta: 1,
      explicacion: 'origin es el nombre convencional que recibe el repositorio remoto principal al clonarlo. No es una rama ni un commit, sino un alias del remoto.'
    },
    {
      pregunta: '¿Qué comando muestra el historial de commits?',
      opciones: [
        'git status',
        'git diff',
        'git remote',
        'git log'
      ],
      correcta: 3,
      explicacion: 'git log muestra el historial de commits con sus autores, fechas y mensajes. Admite opciones para verlo resumido, en una línea o como grafo de ramas.'
    },
    {
      pregunta: '¿Qué hace git diff?',
      opciones: [
        'Muestra las diferencias entre archivos o commits',
        'Elimina los cambios no guardados',
        'Descarga el repositorio remoto',
        'Cambia el nombre de la rama'
      ],
      correcta: 0,
      explicacion: 'git diff muestra las diferencias entre el directorio de trabajo, el staging area o distintos commits. Es útil para revisar exactamente qué va a cambiar antes de confirmarlo.'
    },
    {
      pregunta: '¿Qué comando deshace un commit ya publicado de forma segura creando otro commit inverso?',
      opciones: [
        'git reset --hard',
        'git revert',
        'git stash',
        'git clean'
      ],
      correcta: 1,
      explicacion: 'git revert crea un nuevo commit que deshace los cambios de otro commit sin reescribir el historial. Es la opción recomendada cuando el commit ya se ha compartido.'
    },
    {
      pregunta: '¿Qué hace git stash?',
      opciones: [
        'Sube los cambios al remoto',
        'Fusiona dos ramas',
        'Borra el repositorio local',
        'Guarda temporalmente cambios no confirmados para limpiar el área de trabajo'
      ],
      correcta: 3,
      explicacion: 'git stash guarda temporalmente los cambios no confirmados y deja el directorio de trabajo limpio. Después puedes recuperarlos con git stash pop o git stash apply.'
    },
    {
      pregunta: '¿Qué es una pull request?',
      opciones: [
        'Una petición para revisar e integrar los cambios de una rama en otra',
        'Un comando de Git para descargar cambios',
        'Un archivo de configuración de Git',
        'Una copia de seguridad automática de GitHub'
      ],
      correcta: 0,
      explicacion: 'Una pull request es una propuesta de cambio en GitHub o GitLab. Permite revisar el diff, comentar, ejecutar comprobaciones automáticas y decidir si se integra en la rama principal.'
    },
    {
      pregunta: '¿Cuál es una buena práctica al hacer commits?',
      opciones: [
        'Agrupar muchos cambios no relacionados en un commit enorme',
        'Usar mensajes como "cambios" o "cosas"',
        'Subir contraseñas para no olvidarlas',
        'Hacer commits pequeños y con mensajes descriptivos'
      ],
      correcta: 3,
      explicacion: 'Los commits pequeños y con mensajes claros facilitan la revisión, la búsqueda de errores y la posibilidad de deshacer cambios concretos sin afectar a todo el proyecto.'
    },
    {
      pregunta: '¿Qué comando etiqueta un commit para marcar una versión?',
      opciones: [
        'git branch v1.0.0',
        'git remote v1.0.0',
        'git tag v1.0.0',
        'git status v1.0.0'
      ],
      correcta: 2,
      explicacion: 'git tag v1.0.0 crea una etiqueta sobre el commit actual para marcar una versión. Las etiquetas se pueden publicar al remoto con git push --tags.'
    }
  ]
};
