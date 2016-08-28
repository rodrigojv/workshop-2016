// ----------------------------------//
// Estos deben estar configurados
// de forma global en otros proyectos
// Usamos asi solo para este ejemplo
var $ = require('jquery');
window.jQuery = $;
var b = require('bootstrap');
// -------------------------------//

// Para el idioma espanhol
require('moment/locale/es');
// Para el plugin de jquery
require('eonasdan-bootstrap-datetimepicker');

$(document).ready(function(){
	$('.input-group.date').datetimepicker();
});