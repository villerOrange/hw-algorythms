// 1)
// Выведите на экран первые 11 членов последовательности Фибоначчи.
// первый и второй члены последовательности равны единицам
// а каждый следующий — сумме двух предыдущих
// Пример последовательности Фибоначчи - это 1  1  2  3  5  8  13  21  34  55  89  и т.д.
// - Реализация рекурсивно

function fibonacciRecursive(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function printFibonacciRecursive(count) {
    for (let i = 1; i <= count; i++) {
        console.log(fibonacciRecursive(i));
    }
}

printFibonacciRecursive(11);
