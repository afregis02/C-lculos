function validarNumero(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}

function solicitarNumeros() {
    let suma = 0, numero;
    while ((numero = parseFloat(prompt("Introduce un número positivo (o un número negativo para terminar):"))) > 0) {
        suma += numero;
    }
    mostrarResultado('resultado-suma', `La suma de los números positivos es: ${suma}`);
}

function ordenarNumeros() {
    const nums = [
        parseFloat(document.getElementById('num1').value),
        parseFloat(document.getElementById('num2').value),
        parseFloat(document.getElementById('num3').value)
    ];
    nums.sort((a, b) => b - a);
    mostrarResultado('resultado-ordenar', `Números ordenados de mayor a menor: ${nums.join(', ')}`);
}

function calcularImpuesto() {
    const importe = parseFloat(document.getElementById('importe').value);
    const impuesto = importe * (importe > 15000 ? 0.16 : 0.10);
    const neto = importe - impuesto;
    mostrarResultado('resultado-impuesto', `El importe neto después de impuestos es: ${neto.toFixed(2)}`);
}

function calcularSueldo() {
    const anios = parseInt(document.getElementById('anios').value, 10);
    const sueldoBase = 40000;
    const aumento = sueldoBase * (anios > 10 ? 0.10 : anios > 5 ? 0.07 : anios > 3 ? 0.05 : 0.03);
    mostrarResultado('resultado-sueldo', `El sueldo anual después del aumento es: ${(sueldoBase + aumento).toFixed(2)}`);
}

function mostrarResultado(id, mensaje) {
    const resultado = document.getElementById(id);
    resultado.textContent = mensaje;
    resultado.classList.remove('hidden');
}
