const saldoSpan = document.getElementById("saldo");
const retiroInput = document.getElementById("retiro");
const retirarBtn = document.getElementById("retirarBtn");
const depositoInput = document.getElementById("deposito");
const depositaBtn = document.getElementById("depositarBtn");

retirarBtn.addEventListener("click", function() {
    let saldoActual = parseFloat(saldoSpan.textContent);
    let cantidadRetiro = parseFloat(retiroInput.value);

    if (!isNaN(cantidadRetiro) && cantidadRetiro > 0 && cantidadRetiro <= saldoActual) {
        saldoActual -= cantidadRetiro;
        saldoSpan.textContent = saldoActual.toFixed(2);
        localStorage.setItem("numero",saldoActual.toFixed(2));
        alert(`Retiro exitoso. Nuevo saldo: ${saldoActual.toFixed(2)} USD`);
        retiroInput.value = "";
    } else {
        alert("Cantidad de retiro no válida. Por favor, ingrese una cantidad válida.");
    }
});

depositarBtn.addEventListener("click", function() {
    let saldoActual = parseFloat(saldoSpan.textContent);
    let cantidadDeposito = parseFloat(depositoInput.value);

    if (!isNaN(cantidadDeposito) && cantidadDeposito > 0) {
        saldoActual += cantidadDeposito;
        saldoSpan.textContent = saldoActual.toFixed(2);
        localStorage.setItem("numero",saldoActual.toFixed(2))
        alert(`Deposito exitoso. Nuevo saldo: ${saldoActual.toFixed(2)} USD`);
        depositoInput.value = "";
    } else {
        alert("Cantidad de deposito no válida. Por favor, ingrese una cantidad válida.");
    }
});