function Num_Absoluto() {
    let Num, NumA;

    Num = parseFloat(prompt("Introduzca un numero para obtener su numero absoluto:"));

    if (Num <= 0) {
        NumA = Num * -1;
        alert("El numero absoluto de " + Num + " es " + NumA + ".");
    }

    if (Num > 0) {
        alert("El numero absoluto de " + Num + " es " + Num + ".");
    }
}

