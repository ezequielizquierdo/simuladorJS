let baseDeDatos = [];
carrito = new Carrito();

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

// // Consulta de nombre para localStorage
// if (localStorage.nombre) {
//     $("#nombre-usuario").html('Hola ' + localStorage.nombre + '. Vamos a cotizar!');
// } else {
//     let nombre = prompt("Ingrese su nombre");
//     localStorage.setItem("nombre", nombre);
//     $("#nombre-usuario").html('Hola ' + localStorage.nombre + '. Vamos a cotizar!');
// }

function Carrito() {
    this.items = []

    // 1. Inicializamos el carrito y me fijo lo que tenemos en localStorage.
    // 2. Si tengo data cargo el carrito en items.
    // 3. Si no tengo nada en localStorage items lo dejo vacio.

    if (localStorage.getItem("carrito") != null) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        this.items = carrito;
    }

    // 4. Creamos un metodo para que nos de la cantidad actual del carrito.
    this.SumaTotalItemsCarrito = function () {
        return this.items.length;
    }

    // 5. Agregar un nuevo item al carrito actual.
    // PARA MEJORAR: Antes de cargar un nuevo elemento al carrito
    // habria que ver si ese elemento existe en el carrito.
    this.agregarItem = function (item) {
        return this.items.push(item);
    }

    // 6. Sumar totales de los productos en carrito.
    this.valorTotal = function () {
        var total = 0;
        this.items.forEach(function (obj) {
            total += parseInt(obj.precio * obj.cantidad);
        });
        console.log("Total acumulado $ ", total);
        $("#total-value").html("$" + total.toFixed(2));

    }

    // 7. Muestra todos los elementos existentes en items[]
    this.obtenerItems = function () {
        // console.log("debug 2", this.items)
        return this.items;
    }

    // 8. Vaciar carrito y mostrar cantidad en carrito.
    this.vaciarCarrito = function () {
        this.items = [];
        localStorage.clear()
        $("#contador").html(this.items.length);
    }

    // 9. Refleja en el id #contador la suma de items en carrito.
    $("#contador").html(this.SumaTotalItemsCarrito());

}

// 9. Refleja en el id #contador la suma de items en carrito.
$("#contador").html(carrito.SumaTotalItemsCarrito());
// console.group(carrito.SumaTotalItemsCarrito());

function mostrarProductosEnCarrito() {
    // localStorage.getItem("carrito")
    // console.log("Productos agregados ->", carrito.obtenerItems())
    carrito = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < carrito.length; i++) {
        // console.log([i]);
        $("#cart-items").append(`
            <tr>
                <th>${carrito[i]["descripcion"]}</th>
                <th>${carrito[i]["cantidad"]}</th>
                <th>${carrito[i]["precio"]}</th>
                <th>${(carrito[i]["cantidad"]) * (carrito[i]["precio"])}</th>
            </tr>
            `
        )
    }
}
// mostrarProductosEnCarrito()


// Función para mostrar descripción del producto seleccionado.
function mostrarDescripcion(event) {
    let descri = event.target.value;
    let found = baseDeDatos.find(elemento => elemento.producto == descri);
    // document.getElementById("demo").innerHTML = found.descripcion;
    $("#demo").html(found.descripcion);
    console.log("Producto ->", descri);
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

    console.log("Cantidad elegida ->", cantidadElegida)
    // console.log(valorElegidoEnPes)
    // console.log(valorElegidoEnUSD)
    // console.log(valorElegidoEnEur)
}

//////////////////////////// PRUEBAS ////////////////////////////

////////// CARRITO
// Que tenga las lineas de los productos que el usuario quiere agregar en su cotización
// Tendrá que verse Descripción, cantidad, precio.
// Poder modificar las cantidades desde el carrito.
// Poder borrar lineas desde el carrito.
// Que cada linea la cotice en pesos, dolares y euros.

////////// CONSTRUCCION DE LINEAS 
// Agregar productos al carrito. 
// Las lineas se componen por: Descripción del producto, Cantidad elegida, y su valor.

function agregarAlCarrito() {
    // const newItem = `{descripcion : ${$("#demo").html()}, cantidad : ${$("#volumen").val()}, precio: ${$("#valorPesos").html()}}`;
    const newItem = ({ descripcion: $("#demo").html(), cantidad: $("#volumen").val(), precio: $("#valorPesos").html() });
    carrito.agregarItem(newItem);
    // console.log("Item agregado ->", newItem.descripcion)
    // console.log("Productos agregados ->", carrito.obtenerItems())
    localStorage.setItem("carrito", JSON.stringify(carrito.obtenerItems()));
    $("#contador").html(carrito.SumaTotalItemsCarrito());

    carrito.obtenerItems().forEach(element => console.log("Debug element", element));

    $("#agregarAlCarrito").click(function () {

        $("#cart-items").append(`
            <tr>
                <th>${newItem.descripcion}</th>
                <th>${newItem.cantidad}</th>
                <th>${newItem.precio}</th>
                <th>${newItem.cantidad * newItem.precio}</th>
            </tr>
            `
        )
    })
    console.log("Productos agregados ->", carrito.obtenerItems())

    carrito.valorTotal()
}

////////// BORRAR CARRITO

function vaciarCarrito() {
    carrito.vaciarCarrito();
    $("#contador").html(carrito.SumaTotalItemsCarrito());
}
