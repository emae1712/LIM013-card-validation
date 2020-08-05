import validator from './validator.js';

let credit = document.getElementById("tarjeta");
let luhmText = document.getElementById("luhmText");

let titular = document.getElementById("titular");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mes = document.getElementById("mes")
let año = document.getElementById("año")
let email = document.getElementById("email");
let fecha = document.getElementById("fecha");
let direccion = document.getElementById("direccion");
let check = document.getElementById("check");

let botonPago = document.getElementById("botonPago");
let botonRegresar = document.getElementById("botonRegresar");
let firstPage = document.getElementById("datos");
let secondPage = document.getElementById("gracias");
let header1 = document.getElementById("step2");
let header2 = document.getElementById("step3");

//Coloca los inputs de texto en mayúsculas
nombre.addEventListener("keyup", () =>{ 
  nombre.value = nombre.value.toUpperCase();
  titularInput();
});

apellido.addEventListener("keyup", () =>{  
  apellido.value = apellido.value.toUpperCase();
  titularInput();
});

function titularInput(){
  titular.value = nombre.value + " " + apellido.value;
}

//Edita el nombre de titular de la tarjeta que está deshabilitado por default
check.addEventListener("click", ()=>{
    if (check.checked==true){
      titular.disabled = false;
    }else{
      titular.disabled=true;
    }
})

/*---------------- Validación--------------------*/
//Muestra mensajes si la tarjeta es válida o no y enmascara
let warning = () =>{

    let creditCardNumber = credit.value; 
    let algoritmo = validator.isvalid(creditCardNumber);
    let mistake= true;
  
    
    if( !/^[0-9]{0,16}$/.test(creditCardNumber) || creditCardNumber.length>16){
      luhmText.textContent = "Procure que sean números de 16 dígitos";
      luhmText.style.color = "red";
        
      credit.classList.add('error');

    }else if (creditCardNumber.length===16){

      if(algoritmo===true){
        luhmText.innerHTML = "<strong>Tarjeta válida </strong>";
        luhmText.style.color = "#00c2cb";

        credit.required = true;
        credit.classList.remove('error');
        
        mistake= false;

      }else{
        luhmText.textContent = "Tarjeta inválida, intente de nuevo";
        luhmText.style.color = "red";

        credit.required = false;
        credit.classList.add('error');
      }

    }else{
      luhmText.textContent ="";
      credit.classList.remove('error');
    }

    return mistake;
}

credit.addEventListener('keyup', warning);

//Verifica los campos required y llama a la función warning

let validar = () =>{
    let inputRequired= document.querySelectorAll("#formulario [required]");
    let advertencia = warning();
    let error=false;
   // console.log(inputRequired);

    for(let i = 0; i< inputRequired.length; i++ ){
        if (inputRequired[i].value=='' || !inputRequired[i].checkValidity()){
            inputRequired[i].classList.add('error');
            error=true;
        }
    }
    
    if (advertencia==true){
        error=true
    }
    return error;
};

/*----------------------Segunda vista---------------------------*/

//Condición para pasar a la segunda vista
function view(e){
    e.preventDefault();
    let validarReturn = validar();
    let mascara = validator.maskify(credit.value);

    if(validarReturn==false){
    firstPage.classList.add("hide");
    firstPage.classList.remove("display");

    secondPage.classList.add("display");
    secondPage.classList.remove("hide");

    header1.classList.add("hide");
    header1.classList.remove("display");

    header2.classList.add("display");
    header2.classList.remove("hide");
    }

   //Formulario de confirmación en la segunda vista
    document.getElementById('cardResult').innerHTML = mascara;
    document.getElementById('nameResult').innerHTML = titular.value;
    document.getElementById('expdateResult').innerHTML = "Vence " + mes.value + " / " + año.value;
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

    header1.classList.add("display");
    header1.classList.remove("hide");

    header2.classList.add("hide");
    header2.classList.remove("display");
});
