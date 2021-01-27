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
let productoTres = new Producto("adhesivo" ,"Adhesivo tipo Klaukol bolsa 30 kg", 847.86, "bl");
let productoCuatro = new Producto("cascote", "Cascote molido limpio x m3", 1696.02, "m3");
let productoCinco = new Producto("revoque", "Revoque Plástico tipo 'Revear Color' tambor x 25 kg", 7780.59, "m2");
let productoSeis = new Producto("arena", "Arena", 1845.16, "m3");

const baseDeDatos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis];

var nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre + ". Vamos a cotizar!");

function cotizacion (){

    var material = prompt("Que material queres consultar?").toLowerCase();
    
    const found = baseDeDatos.find(elemento => elemento.producto.toLowerCase() == material);
    
    console.log(found);

    if(!found){
        alert("No tenemos ese producto");
        console.log("El Material elegido no está en el inventario");
        
        material = prompt("Quieres consultar algun otro material? Si o No").toLowerCase();
        if(material === "si"){
            cotizacion();
        } else {
            alert("Muchas gracias por consultar");
        }

    } else {
        
        var coti = parseInt(prompt("Que cantidad queres cotizar?"));
        console.log("Tu consulta por", found.descripcion, "por", coti, found.um, "es $: ", (coti * found.precio));  
            
        material = prompt("Quieres consultar algun otro material? Si o No").toLowerCase();
           
        if(material === "si"){
            cotizacion();
        } else {
            alert("Muchas gracias por consultar");
        }
    }
}

cotizacion(); 