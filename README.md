# Quizzes IFCD0210 · Implantación de aplicaciones web

Colección de quizzes interactivos de autoevaluación para el módulo de **implantación de aplicaciones web (IFCD0210)**. Todos los tests funcionan en el navegador, sin instalación ni registro, con feedback inmediato y una nota final sobre 10.

## Contenido

| Sección | Quizzes | Preguntas |
| --- | ---: | ---: |
| Fundamentos web | 3 | 52 |
| WordPress | 7 | 120 |
| WooCommerce | 4 | 78 |
| Despliegue | 1 | 15 |
| **Total** | **15** | **265** |

### Fundamentos web
- Conceptos fundamentales de la Web
- IPs y URLs
- Configuración de Apache en XAMPP

### WordPress
- WordPress sobre XAMPP
- WordPress Básico
- Tema GeneratePress
- Plugins y Contact Form 7
- Archivos básicos de WordPress
- Repaso de WordPress básico
- Instalación de WordPress con Local

### WooCommerce
- Introducción a WooCommerce
- Pedidos y logística en WooCommerce
- Pagos e impuestos en WooCommerce
- Marketing básico en WooCommerce

### Despliegue
- FTP y FileZilla
- Próximamente: Publicar en Netlify
- Próximamente: Publicar en GitHub Pages

## Estructura del proyecto

```
.
├── index.html            # Página principal (hub de secciones)
├── fundamentos/          # Quizzes de fundamentos web
│   ├── index.html
│   ├── assets/           # CSS y motor compartido
│   └── datos/            # Bancos de preguntas
├── wordpress/            # Quizzes de WordPress
├── woocommerce/          # Quizzes de WooCommerce
└── despliegue/           # Quizzes de despliegue
    ├── assets/
    └── datos/
```

Los quizzes de **Fundamentos** y **Despliegue** usan un motor compartido (`assets/quiz.css` y `assets/quiz.js`) y cargan las preguntas desde archivos de `datos/`. Los quizzes de **WordPress** y **WooCommerce** son páginas HTML autocontenidas.

## Cómo usarlo

Abre `index.html` en el navegador. También puedes servirlo en local:

```bash
python -m http.server 8000
```

Y visitar <http://localhost:8000>.

## Publicación

El sitio está pensado para publicarse con **GitHub Pages** desde la raíz del repositorio.

## Añadir un quiz nuevo

1. Copia la plantilla de un quiz existente de la misma sección.
2. Crea el banco de preguntas en `datos/` (secciones con motor compartido) o edita el array `PREGUNTAS` (páginas autocontenidas).
3. Añade la entrada correspondiente en el `index.html` de la sección.

## Créditos

Recurso didáctico para el aula. Contenido elaborado para el módulo IFCD0210 de implantación de aplicaciones web.
