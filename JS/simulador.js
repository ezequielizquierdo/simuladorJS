let carrito = {};
let baseDeDatos = [];
var miCarrito = new Carrito();

// if (localStorage.getItem("carrito") != null) {
//     console.log("Ingresando a validación");
//     carrito = JSON.parse(localStorage.getItem("carrito"));

//     $("#contador").html(miCarrito.obtenerItems().length);
// }

class Producto {
    constructor(nombreProducto, descripcion, precioProducto, um) {
        this.producto = nombreProducto;
        this.descripcion = descripcion;
        this.precio = precioProducto;
        this.um = um;
    }
}

let productoUno = new Producto("cemento", "Cemento portland normal bolsa de 50 kg", 608.22, "bl");
let productoDos = new Producto("cal", "Cal común en bolsa x 25 kg", 261.24, "bl");
let productoTres = new Producto("adhesivo", "Adhesivo tipo Klaukol bolsa 30 kg", 847.86, "bl");
let productoCuatro = new Producto("cascote", "Cascote molido limpio x m3", 1696.02, "m3");
let productoCinco = new Producto("revoque", "Revoque Plástico tipo 'Revear Color' tambor x 25 kg", 7780.59, "m2");
let productoSeis = new Producto("arena", "Arena", 1845.16, "m3");

baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);

// Consulta de nombre para localStorage
if (localStorage.nombre) {
    $("#nombre-usuario").html('Hola ' + localStorage.nombre + '. Vamos a cotizar!');
} else {
    let nombre = prompt("Ingrese su nombre");
    localStorage.setItem("nombre", nombre);
    $("#nombre-usuario").html('Hola ' + localStorage.nombre + '. Vamos a cotizar!');
}

function Carrito() { // CARRITO VACIO
    this.items = []

    this.agregarItem = function (item) {
        this.items.push(item);
    }
    
    this.valorTotal = function () {
        var sumaTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
            sumaTotal += this.items[i].precio;
        }
        console.log(sumaTotal)
        return sumaTotal;
    }

    this.obtenerItems = function(){
        console.log("debug 2", this.items)
        return this.items;
    }
};


// Función para mostrar descripción del producto seleccionado.
function mostrarDescripcion(event) {
    let descri = event.target.value;
    let found = baseDeDatos.find(elemento => elemento.producto == descri);
    // document.getElementById("demo").innerHTML = found.descripcion;
    $("#demo").html(found.descripcion);
    console.log(descri);
}

// Función para mostrar los valores (en $, USD, y EUR) de acuerdo a la cantidad ingresada
function mostrarValor(event) {
    let cantidadElegida = event.target.value;
    let prueba = demo.innerText;
    let found = baseDeDatos.find(elemento => elemento.descripcion == prueba);

    // var valorElegido = document.getElementById("valorPesos").innerHTML = (cantidadElegida * found.precio).toFixed(2);
    let valorElegidoEnPes = $("#valorPesos").html((cantidadElegida * found.precio).toFixed(2));
    // document.getElementById("valorDolares").innerHTML = ((cantidadElegida * found.precio) / document.getElementById("cotidolar").innerHTML).toFixed(2);
    let valorElegidoEnUSD = $("#valorDolares").html(((cantidadElegida * found.precio) / $("#cotidolar").html()).toFixed(2));
    // document.getElementById("valorEuros").innerHTML = ((cantidadElegida * found.precio) / document.getElementById("cotieuro").innerHTML).toFixed(2);
    let valorElegidoEnEur = $("#valorEuros").html(((cantidadElegida * found.precio) / $("#cotieuro").html()).toFixed(2));


    console.log(cantidadElegida)
    // console.log(valorElegidoEnPes)
    // console.log(valorElegidoEnUSD)
    // console.log(valorElegidoEnEur)
}

//////////////////////////// PRUEBAS 

////////// COTIZADOR
// Que tenga las lineas de los productos que el usuario quiere agregar en su cotización
// Tendrá que verse Descripción, cantidad, precio.
// Poder modificar las cantidades desde el cotizador.
// Poder borrar lineas desde el cotizador.
// Que cada linea la cotice en pesos, dolares y euros.


////////// CONSTRUCCION DE LINEAS 
// Agregar productos al cotizador. Las lineas se componen por: Descripción del producto, Cantidad elegida, y su valor.
var sumaTotal = 0;
function agregarAlCotizador() {
    miCarrito.agregarItem((`{"descripcion" : ${$("#demo").html()}, "cantidad" : ${$("#volumen").val()}, "precio": ${$("#valorPesos").html()}}`));
    console.log("debug1", miCarrito.obtenerItems())
    
    localStorage.setItem("carritoActual", JSON.stringify(miCarrito.obtenerItems()));
    
    console.log(miCarrito);
    console.log(miCarrito.items.length);
    console.log($("#volumen"));

}

// Obtener el carrito actual en el localStorage. Devolverá un array de JSON.
var obtenerCarritoActual = localStorage.getItem("carritoActual");
console.log(obtenerCarritoActual);


// Transformo el texto JSON en objetos.
var objetosEnCarritoActual = JSON.parse(localStorage.getItem("carritoActual"));
console.log(objetosEnCarritoActual);


// Cuantos objetos hay en el carrito.
var tamañoCarritoActual = JSON.parse(localStorage.getItem("carritoActual")).length;
console.log(tamañoCarritoActual);


////////// BORRAR CARRITO

function vaciarCotizador(){
    localStorage.clear();
}



////////// BORRAR LINEAS DEL COTIZADOR EN EL MODAL