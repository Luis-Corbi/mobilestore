// datos del usuario
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
// cuentas
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));
let operacion = prompt("selecciona un operacion");
resultado = calculadora(numero1, numero2, operacion);
alert(calculadora(numero1, numero2, operacion));
mostrar(resultado);

const mostrar = (mensaje) => {
    console.log(mensaje);
}
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let resultado = 0;
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
