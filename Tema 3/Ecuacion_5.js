function calcularAreaTrapecio() {
    let b1, b2, h, resultado, mensaje;

    b1 = parseFloat(prompt("Introduce la longitud de la base (b1):"));
    b2 = parseFloat(prompt("Introduce la longitud de la base (b2):"));
    h = parseFloat(prompt("Introduce la altura del trapecio (h):"));

    resultado = ((b1 + b2) / 2) * h;

    mensaje = "El área del trapecio es: " + resultado;

    alert(mensaje);
}
