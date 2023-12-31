//Задание 1
// Выведите числа от 1 до 10 в консоль
/*
for (let i = 1; i <= 10; i++) {//Этот код создает переменную i, которая начинается с 1. Цикл выполняется до тех пор, пока значение i меньше или равно 10. 
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {//Этот код использует цикл `for`, который перебирает числа от 1 до 20, и затем проверяет каждое число на чётность с помощью оператора остатка от деления `% 2`.  
    if (i % 2 === 0) {//Если число чётное (`i % 2 === 0`), оно выводится в консоль.
    console.log(i); 
    }
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {//Для вывода чисел от 10 до 1 в обратном порядке, можно использовать цикл for с шагом равным -1. 
    console.log(i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {// Начинаем цикл с i = 1, продолжаем до i <= 10, увеличиваем i на 1 при каждом шаге.
    console.log(`5 * ${i} = ${5 * i}`); // Для каждого значения i выводим результат выражения 5 * i в формате "5 * i = результат".
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0; // Объявляем переменную для хранения суммы и устанавливаем ее начальное значение как 0.
for (let i = 1; i <= 100; i++) { // Начинаем цикл с i = 1, продолжаем до i <= 100, увеличиваем i на 1 при каждом шаге.
sum += i; // Добавляем значение i к сумме, чтобы обновить сумму.
}
console.log(sum); // Выводим значение суммы в консоль/

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) { // Начинаем цикл с i = 0, продолжаем до i < длины массива, увеличиваем i на 1 при каждом шаге.
console.log(array[i]); // Выводим элемент массива с индексом i в консоль.
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0; // Инициализируем переменную для хранения суммы.
for (let i = 0; i < numbers.length; i++) { // Начинаем цикл с i = 0, продолжаем до i < длины массива, увеличиваем i на 1 при каждом шаге.
    sum += numbers[i]; // Добавляем значение элемента массива с индексом i к переменной sum.
}
    
console.log(sum); // Выводим общую сумму в консоль.

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];// Исходный массив животных

for (let i = 0; i < animals.length; i++) {// Цикл for проходит по каждому индексу массива
animals[i] = animals[i] + " - прекрасное животное";// Для каждого элемента массива добавляется текст " - прекрасное животное"
}

console.log(animals);// Печать измененного массива в консоль

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

for (let i = 0; i < str.length; i++) {// Используем цикл for, чтобы перебрать каждый символ строки str
    console.log(str[i]); // Выводим текущий символ в консоль
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
const array = [1, 2, 3, 4, 5];
for (const element of array) { // Используем цикл for...of для прохода по каждому элементу массива
    console.log(element); // Выводим значение текущего элемента в консоль
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (const sentence of sentences) {
    const words = sentence.split(' '); // Разделяем каждую строку на слова, используя пробел как разделитель
    for (const word of words) {
    console.log(word); // Выводим каждое слово в консоль
}
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
const numbers = [1, 2, 3, 4, 5];

let sum = 0; // Инициализируем переменную для хранения суммы

for (const number of numbers) {
sum += number; // Добавляем значение каждого элемента массива к сумме
}

console.log(sum); // Выводим сумму в консоль

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

const wordLengths = list.map(word => word.length); // Создаем новый массив с длиной каждого слова
wordLengths.forEach(length => console.log(length)); // Выводим длину каждого слова в консоль

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
const upperCaseWords = words.map(word => word.toUpperCase()); // Создаем новый массив, в котором каждый элемент будет преобразован в верхний регистр
console.log(upperCaseWords); // Выводим новый массив в консоль

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const lowerCaseGreeting = greeting.toLowerCase();// Приводим строку к нижнему регистру для удобства сравнения

for (let letter of lowerCaseGreeting) {// Проходим по каждой букве в строке и проверяем, есть ли она в массиве гласных
if (vowels.includes(letter)) {
vowelCount++; // Если буква является гласной, увеличиваем счетчик
}
}

console.log('Количество гласных букв в строке:', vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const combinedString = words.join(' '); // используем метод join для объединения строк с пробелами
console.log(combinedString); // выводим объединенную строку

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let i = 1; // начальное значение
while (i <= 10) { // делаем, пока i меньше или равно 10
console.log(i); // выводим значение i в консоль
i++; // увеличиваем i на 1
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let i = 10; // начальное значение
while (i >= 1) { // делаем, пока i больше или равно 1
console.log(i); // выводим значение i в консоль
i--; // уменьшаем i на 1
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true; // Переменная для отслеживания положительности всех чисел в массиве

let i = 0;// Индекс, чтобы перебирать все элементы массива

while (i < allNumbers.length) {// Стартуем цикл, который будет работать, пока не закончится массив
    if (allNumbers[i] < 0) {// Проверяем, является ли текущий элемент массива отрицательным
    allPositive = false;// Если да, устанавливаем переменную allPositive в false
    break;// Выходим из цикла, так как нашли отрицательное число
    }
    i++;// Увеличиваем индекс, чтобы перейти к следующему элементу массива
}

console.log(allPositive);// Выводим результат проверки положительности всех чисел в массиве

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

let i = 0; // Индекс, чтобы перебирать все элементы массива
do {
console.log(random[i]); // Выводим текущий элемент массива
i++; // Увеличиваем значение i для перехода к следующему элементу массива
} while (random[i] >= 0 && i < random.length); // Проверяем условие: продолжаем цикл до тех пор, пока элемент массива положительный и не достигнут конец массива

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let i = 1; // Инициализируем переменную i значением 1.
do {  // Начинаем цикл do...while, который гарантирует, что тело цикла выполнится, как минимум, один раз.
if (i % 3 !== 0) { // Проверяем, делится ли значение переменной i на 3. Если нет остатка от деления, то число печатается.
console.log(i); // выводим значение i в консоль
}
i++; // Увеличиваем значение переменной i на 1.
} while (i <= 100); // Повторяем цикл, если значение i меньше или равно 100. Как только i достигнет 101, цикл завершится.

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let sum = 0; // Объявляем переменную для хранения суммы и устанавливаем ее начальное значение как 0.
do { //Затем выполняется цикл do...while, который будет повторяться, пока значение sum не превысит 100.
    let number = parseInt(prompt('Введите число:'));//Запрашиваем у пользователя ввод числа с помощью функции prompt() и преобразуем в число с помощью функции parseInt() и сохраняется в переменную number. 
    sum += number; // Добавляем значение number к сумме sum
} while (sum <= 100);//Если sum меньше или равна 100, то цикл продолжается и пользователю снова будет предложено ввести число.
console.log("Сумма введенных чисел превысила 100."); //Когда сумма sum станет больше 100, цикл завершится и консоль выведет сообщение.

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeBackgroundColor() {
    let headers = document.querySelectorAll('h4');// Получаем все элементы h4 на странице
    
    for (let header of headers) {// Проходим по каждому элементу и изменяем его фоновый цвет
    header.style.backgroundColor = 'blue';
    }
}
сhangeBackgroundColor();// Вызываем функцию для изменения фонового цвета всех элементов h4 на странице


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for (let i = 0; i < 6; i++) { // Используем цикл для генерации случайной строки нужной длины (6 символов)
    let randomIndex = Math.floor(Math.random() * alphabet.length); // Генерируем случайное число от 0 до длины строки alphabet 
    randomString += alphabet[randomIndex]; // Добавляем случайный символ из строки alphabet к строке randomString
}
    
console.log(randomString); // Выводим результат */