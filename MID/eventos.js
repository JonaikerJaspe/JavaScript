//addEventListener Eschuca de eventos

// const button = document.querySelector(".button");

// button.addEventListener("click", (e)=>{
// 	console.log(e.target);
// });

//event flow, flujo de eventos

// const button = document.querySelector(".button");

// const contenedor = document.querySelector('.contenedor')

// button.addEventListener("click", (e)=>{
// 	alert('Hola puta le diste en un boton')
// });

// contenedor.addEventListener("click", (e)=>{
// 	alert('Hola puta le diste en el contenedor')
// });

// const button = document.querySelector(".button");

// const contenedor1 = document.querySelector(".contenedor-1");
// const input = document.querySelector(".input-prueba");

// button.addEventListener("dblclick", (e) => {
// 	alert("Le Diste Doble Click al botton...");
// });
// contenedor1.addEventListener("contextmenu", (e) => {
// 	alert("Hola puta le diste en el contenedor ");
// });

// const input = document.querySelector(".input-prueba");
// const contenedor = document.querySelector(".seleccionado");

// input.addEventListener("select", (e) => {
// 	let start = e.target.selectionStart;
// 	let end = e.target.selectionEnd;
// 	let textoCompleto = input.value;
// 	contenedor.innerHTML = textoCompleto.substring(start, end);
// });

// const input = document.querySelector(".input-prueba");
// const contenedor = document.querySelector(".seleccionado");

// input.addEventListener("keyup", (e) => {
// 	let tecla = e.key;
// 	console.log(e);
// 	let nuevoContenido = `La ultima tecla presionada fue : ${tecla}`;
// 	contenedor.innerHTML = nuevoContenido;
// });



JavaScript ofrece una variedad de eventos que pueden ser utilizados para interactuar con la interfaz de usuario, manejar interacciones del usuario y controlar la ejecución del código. A continuación, se presenta una lista de algunos de los eventos más comunes en JavaScript:

Eventos del mouse:

click: Se dispara cuando se hace clic en un elemento developer.mozilla.org.
mouseover: Se dispara cuando el puntero del mouse se mueve sobre un elemento developer.mozilla.org.
mouseout: Se dispara cuando el puntero del mouse se mueve fuera de un elemento developer.mozilla.org.
mousedown: Se dispara cuando se presiona un botón del mouse sobre un elemento es.javascript.info.
mouseup: Se dispara cuando se suelta un botón del mouse sobre un elemento es.javascript.info.
Eventos del teclado:

keydown: Se dispara cuando se presiona una tecla developer.mozilla.org.
keyup: Se dispara cuando se suelta una tecla.
Eventos del formulario:

focus: Se dispara cuando un elemento recibe el foco developer.mozilla.org.
blur: Se dispara cuando un elemento pierde el foco developer.mozilla.org.
change: Se dispara cuando se cambia el valor de un elemento developer.mozilla.org.
submit: Se dispara cuando se envía un formulario.
Eventos de la ventana:

load: Se dispara cuando se ha terminado de cargar una página developer.mozilla.org.
resize: Se dispara cuando se redimensiona la ventana del navegador.
scroll: Se dispara cuando se desplaza la barra de desplazamiento de un elemento.
Eventos de arrastrar y soltar:

dragstart: Se dispara cuando el usuario comienza a arrastrar un elemento developer.mozilla.org.
drag: Se dispara cuando un elemento está siendo arrastrado developer.mozilla.org.
dragend: Se dispara cuando un elemento deja de ser arrastrado developer.mozilla.org.
También hay otros eventos como touchstart, touchmove, touchend para dispositivos táctiles y eventos relacionados con animaciones y transiciones, entre otros. Para una lista más completa, puedes consultar la referencia de eventos del MDN.

Los eventos pueden ser escuchados utilizando el método addEventListener(), que toma como argumentos el nombre del evento y la función que se ejecutará cuando se dispare el evento. Por ejemplo: