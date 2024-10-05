// Función para calcular el pago semanal
document.getElementById('pago-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de la página

    // Obtener el pago por hora y las horas trabajadas
    const pagoHora = parseFloat(document.getElementById('pagoHora').value);
    const horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value);

    let pagoNormal = 0, pagoDoble = 0, pagoTriple = 0, pagoTotal = 0;

    // Calcular el pago según las reglas
    if (horasTrabajadas <= 40) {
        // Si trabaja hasta 40 horas, aplica el pago normal
        pagoNormal = horasTrabajadas * pagoHora;
    } else if (horasTrabajadas <= 47) {
        // Si trabaja entre 41 y 47 horas
        pagoNormal = 40 * pagoHora;
        pagoDoble = (horasTrabajadas - 40) * pagoHora * 2;
    } else {
        // Si trabaja más de 47 horas
        pagoNormal = 40 * pagoHora;
        pagoDoble = 7 * pagoHora * 2;
        pagoTriple = (horasTrabajadas - 47) * pagoHora * 3;
    }

    // Calcular el pago total
    pagoTotal = pagoNormal + pagoDoble + pagoTriple;

    // Mostrar los resultados
    document.getElementById('pagoNormal').innerHTML = `Pago Normal (1-40 horas): $${pagoNormal.toFixed(2)}`;
    document.getElementById('pagoDoble').innerHTML = `Pago Doble (41-47 horas): $${pagoDoble.toFixed(2)}`;
    document.getElementById('pagoTriple').innerHTML = `Pago Triple (48 horas en adelante): $${pagoTriple.toFixed(2)}`;
    document.getElementById('pagoTotal').innerHTML = `Pago Total: $${pagoTotal.toFixed(2)}`;
});
