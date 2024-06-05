function Par_o_Impar() {
    let Num;

    Num = parseInt(prompt("Ingresa un digito para saber si es par o impar (Ej: 4):"));

    if (Num % 2 === 0) {
        alert("El numero " + Num + " es par.");
    } else {
        alert("El numero " + Num + " es impar.");
    }
}

