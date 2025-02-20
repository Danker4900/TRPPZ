const math = require('./math'); // Імпортуємо наш модуль
const _ = require('lodash'); // Підключаємо lodash

// Генеруємо випадкові числа
const x = _.random(1, 100);
const y = _.random(1, 100);

console.log(`Випадкове число x = ${x}`);
console.log(`Випадкове число y = ${y}`);

console.log(`Додавання: ${x} + ${y} = ${math.add(x, y)}`);
console.log(`Віднімання: ${x} - ${y} = ${math.subtract(x, y)}`);
console.log(`Множення: ${x} * ${y} = ${math.multiply(x, y)}`);
