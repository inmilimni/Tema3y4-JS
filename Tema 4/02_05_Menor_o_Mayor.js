function Menor_o_Mayor() {
    let Num1, Num2;

    Num1 = parseFloat(prompt("Introduzca un numero entero:"));
    Num2 = parseFloat(prompt("Introduzca otro numero entero:"));

    if (Num1 === Num2) {
        alert("Los numeros " + Num1 + " y " + Num2 + " son iguales.");
    }

    if (Num1 > Num2) {
        alert(Num1 + " es mayor a " + Num2 + ".");
    }

    if (Num1 < Num2) {
        alert(Num1 + " es menor a " + Num2 + ".");
    }
}

