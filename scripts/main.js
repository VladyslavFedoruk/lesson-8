/*Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти суму та кількість позитивних елементів.
Знайти мінімальний елемент масиву та його порядковий номер.
Знайти максимальний елемент масиву та його порядковий номер.
Визначити кількість негативних елементів.
Знайти кількість непарних позитивних елементів.
Знайти кількість парних позитивних елементів.
Знайти суму парних позитивних елементів.
Знайти суму непарних позитивних елементів.
Знайти добуток позитивних елементів.
Знайти найбільший серед елементів масиву, остальні обнулити.*/

const mas = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


//Знайти суму та кількість позитивних елементів.
let sum = 0;
let sumCounter = 0

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0) {
        sum += mas[i];
        sumCounter++;
    }
}
console.log('Сума позитивних елементів: ' + sum);
console.log('Кількість елементів: ' + sumCounter);



//Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = mas[0];
let minIndex = 0;

for (let i = 1; i < mas.length; i++) {
    if (mas[i] < minElement) {
        minElement = mas[i];
        minIndex = i;
    }
}
console.log('Мінімальний елемент: ' + minElement);
console.log('Порядковий номер мінімального елемента: ' + minIndex);



// Знайти максимальний елемент масиву та його порядковий номер
let maxElement = mas[0];
let maxIndex = 0;

for (let i = 1; i < mas.length; i++) {
    if (mas[i] > maxElement) {
        maxElement = mas[i];
        maxIndex = i;
    }
}
console.log('Максимальний: ' + maxElement);
console.log('Порядковий номер елемента: ' + maxIndex);




// Визначити кількість негативних елементів
let negative = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] < 0) {
        negative++;
    }
}
console.log('Кількість негативних: ' + negative);




// Знайти кількість непарних позитивних елементів
let counterOfPositiveWithoutPart = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0 && mas[i] % 2 !== 0) {
        counterOfPositiveWithoutPart++;
    }
}
console.log('Кількість непарних позитивних елементів: ' + counterOfPositiveWithoutPart);




// Знайти кількість парних позитивних елементів
let amoutOfPositiveWithPair = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0 && mas[i] % 2 === 0) {
        amoutOfPositiveWithPair++;
    }
}
console.log('Кількість парних позитивних елементів: ' + amoutOfPositiveWithPair);




// Знайти суму парних позитивних елементів
let amountOfPositiveSum = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0 && mas[i] % 2 === 0) {
        amountOfPositiveSum += mas[i];
    }
}
console.log('Сума парних позитивних елементів: ' + amountOfPositiveSum);




// Знайти суму непарних позитивних елементів
let sumOfPositivewithoutPair = 0;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0 && mas[i] % 2 !== 0) {
        sumOfPositivewithoutPair += mas[i];
    }
}

console.log('Сума непарних позитивних елементів: ' + sumOfPositivewithoutPair);




// Знайти добуток позитивних елементів
let positiveYmnojenie = 1;

for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0) {
        positiveYmnojenie *= mas[i];
    }
}

console.log('Добуток позитивних елементів: ' + positiveYmnojenie);



// Знайти найбільший серед елементів масиву, інші обнулити
let maxValueofElement = Math.max(...mas);

for (let i = 0; i < mas.length; i++) {
    if (mas[i] !== maxValueofElement) {
        mas[i] = 0;
    }
}

console.log('Обнулений масив, крім найбільшого:', mas);