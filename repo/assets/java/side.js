function modPow(base, exponent, modulus) {
    let result = 1n;
    base = base % modulus;

    while (exponent > 0n) {
        if (exponent & 1n) {
            result = (result * base) % modulus;
        }
        exponent >>= 1n;
        base = (base * base) % modulus;
    }

    return result;
}

function millerRabin(n, witness) {
    let d = n - 1n;
    let s = 0;

    while (d % 2n === 0n) {
        d /= 2n;
        s += 1;
    }

    let x = modPow(witness, d, n);
    if (x === 1n || x === n - 1n) {
        return true;
    }

    for (let i = 1; i < s; i += 1) {
        x = (x * x) % n;
        if (x === n - 1n) {
            return true;
        }
    }

    return false;
}

function erPrimtal(value) {
    const n = BigInt(value);

    if (n < 2n) {
        return false;
    }
    if (n === 2n || n === 3n) {
        return true;
    }
    if (n % 2n === 0n || n % 3n === 0n) {
        return false;
    }

    const smallPrimes = [5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n];
    for (const prime of smallPrimes) {
        if (n === prime) {
            return true;
        }
        if (n % prime === 0n) {
            return false;
        }
    }

    const witnesses = [
        2n,
        325n,
        9375n,
        28178n,
        450775n,
        9780504n,
        1795265022n
    ];

    for (const witness of witnesses) {
        if (witness % n === 0n) {
            return true;
        }
        if (!millerRabin(n, witness)) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const input = document.getElementById('numberInput').value.trim();
    const result = document.getElementById('result');

    if (!input) {
        result.textContent = 'Skriv et tal i feltet f�rst.';
        return;
    }

    let n;
    try {
        n = BigInt(input);
    } catch (error) {
        result.textContent = 'Ugyldigt tal. Brug kun cifre uden mellemrum.';
        return;
    }

    if (erPrimtal(n)) {
        result.textContent = `${input} er sandsynligvis et primtal.`;
    } else {
        result.textContent = `${input} er ikke et primtal.`;
    }
}

const button = document.getElementById('checkButton');
if (button) {
    button.addEventListener('click', checkPrime);
}
mtal.";
    }
})
