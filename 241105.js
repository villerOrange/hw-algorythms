// 1. Закончить реализацию методов класса BinaryTree, которую мы делали в классе:
// delete (value)

class BinaryTree {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    print(data) {
        console.log(data);
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            let parent;

            while (true) {
                parent = current;
                if (value === current.value) {
                    return;
                } else if (value < current.value) {
                    current = current.left;
                    if (current === null) {
                        parent.left = newNode;
                        return;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = newNode;
                        return;
                    }
                }
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null; // Значение не найдено
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Узел найден

            // 1. Узел без потомков
            if (node.left === null && node.right === null) {
                return null;
            }

            // 2. Узел с одним потомком
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            // 3. Узел с двумя потомками
            const minNode = this.findMin(node.right); // Находим минимальный элемент в правом поддереве
            node.value = minNode.value; // Заменяем значение удаляемого узла
            node.right = this.deleteNode(node.right, minNode.value); // Удаляем заменённый узел
        }

        return node;
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value) {
        let current = this.root;

        while (current.value !== value) {
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}

// Узел
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}