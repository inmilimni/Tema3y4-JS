function calcularEcuacion() {
    let x, z, c, a, resultado, mensaje;

    x = parseFloat(prompt("Introduce el valor de x:"));
    z = parseFloat(prompt("Introduce el valor de z:"));
    c = parseFloat(prompt("Introduce el valor de c:"));
    a = parseFloat(prompt("Introduce el valor de a:"));

    resultado = Math.pow((Math.pow(x + c, 2) + Math.pow(z, 2)), 1/2) +
                Math.pow((Math.pow(x - c, 2) + Math.pow(z, 2)), 1/2) -
                2 * a;

    mensaje = "El resultado de la ecuación es " + resultado + ", ";

    if (resultado === 1) {
        mensaje += "por lo tanto la ecuación SI se cumple.";
    } else {
        mensaje += "por lo tanto la ecuación NO se cumple.";
    }

    alert(mensaje);
}
