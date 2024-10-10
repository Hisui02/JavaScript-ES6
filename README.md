# JavaScript-ES6

## Finalidad de este repositorio

Este repositorio se ha credo buscando sumarizar los ejercicios de Javascript ES6 realizados durante las clases de Desarrollo Web en Entorno Cliente.

## Qué se va a encontrar

Tendremos una página de índice, que nos listará todos los ejercicios realizados y nos permitirá visualizarlos.

## Tecnologías utilizadas

- HTML
- CSS (less)
- JavaScript

## Estilos utilizados\*

### Paleta de colores

```less
@primary: #9ae19d;
@secondary: #909590;
@dark: #474a48;
@darker: #2c302e;
```

Se ha traído una paleta de colores de [Coolors](https://coolors.co/), se usará durante toda la aplicación.

\* Estos estilos se encuentran sujetos a cambios y pueden ser modificados en cualquier momento

## Estructura de directorios

```
 Plantilla03a
├── css
│  ├── styles.css #CSS compilado desde el LESS
│  └── styles.less #Estilos de la aplicación
├── ejercicios
│
├── img
│  ├── favicon.ico
│  └── private
│     └── yo.png
├── index.html
├── js
│  ├── eraseCookies.js #Función de eliminación de una cookie
│  ├── getCookies.js #Función de obtención de una cookie
│  ├── login.js #Lógica general de login
│  └── setCookies.js #Función para crear una nueva cookie
└── README.md
```

## Gestión de login con Cookies

Se almacena una variable booleana en cookies en caso de que el usuario esté logueado, y se comprueba cada vez que se carga el index de la aplicación evitando que sea necesario volver a iniciar sesión.

La sesión durará máximo 1 hora, aunque será posible cerrarla antes mediante el botón de Cerrar Sesión que elimina la sesión y refresca la página para que se vuelva a mostrar el login.
