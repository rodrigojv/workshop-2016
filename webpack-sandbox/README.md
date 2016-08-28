webpack-sandbox
---

Ejemplo m�s b�sico posible de c�mo instalar webpack, y de c�mo funciona.

Webpack es un 'JavaScript bundler', envuelve c�digo JS con c�digo adicional de tal forma a hacerlo ejecutable en un navegador.
Toma un archivo JS de entrada y produce el mismo archivo como salida, pero envuelto en c�digo adicional.

## Instalaci�n y ejecuci�n

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
- Asigna un n�mero a cada m�dulo que se hace require, y en el bundle.js mete su propia implementaci�n
de require, una que funciona en el browser.

### Loaders
- Sirven para hacer require de m�dulos que no son JavaScript.

- Aplica transformaciones y/o procesamientos a nuestro archivo de entrada antes de producir el bundle. 
Esto ya depende de la funcionalidad que debe llevar a cabo cada loader.
Seria el equivalente a los tasks de otras herramientas como gulp.

Ejemplo:
El CSS loader toma un archivo CSS y retorna un objeto que tiene el c�digo css con los `import(...)` y `url(...)` resueltos.

```
var css = require("css!./file.css");
// => retorna c�digo de file.css, resolves imports and url(...) 
```
Para leer m�s:
http://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader

## Server de desarrollo

`npm install webpack-dev-server --save-dev`
`webpack-dev-server`

- Es un servidor de webpack que usa por debajo express.

- Se levanta por defecto en localhost:8080.

- Tiene la habilidad de actualizar autom�ticamente los cambios en el navegador, sin tener que recargarlo.
  Para ello hay que usar la url: http://localhost:8080/webpack-dev-server/bundle

- �De donde exactamente sirve los archivos?

### Notas sobre webpack-dev-server

- Agregar la opci�n al comando: `--host 10.0.1.4` te permite exponer tu servidor desde tu IP de la LAN.
  