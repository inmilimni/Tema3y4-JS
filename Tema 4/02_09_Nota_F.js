function Nota_F() {
    let Nota1, Nota2, Q1, Q2, P1, P2, Nota_Final;

    Nota1 = parseFloat(prompt("Introduce la nota obtenida en el Parcial 1:"));
    if (Nota1 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    Nota2 = parseFloat(prompt("Introduce la nota obtenida en el Parcial 2:"));
    if (Nota2 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    Q1 = parseFloat(prompt("Introduce la nota obtenida en el Quiz 1:"));
    if (Q1 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    Q2 = parseFloat(prompt("Introduce la nota obtenida en el Quiz 2:"));
    if (Q2 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    P1 = parseFloat(prompt("Introduce la nota obtenida en el Proyecto 1:"));
    if (P1 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    P2 = parseFloat(prompt("Introduce la nota obtenida en el Proyecto 2:"));
    if (P2 < 0) {
        alert("Los números tienen que ser positivos.");
        return;
    }

    Nota_Final = 0.5 * ((Nota1 + Nota2) / 2) + 0.3 * ((Q1 + Q2) / 2) + 0.2 * ((P1 + P2) / 2);

    alert("La nota final es: " + Nota_Final);

    if (Nota_Final < 9.5 && Nota_Final >= 9) {
        alert("Tu nota es insuficiente para aprobar el curso, tienes que ir a reparación.");
    }

    if (Nota_Final < 9) {
        alert("Tu nota es insuficiente para aprobar el curso o para ir a reparación, has reprobado.");
    }
}

