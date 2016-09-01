Test con Karma, Mocha y Chai
----------------------------

Para este repo usaremos una aplicación TodoMVC con Backbone y correremos un test de prueba sobre una de sus vistas.

Usamos browserify para correr los tests en un navegador.

## Inicio rápido

`$ npm install`

`$ npm run start`

Luego acceder a http://localhost:8080 si se quiere jugar con la aplicación :-).


Para correr los tests ejecutar:

`$ npm test`

## Tecnologías necesarias para test de código JavaScript

Para hacer test de código JavaScript se necesitan tres cosas:

1. Un medio escribir y correr los test
2. Un medio para escribir aserciones
3. Opcionalmente un medio para correr los tests en un browser 

Para 1. y 2. se tiene como alternativa [Jasmine](http://jasmine.github.io/2.0/introduction.html). 

Para 1. tenemos otra alternativa popular que es [Mocha](https://mochajs.org/), que a diferencia de Jasmine no viene con una librería para aserciones y por eso usaremos la también popular librería [Chai](http://chaijs.com/).

Con Mocha y Chai estamos hechos para correr tests unitarios pero para hacer algo más de integración necesitamos una herramienta como Karma, que es un framework que corre nuestros tests Mocha/Chai en un navegador.

Para este repo entonces probamos:

* **Mocha**: un framework para definir tests y ejecutarlos
* **Chai**: librería para escribir aserciones
* **Karma**: framework para simular tu test en un navegador

## Agregar tests a un proyecto

Para mocha y chai solo basta con agregar esas dependencias al proyecto:

`$npm install mocha chai --save-dev`

Para Karma sí se necesita algo más de entendimiento y configuración.

Si usamos en una aplicación, módulos CommonJS para las vistas/modelos/etc. de Backbone, se necesita un medio para poder usar ese tipo de módulos en un browser.

Lo mismo se aplica si queremos testear esos módulos con Karma, ya que esta herramienta espera poder correr nuestros módulos en un browser y estos no hablan 'require' para importar los módulos.

Entonces necesitamos un medio para crear un bundle y pasarle eso a Karma para que corra. Esto se puede hacer con Webpack o con Browserify.

Elegimos para este ejemplo Browserify.

## Instalar Karma

Instalamos karma y otras dependencias específicas.

`$ npm i -S karma karma-mocha karma-chai karma-chrome-launcher`

También necesitamos browserify para procesar los require y generar un bundle que podamos ejecutar en un navegador.

`# npm i -S browserify watchify karma-browserify jstify`

Esta última librería `jstify` vamos a utilizar para transformar nuestros templates a JavaScript.

## Escribir tests

Creamos un _nombreModulo.test.js_ por cada módulo que queremos testear.

Por ejemplo si queremos testear _js/views/todos.js_, creamos _js/views/todos.test.js_, en la misma carpeta de la vista.

La estructura de archivos .test quedaría entonces como sigue:
```
  + -- /js/
  ¦   +-- /views/                
  ¦   +-------- /todos.js            # Módulo JS que hace algo. En este caso tenemos una Vista de Backbone
  ¦   +-------- /todos.test.js       # Test suite que corresponde a la vista 'todo.js'
```

Los tests escribimos en JS con Mocha con la siguiente estructura.

```
describe("Tests para el Login", function(){
    
    beforeEach(function(){
        // escribir código a ejecutar antes de cada test unitario 'it'
    }):
    
    afterEach(function(){
        // escribir código de limpieza luego de cada test unitario
    }):

    // Descripción de la funcionalidad específica que se testea.
    it('Debe mostrar error al dejar vacio el password', function(){
    
    });

});
```
## Configurar Karma

Se configura con un archivo `karma.config.js`.

Las partes más relevantes de este archivo son.

1) Le decimos a mocha cuáles son los Frameworks JS que usaremos para escribir los tests.
_sinon-chai_ se usa para inspeccionar llamadas a funciones. Y browserify para crear el bundle que se cargará al browser para test.

```
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai', 'browserify'],

```

2) Le decimos dónde están nuestros test suites a ejecutar.

```
    files: [
      'js/**/*.test.js' // donde están nuestros test suites
    ],
```
3) Configuración de _Browserify_ para generación de bundle y procesamiento de templates.

```
    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'jstify' ] // para templates transformados a JS
    },
	
    // Con esto procesamos los require y generamos un bundle
    preprocessors: {
	    'js/**/*.test.js': ['browserify'] 
    },
```

## Solución de problemas

* Algunas versiones de ejemplos online de Karma tienen el bug: https://github.com/karma-runner/karma/issues/1782. Se recomienda usar la última versión a la fecha: 0.13.19
