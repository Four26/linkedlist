class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.newNode = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            current++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;
        if (current === null) {
            return null;
        }

        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current
    }

    at(index) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }

    pop() {
        if (this.head === null) {
            return;
        }

        if (this.head.nextNode === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }


    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index - 1) {
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;
                return;
            }
            count++;
            current = current.nextNode;
        }
    }

    removeAt(index) {
        if (index === 0 && this.head !== null) {
            this.head = this.head.nextNode;
            return;
        }

        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index - 1 && current.nextNode !== null) {
                current.nextNode = current.nextNode.nextNode;
                return;
            }
            count++;
            current = current.nextNode;
        }
    }

}

export { Node, LinkedList };
