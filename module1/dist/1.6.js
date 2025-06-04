"use strict";
function fun1(nam1, nam2) {
    return nam1 + nam2;
}
// method
const user = {
    name: "Abu Raihan",
    balance: 0,
    add: function (num3) {
        return `Total number is ${this.balance + num3}`;
    },
};
// array
const arr = [1, 2, 3];
const totalNumber = arr.map((elem) => elem * elem);
