const numero1= document.querySelector('#numero1')
const numero2= document.querySelector('#numero2')
const btn = document.querySelector('.btnCalcular')
const resultado = document.querySelector('.result');

//escuchando los eventos
btn.addEventListener('click',()=>{
    //e.preventDefault()
    const sumarInput = Number(numero1.value) + Number(numero2.value)
    resultado.innerText = 'Resultado: '+sumarInput
})