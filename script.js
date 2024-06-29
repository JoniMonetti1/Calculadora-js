function agregar(simbolo) {
    document.getElementById('pantalla').value += simbolo;
}

function borrar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    const expresion = document.getElementById('pantalla').value;
    const resultado = eval(expresion);
    document.getElementById('pantalla').value = resultado;
}