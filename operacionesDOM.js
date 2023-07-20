const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const input = document.querySelector('input')
const divCaja = document.querySelector('.caja')

//leo un atributo
console.log(h1.getAttribute('aria-multiselectable'))
console.log(h2.getAttribute('class'))

//modificar el atributo
h2.setAttribute('class','claseModificadorPorJS')

//agregando una nueva clase desde JS
h2.classList.add('claseNuevaAgregada')

//eliminando una clase
h2.classList.remove('verClase')

//modificando el value de un input
input.value='Hola mundo'

//creamos el elemento img
const image = document.createElement('img')
image.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
//incrustamos la imagen dentro de la caja
divCaja.append(image)