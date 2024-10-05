// Variables globales
const iva = 0.05;

// Función para generar los campos de costo por producto
document.getElementById('numProductos').addEventListener('change', function() {
    const numProductos = parseInt(this.value);
    const container = document.getElementById('productosContainer');
    container.innerHTML = ''; // Limpiar el contenedor
    
    for (let i = 0; i < numProductos; i++) {
        const label = document.createElement('label');
        label.textContent = `Costo del Producto ${i + 1}: `;
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.className = 'costoProducto';
        input.required = true;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
});

// Función para calcular el total, aplicar descuentos e IVA
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se recargue

    const costosProductos = document.getElementsByClassName('costoProducto');
    let costoTotal = 0;
    
    // Sumar el costo de todos los productos
    for (let producto of costosProductos) {
        costoTotal += parseFloat(producto.value);
    }

    // Mostrar la lista de productos y su costo total sin descuento ni IVA
    let listaProductos = 'Lista de Productos y Costos:<br>';
    for (let i = 0; i < costosProductos.length; i++) {
        listaProductos += `Producto ${i + 1}: $${parseFloat(costosProductos[i].value).toFixed(2)}<br>`;
    }
    document.getElementById('listaProductos').innerHTML = listaProductos;
    document.getElementById('costoTotalSinDescuento').innerHTML = `Costo Total sin Descuento ni IVA: $${costoTotal.toFixed(2)}`;

    // Aplicar descuento basado en el costo total
    let descuento = 0;
    if (costoTotal >= 6000) {
        descuento = 0.5;
    } else if (costoTotal >= 4000) {
        descuento = 0.4;
    } else if (costoTotal >= 2000) {
        descuento = 0.25;
    }

    const totalConDescuento = costoTotal * (1 - descuento);
    document.getElementById('costoConDescuentoSinIVA').innerHTML = `Costo Total con Descuento sin IVA: $${totalConDescuento.toFixed(2)}`;

    // Aplicar IVA
    const totalConIVA = totalConDescuento * (1 + iva);
    document.getElementById('costoConDescuentoConIVA').innerHTML = `Costo Total con Descuento y con IVA (5%): $${totalConIVA.toFixed(2)}`;
});
