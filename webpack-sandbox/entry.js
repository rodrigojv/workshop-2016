var css = require('style!css!./style.css'); 
// el style! loader mete un tag <style> dentro del html
// donde se incluye en bundle.js final.
// el css! retorna info del css

document.write('Funciona!<br/>');

var $ = require('jquery');
$('body').append('<b>Funciona con JQuery tambien!</b>');

document.write(require('./content.js'));

document.write('<br/> Funciona con webpack-dev-server');