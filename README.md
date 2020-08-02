<img align="center" alt="GIF" src= "https://j.gifs.com/91MpD4.gif"/>


# SafeDELIVERY 👩🏾‍💻 
>Aplicación web de validación de Tarjeta de crédito.

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Comencemos](#2-comencemos)
* [3. Procedimiento](#3-procedimiento)
* [4. Herramientas usadas](#4-herramientas-usadas)
* [5. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. 🧐Resumen del proyecto

El presente proyecto se realizó con la finalidad de recrear una página web que permita a los usuarios realizar compras online de **Kits de higiene y protección** ante el nuevo Covid-19. A partir de la coyuntura del presente año se ha evidenciado que el uso de mascarillas, alcohol, útiles de aseo, entre otros, es vital para evitar la propagación del virus. 

El proyecto se rige bajo el lema **_"Protégete y protege a los demás"_** 🌎, dónde se ofrece el envío de productos de higiene y protección a nivel nacional, declaradas por el Estado como vitales para enfrentar esta situación que afecta a la población mundial.

>IMAGEN FINAL DEL PROYECTO

## 2. 🚀Comencemos

* Primero deberás ingresar aquí 🔜 **[SafeDelivery](https://emae1712.github.io/LIM013-card-validation/src/)**
* La página presentará el proceso de compra del producto (*en este primer proyecto nos centramos en el proceso de validadción de Tarjeta de crédito*)
* Deberás completar todos los campos indicados para poder seguir con el proceso.✍ 
* Cuándo llegues al campo de Tarjeta de crédito, deberás ingresar un número de 16 dígitos. Ejem. 4485715860868875
* El botón de **Finalizar Compra** te enviará a otra ventana dónde verás el resumen de tus datos ingresados y validarás si son correctos.📝
* Eso es todo **¡Gracias por su compra!** ⭐️🤝

>Para el proceso de validación de **Tarjeta de crédito** se usó el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

>Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

Te invito a que intentes con números al azar a ver que resulta 🤓

## 3. 💻Procedimiento

### - Público objetivo 👯
Para el presente proyecto se tuvo como público objetivo a los ciudadanos del país, debido a la alta demanda de productos de higiene y protección durante el presente año y al presenciar el alza deliberada de precios, se pensó en manejar estándares acordes al mercado, teniendo al servicio de *delivery* como medio seguro para no exponer al usuario a interminables colas.

>PROTOTIPO DE PAPEL

### - *_Feedback_* 💬
Al inicio del proyecto se realizó 4 ventanas sólo para realizar el **proceso de compra**. Prototipo que al ser presentado tanto a las *couches* como integrantes del *squad*, se redujo a tan sólo 2, para que la experiencia del usuario sea sencilla y no vea el proceso como algo tedioso o que conlleve mucho tiempo a realizar. Incluso se llevo a cabo el autollenado de los *nombres* con el *titular de la tarjeta*, dando la opción de editar en caso no sea la persona la propietaria.

Se escogieron colores claros que representen el área de medicina, dando un aspecto amigable y comprometida con la salud de las personas.

>PROTOTIPO FINAL

## 4. Herramientas usadas

⚡Las tecnologías usadas en el presente proyecto fueron: 
```
   HTML
   CSS
   JavaScript 
```
En el editor de texto [Code](https://code.visualstudio.com/).

🛠️Las nuevas herramientas usadas que sirvieron de complemento para el presente proyeto fueron:

   [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell)<br>
   [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git) <br>
   [Node.js](https://nodejs.org/)<br>
   Github <br>

👋🤔📫⚙️🛠️


### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).
