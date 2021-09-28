// datos del usuario
function saludar(){
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
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));
let operacion = prompt("selecciona un operacion");
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
        case "Suma":
        case "SUMA":
        case "suma":
        case "+":
            return numero1 + numero2;
            break;
        case "Resta":
        case "RESTA":
        case "resta":
        case "-":
            return numero1 - numero2;
            break;
        case "Multiplicacion":
        case "MULTIPLICACION":
        case "multiplicacion":
        case "*":
            return numero1 * numero2;
            break;
        case "Division":
        case "DIVISION":
        case "division":
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
const producto1 = new Producto("Resident Evil Village", "60");
const producto2 = new Producto("Battlefield 2042", "65");
const producto3 = new Producto("Horizon Zero Dawn", "40");
const producto4 = new Producto("Detroit: Become Human", "40");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

saludar();
solicitarinformacion();