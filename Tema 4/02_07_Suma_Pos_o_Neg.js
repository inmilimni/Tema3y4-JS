function Suma_Pos_o_Neg() {
    let Num1, Num2;

    Num1 = parseFloat(prompt("Introduzca un numero:"));
    Num2 = parseFloat(prompt("Introduzca otro numero:"));

    if (Num1 === 0 || Num2 === 0) {
        if (Num1 === 0 && Num2 > 0) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero positivo.");
        }

        if (Num1 === 0 && Num2 < 0) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero negativo.");
        }

        if (Num1 > 0 && Num2 === 0) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero positivo.");
        }

        if (Num1 < 0 && Num2 === 0) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero negativo.");
        }

        if (Num1 === 0 && Num2 === 0) {
            alert("La suma de " + Num1 + " y " + Num2 + " da 0.");
        }
    }

    if (Num1 > 0 && Num2 > 0) {
        alert("La suma de " + Num1 + " y " + Num2 + " da un numero positivo.");
    }

    if (Num1 < 0 && Num2 < 0) {
        alert("La suma de " + Num1 + " y " + Num2 + " da un numero negativo.");
    }

    if (Num1 > 0 && Num2 < 0) {
        if (Num1 === Num2 * -1) {
            alert("La suma de " + Num1 + " y " + Num2 + " da 0");
        }

        if (Num1 > Num2 * -1) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero positivo.");
        }

        if (Num1 < Num2 * -1) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero negativo.");
        }
    }

    if (Num1 < 0 && Num2 > 0) {
        if (Num1 * -1 === Num2) {
            alert("La suma de " + Num1 + " y " + Num2 + " da 0");
        }

        if (Num1 * -1 > Num2) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero negativo.");
        }

        if (Num1 * -1 < Num2) {
            alert("La suma de " + Num1 + " y " + Num2 + " da un numero positivo.");
        }
    }
}
