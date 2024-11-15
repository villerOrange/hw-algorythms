// 1. Завершить реализацию Динамического массива(если не завершили в классе)
// DynamicArray() - по умолчанию size = 10
// DynamicArray(capacity) - size = capacity

class DynamicArray {
    constructor(capacity = 10) {
        this.array = new Array(capacity);
        this.count = 0; // текущее количество элементов
        this.size = capacity; // начальный размер массива
        this.k = 2; // коэффициент расширения
    }

    // добавляем элементы в конец 
    add(data) {
        if (this.count === this.size) {
            this.growSize();
        }
        this.array[this.count] = data;
        this.count++;
    }

    // расширяем внутренний массив
    growSize() {
        let temp = new Array(this.size * this.k);
        for (let i = 0; i < this.size; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
        this.size = this.size * this.k;
    }

    // добавление по индексу
    addAt(index, data) {
        if (this.count === this.size) {
            this.growSize();
        }

        for (let i = this.count - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i];
        }
        this.array[index] = data;
        this.count++;
    }

    // удаляем последний элемент    
    remove() {
        if (this.count > 0) {
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    // удаление по индексу
    removeAt(index) {
        if (this.count > 0) {
            for (let i = index; i < this.count - 1; i++) {
                this.array[i] = this.array[i + 1];
            }
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    // **Новые методы**

    // Изменение элемента по индексу
    set(index, data) {
        if (index < 0 || index >= this.count) {
            throw new Error("Индекс вне диапазона");
        }
        this.array[index] = data;
    }

    // Очистка массива
    clean() {
        this.array = new Array(this.size);
        this.count = 0;
    }

    // Проверка существования элемента
    contains(data) {
        for (let i = 0; i < this.count; i++) {
            if (this.array[i] === data) {
                return true;
            }
        }
        return false;
    }

    // Проверка, пуст ли массив
    isEmpty() {
        return this.count === 0;
    }
}

// Тестирование
let da = new DynamicArray();
da.add(1);
da.add(2);
da.add(3);
da.add(4);
console.log("До изменений:", da.array);

// Изменение элемента
da.set(2, 10);
console.log("После изменения:", da.array);

// Очистка
da.clean();
console.log("После очистки:", da.array);

// Проверка isEmpty
console.log("Массив пуст?", da.isEmpty());

// Добавление после очистки
da.add(5);
da.add(6);
console.log("Содержит 5?", da.contains(5));
console.log("Содержит 10?", da.contains(10));
console.log("Текущий массив:", da.array);
