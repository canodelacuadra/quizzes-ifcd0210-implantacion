window.QUIZ = {
  mensajes: {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Has acertado todas las preguntas. Dominas FTP, SFTP y FileZilla: conexiones, transferencias, permisos y publicación de archivos en el servidor."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claro cómo funciona FTP y cómo usar FileZilla. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones, abre FileZilla y vuelve a intentarlo."
    }
  },
  preguntas: [
    {
      pregunta: '¿Qué es FTP?',
      opciones: [
        'Un protocolo para transferir archivos entre un cliente y un servidor',
        'Un lenguaje de programación para crear páginas web',
        'Un tipo de base de datos relacional',
        'Un servidor web como Apache'
      ],
      correcta: 0,
      explicacion: 'FTP (File Transfer Protocol) es un protocolo de la capa de aplicación que permite subir y descargar archivos entre un equipo local y un servidor remoto. No sirve para ejecutar código ni para gestionar bases de datos.'
    },
    {
      pregunta: '¿Qué puerto utiliza FTP para el canal de control?',
      opciones: [
        '80',
        '21',
        '22',
        '443'
      ],
      correcta: 1,
      explicacion: 'FTP usa el puerto 21 para el canal de control (órdenes y respuestas) y el puerto 20 para el canal de datos en modo activo. El 80 es HTTP, el 22 SSH/SFTP y el 443 HTTPS.'
    },
    {
      pregunta: 'En modo activo, ¿desde qué puerto inicia el servidor la conexión de datos?',
      opciones: [
        '21',
        '20',
        '22',
        '8080'
      ],
      correcta: 1,
      explicacion: 'En modo activo el servidor abre la conexión de datos desde su puerto 20 hacia un puerto indicado por el cliente. Este modo suele fallar si el cliente está detrás de un cortafuegos o NAT, por eso se usa el modo pasivo.'
    },
    {
      pregunta: '¿Por qué el modo pasivo es habitual en redes con cortafuegos o NAT?',
      opciones: [
        'Porque cifra los datos automáticamente',
        'Porque el cliente inicia las dos conexiones y el servidor no tiene que conectar hacia el cliente',
        'Porque usa el puerto 22 en lugar del 21',
        'Porque no necesita usuario ni contraseña'
      ],
      correcta: 1,
      explicacion: 'En modo pasivo también es el cliente quien abre la conexión de datos hacia el servidor, de modo que el cortafuegos del cliente no bloquea una conexión entrante. FTP no cifra por sí mismo; para cifrar hay que usar FTPS o SFTP.'
    },
    {
      pregunta: '¿Qué diferencia principal hay entre FTP y SFTP?',
      opciones: [
        'SFTP es más rápido porque no usa contraseña',
        'FTP siempre usa cifrado y SFTP no',
        'SFTP transmite los archivos cifrados a través de SSH',
        'Son exactamente lo mismo con distinto nombre'
      ],
      correcta: 2,
      explicacion: 'SFTP (SSH File Transfer Protocol) viaja sobre una conexión SSH, por lo que todo el tráfico va cifrado y suele usar el puerto 22. El FTP clásico envía usuario, contraseña y datos sin cifrar, lo que es inseguro en Internet.'
    },
    {
      pregunta: '¿Qué puerto utiliza normalmente SFTP?',
      opciones: [
        '21',
        '20',
        '22',
        '990'
      ],
      correcta: 2,
      explicacion: 'SFTP se ejecuta sobre SSH y usa por defecto el puerto 22. El 21 y el 20 son de FTP, y el 990 se asocia a FTPS implícito.'
    },
    {
      pregunta: '¿Qué es FileZilla?',
      opciones: [
        'Un servidor web con Apache y MySQL',
        'Un cliente FTP/SFTP para transferir archivos entre el equipo local y un servidor',
        'Un editor de código HTML',
        'Un sistema gestor de bases de datos'
      ],
      correcta: 1,
      explicacion: 'FileZilla Client es una aplicación gratuita que permite conectarse por FTP, FTPS o SFTP a un servidor y subir o descargar archivos mediante una interfaz de dos paneles.'
    },
    {
      pregunta: 'En la Conexión rápida de FileZilla, ¿qué dato indica el nombre o la IP del servidor?',
      opciones: [
        'Usuario',
        'Servidor (Host)',
        'Contraseña',
        'Puerto'
      ],
      correcta: 1,
      explicacion: 'El campo Servidor (Host) es donde se escribe el dominio o la dirección IP del servidor, por ejemplo ftp.midominio.com. Usuario y contraseña son las credenciales, y el puerto se indica aparte (21 por defecto en FTP).'
    },
    {
      pregunta: '¿Para qué sirve el Gestor de sitios de FileZilla?',
      opciones: [
        'Para editar el código de las páginas web',
        'Para crear bases de datos MySQL',
        'Para guardar y reutilizar conexiones con sus datos y protocolo',
        'Para cambiar la resolución del monitor'
      ],
      correcta: 2,
      explicacion: 'El Gestor de sitios permite crear entradas con el servidor, usuario, contraseña, puerto y protocolo (FTP, FTPS o SFTP), de modo que no haya que escribir los datos en cada conexión.'
    },
    {
      pregunta: 'En la ventana de FileZilla, ¿qué muestra el panel derecho?',
      opciones: [
        'Los archivos del equipo local',
        'El historial del navegador',
        'Los archivos del servidor remoto',
        'La base de datos del hosting'
      ],
      correcta: 2,
      explicacion: 'FileZilla muestra el equipo local a la izquierda y el servidor remoto a la derecha. Se arrastran archivos de un panel a otro para subirlos o descargarlos.'
    },
    {
      pregunta: 'Si arrastras un archivo del panel izquierdo al derecho, ¿qué estás haciendo?',
      opciones: [
        'Descargarlo al equipo local',
        'Borrarlo del servidor',
        'Subirlo al servidor',
        'Cambiarle los permisos'
      ],
      correcta: 2,
      explicacion: 'Mover un archivo de local (izquierda) a remoto (derecha) es subirlo. Al contrario, de remoto a local, es descargarlo.'
    },
    {
      pregunta: '¿Qué modo de transferencia conviene para subir imágenes, vídeos o archivos comprimidos?',
      opciones: [
        'ASCII',
        'Texto',
        'Automático solo para HTML',
        'Binario'
      ],
      correcta: 3,
      explicacion: 'Los archivos binarios (imágenes, vídeos, ZIP, PDF, etc.) deben transferirse en modo binario para no corromperse. El modo ASCII o texto solo es adecuado para texto plano y puede modificar los saltos de línea.'
    },
    {
      pregunta: 'En FileZilla, ¿qué significan los permisos 755 en una carpeta?',
      opciones: [
        'Lectura y escritura para todos',
        'Ningún permiso para nadie',
        'Solo lectura para el propietario',
        'Lectura y ejecución para todos, y escritura solo para el propietario'
      ],
      correcta: 3,
      explicacion: 'En los permisos numéricos, 7 = lectura + escritura + ejecución y 5 = lectura + ejecución. El 755 da al propietario todos los permisos y al grupo y al resto solo lectura y ejecución, algo habitual en carpetas de un sitio web.'
    },
    {
      pregunta: 'Al publicar una web en un hosting compartido, ¿dónde se suelen subir los archivos públicos?',
      opciones: [
        'A la carpeta Descargas del equipo local',
        'A la carpeta public_html o htdocs del servidor',
        'A la carpeta C:/Windows del servidor',
        'A la papelera de reciclaje'
      ],
      correcta: 1,
      explicacion: 'En muchos hostings la raíz pública del sitio es public_html (o htdocs, www, etc.). Los archivos que se suben a esa carpeta son los que se sirven cuando alguien visita el dominio.'
    },
    {
      pregunta: '¿Cuál es una buena práctica de seguridad al usar FTP y FileZilla?',
      opciones: [
        'Usar siempre FTP sin cifrar porque es más rápido',
        'Compartir la contraseña por correo con todo el equipo',
        'Desactivar el cortafuegos para que conecte antes',
        'Usar SFTP o FTPS y contraseñas fuertes, y no guardar credenciales en equipos compartidos'
      ],
      correcta: 3,
      explicacion: 'Siempre que sea posible conviene usar SFTP o FTPS para cifrar la conexión, elegir contraseñas robustas y no dejar guardadas las credenciales en ordenadores compartidos. El FTP sin cifrar expone usuario, contraseña y datos.'
    }
  ]
};
