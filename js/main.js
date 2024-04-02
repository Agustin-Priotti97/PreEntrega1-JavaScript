function calcularPagosEnCuotas() {
    let continuar = true;

    while (continuar) {

        const montoTotal = parseInt(prompt("Ingrese el monto de operación:"));
        console.log("Monto Total:", montoTotal);

        const cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
        console.log("Cantidad de Cuotas:", cantidadCuotas);

        const interesPorcentaje = parseInt(prompt("Ingrese el porcentaje de interés (opc):"));
        console.log("Porcentaje de Interés:", interesPorcentaje);

        let montoConInteres = montoTotal;
        if (interesPorcentaje && interesPorcentaje > 0) {
            const factorInteres = 1 + (interesPorcentaje / 100);
            montoConInteres *= factorInteres;
        }
        console.log("Monto con Interés:", montoConInteres);

        const montoPorCuota = montoConInteres / cantidadCuotas;
        console.log("Monto por Cuota:", montoPorCuota);

        alert("El monto por cada cuota es: " + montoPorCuota);

        const respuesta = prompt("¿Desea calcular otro monto? (s/n)");
        if (respuesta !== 's' && respuesta !== 'S') {
            continuar = false;
        }
    }
}


calcularPagosEnCuotas();

