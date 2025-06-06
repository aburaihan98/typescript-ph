"use strict";
{
    // OOP - class
    class Animal {
        constructor(name, email, age) {
            this.name = name;
            this.email = email;
            this.age = age;
        }
        animalFun() {
            console.log(`${this.name} is good student`);
        }
    }
    const shisir = new Animal("Shisir", "s@gmail.com", 14);
    const farhan = new Animal("Farhan", "f@gmail.com", 12);
    //
}
