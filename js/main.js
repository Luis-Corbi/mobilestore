// datos del usuario
function saludar() {
const cantidad_intentos = 3; // cambio para la clase 3
for (let j = 1; j <= cantidad_intentos; j++) {
let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");
if ((nombreIngresado === "") || (apellidoIngresado === "")) {
    alert("Error, ingrese datos válidos")
}
else if ((nombreIngresado != "") && (apellidoIngresado != "")){
     alert("hola " + nombreIngresado + " " + apellidoIngresado);
     console.log("Hola " + nombreIngresado + " " + apellidoIngresado);
     break;
}
}
}
// cuentas
function solicitarinformacion() {
let numero1 = parseInt(prompt("Ingrese el precio de un juego"));
let numero2 = parseInt(prompt("Ingrese el precio de un segundo juego"));
let operacion = prompt("selecciona una operaciósn");
let resultado = `El resultado es ${calculadora(numero1, numero2, operacion)}`;
alert(`El resultado es ${calculadora(numero1, numero2, operacion)}`);
mostrar(resultado);
}
const mostrar = (mensaje) => {
    console.log(mensaje);
}
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let resultado = 0;
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "SUMA".toLowerCase() :
        case "+":
            return numero1 + numero2;
            break;
        case "RESTA".toLowerCase() :
        case "-":
            return numero1 - numero2;
            break;
        case "MULTIPLICACION".toLowerCase() :
        case "*":
            return numero1 * numero2;
            break;
        case "DIVISION".toLowerCase() :
        case "/":
            if(numero2 === 0){
                return(alert(`no se puede dividir por 0`))
            }
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
// desafio 5
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const productos = [];
productos.push(new Producto("Resident Evil Village", "60"));
productos.push(new Producto("Battlefield 2042", "65"));
productos.push(new Producto("Horizon Zero Dawn", "40"));
productos.push(new Producto("Detroit: Become Human", "40"));
productos.push(new Producto("Days Gone", "60"));
productos.push(new Producto("New World", "24"));
productos.push(new Producto("Sea of Thieves", "15"));

for (const producto of productos) {
    producto.sumaIva();
}
console.log(productos);

saludar();
solicitarinformacion();