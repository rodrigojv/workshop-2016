mousetrap
---

https://github.com/ccampbell/mousetrap

Paquete npm para detectar atajos del teclado en el navegador.

```
var Mousetrap = require('mousetrap');
Mousetrap.bind('ctrl+l', function(){
	console.log('Se apretó ctrl+l');
});
```

El método `Mousetrap.bind()` recibe un string con la combinación que queremos escuchar en el navegador, y como
segundo parámetro recibe el callback que se va a ejecutar en respuesta a esa combinación de teclas.


## Otras alternativas
1) https://github.com/jeresig/jquery.hotkeys

## Recursos
1) Blog con recomendaciones para diseañar shortcuts: https://medium.com/@sashika/j-k-or-how-to-choose-keyboard-shortcuts-for-web-applications-a7c3b7b408ee#.bp8zyss0o