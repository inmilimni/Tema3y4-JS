function calcularEcuacion1() {
    let x, a, z, b, resultado, mensaje;

    x = parseFloat(prompt("Introduce el valor de x:"));
    a = parseFloat(prompt("Introduce el valor de a:"));
    z = parseFloat(prompt("Introduce el valor de z:"));
    b = parseFloat(prompt("Introduce el valor de b:"));

    resultado = Math.pow(Math.pow(x - a, 2) + Math.pow(z - b, 2), 1/2);

    mensaje = "El resultado es: " + resultado;

    alert(mensaje);
}
