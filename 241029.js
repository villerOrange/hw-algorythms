// Вам дан замок, состоящий из n различных круглых колец, на каждом из которых последовательно напечатаны цифры от 0 до 9.
// Изначально все n - колец вместе показывают n - значное целое число, но существует только определенный код, который может открыть замок.
// Вы можете вращать каждое кольцо любое количество раз в любом направлении.
// Вы должны найти минимальное количество оборотов на кольцах замка, чтобы открыть замок.

function minCountRotation(input, unlockCode) {
    let rotation = 0;

    while (input > 0 || unlockCode > 0) {
        // Берем последнюю цифру текущего числа и кода
        let inputDigit = input % 10;
        let unlockCodeDigit = unlockCode % 10;

        // Вычисляем прямое и обратное вращение
        let forwardRotation = Math.abs(inputDigit - unlockCodeDigit);
        let backwardRotation = 10 - forwardRotation;

        // Добавляем минимальное из двух
        rotation += Math.min(forwardRotation, backwardRotation);

        // Переходим к следующей цифре
        input = Math.trunc(input / 10);
        unlockCode = Math.trunc(unlockCode / 10);
    }

    return rotation;
}