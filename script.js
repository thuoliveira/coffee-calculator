function calculate() {
    const waterAmount = parseFloat(document.getElementById('water-amount').value);
    const ratio = document.getElementById('ratio').value;
    const ratioParts = ratio.split(':');

    if (ratioParts.length !== 2) {
        alert('Por favor, insira uma proporção válida (ex: 1:15).');
        return;
    }

    const coffeeRatio = parseFloat(ratioParts[0]);
    const waterRatio = parseFloat(ratioParts[1]);

    if (isNaN(coffeeRatio) || isNaN(waterRatio) || isNaN(waterAmount)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const coffeeAmount = (waterAmount / waterRatio) * coffeeRatio;
    document.getElementById('result').innerText = `Você precisa de ${coffeeAmount.toFixed(2)} gramas de café.`;
}