import validator from './validator.js';


let credit = document.getElementById("tarjeta");
let tarjetavalida = document.getElementById("tarjetavalida");
let luhm = document.getElementById("luhm");

//Muestra mensajes si la tarjeta es válida o no
credit.addEventListener("keyup", () =>{

    let creditCardNumber = credit.value; 
    let algoritmo = validator.isvalid(creditCardNumber);
    let mascara = validator.maskify(creditCardNumber);

    tarjetavalida.innerHTML = mascara;
    
    if(creditCardNumber.length<16){
        luhm.innerHTML = "Debe ser número de 16 dígitos"
        if(algoritmo===true){
        luhm.innerHTML = "Tarjeta válida";
        }else{
        luhm.innerHTML = "Tarjeta inválida";
        }
    }
});

//Coloca los inputs de texto en mayúsculas
let titular = document.getElementById("titular");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

nombre.addEventListener("keyup", () =>{ 
    nombre.value = nombre.value.toUpperCase();
    a();
});

apellido.addEventListener("keyup", () =>{  
    apellido.value = apellido.value.toUpperCase();
    a();
});

function a(){
    titular.value = nombre.value + " " + apellido.value
};


//Verifica los campos required y pasa a la siguiente página
let botonPago = document.getElementById("botonPago");

let validar = () =>{
    let inputRequired= document.querySelectorAll("#formulario [required]");
    
    console.log(inputRequired);

    for(let i = 0; i< inputRequired.length; i++ ){
        if (inputRequired[i].value==''){
            inputRequired[i].classList.add('error');
        }else {
            continue;
        }
    }

};

botonPago.addEventListener('click', validar);
