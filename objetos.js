//funcion constructora
function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;  
}
let autos = [];
for(let j=0;j<3;j++){
    let marca = prompt('ingrese la marca');
    let modelo = prompt('ingrese la modelo');
    let annio = prompt('ingrese el año');
    autos.push(new Auto(marca,modelo,annio));
}

for (auto of autos){
    console.log(auto)
}

/*
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio:2018,
    detalleDelAuto: function(){
        console.log(`Auto ${marca} Año ${annio}`)
    }
} */
/*
const Corolla = new Auto('Toyota','Corolla', 2023);
console.log(Corolla)*/

/*
     hacer una lista de 30 autos que se contruyan solos


*/ 

