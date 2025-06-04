{
  // spread operator
  let friend1: string[] = ["Abul", "Babul", "Kabul"];
  let friend2: string[] = ["Labul", "Mabul", "Labul"];

  friend1.push(...friend2);

  const user1 = {
    name: "Abu Raihan",
    age: 26,
  };

  const user2 = {
    name: "Shisir",
    age: 15,
  };

  const user = {
    ...user1,
    ...user2,
  };

  // rest operator

  function fun1(...friends: string[]) {
    return `Hi ${friends}`;
  }
  console.log(fun1("Abul", "Babul", "Kabul"));
}
