{
  // type aliases
  type CarYear = number;
  type CarType = string;
  type CarModel = string;

  const carYear: CarYear = 1998;
  const carType: CarType = "BMW";
  const carModel: CarModel = "Corolla";

  type Car = {
    carYear: number;
    carType: string;
    carModel: string;
  };

  const car1: Car = {
    carYear: 1998,
    carType: "BMW",
    carModel: "Corolla",
  };

  const car2: Car = {
    carYear: 1993,
    carType: "BM",
    carModel: "RED Corolla",
  };

  //   function
  type Add = (number1: number, number2: number) => number;
  const add: Add = (number1, number2) => number1 + number2;
}
