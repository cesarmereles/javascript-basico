const colores = ['rojo','amarillo','verde']

const mostrarColores = (colores) => {
    //console.log(`Los colores son ${colores}/ usando For clasico`) 
    //console.log(`Los colores son ${colores}/ usando For clasico`) 
    console.log(`Los colores son ${colores}/ usando while`) 
                
}

//loops FOR
// for(let j=0; j < colores.length; j++){
//     mostrarColores(colores[j])
// }

// for(let newColor of colores){
//     mostrarColores(newColor)     
// }

//loops while
while(colores.length>0){
    const newColor = colores.shift()
    mostrarColores(newColor)   
}

