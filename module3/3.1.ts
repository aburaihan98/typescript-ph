{
  // OOP - class
  class Animal {
    constructor(
      public name: string,
      public email: string,
      public age: number
    ) {}

    animalFun() {
      console.log(`${this.name} is good student`);
    }
  }

  const shisir = new Animal("Shisir", "s@gmail.com", 14);
  const farhan = new Animal("Farhan", "f@gmail.com", 12);

  //
}
