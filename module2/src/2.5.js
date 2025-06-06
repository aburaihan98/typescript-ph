"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resWithGeneric = createArrayWithGeneric("Bangladesh");
    const createArrayWithGeneric1 = (param1, param2) => {
        return [param1, param2];
    };
    const resWithGeneric1 = createArrayWithGeneric1("Bangladesh", 10000);
    const createArrayWithGeneric12 = (param1, param2) => {
        return [param1, param2];
    };
    const resWithGeneric12 = createArrayWithGeneric1("Bangladesh", {
        name: "Abu Raihan",
        age: 26,
    });
}
