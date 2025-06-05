{
  // Generics
  type GenericsArray<T> = T[];

  const rollNumbers: GenericsArray<number> = [1, 2, 3, 4];

  const rollStr: GenericsArray<string> = ["a", "b", "c", "d"];

  const rollBoolean: GenericsArray<boolean> = [true, false];

  // array of object
  interface User {
    name: string;
    age: number;
  }

  const user: GenericsArray<User> = [
    {
      name: "Abu Raihan",
      age: 26,
    },
    {
      name: "Shisir",
      age: 14,
    },
  ];

  type GenericTuple<X, Y> = [X, Y];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}
