function Mi_Trunc(Num) {
    let Num_Entero;

    Num_Entero = 0;

    if (Num >= 0) {
        while (Num >= Num_Entero) {
            Num_Entero++;
        }

        Num_Entero--;
    }

    if (Num < 0) {
        while (Num <= Num_Entero) {
            Num_Entero--;
        }

        Num_Entero++;
    }

    return Num_Entero;
}

function Mil_Cent_Dece_Uni() {
    let Num, Und_Mil, Centenas, Decenas, Uni;

    Num = parseInt(prompt("Escriba un numero entero positivo:"));

    Uni = Num % 10;
    Decenas = Math.trunc(Num / 10) % 10;
    Centenas = Math.trunc(Num / 100) % 10;
    Und_Mil = Math.trunc(Num / 1000);

    alert("Num esta compuesto de " + Mi_Trunc(Und_Mil) + " unidades de mil " + Mi_Trunc(Centenas) + " Centenas " + Mi_Trunc(Decenas) + " Decenas " + Mi_Trunc(Uni) + " Unidades");
}





