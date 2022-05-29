let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число:");
    
    if (input !== null) {
        numbers.push(Number(input));
    }

} while (input !== null);

for (const number of numbers) {
    total += number;
}

console.table(numbers);
console.log(`Загальна сума чисел дорівнює: ${total}`)