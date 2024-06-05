function MiTrunc(Num) {
    let Num_Entero = 0;

    if (Num >= 0) {
        while (Num >= Num_Entero) {
            Num_Entero++;
        }
        Num_Entero--;
    } else {
        while (Num <= Num_Entero) {
            Num_Entero--;
        }
        Num_Entero++;
    }

    return Num_Entero;
}

function SegEnMHD() {
    let Seg, Min, Hor, Dias, Seg_Inicial, mensaje;

    Seg_Inicial = parseFloat(prompt("Ingresa el número de segundos que quieres convertir:"));

    Dias = Seg_Inicial / 86400;
    Hor = (Seg_Inicial % 86400) / 3600;
    Min = ((Seg_Inicial % 86400) % 3600) / 60;
    Seg = (((Seg_Inicial % 86400) % 3600) % 60) % 60;

    mensaje = Seg_Inicial + "s, equivalen a: \n" +
              MiTrunc(Dias) + "d " +
              MiTrunc(Hor) + "h " +
              MiTrunc(Min) + "min " +
              MiTrunc(Seg) + "s";

    alert(mensaje);
}
