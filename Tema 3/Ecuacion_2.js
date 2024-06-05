function calcularEcuacion2() {
    let x, a, z, b, r, resultado, mensaje;

    x = parseFloat(prompt("Introduce el valor de x:"));
    a = parseFloat(prompt("Introduce el valor de a:"));
    z = parseFloat(prompt("Introduce el valor de z:"));
    b = parseFloat(prompt("Introduce el valor de b:"));
    r = parseFloat(prompt("Introduce el valor de r:"));

    resultado = Math.pow(x - a, 2) + Math.pow(z - b, 2) - r;

    if (resultado === 0) {
        mensaje = "La ecuación se cumple.";
    } else {
        mensaje = "La ecuación no se cumple.";
    }

    alert(mensaje);
}
