// Написать программу, сортирующую массив чисел с помощью алгоритма Сортировка Слиянием
// в порядке убывания значения элементов массива.

function mergeSortDescending(array) {
    if (array.length <= 1) return array;

    // деоим массив на две части
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // сортируем каждую половину
    const sortedLeft = mergeSortDescending(left);
    const sortedRight = mergeSortDescending(right);

    // Сливаем отсортированные половины
    return mergeDescending(sortedLeft, sortedRight);
}

function mergeDescending(left, right) {
    const result = [];
    let i = 0; // левый массив
    let j = 0; // правый массив

    //слияние
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // оставшиеся элементы
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

