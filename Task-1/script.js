let userNum = prompt(`Enter any number : `);
console.log(`You have enter number ${userNum}`);
console.log(`Multiplication table of ${userNum}\n`);



let totalPrimeNum = 0;

for (let i = 1; i <= 10; i++) {

    let tabel = userNum * i;

    let primeCount = 0;
    for (let p = 0; p <= tabel; p++) {
        if (tabel % p === 0) {
            primeCount++;
        };
    };

    if (primeCount === 2 || primeCount === 1) {
        console.log(`${userNum} x ${i} = ${tabel} --->(Prime Number)`);
        totalPrimeNum++;
    } else {
        console.log(`${userNum} x ${i} = ${tabel}`);
    };

};

console.log(`\nTotal prime number in the table of ${userNum} is (${totalPrimeNum})`);
