// Función para desplegar más productos
let bloque6 = document.getElementById("bloque6");
let anadir_producto = document.getElementById("anadir_otro");
anadir_producto.addEventListener("click", function (e) {
  bloque6.style.display = "block";
  bloque6.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
});
//****************************************************************** */
var datosProductoUno = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad1 = document.getElementById("cantidad1");
precio_prod1 = document.getElementById("precio_prod1");
total1 = document.getElementById("total1");

cantidad1.addEventListener("input", actualizarDatos);
precio_prod1.addEventListener("input", actualizarDatos);

function actualizarDatos() {
  const cantidad = parseFloat(cantidad1.value);
  const precioUnidad = parseFloat(precio_prod1.value).toFixed(2);
  producto1 = document.getElementById("producto1").value;

  if (!isNaN(cantidad) && !isNaN(precioUnidad)) {
    const precioTotal = cantidad * precioUnidad;
    total1.value = precioTotal.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoUno.descriptionOne = producto1;
    datosProductoUno.cantidad = cantidad;
    datosProductoUno.precioUnidad = precioUnidad;
    datosProductoUno.precioTotal = precioTotal.toFixed(2);
  } else {
    total1.value = "";
    datosProductoUno = {};
  }
}

//****************************************************************** */
var datosProductoDos = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad2 = document.getElementById("cantidad2");
precio_prod2 = document.getElementById("precio_prod2");
total2 = document.getElementById("total2");

cantidad2.addEventListener("input", actualizarDatosDos);
precio_prod2.addEventListener("input", actualizarDatosDos);

function actualizarDatosDos() {
  const cantidadDos = parseFloat(cantidad2.value);
  const precioUnidadDos = parseFloat(precio_prod2.value).toFixed(2);
  producto2 = document.getElementById("producto2").value;
  if (!isNaN(cantidadDos) && !isNaN(precioUnidadDos)) {
    const precioTotal2 = cantidadDos * precioUnidadDos;
    total2.value = precioTotal2.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoDos.description = producto2;
    datosProductoDos.cantidad = cantidadDos;
    datosProductoDos.precioUnidad = precioUnidadDos;
    datosProductoDos.precioTotal = precioTotal2.toFixed(2);
  } else {
    total2.value = "";
    datosProductoDos = {};
  }
}
//****************************************************************** */
var datosProductoTres = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad3 = document.getElementById("cantidad3");
precio_prod3 = document.getElementById("precio_prod3");
total3 = document.getElementById("total3");

cantidad3.addEventListener("input", actualizarDatosTres);
precio_prod3.addEventListener("input", actualizarDatosTres);

function actualizarDatosTres() {
  const cantidadTres = parseFloat(cantidad3.value);
  const precioUnidadTres = parseFloat(precio_prod3.value).toFixed(2);
  producto3 = document.getElementById("producto3").value;
  if (!isNaN(cantidadTres) && !isNaN(precioUnidadTres)) {
    const precioTotal3 = cantidadTres * precioUnidadTres;
    total3.value = precioTotal3.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoTres.description = producto3;
    datosProductoTres.cantidad = cantidadTres;
    datosProductoTres.precioUnidad = precioUnidadTres;
    datosProductoTres.precioTotal = precioTotal3.toFixed(2);
  } else {
    total3.value = "";
    datosProductoTres = {};
  }
}
//****************************************************************** */
var datosProductoCuatro = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad4 = document.getElementById("cantidad4");
precio_prod4 = document.getElementById("precio_prod4");
total4 = document.getElementById("total4");

cantidad4.addEventListener("input", actualizarDatosCuatro);
precio_prod3.addEventListener("input", actualizarDatosCuatro);

function actualizarDatosCuatro() {
  const cantidadCuatro = parseFloat(cantidad4.value);
  const precioUnidadCuatro = parseFloat(precio_prod4.value).toFixed(2);
  producto4 = document.getElementById("producto4").value;
  if (!isNaN(cantidadCuatro) && !isNaN(precioUnidadCuatro)) {
    const precioTotal4 = cantidadCuatro * precioUnidadCuatro;
    total4.value = precioTotal4.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoCuatro.description = producto4;
    datosProductoCuatro.cantidad = cantidadCuatro;
    datosProductoCuatro.precioUnidad = precioUnidadCuatro;
    datosProductoCuatro.precioTotal = precioTotal4.toFixed(2);
  } else {
    total4.value = "";
    datosProductoCuatro = {};
  }
}
//****************************************************************** */
var datosProductoCinco = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad5 = document.getElementById("cantidad5");
precio_prod5 = document.getElementById("precio_prod5");
total5 = document.getElementById("total5");

cantidad5.addEventListener("input", actualizarDatosCinco);
precio_prod5.addEventListener("input", actualizarDatosCinco);

function actualizarDatosCinco() {
  const cantidadCinco = parseFloat(cantidad5.value);
  const precioUnidadCinco = parseFloat(precio_prod5.value).toFixed(2);
  producto5 = document.getElementById("producto5").value;
  if (!isNaN(cantidadCinco) && !isNaN(precioUnidadCinco)) {
    const precioTotal5 = cantidadCinco * precioUnidadCinco;
    total5.value = precioTotal5.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoCinco.description = producto5;
    datosProductoCinco.cantidad = cantidadCinco;
    datosProductoCinco.precioUnidad = precioUnidadCinco;
    datosProductoCinco.precioTotal = precioTotal5.toFixed(2);
  } else {
    total5.value = "";
    datosProductoCinco = {};
  }
}
//****************************************************************** */
var datosProductoSeis = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad6 = document.getElementById("cantidad6");
precio_prod6 = document.getElementById("precio_prod6");
total6 = document.getElementById("total6");

cantidad6.addEventListener("input", actualizarDatosSeis);
precio_prod6.addEventListener("input", actualizarDatosSeis);

function actualizarDatosSeis() {
  const cantidadSeis = parseFloat(cantidad6.value);
  const precioUnidadSeis = parseFloat(precio_prod6.value).toFixed(2);
  producto6 = document.getElementById("producto6").value;
  if (!isNaN(cantidadSeis) && !isNaN(precioUnidadSeis)) {
    const precioTotal6 = cantidadSeis * precioUnidadSeis;
    total6.value = precioTotal6.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoSeis.description = producto6;
    datosProductoSeis.cantidad = cantidadSeis;
    datosProductoSeis.precioUnidad = precioUnidadSeis;
    datosProductoSeis.precioTotal = precioTotal6.toFixed(2);
  } else {
    total6.value = "";
    datosProductoSeis = {};
  }
}
//****************************************************************** */
var datosProductoSiete = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad7 = document.getElementById("cantidad7");
precio_prod7 = document.getElementById("precio_prod7");
total7 = document.getElementById("total7");

cantidad7.addEventListener("input", actualizarDatosSiete);
precio_prod7.addEventListener("input", actualizarDatosSiete);

function actualizarDatosSiete() {
  const cantidadSiete = parseFloat(cantidad7.value);
  const precioUnidadSiete = parseFloat(precio_prod7.value).toFixed(2);
  producto7 = document.getElementById("producto7").value;
  if (!isNaN(cantidadSiete) && !isNaN(precioUnidadSiete)) {
    const precioTotal7 = cantidadSiete * precioUnidadSiete;
    total7.value = precioTotal7.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoSiete.description = producto7;
    datosProductoSiete.cantidad = cantidadSiete;
    datosProductoSiete.precioUnidad = precioUnidadSiete;
    datosProductoSiete.precioTotal = precioTotal7.toFixed(2);
  } else {
    total7.value = "";
    datosProductoSiete = {};
  }
}
//****************************************************************** */
var datosProductoOcho = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad8 = document.getElementById("cantidad8");
precio_prod8 = document.getElementById("precio_prod8");
total8 = document.getElementById("total8");

cantidad8.addEventListener("input", actualizarDatosOcho);
precio_prod8.addEventListener("input", actualizarDatosOcho);

function actualizarDatosOcho() {
  const cantidadOcho = parseFloat(cantidad8.value);
  const precioUnidadOcho = parseFloat(precio_prod8.value).toFixed(2);
  producto8 = document.getElementById("producto8").value;
  if (!isNaN(cantidadOcho) && !isNaN(precioUnidadOcho)) {
    const precioTotal8 = cantidadOcho * precioUnidadOcho;
    total8.value = precioTotal8.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoOcho.description = producto8;
    datosProductoOcho.cantidad = cantidadOcho;
    datosProductoOcho.precioUnidad = precioUnidadOcho;
    datosProductoOcho.precioTotal = precioTotal8.toFixed(2);
  } else {
    total8.value = "";
    datosProductoOcho = {};
  }
}
//****************************************************************** */
var datosProductoNueve = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad9 = document.getElementById("cantidad9");
precio_prod9 = document.getElementById("precio_prod9");
total9 = document.getElementById("total9");

cantidad9.addEventListener("input", actualizarDatosNueve);
precio_prod9.addEventListener("input", actualizarDatosNueve);

function actualizarDatosNueve() {
  const cantidadNueve = parseFloat(cantidad9.value);
  const precioUnidadNueve = parseFloat(precio_prod9.value).toFixed(2);
  producto9 = document.getElementById("producto9").value;
  if (!isNaN(cantidadNueve) && !isNaN(precioUnidadNueve)) {
    const precioTotal9 = cantidadNueve * precioUnidadNueve;
    total9.value = precioTotal9.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoNueve.description = producto9;
    datosProductoNueve.cantidad = cantidadNueve;
    datosProductoNueve.precioUnidad = precioUnidadNueve;
    datosProductoNueve.precioTotal = precioTotal9.toFixed(2);
  } else {
    total9.value = "";
    datosProductoNueve = {};
  }
}
//****************************************************************** */
var datosProductoDiez = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad10 = document.getElementById("cantidad10");
precio_prod10 = document.getElementById("precio_prod10");
total10 = document.getElementById("total10");

cantidad10.addEventListener("input", actualizarDatosDiez);
precio_prod10.addEventListener("input", actualizarDatosDiez);

function actualizarDatosDiez() {
  const cantidadDiez = parseFloat(cantidad10.value);
  const precioUnidadDiez = parseFloat(precio_prod10.value).toFixed(2);
  producto10 = document.getElementById("producto10").value;
  if (!isNaN(cantidadDiez) && !isNaN(precioUnidadDiez)) {
    const precioTotal10 = cantidadDiez * precioUnidadDiez;
    total10.value = precioTotal10.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoDiez.description = producto10;
    datosProductoDiez.cantidad = cantidadDiez;
    datosProductoDiez.precioUnidad = precioUnidadDiez;
    datosProductoDiez.precioTotal = precioTotal10.toFixed(2);
  } else {
    total10.value = "";
    datosProductoDiez = {};
  }
}
//****************************************************************** */
var datosProductoOnce = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad11 = document.getElementById("cantidad11");
precio_prod11 = document.getElementById("precio_prod11");
total11 = document.getElementById("total11");

cantidad11.addEventListener("input", actualizarDatosOnce);
precio_prod11.addEventListener("input", actualizarDatosOnce);

function actualizarDatosOnce() {
  const cantidadOnce = parseFloat(cantidad11.value);
  const precioUnidadOnce = parseFloat(precio_prod11.value).toFixed(2);
  producto11 = document.getElementById("producto11").value;
  if (!isNaN(cantidadOnce) && !isNaN(precioUnidadOnce)) {
    const precioTotal11 = cantidadOnce * precioUnidadOnce;
    total11.value = precioTotal11.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoOnce.description = producto11;
    datosProductoOnce.cantidad = cantidadOnce;
    datosProductoOnce.precioUnidad = precioUnidadOnce;
    datosProductoOnce.precioTotal = precioTotal11.toFixed(2);
  } else {
    total11.value = "";
    datosProductoOnce = {};
  }
}
//****************************************************************** */
var datosProductoDoce = {}; // Crear un objeto vacío para almacenar los datos del producto

cantidad12 = document.getElementById("cantidad12");
precio_prod12 = document.getElementById("precio_prod12");
total12 = document.getElementById("total12");

cantidad12.addEventListener("input", actualizarDatosDoce);
precio_prod12.addEventListener("input", actualizarDatosDoce);

function actualizarDatosDoce() {
  const cantidadDoce = parseFloat(cantidad12.value);
  const precioUnidadDoce = parseFloat(precio_prod12.value).toFixed(2);
  producto12 = document.getElementById("producto12").value;
  if (!isNaN(cantidadDoce) && !isNaN(precioUnidadDoce)) {
    const precioTotal12 = cantidadDoce * precioUnidadDoce;
    total12.value = precioTotal12.toFixed(2);
    // Actualizar el objeto con los nuevos valores
    datosProductoDoce.description = producto12;
    datosProductoDoce.cantidad = cantidadDoce;
    datosProductoDoce.precioUnidad = precioUnidadDoce;
    datosProductoDoce.precioTotal = precioTotal12.toFixed(2);
  } else {
    total12.value = "";
    datosProductoDoce = {};
  }
}

//Función para tomar los datosCliente
let pdf = document.getElementById("crear_pdf");
function recopilarCliente(e) {
  const datosCliente = {};
  datosCliente.cliente = document.getElementById("nombre").value;
  datosCliente.direccion = document.getElementById("direccion").value;
  datosCliente.num_registro = document.getElementById("registo_num").value;
  datosCliente.dui = document.getElementById("dui").value;
  datosCliente.vendedor = document.getElementById("vendedor").value;

  const regex = /^[a-zA-Z\s]*$/; // Expresión regular para letras y espacios
  if (!regex.test(datosCliente.cliente)) {
    alert("El nombre no debe contener números.");
    return;
  }
  if (!regex.test(datosCliente.vendedor)) {
    alert("El nombre del vendedor no debe contener números.");
    return;
  }
  console.log(datosCliente);
  e.preventDefault();
}
 /* Función para guardar los datosCliente de los imputs*/
pdf.addEventListener("click", recopilarCliente);