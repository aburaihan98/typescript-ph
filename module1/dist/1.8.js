"use strict";
{
    // object destructuring
    const obj = {
        name: "Abu Raihan",
        age: 26,
        class: {
            role: 10,
        },
    };
    const { name: n, //Type will not be declared explicitly here
    class: { role }, } = obj;
    // array destructuring
    const arr = ["Abul", "Babul", "Cabul", "Dabul"];
    const [, friend, ...friends] = arr;
}
