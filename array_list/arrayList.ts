/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

export class ArrayList {
    length: number;
    #data: Record<number, unknown>;
    // code goes here
    constructor() {
        this.length = 0;
        this.#data = {};
    }
    private collapse() {
        
    }
    push<T>(elem: T) {
        this.#data[this.length] = elem;
        this.length += 1;
    }
    pop() {
        const elem = this.#data[this.length - 1];
        delete this.#data[this.length - 1];
        this.length -= 1;
        return elem;
    }
    get(index: number) {
        if (index >= this.length) {
            return undefined;
        }
        return this.#data[index];
    }
    delete(index: number){
        const missingIndex = this.#data[index];
        delete this.#data[index];
        const lengthToIterate = this.length - index;
        for (let i = index; i < this.#data.keys().length; i++) {
            const element = array[i];
            
        }
    }
}