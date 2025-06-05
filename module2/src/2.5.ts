{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resWithGeneric = createArrayWithGeneric<string>("Bangladesh");

  const createArrayWithGeneric1 = <T, Y>(param1: T, param2: Y): [T, Y] => {
    return [param1, param2];
  };

  const resWithGeneric1 = createArrayWithGeneric1<string, number>(
    "Bangladesh",
    10000
  );

  const createArrayWithGeneric12 = <T, Y>(param1: T, param2: Y): [T, Y] => {
    return [param1, param2];
  };

  const resWithGeneric12 = createArrayWithGeneric1<
    string,
    { name: string; age: number }
  >("Bangladesh", {
    name: "Abu Raihan",
    age: 26,
  });
}
