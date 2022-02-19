class Person {
    birthYear = 1999

    // Теперь можно делать приватные getters and setters с помощью добавления # в начале имени
    get #age() {
        return this.#getYear() - this.birthYear
    }

    logAge() {
        console.log(this.#age);
    }

    // Можно делать приватные методы с помощью добавления # в начале имени
    #getYear() {
        return new Date().getFullYear()
    }
}

class Person2 extends Person {
    getYear() {
        console.log(123)
    }
}

// const person = new Person();
// console.log(person.age);
// person.logAge();
// person.#getYear();

const person2 = new Person2();
person2.getYear();
