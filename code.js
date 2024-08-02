document.getElementById('footprint-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const energy = parseFloat(document.getElementById('energy').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const water = parseFloat(document.getElementById('water').value);
    const waste = parseFloat(document.getElementById('waste').value);

    // Conversion factors
    const energyFactor = 0.233; // kg CO2 per kWh
    const gasFactor = 2.3; // kg CO2 per liter
    const waterFactor = 0.001; // kg CO2 per liter
    const wasteFactor = 0.45; // kg CO2 per kg

    const carbonFootprint = (energy * energyFactor) + (gas * gasFactor) + (water * waterFactor) + (waste * wasteFactor);

    alert('Your estimated carbon footprint is ' + carbonFootprint.toFixed(2) + ' kg CO2');
});