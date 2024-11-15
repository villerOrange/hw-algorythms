// Напишите  методы для быстрой сортировки массива целых чисел(Quick sort)
// в порядке убывания значений их элементов.

function quickSortDescending(array) {
    // массив из одного элемента или пустой
    if (array.length <= 1) {
        return array;
    }


    const pivot = array[array.length - 1];
    const left = []; // Массив для элементов больше pivot
    const right = []; // Массив для элементов меньше или равных pivot

    // разделение массива относительно pivot
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // рекурсивная сортировка и объединение
    return [
        ...quickSortDescending(left),
        pivot,
        ...quickSortDescending(right)
    ];
}