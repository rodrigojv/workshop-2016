# Vanilla JavaScript TodoMVC Example

> JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, most known as the scripting language for Web pages, but used in many non-browser environments as well such as node.js or Apache CouchDB.

> _[JavaScript - developer.mozilla.org](http://developer.mozilla.org/en-US/docs/JavaScript)


# Pasos para migrar a ES-6

1) Integrar webpack y webpack-dev-server

2) Reemplazar el script tag de js/app.js por bundle.js

3) Eliminar el resto de los script tags, reemplazar por require dentro de app.js

4) Exportar las dependencias como módulos y eliminarlas de window.app.* (common js)

5) Integrar babel

6) Reemplazar los `module.exports` por `export default NombreModulo`,
y los `require('./modulo')` por `import modulo from './modulo'`
