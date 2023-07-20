const articulos = [
    {
        nombre: 'Bicicleta',
        costo: 3000
    },
    {
        nombre: 'Televisor',
        costo:2500
    },
    {
        nombre: 'Libro',
        costo:320
    },
    {
        nombre: 'Celular',
        costo:10000
    },
    {
        nombre: 'Laptop',
        costo:15000
    },
    {
        nombre: 'Teclado',
        costo:500
    },
    {
        nombre: 'Audifonos',
        costo:1700
    }

]

//usando metodo Filter: esto genera un nuevo ARRAY
const articulosFiltrados = articulos.filter(articulo=>{
    return articulo.costo <= 500
})

console.log("los articulos filtrados son: "+ articulosFiltrados)

const articulosDetalles = articulos.map((art)=>{
    return art.nombre
})

console.log('Los nombres son: '+articulosDetalles)

//metodo find para encontrar algo dentro del array
const encuentraArticulo = articulos.find((buscado)=>{
    return buscado.nombre === 'Audifonos'
})

console.log('El articulo buscado es: '+ encuentraArticulo)

//foreach
articulos.forEach((arti)=>{
    console.log(arti.nombre)
})

//metodo some: regresa una validacion de true o false y 
//genera un nuevo array

const articulosBaratos = articulos.some((articulo)=>{
    return articulo.costo <= 700
})

console.log('Articulos baratos: '+articulosBaratos)

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}