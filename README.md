[![SafeDelivery](https://j.gifs.com/91MpD4.gif)](https://emae1712.github.io/LIM013-card-validation/src/)


# SafeDELIVERY 👩🏾‍💻 
>Aplicación web de validación de Tarjeta de crédito.

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Manual de uso](#2-manual-de-uso)
* [3. Procedimiento](#3-procedimiento)
* [4. Herramientas usadas](#4-herramientas-usadas)
* [5. Fuentes](#5-fuentes)

***

## 1. 🧐Resumen del proyecto

<img align="right" width="30%" src="https://i.ibb.co/7zwzmW9/Logo.jpg" alt="Logo" border="0">
El presente proyecto se realizó con la finalidad de recrear una página web que permita a los usuarios realizar compras online de **Kits de higiene y protección** ante el nuevo Covid-19. A partir de la coyuntura del presente año se ha evidenciado que el uso de mascarillas, alcohol, útiles de aseo, entre otros, es vital para evitar la propagación del virus. <br><br>
El proyecto se rige bajo el lema **_"Protégete y protege a los demás"_** 🌎, dónde se ofrece el envío de productos de higiene y protección a nivel nacional, declaradas por el Estado como vitales para enfrentar esta situación que afecta a la población mundial.

## 2. 🚀Manual de uso

* Primero deberás ingresar aquí 🔜 **[SafeDelivery](https://emae1712.github.io/LIM013-card-validation/src/)**
* La página presentará el proceso de compra del producto (*en este primer proyecto nos centramos en el proceso de validadción de Tarjeta de crédito*)
>Primera vista al entrar a la página SafeDelivery
<p align="center">
<img width="40%" src="https://i.ibb.co/Fg40kMb/Primera-vista.jpg" alt="Primera-vista" border="0">
  </p>

* Deberás completar todos los campos indicados para poder seguir con el proceso.✍ 
* Cuándo llegues al campo de Tarjeta de crédito, deberás ingresar un número de 16 dígitos. Ejem. 4485715860868875
* El botón de **Finalizar Compra** te enviará a otra ventana dónde verás el resumen de tus datos ingresados y validarás si son correctos.📝
>Segunda vista al entrar a la página SafeDelivery
<p align="center">
<img width="40%" src="https://i.ibb.co/9Yz5PZW/Segunda-vista.jpg" alt="Segunda-vista" border="0">
  </p>
  
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

### - Público objetivo 👨‍👩‍👧‍👦
Para el presente proyecto se tuvo como público objetivo a los ciudadanos del país, debido a la alta demanda de productos de higiene y protección durante el presente año y al presenciar el alza deliberada de precios, se pensó en manejar estándares acordes al mercado, teniendo al servicio de *delivery* como medio seguro para no exponer al usuario a interminables colas.

>PROTOTIPO DE PAPEL
<p align="center">
<img src="https://i.ibb.co/m6LKpxV/Prototipo-papel-1.jpg" width=45% alt="Prototipo-papel-1" border="0">
<img src="https://i.ibb.co/NSCX8xd/Prototipo-papel-2.jpg" width=45% alt="Prototipo-papel-2" border="0">
   </p>

>DIAGRAMA DE FLUJO
<p align="center">
<img src="https://i.ibb.co/H4BmPhz/Flujo.png" alt="Flujo" border="0"><a target='_blank' href='https://es.imgbb.com/'>
   </p>

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

🛠️Las nuevas herramientas usadas que sirvieron de complemento para el presente proyecto fueron:

   [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell)<br>
   [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git) <br>
   [Node.js](https://nodejs.org/)<br>
   Github <br>

## 5. 📚Fuentes

A continuación presento algunas fuentes que me inspiraron para llevar a cabo el presente proyecto.

### Material informativo sobre el COVID-19
[![minsa coronavirus](https://i.ibb.co/ZH96Qkq/campaign-coronavirus-covid-2019.jpg)](https://www.gob.pe/institucion/minsa/campa%C3%B1as/699-conoce-que-es-el-coronavirus-covid-19)

### Sala Situacional COVID-19 Perú - Ministerio de Salud
[![minsa sala_situacional](https://i.ibb.co/kyxRmnt/salasituacional-covid19-minsa-peru-2020.jpg)](https://covid19.minsa.gob.pe/sala_situacional.asp)

[Link](https://covid19.minsa.gob.pe/sala_situacional.asp)

### Tablero interactivo basado en la web para rastrear COVID-19 en tiempo real

[![hopkins_covid_mundo](https://i.ibb.co/m0f3t4x/Dashboard-mundo-covid.jpg)](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

[Link](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
