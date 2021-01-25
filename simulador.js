///// COTIZADOR DE MATERIALES ########//
// Consultar materiales hasta que no quiera seguir consultando.

var nombre = prompt("Ingrese su nombre");
alert("Bienvenido " + nombre + ". Vamos a cotizar!");

function cotizacion () {

    var materiales = [];
    materiales["cemento"] = ["Cemento portland normal bolsa de 50 kg", 608.22];
    materiales["cal"] = ["Cal común en bolsa x 25 kg", 261.24];
    materiales["adhesivo"] = ["Adhesivo tipo Klaukol bolsa 30 kg", 847.86];
    materiales["cascote"] = ["Cascote molido limpio x m3", 1696.02];
    materiales["revoque"] = ["Revoque Plástico tipo 'Revear Color", 7780.59];
    materiales["arena"] = ["Arena", 1845.16];
    materiales["acero"] = ["Acero de construcción tipo III diám. 12 mm", 77756.97];
    materiales["ceramica"] = ["Cerám. Esmalt. 'Pietra Grafito' o similar 20 x 20 cm", 37971];

    var continuar1 = 'si';
    
    do {
        var material = prompt("Que material queres consultar?").toLowerCase();

        if (materiales[material] == undefined) {
            alert("No tenemos ese material en stock");
            continuar1 = prompt("Quieres consultar algun otro material? Si o No").toLowerCase();        
        }

    } while (materiales[material] == undefined && continuar1 == 'si');

    if (continuar1 == 'si') {

        console.log('Material consultado: ', materiales[material]);
        
        var coti = parseInt(prompt("Que cantidad queres cotizar?").toLowerCase());

        console.log('Valor $: ', materiales[material][1] * coti);           

        var continuar2 = prompt("Quieres consultar algun otro material? Si o No").toLowerCase();

        if(continuar2 === "si"){
            cotizacion();
        } else {
            alert("Muchas gracias por consultar");
        }        
    } else {
       alert("Muchas gracias por consultar");
    }
}
cotizacion();