let baseDeDatos = [];
let carrito = []
carrito = new Carrito();
$("#contador").html(carrito.SumaTotalItemsCarrito());


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
let productoSiete = new Producto("acero", "Acero de construcción tipo III diám. 12 mm", 101345.13, "ton");
let productoOcho = new Producto("ceramicaesmaltada", "Cerám. Esmalt. `Pietra Grafito` o similar 20 x 20 cm", 483.71, "m2");
let productoNueve = new Producto("ceramica", "Cerámica 20 x 20 blanco", 601.38, "bl");
let productoDiez = new Producto("baldoson", "Baldosón vereda cemento 60 x 40", 956.23, "m2");
let productoOnce = new Producto("calefactor", "Calefactor 3000 cal. TB incl. Ventilación", 15913.72, "un");
let productoDoce = new Producto("calefon", "Calefón 14 lts. Blanco TB", 24267.81, "un");
let productoTrece = new Producto("caño-PVC", "Caño PVC D= 110, 3.2 mm", 579.53, "m");
let productoCatorce = new Producto("caño-PPN", "Caño PPN Hidro 3 - AF y AC 13 mm", 112.12, "m");
let productoQuince = new Producto("caño-HG", "Caño HG 2 1/2", 2766.25, "m");
let productoDieciseis = new Producto("cocina", "Cocina 4 hornallas, blanca, s/parrilla", 25094.87, "un");
let productoDiecisiete = new Producto("caño-HG-revestido", "Caño HG revestido c/epoxi diám. 19 mm", 446, 21, "ml");
let productoDieciocho = new Producto("llave-de-paso", "Llave de paso con campana diám. 13 mm", 1501.13, "un");
let productoDiecinueve = new Producto("hormigon-elaborado", "Hormigón elaborado bombeado H30/15 ", 7370.81, "m3");
let productoVeinte = new Producto("instalacion-bomba", "Instalación de Bomba", 32017.94, "un");
let productoVeintiuno = new Producto("ladrillo-hueco", "Ladrillo hueco cerámico 8 x 18 x 33", 30633.82, "millar");
let productoVeintidos = new Producto("ladrillo-comun", "Ladrillo común estándar", 16081.50, "millar");
let productoVeintitres = new Producto("terciado", "Terciado fenólico común - Grandis o similar e= 19 mm", 769.86, "m2");
let productoVeinticuatro = new Producto("latex", "Látex para interiores blanco 1 x 20 lts ", 8214.72, "lata");
let productoVeinticinco = new Producto("esmalte", "Esmalte sintético blanco 1 x 20 lts", 13293.37, "lata");
let productoVeintiseis = new Producto("volquete", "Volquete 5 m3 en Capital Federal ", 3286.94, "un");
let productoVeintisiete = new Producto("inodoro", "Inodoro corto blanco ", 5540.81, "un");
let productoVeintiocho = new Producto("griferia", "Grifería tipo FV 295/15 ", 10509.07, "un");
let productoVeintinueve = new Producto("lanza", " Lanza de cierre lento ", 3276.32, "un");
let productoTreinta = new Producto("manga-incendio", "Manga incendio 45 x 20 m IRAM", 13068.23, "un");
let productoTreintayUno = new Producto("bañera", "Bañera chapa enlozada ", 24230.87, "un");
let productoTreintayDos = new Producto("membrana", "Membrana con terminación Aluminio e= 4 mm", 579.53, "m2");
let productoTreintayTres = new Producto("ascensor", "Ascensor 16 paradas c/cabina para 450 kg, 2 vel., 60 m/min ", 2635069.18, "un");
let productoTreintayCuatro = new Producto("mortero", "Mortero bombeable para contrapiso", 1036.43, "m2");
let productoTreintayCinco = new Producto("yeso", "Yeso proyectable", 21682.23, "ton");
let productoTreintaySeis = new Producto("liston", "Listón 1'x1'", 15.19, "ml");
let productoTreintaySiete = new Producto("hoja-placa", "Hoja placa MDF 4 mm, bastidor 35x50 mm 0.70x2.00 m", 6835.34, "un");
let productoTreintayOcho = new Producto("bajo-mesada", "Bajo mesada 4 cajones y 2 puertas 1.40x0.60 m", 27.989, 11, "un");
let productoTreintayNueve = new Producto("alacena", "Alacena aglomerado enchapado 1.40x0.60x0.30 m", 20476.97, "un");
let productoCuarenta = new Producto("frente-placar", "Frente de placar aglomerado enchapado corredizo 1.50x2.60 m", 32300.61, "un");
let productoCuarentayUno = new Producto("interior-placar", "Interior de placar 4 cajones estante y barral 1.50x2.60 m", 30037.93, "un");
let productoCuarentayDos = new Producto("marco-chapa", "Marco chapa BWG 18 s/contramarco 0.70x2.00 m ", 6540.54, "un");
let productoCuarentayTres = new Producto("ventana", "Ventana c/guía y cajón. Marco y hoja Aluminio prepintado blanco 1.70x1.40 m", 4977.93, "un");
let productoCuarentayCuatro = new Producto("cortina", "Cortina de enrollar PVC ref. c/eje chapa 1.70x1.50 m", 847.86, "bl");
let productoCuarentayCinco = new Producto("puerta-doble-chapa", "Puerta doble chapa F60 c/herrajes y cierrapuerta 0.90x2.05 m", 51540.66, "un");
let productoCuarentaySeis = new Producto("vidrio", "Vidrio Float Transparente 4mm. con colocación", 3553.75, "m2");
let productoCuarentaySiete = new Producto("caño-electricidad", "Caño de electricidad chapa 3/4'' liviano ", 109.71, "ml");
let productoCuarentayOcho = new Producto("modulo-llave", "Módulo llave tipo EDY Brina 1 punto", 99.03, "un");
let productoCuarentayNueve = new Producto("cable-VN", "Cable VN 2211 1x2.5mm2 en rollo x 100m", 3531.94, "rollo");
let productoCincuenta = new Producto("interruptor", "Interruptor Termomagnético 2 x 16 amp", 1004.42, "un");

baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);
baseDeDatos.push(productoSiete);
baseDeDatos.push(productoOcho);
baseDeDatos.push(productoNueve);
baseDeDatos.push(productoDiez);
baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);
baseDeDatos.push(productoSiete);
baseDeDatos.push(productoOcho);
baseDeDatos.push(productoNueve);
baseDeDatos.push(productoDiez);
baseDeDatos.push(productoOnce);
baseDeDatos.push(productoDoce);
baseDeDatos.push(productoTrece);
baseDeDatos.push(productoCatorce);
baseDeDatos.push(productoQuince);
baseDeDatos.push(productoDieciseis);
baseDeDatos.push(productoDiecisiete);
baseDeDatos.push(productoDieciocho);
baseDeDatos.push(productoDiecinueve);
baseDeDatos.push(productoVeinte);
baseDeDatos.push(productoVeintiuno);
baseDeDatos.push(productoVeintidos);
baseDeDatos.push(productoVeintitres);
baseDeDatos.push(productoVeinticuatro);
baseDeDatos.push(productoVeinticinco);
baseDeDatos.push(productoVeintiseis);
baseDeDatos.push(productoVeintisiete);
baseDeDatos.push(productoVeintiocho);
baseDeDatos.push(productoVeintinueve);
baseDeDatos.push(productoTreinta);
baseDeDatos.push(productoTreintayUno);
baseDeDatos.push(productoTreintayDos);
baseDeDatos.push(productoTreintayTres);
baseDeDatos.push(productoTreintayCuatro);
baseDeDatos.push(productoTreintayCinco);
baseDeDatos.push(productoTreintaySeis);
baseDeDatos.push(productoTreintaySiete);
baseDeDatos.push(productoTreintaySiete);
baseDeDatos.push(productoTreintayOcho);
baseDeDatos.push(productoTreintayNueve);
baseDeDatos.push(productoCuarenta);
baseDeDatos.push(productoCuarentayUno);
baseDeDatos.push(productoCuarentayDos);
baseDeDatos.push(productoCuarentayTres);
baseDeDatos.push(productoCuarentayCuatro);
baseDeDatos.push(productoCuarentayCinco);
baseDeDatos.push(productoCuarentaySeis);
baseDeDatos.push(productoCuarentaySiete);
baseDeDatos.push(productoCuarentayOcho);
baseDeDatos.push(productoCuarentayNueve);
baseDeDatos.push(productoCincuenta);

////////////// Inicio Carrito //////////////

function Carrito() {

    // Método para usar Ajax en la función carrito.
    this.retornarValorDeDolar = function () {
        let test = {}

        $.ajax({
            url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
            type: "get",
            async: false,
            success: function (response) {
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

    // Agregar items al carrito.
    this.agregarItem = function (item) {
        return this.items.push(item);
    }

    // Suma totales de los productos en carrito.
    this.valorTotal = function () {
        var total = 0;
        this.items.forEach(function (obj) {
            total += (obj.unitario * obj.cantidad);
        });
        $("#total-value").html("$" + total.toFixed(2));
    }

    // Valor total pasado a USD
    this.valorTotalenUSD = function () {
        let pruebaDolar = this.retornarValorDeDolar();
        var valorDolarDosDecimales = puntoxcoma(pruebaDolar.valorDolarCompra);
        var totalUSD = 0;
        this.items.forEach(function (obj) {
            totalUSD += (obj.precio * obj.cantidad) / parseFloat(pruebaDolar.valorDolarCompra);
        });
        $("#total-value-usd").html("$" + totalUSD.toFixed(2));
    }

    // Valor total pasado a EUR
    this.valorTotalenEUR = function () {
        var totalEUR = 0;
        this.items.forEach(function (obj) {
            totalEUR += (obj.precio * obj.cantidad) / $("#cotieuro").html();
        });
        $("#total-value-eur").html("$" + totalEUR.toFixed(2));
    }

    // Muestra todos los elementos existentes en items[]
    this.obtenerItems = function () {
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

    // Mostrar los productos en el carrito
    this.mostrarProductosEnCarrito = function () {
        carrito.items = JSON.parse(localStorage.getItem("carrito"));
        for (let i = 0; i < carrito.items.length; i++) {
            $("#cart-items").append(`
                <tr>
                    <th>${carrito.items[i].descripcion}</th>
                    <th>${carrito.items[i].cantidad}</th>
                    <th>${carrito.items[i].um}</th>
                    <th>${"$" + carrito.items[i].unitario}</th>
                    <th>${"$" + ((carrito.items[i].cantidad) * (carrito.items[i].unitario)).toFixed(2)}</th>
                    <th class="text-center botonborrar"onclick="borrarLinea(${i})"><span type="button">x</span></th>
                </tr>
            `)
        }

        this.valorTotal()
        this.valorTotalenUSD()
        this.valorTotalenEUR()
        // Refleja en el id #contador la suma de items en carrito.
        $("#contador").html(this.SumaTotalItemsCarrito());
    }

    if (localStorage.getItem("carrito") != null) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        this.items = carrito;
        this.mostrarProductosEnCarrito()
    }
}

// Función para mostrar descripción del producto seleccionado.
function mostrarDescripcion(event) {
    let descri = event.target.value;
    let found = baseDeDatos.find(elemento => elemento.producto == descri);
    $("#demo").html(found.descripcion);
    $("#unitario").html(found.precio);
    $("#um").html(found.um);
}

// Función para mostrar los valores (en $, USD, y EUR) de acuerdo a la cantidad ingresada
function mostrarValor(event) {

    this.retornarValorDeDolarEnCuadro = function () {
        let test = {}

        $.ajax({
            url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
            type: "get",
            async: false,
            success: function (valor) {
                test = {
                    valorDolarCompra: valor[0].casa['compra']
                }
            },
            error: function () {
                console.log("error")
            }
        });
        return test
    }

    this.cambiarPuntoxComa = function puntoxcoma(valor) {
        let a = valor;
        if (valor.indexOf(",")) {
            a = valor.replace(",", ".");
        }
        return parseFloat(a);
    }

    let pruebaDolarEnMostrarValor = this.retornarValorDeDolarEnCuadro();
    dolarConDosDecimales = cambiarPuntoxComa(pruebaDolarEnMostrarValor.valorDolarCompra)
    let cantidadElegida = event.target.value;
    let prueba = demo.innerText;
    let found = baseDeDatos.find(elemento => elemento.descripcion == prueba);

    let valorElegidoEnPes = $("#valorPesos").html((cantidadElegida * found.precio).toFixed(2));
    let valorElegidoEnUSD = $("#valorDolares").html(((cantidadElegida * found.precio).toFixed(2) / dolarConDosDecimales).toFixed(2));
    let valorElegidoEnEur = $("#valorEuros").html(((cantidadElegida * found.precio) / $("#cotieuro").html()).toFixed(2));
}

// Función para borrar lineas en modal
function borrarLinea(i) {

    let item = carrito.items.splice(i, 1);
    console.log("Productos que quedan en carrito ->", carrito.items)
    localStorage.setItem("carrito", JSON.stringify(carrito.items));

    $("#cart-items").html("")
    $("#total-value").html("");
    $("#total-value-usd").html("");
    $("#total-value-eur").html("");

    carrito.mostrarProductosEnCarrito();
    $("#contador").html(carrito.SumaTotalItemsCarrito());
}

// Función para agregar items en carrito
function agregarAlCarrito() {
    const newItem = ({ descripcion: $("#demo").html(), cantidad: $("#volumen").val(), um: $("#um").html(), unitario: $("#unitario").html(), precio: $("#valorPesos").html() });
    carrito.agregarItem(newItem);
    localStorage.setItem("carrito", JSON.stringify(carrito.obtenerItems()));
    $("#contador").html(carrito.SumaTotalItemsCarrito());
    $("#contadorarriba").html(carrito.SumaTotalItemsCarrito());
    carrito.obtenerItems().forEach(element => console.log("Elementos en cotización", element));
    let i = carrito.items.length - 1;

    $("#cart-items").append(`
            <tr>
                <th>${newItem.descripcion}</th>
                <th>${newItem.cantidad}</th>
                <th>${newItem.um}</th>
                <th>${"$" + newItem.unitario}</th>
                <th>${"$" + (newItem.cantidad * newItem.unitario).toFixed(2)}</th>
                <th class="text-center botonborrar" onclick="borrarLinea(${i})"><span type="button">x</span></th>
            </tr>
            `
    )
    carrito.valorTotal()
    carrito.valorTotalenUSD()
    carrito.valorTotalenEUR()
    $("#contador").html(carrito.SumaTotalItemsCarrito());
}

// Funcion para vaciar carrito
function vaciarCarrito() {
    carrito.vaciarCarrito();
    $("#contador").html(carrito.SumaTotalItemsCarrito());
    $("#contadorarriba").html(carrito.SumaTotalItemsCarrito());
}

// Fecha en modal
var today = new Date();
var m = today.getMonth() + 1;
var mes = (m < 10) ? "0" + m : m;
$("#fechaactual").html("Fecha: " + today.getDate() + "/" + mes + "/" + today.getFullYear());

// Ajax valores en USD

$.get({
    url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
    success: function (valor, estado) {
        var probandoValorCompra = puntoxcoma(valor[0].casa["compra"])
        $("#valorcompraUSD").html(probandoValorCompra);
        var probandoValorVenta = puntoxcoma(valor[0].casa["venta"])
        $("#valorventaUSD").html(probandoValorVenta);
    }
})

// Fecha de actualización de datos.
$("#fechaactualizadausd").html("Actualizado el: " + today.getDate() + "/" + mes + "/" + today.getFullYear());
$("#fechaactualizadaeur").html("Actualizado el: " + today.getDate() + "/" + mes + "/" + today.getFullYear());

// Cambiar punto x coma 
function puntoxcoma(valor) {
    let a = valor;
    if (valor.indexOf(",")) {
        a = valor.replace(",", ".");
    }
    return parseFloat(a);
}