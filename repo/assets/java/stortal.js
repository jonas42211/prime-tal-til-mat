document.getElementById("bigCheckButton").addEventListener("click", function() {
    const input = document.getElementById("bigNumberInput").value;
    const num = parseInt(input);
    const resultElement = document.getElementById("bigResult");

    function isprime(n) {
        let num = BigInt(n);
        
        if (num <= 1n) return false;
        if (num == 2n) return true;
        if (num % 2n == 0n) return false;
        for (let i = 3n; i <= Math.sqrt(num); i += 2n) {
            if (num % i == 0) return false;
        }
        return true;
    }
    if (num > 1n && isprime(num)) {
        resultElement.textContent = num + " er et primtal.";
    } else {
        resultElement.textContent = num + " er ikke et primtal.";
    }
})