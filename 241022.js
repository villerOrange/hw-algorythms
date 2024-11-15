
// 1. Начало недели, у разработчика в бэклоге есть список задач от разных отделов,
//     каждая из которых требует определённого времени для выполнения.
// Разработчик может в неделю работать определенное количество времени maxTime.
// Мы хотим выбрать максимальное количество задач, которые можно выполнить,
//     учитывая ограничение по времени.
// Используйте подход жадного алгоритма по критерию: время выполнения задачи.


class Task {
    constructor(name, time, cost) {
        this.name = name; // Имя задачи
        this.time = time; // Время выполнения (в днях)
        this.cost = cost; // Стоимость
    }
}

function selectMaxTasks(tasks, maxTime) {
    // Сортируем задачи по времени выполнения в порядке возрастания
    tasks.sort((a, b) => a.time - b.time);

    let selectedTasks = [];
    let totalTime = 0;

    for (let task of tasks) {
        if (totalTime + task.time <= maxTime) {
            selectedTasks.push(task);
            totalTime += task.time;
        } else {
            break; // Если добавление задачи превышает maxTime, завершаем
        }
    }

    return selectedTasks;
}