// 1 уровень сложности: 1. Реализовать метод вычисления факториала(n!) рекурсивным и итеративным способами.
function factorialRecursive(n) {
    if (n < 0) return null; // Факториал отрицательных чисел не определён
    if (n === 0 || n === 1) return 1; // Базовый случай
    return n * factorialRecursive(n - 1); // Рекурсия
}

function factorialIterative(n) {
    if (n < 0) return null; // Факториал отрицательных чисел не определён
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2 *.Есть метод, реализованный рекурсивно,
// JavaScript:
// function funRecursion(x, y) {
//     if (x === 0) {
//         return y;
//     } else {
//         let res = funRecursion(x - 1, x + y);
//         console.log(Res = ${ res }; x = ${ x }; y = ${ y });
//         return res;
//     }
// }
// Реализовать метод funIteration(x, y) cо схожей логикой, реализуя итерационный подход.

function funIteration(x, y) {
    while (x > 0) {
        y += x;
        x--;
        console.log(`x = ${x}; y = ${y}`);
    }
    return y;
}
