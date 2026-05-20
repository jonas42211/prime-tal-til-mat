document.getElementById("smallCheckButton").addEventListener("click", function() {
    const input = document.getElementById("smallNumberInput").value;
    const num = parseInt(input);
    const resultElement = document.getElementById("smallResult");

    function isprime(num) {
        if (num <= 1) return false;
        if (num == 2) return true;
        if (num % 2 == 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0) return false;
        }
        return true;
    }
    if (num > 1 && isprime(num)) {
        resultElement.textContent = num + " er et primtal.";
    } else {
        resultElement.textContent = num + " er ikke et primtal.";
    }
})



