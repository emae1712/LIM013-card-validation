import validator from './validator.js';

let credit = document.getElementById("tarjeta");
let maskText = document.getElementById("maskText");
let luhm = document.getElementById("luhm");

let titular = document.getElementById("titular");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let fecha = document.getElementById("fecha");
let direccion = document.getElementById("direccion");
let check = document.getElementById("check");

let botonPago = document.getElementById("botonPago");
let botonRegresar = document.getElementById("botonRegresar");
let firstPage = document.getElementById("datos");
let secondPage = document.getElementById("gracias");

//Muestra mensajes si la tarjeta es válida o no y enmascara
credit.addEventListener("keyup", () =>{

    let creditCardNumber = credit.value; 
    let algoritmo = validator.isvalid(creditCardNumber);
    let mascara = validator.maskify(creditCardNumber);
   
    maskText.innerHTML = mascara;
    
    if( !/^[0-9]{0,16}$/.test(creditCardNumber) || creditCardNumber.length>16){
        luhm.textContent = "Procure que sean números de 16 dígitos";
        credit.required = false;
        
        credit.classList.add('error');
        luhm.style.color = "red";

    }else if (creditCardNumber.length==16){

        if(algoritmo===true){
        luhm.textContent = "Tarjeta válida";
        credit.required = true;

        credit.classList.remove('error');
        luhm.style.color = "darkcyan";
        }else{
        luhm.textContent = "Tarjeta inválida, intente de nuevo";
        credit.required = false;

        credit.classList.add('error');
        luhm.style.color = "red";
        }

    }else{
        luhm.textContent ="";
        credit.classList.remove('error');
    }

})


//Coloca los inputs de texto en mayúsculas
nombre.addEventListener("keyup", () =>{ 
    nombre.value = nombre.value.toUpperCase();
    a();
});

apellido.addEventListener("keyup", () =>{  
    apellido.value = apellido.value.toUpperCase();
    a();
});

function a(){
    titular.value = nombre.value + " " + apellido.value;
};

//Editar el nombre de titular
check.addEventListener("click", ()=>{
    if (check.checked==true){
        titular.disabled = false;
    }else{
        titular.disabled=true;
    }
})

/*---------------- Validación--------------------*/

//Verifica los campos required 
let validar = () =>{
    let inputRequired= document.querySelectorAll("#formulario [required]");
    let error=false;
    console.log(inputRequired);

    for(let i = 0; i< inputRequired.length; i++ ){
        if (inputRequired[i].value=='' ){
            inputRequired[i].classList.add('error');
            error=true;
        }
    }
    
    return error;
};

//Condición para pasar a la segunda vista
function view(e){
    e.preventDefault();
    let view = validar();

    if(view==false){
    firstPage.classList.add("hide");
    firstPage.classList.remove("display");

    secondPage.classList.add("display");
    secondPage.classList.remove("hide");
    }

   //Formulario de confirmación en la segunda vista
    document.getElementById('cardResult').innerHTML = "<strong>Tarjeta: </strong>" + validator.maskify(credit.value);
    document.getElementById('nameResult').innerHTML = "<strong>Titular: </strong>" + titular.value;
    document.getElementById('emailResult').innerHTML = "<strong>Correo electrónico: </strong>" + email.value;
    document.getElementById('dateResult').innerHTML = "<strong>Fecha de entrega: </strong>" + fecha.value;
    document.getElementById('adressResult').innerHTML = "<strong>Dirección: </strong>" + direccion.value;
}

botonPago.addEventListener('click', view);

//Regreso a la primera vista
botonRegresar.addEventListener('click', (e)=>{
    e.preventDefault();

    firstPage.classList.add("display");
    firstPage.classList.remove("hide");

    secondPage.classList.add("hide");
    secondPage.classList.remove("display");
});