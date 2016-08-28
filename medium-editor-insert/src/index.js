var MediumEditor = require('medium-editor');
var $ = require('jquery');
require('medium-editor-insert-plugin')($);


$(function () {
    var editor = new MediumEditor('.editable');
    
    var addons = {
        embeds: {
            styles: null, // deshabiltiamos los botones para justificar los embeddeds
            captions: false, // deshabilitamos caption par embeds
            oembedProxy: 'https://testing.sodep.com.py/oembed',
            placeholder: 'Pegue un link de YouTube, Facebook, Twitter o Instagram y presione Enter'
        }
    }
    $('.editable').mediumInsert({
        editor: editor,
        addons: addons
    });
});

