export class ArrayList {
    #length: number;
    #data: Record<number, unknown>;
    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    get length() {
        return this.#length;
    }

    push<T>(elem: T) {
        this.#data[this.#length] = elem;
        this.#length += 1;
    }

    pop() {
        const elem = this.#data[this.#length - 1];
        delete this.#data[this.#length - 1];
        this.#length -= 1;
        return elem;
    }

    get(index: number) {
        if (index >= this.#length) {
            return undefined;
        }
        return this.#data[index];
    }

    delete(index: number){
        if (index >= this.#length) {
            console.log(index);
            return undefined;
        }
        for (let i = index; i < this.#length; i++) {
            this.#data[i] = this.#data[i + 1];
        }
        delete this.#data[this.#length - 1];
        this.#length -= 1;
    }
}