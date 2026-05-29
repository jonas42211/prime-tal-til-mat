document.getElementById("bigCheckButton").addEventListener("click", function() {
    const input = document.getElementById("bigNumberInput").value.trim();
    const resultElement = document.getElementById("bigResult");

    if (!/^[-]?\d+$/.test(input)) {
        resultElement.textContent = "Indtast venligst et gyldigt heltal.";
        return;
    }

    const num = BigInt(input);
    
    function abs(n) {
        return n < 0n ? -n : n;
    }

    function sqrt(n) {
        let x = n;
        let y = (x + 1n) / 2n;
        while (abs(x - y) > 0n) {
            x = y;
            y = (x + n / y) / 2n;
        }
        return x;
    }

    function isprime(n) {
        const num = BigInt(n);

        if (num <= 1n) return false;
        if (num == 2n) return true;
        if (num % 2n == 0n) return false;

        for (let i = 3n; i <= sqrt(num); i += 2n) {
            if (num % i == 0n) return false;
        }
        return true;
    }

    if (num > 1n && isprime(num)) {
        resultElement.textContent = num + " er et primtal.";
    } else {
        resultElement.textContent = num + " er ikke et primtal.";
    }
})