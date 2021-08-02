async function calculator(num1, num2) {
    const sum = num1 + num2;

    return new Promise((resolve) => {
        resolve(sum);
    })
}

module.exports = calculator;