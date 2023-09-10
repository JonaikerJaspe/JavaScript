const button = document.querySelector(".button");

const contenedor1 = document.querySelector('.contenedor-1')
const contenedor2 = document.querySelector('.contenedor-2')


contenedor1.addEventListener("click", (e)=>{
	alert('Hola puta le diste en el contenedor')
},true);


contenedor2.addEventListener("click", (e)=>{
	alert('Hola puta le diste en el contenedor')
},true);


button.addEventListener("click", (e)=>{
	alert('Hola puta le diste en un boton')
});
