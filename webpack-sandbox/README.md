webpack-sandbox
---

Ejemplo más básico posible de cómo instalar webpack, y de cómo funciona.

Webpack es un 'JavaScript bundler', envuelve código JS con código adicional de tal forma a hacerlo ejecutable en un navegador.
Toma un archivo JS de entrada y produce el mismo archivo como salida, pero envuelto en código adicional.

## Instalación y ejecución

Con permisos de administrador:
`npm install -g webpack`

Ejecutamos:
`webpack ./entry.js bundle.js`

En lugar del comando anterior se puede crear el archivo `webpack.config.js`:
```
module.exports = {
   entry: './entry.js',
   output: {
      filename: 'bundle.js',
	  pathname: __dirname
   }
};
```

Luego ejecutamos:
`webpack`

Para que se quede esperando cambios:
`webpack --watch`

## Como funciona

### Require de modulos
- Asigna un número a cada módulo que se hace require, y en el bundle.js mete su propia implementación
de require, una que funciona en el browser.

### Loaders
- Sirven para hacer require de módulos que no son JavaScript.

- Aplica transformaciones y/o procesamientos a nuestro archivo de entrada antes de producir el bundle. 
Esto ya depende de la funcionalidad que debe llevar a cabo cada loader.
Seria el equivalente a los tasks de otras herramientas como gulp.

Ejemplo:
El CSS loader toma un archivo CSS y retorna un objeto que tiene el código css con los `import(...)` y `url(...)` resueltos.

```
var css = require("css!./file.css");
// => retorna código de file.css, resolves imports and url(...) 
```
Para leer más:
http://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader

## Server de desarrollo

`npm install webpack-dev-server --save-dev`
`webpack-dev-server`

- Es un servidor de webpack que usa por debajo express.

- Se levanta por defecto en localhost:8080.

- Tiene la habilidad de actualizar automáticamente los cambios en el navegador, sin tener que recargarlo.
  Para ello hay que usar la url: http://localhost:8080/webpack-dev-server/bundle

- ¿De donde exactamente sirve los archivos?

### Notas sobre webpack-dev-server

- Agregar la opción al comando: `--host 10.0.1.4` te permite exponer tu servidor desde tu IP de la LAN.
  