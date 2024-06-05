function ABisiesto() {
    let Year, mensaje;

    Year = parseInt(prompt("Ingrese un año para saber si es bisiesto o común (Ej: 2000):"));

    if (Year >= 400 && Year % 400 === 0) {
        mensaje = "Es bisiesto";
    } else if (Year >= 100 && Year % 100 === 0) {
        mensaje = "No es bisiesto";
    } else if (Year % 4 === 0) {
        mensaje = "Es bisiesto";
    } else {
        mensaje = "No es bisiesto";
    }

    alert(mensaje);
}

