function fun1(nam1: number, nam2: number): number {
  return nam1 + nam2;
}

// method
const user = {
  name: "Abu Raihan",
  balance: 0,
  add: function (num3: number): string {
    return `Total number is ${this.balance + num3}`;
  },
};

// array
const arr: number[] = [1, 2, 3];

const totalNumber: number[] = arr.map((elem: number): number => elem * elem);
