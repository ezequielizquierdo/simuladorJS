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

function Carrito() {

    // Método para usar Ajax en la función carrito.
    this.retornarValorDeDolar = function () {
        let test = {}

        $.ajax({
            url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
            type: "get",
            async: false,
            success: function (response) {
                // console.log("Prueba response", response)
                // console.log("Prueba 1", response[0].casa["compra"])
                // console.log("Debug test", test)
                test = {
                    valorDolarCompra: response[0].casa['compra']
                }
            },
            error: function () {
                console.log("error")
            }
        });
        return test
    }

    this.items = []

    // Método para que nos de la cantidad actual del carrito.
    this.SumaTotalItemsCarrito = function () {
        return this.items.length;
    }

    // Método para agregar un nuevo item al carrito actual.
    // PARA MEJORAR: Antes de cargar un nuevo elemento al carrito
    // habria que ver si ese elemento existe en el carrito.
    this.agregarItem = function (item) {
        return this.items.push(item);
    }

    // Suma totales de los productos en carrito.
    this.valorTotal = function () {
        var total = 0;
        this.items.forEach(function (obj) {
            total += parseInt(obj.precio * obj.cantidad);
        });
        // console.log("Total acumulado $ ", total);
        $("#total-value").html("$" + total.toFixed(2));
    }


    //////////////
    this.valorTotalenUSD = function () {
        let pruebaDolar = this.retornarValorDeDolar();
        // console.log("Probando en valorDolar", pruebaDolar.valorDolarCompra)
        var totalUSD = 0;
        // console.log("cotizaciones 2", this.cotizaciones)
        // console.log(this.items)
        this.items.forEach(function (obj) {
            // console.log("debug obj", obj)
            // console.log("obj.precio", obj.precio)
            // console.log("obj.cantidad", obj.cantidad)
            // console.log("dolarcompra con parseFloat", parseFloat(pruebaDolar.valorDolarCompra))
            // console.log("multi objetos", obj.precio * obj.cantidad)


            totalUSD += (obj.precio * obj.cantidad) / parseFloat(pruebaDolar.valorDolarCompra);
        });
        // console.log("Total acumulado USD ", totalUSD);
        $("#total-value-usd").html("$" + totalUSD.toFixed(2));

    }
    //////////////


    this.valorTotalenEUR = function () {
        var totalEUR = 0;
        this.items.forEach(function (obj) {
            totalEUR += (obj.precio * obj.cantidad) / $("#cotieuro").html();
        });
        // console.log("Total acumulado EUR ", totalEUR);
        $("#total-value-eur").html("$" + totalEUR.toFixed(2));
    }

    // Muestra todos los elementos existentes en items[]
    this.obtenerItems = function () {
        // console.log("debug 2", this.items)
        return this.items;
    }

    // Vaciar carrito y mostrar cantidad en carrito.
    this.vaciarCarrito = function () {
        this.items = [];
        localStorage.clear()
        $("#cart-items").html("")
        $("#total-value").html("");
        $("#total-value-usd").html("");
        $("#total-value-eur").html("");
        $("#contador").html(this.items.length);
        $("#contadorarriba").html(this.items.length);

    }

    this.mostrarProductosEnCarrito = function () {
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
        this.valorTotal()
        this.valorTotalenUSD()
        this.valorTotalenEUR()
    }

    // Refleja en el id #contador la suma de items en carrito.
    $("#contador").html(this.SumaTotalItemsCarrito());
    $("#contadorarriba").html(this.SumaTotalItemsCarrito());



    if (localStorage.getItem("carrito") != null) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        this.items = carrito;
        this.mostrarProductosEnCarrito()
    }
}

$("#contador").html(carrito.SumaTotalItemsCarrito());
$("#contadorarriba").html(carrito.SumaTotalItemsCarrito());


// Función para mostrar descripción del producto seleccionado.
function mostrarDescripcion(event) {
    let descri = event.target.value;
    let found = baseDeDatos.find(elemento => elemento.producto == descri);
    // document.getElementById("demo").innerHTML = found.descripcion;
    $("#demo").html(found.descripcion);
    // console.log("Producto ->", descri);
}

// Función para mostrar los valores (en $, USD, y EUR) de acuerdo a la cantidad ingresada
function mostrarValor(event) {

    this.retornarValorDeDolarEnCuadro = function () {
        let test = {}

        $.ajax({
            url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
            type: "get",
            async: false,
            success: function (response) {
                // console.log("Prueba response dentro de mostrarValor", response)
                // console.log("Prueba dentro de mostrarValor", response[0].casa["compra"])
                // console.log("Debug test en mostrarValor", test)

                test = {
                    valorDolarCompra: response[0].casa['compra']
                }
            },
            error: function () {
                console.log("error")
            }
        });
        return test
    }
    
    let pruebaDolarEnMostrarValor = this.retornarValorDeDolarEnCuadro();
    // console.log("Probando en valorDolar", pruebaDolarEnMostrarValor.valorDolarCompra)
    let cantidadElegida = event.target.value;
    let prueba = demo.innerText;
    let found = baseDeDatos.find(elemento => elemento.descripcion == prueba);


    // var valorElegido = document.getElementById("valorPesos").innerHTML = (cantidadElegida * found.precio).toFixed(2);
    let valorElegidoEnPes = $("#valorPesos").html((cantidadElegida * found.precio).toFixed(2));
    // document.getElementById("valorDolares").innerHTML = ((cantidadElegida * found.precio) / document.getElementById("cotidolar").innerHTML).toFixed(2);
    let valorElegidoEnUSD = $("#valorDolares").html((cantidadElegida * found.precio) / parseFloat(pruebaDolarEnMostrarValor.valorDolarCompra).toFixed(2));
    // document.getElementById("valorEuros").innerHTML = ((cantidadElegida * found.precio) / document.getElementById("cotieuro").innerHTML).toFixed(2);
    let valorElegidoEnEur = $("#valorEuros").html(((cantidadElegida * found.precio) / $("#cotieuro").html()).toFixed(2));

    // console.log("Cantidad elegida ->", cantidadElegida)
    // console.log(valorElegidoEnPes)
    // console.log(valorElegidoEnUSD)
    // console.log(valorElegidoEnEur)

}

//////////////////////////// PRUEBAS ////////////////////////////

////////// CONSTRUCCION DE LINEAS 

function agregarAlCarrito() {
    const newItem = ({ descripcion: $("#demo").html(), cantidad: $("#volumen").val(), precio: $("#valorPesos").html() });
    carrito.agregarItem(newItem);
    // console.log("Item agregado ->", newItem.descripcion)
    // console.log("Productos agregados ->", carrito.obtenerItems())
    localStorage.setItem("carrito", JSON.stringify(carrito.obtenerItems()));
    $("#contador").html(carrito.SumaTotalItemsCarrito());
    $("#contadorarriba").html(carrito.SumaTotalItemsCarrito());


    carrito.obtenerItems().forEach(element => console.log("Elementos en cotización", element));

    $("#cart-items").append(`
            <tr>
                <th>${newItem.descripcion}</th>
                <th>${newItem.cantidad}</th>
                <th>${newItem.precio}</th>
                <th>${newItem.cantidad * newItem.precio}</th>
            </tr>
            `
    )
    carrito.valorTotal()
    carrito.valorTotalenUSD()
    carrito.valorTotalenEUR()

}

////////// BORRAR CARRITO

function vaciarCarrito() {
    carrito.vaciarCarrito();
    $("#contador").html(carrito.SumaTotalItemsCarrito());
    $("#contadorarriba").html(carrito.SumaTotalItemsCarrito());

}

//////////  FECHA EN MODAL

var today = new Date();
var m = today.getMonth() + 1;
var mes = (m < 10) ? "0" + m : m;
$("#fechaactual").html("Fecha: " + today.getDate() + "/" + mes + "/" + today.getFullYear());


////////// AJAX VALORES USD

$.get({
    url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
    success: function (valor, estado) {
        // console.log("valor", valor)
        let cotizaciondeldiacompra = valor[0].casa["compra"]
        let dolarcompra = $("#valorcompraUSD").html(cotizaciondeldiacompra);
        // console.log(dolarcompra)
        let cotizaciondeldiaventa = valor[0].casa["venta"];
        let dolarventa = $("#valorventaUSD").html(cotizaciondeldiaventa);
        // console.log(dolarventa)
    }
})

$("#fechaactualizadausd").html("Actualizado el: " + today.getDate() + "/" + mes + "/" + today.getFullYear());
$("#fechaactualizadaeur").html("Actualizado el: " + today.getDate() + "/" + mes + "/" + today.getFullYear());
