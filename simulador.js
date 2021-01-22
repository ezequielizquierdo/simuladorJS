class Producto {
    constructor(nombreMarca, precioProducto) {
        this.marca = nombreMarca;
        this.precio = precioProducto;
    }
}

let productoUno = new Producto("Cemento portland normal bolsa de 50 kg", 608.22);
let productoDos = new Producto("Cal común en bolsa x 25 kg", 261.24);
let productoTres = new Producto("Adhesivo tipo Klaukol bolsa 30 kg", 847.86);
let productoCuatro = new Producto("Cascote molido limpio x m3", 1696.02);
let productoCinco = new Producto("Revoque Plástico tipo 'Revear Color' tambor x 25 kg", 7780.59);
let productoSeis = new Producto("Arena", 1845.16);

const baseDeDatos = [productoUno, productoDos, productoTres, productoCuatro];

///// COTIZADOR DE MATERIALES /////
//Consultar materiales hasta que no quiera seguir consultando.

var nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre + ". Vamos a cotizar!");

function cotizacion (){
    var material = prompt("Que material queres consultar?");
    console.log(material);

        switch(material){
            case "Cemento":
            case "cemento":     
                console.log("El valor unitario de " + productoUno.marca + " es " + productoUno.precio + "/ bl");
            break;
            case "Cal":
            case "cal": 
                console.log("El valor unitario de " + productoDos.marca + " es " + productoDos.precio + "/ bl");
            break;
            case "Adhesivo":
            case "adhesivo":
                console.log("El valor unitario de " + productoTres.marca + " es " + productoTres.precio + "/ bl");
            break;
            case "Cascote":
            case "cascote": 
            console.log("El valor unitario de " + productoCuatro.marca + " es " + productoCuatro.precio + "/ m3");
            break;
            case "Revoque":
            case "revoque":
                console.log("El valor unitario de " + productoCinco.marca + " es " + productoCinco.precio + "/ m2")
            break;
            case "Arena":
            case "arena":
                console.log("El valor unitario de " + productoSeis.marca + " es " + productoSeis.precio + "/ m3 ")
            break;
            default:
                console.log("No tenemos aún en stock el material buscado");
            break;

        }

    var coti = parseInt(prompt("Que cantidad queres cotizar?"));

    if(material == "cemento" || material == "Cemento"){
        console.log("Tu cotización es" + "$ " + (coti * productoUno.precio));
    } else if (material == "cal" || material == "Cal") {
        console.log("Tu cotización es $ " + (coti * productoDos.precio));
    } else if (material == "adhesivo" || material == "Adhesivo") {
        console.log("Tu cotización es $ " + (coti * productoTres.precio));
    } else if (material == "cascote" || material == "Cascote") {
        console.log("Tu cotización es $ " + (coti * productoCuatro.precio));
    } else if (material == "revoque" || material == "Revoque") {
        console.log("Tu cotización es $ " + (coti * productoCinco.precio));
    } else if (material == "arena" || material == "Arena") {
        console.log("Tu cotización es $ " + (coti * productoSeis.precio));
    } else {
        console.log("No hay mas stock");
    }

    var material = prompt("Quieres consultar algun otro material? Si o No");
    if(material === "si" || material === "Si"){
        cotizacion();
    } else {
        alert("Muchas gracias por consultar");
    }
}

cotizacion();