function calcularEcuacion4() {
    let x, z, p, q, a, b, resultado, mensaje;

    x = parseFloat(prompt("Introduce el valor de x:"));
    z = parseFloat(prompt("Introduce el valor de z:"));
    p = parseFloat(prompt("Introduce el valor de p:"));
    q = parseFloat(prompt("Introduce el valor de q:"));
    a = parseFloat(prompt("Introduce el valor de a:"));
    b = parseFloat(prompt("Introduce el valor de b:"));

    resultado = (Math.pow(x - p, 2) / Math.pow(a, 2)) +
                  (Math.pow(z - q, 2) / Math.pow(b, 2));

    mensaje = "El resultado de la ecuación es " + resultado + ", ";

    if (resultado === 1) {
        mensaje += "por lo tanto la ecuación SI se cumple.";
    } else {
        mensaje += "por lo tanto la ecuación NO se cumple.";
    }

    alert(mensaje);
}
