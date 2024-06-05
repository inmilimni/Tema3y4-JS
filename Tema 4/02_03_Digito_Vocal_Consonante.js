function DigitoVocalConsonante() {
    let Car, mensaje;

    Car = prompt("Ingrese un caracter alfanumérico para saber si es una vocal, una consonante o un digito (Ej: A):").toUpperCase();

        if (Car === "0" || Car === "1" || Car === "2" || Car === "3" || Car === "4" || Car === "5" || Car === "6" || Car === "7" || Car === "8" || Car === "9") {
            mensaje = "Es un digito";
        } else if (Car === "A" || Car === "E" || Car === "I" || Car === "O" || Car === "U") {
            mensaje = "Es una vocal";
        } else if (Car >= "A" && Car <= "Z"){
            mensaje = "Es una consonante";
        } else {
        mensaje = "Por favor, ingresa un caracter válido";
    }

    alert(mensaje);
}

