// Задача getMin().
// Реализовать структуру данных SpecialStack, которая поддерживает все операции со стеком,
//     такие как push(), pop(), isEmpty(), … и дополнительную операцию getMin(),
//         которая должна возвращать минимальный элемент из SpecialStack. 

// Все эти операции SpecialStack должны быть O(1).Пространство O(n)

// Чтобы реализовать SpecialStack, используйте структуру данных Stack, реализованную ранее в классе. 


class SpecialStack {
    constructor() {
        this.stack = []; // Основной стек
        this.minStack = []; // Стек для минимальных значений
    }

    // Добавление элемента
    push(x) {
        this.stack.push(x); // Добавляем в основной стек
        // Если стек минимальных значений пуст или новый элемент <= текущего минимума
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x); // Добавляем в стек минимальных значений
        }
    }

    // Удаление элемента
    pop() {
        if (this.stack.length === 0) {
            console.log("Stack Underflow");
            return null;
        }
        const poppedValue = this.stack.pop();
        // Если удалённый элемент совпадает с верхним элементом minStack
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
        return poppedValue;
    }

    // Проверка, пуст ли стек
    isEmpty() {
        return this.stack.length === 0;
    }

    // Получение минимального элемента
    getMin() {
        if (this.minStack.length === 0) {
            console.log("Stack is empty, no minimum available");
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }

    // Вывод текущего состояния стека
    print() {
        console.log("Stack: ", this.stack);
        console.log("MinStack: ", this.minStack);
    }
}

// Пример использования
const specialStack = new SpecialStack();

specialStack.push(10);
specialStack.push(20);
specialStack.push(5);
specialStack.push(15);
specialStack.print();
console.log("Минимальный элемент: " + specialStack.getMin()); // 5

specialStack.pop();
specialStack.print();
console.log("Минимальный элемент: " + specialStack.getMin()); // 5

specialStack.pop();
specialStack.print();
console.log("Минимальный элемент: " + specialStack.getMin()); // 10

specialStack.push(3);
specialStack.print();
console.log("Минимальный элемент: " + specialStack.getMin()); // 3
