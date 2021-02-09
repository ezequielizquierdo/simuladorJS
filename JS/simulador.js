let baseDeDatos = [];
let cotizador = [];

class Producto {
    constructor(nombreProducto, descripcion, precioProducto, um, imagen) {
        this.producto = nombreProducto;
        this.descripcion = descripcion;
        this.precio = precioProducto;
        this.um = um;
        this.imagen = imagen;
    }
}

let productoUno = new Producto("cemento", "Cemento portland normal bolsa de 50 kg", 608.22, "bl", "https://www.rocasyminerales.net/wp-content/uploads/2018/08/Cemento.jpg");
let productoDos = new Producto("cal", "Cal común en bolsa x 25 kg", 261.24, "bl", "https://lh3.googleusercontent.com/proxy/8A9NpNJ3yOyLTQWmCAxVpUo7w05cg7V_Y2fAPgNwuJq8R5umU9uxD_bk9YlcrynE1RMxQJc0lrc-n5URAfbXYe_2loLyUInGaoJCZsIT-2rW_ZNte2EbFQ");
let productoTres = new Producto("adhesivo", "Adhesivo tipo Klaukol bolsa 30 kg", 847.86, "bl", "https://giliycia.com.ar/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/7/0/7066_01.jpg");
let productoCuatro = new Producto("cascote", "Cascote molido limpio x m3", 1696.02, "m3", "http://http2.mlstatic.com/D_146021-MLA20695436900_052016-O.jpg");
let productoCinco = new Producto("revoque", "Revoque Plástico tipo 'Revear Color' tambor x 25 kg", 7780.59, "m2", "https://http2.mlstatic.com/D_NQ_NP_735336-MLA44718019961_012021-V.jpg");
let productoSeis = new Producto("arena", "Arena", 1845.16, "m3", "https://http2.mlstatic.com/D_NQ_NP_882262-MLA41783229132_052020-V.jpg");


baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);


function saludo() {
    let nombre = prompt("Ingrese su nombre");
    if (nombre) {
        console.log(nombre);
        localStorage.setItem("nombre", nombre);
        document.getElementById("nombre-usuario").innerHTML = 'Hola ' + nombre + '. Vamos a cotizar!';
    } else {
        document.getElementById("nombre-usuario").innerHTML = 'Hola amigo. No se tu nombre, pero vamos a cotizar!';
    }
}
saludo();


function mostrarDescripcion(event) {
    let descri = event.target.value;
    let found = baseDeDatos.find(elemento => elemento.producto == descri);

    document.getElementById("demo").innerHTML = found.descripcion;

    console.log(descri);
}

function mostrarValor(event) {
    let montpes = event.target.value;
    let prueba = demo.innerText;
    let found = baseDeDatos.find(elemento => elemento.descripcion == prueba);

    document.getElementById("valorPesos").innerHTML = (montpes * found.precio).toFixed(2);
    document.getElementById("valorDolares").innerHTML = ((montpes * found.precio) / document.getElementById("cotidolar").innerHTML).toFixed(2);
    document.getElementById("valorEuros").innerHTML = ((montpes * found.precio) / document.getElementById("cotieuro").innerHTML).toFixed(2);

    // console.log(prueba);
    // console.log(found);
    // console.log(montpes * found.precio);
    // console.log(found.precio);
}









////////////////////////////
////////////////////////////
////////////////////////////

///////////////// AGREGAR AL CARRITO

// if (localStorage.getItem("cotizador") != null) {
//     cotizador = JSON.parse(localStorage.getItem("cotizador")); // Valido si el carrito tiene valores.
//     document.getElementById("cotizador").innerHTML = cotizador.length; // Esto debe estar cuando se inicializa el carrito, cuando se agrega un producto, y cuando se borra un producto.
// }
////////////////


///////////////// FUNCIONES PARA AGREGAR PRODUCTOS

// function agregarAlCotizador(producto) {
//     cotizador.push(producto); // Agregará el producto a cotización.
//     // console.log(carrito); // Imprimirá el carrito con los productos que vaya agregando.
//     localStorage.setItem("cotizador", JSON.stringify(cotizador)); // Creamos un localStorage para guardar el carrito por mas que se cierre la ventana.
//     // precio-total

//     let aux = [];
//     for (let i = 0; i < cotizador.length; i++) {
//         // aux += cotizador[i].precioProducto;
//     console.log(aux);
//     }

//     // document.getElementById("precio-total").innerHTML = "U$D" + aux;
//     document.getElementById("contador").innerHTML = cotizador.length // Esto debe estar cuando se inicializa el carrito, cuando se agrega un producto, y cuando se borra un producto.

// }

// function agregarAlCotizador(){
//     let valoresDelCotizador = localStorage.setItem("cotizador", JSON.stringify(cotizador));

// }