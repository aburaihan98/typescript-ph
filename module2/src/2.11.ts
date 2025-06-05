{
  //utility types
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type PicT = Pick<Person, "name">;

  type OmitT = Omit<Person, "name">;

  type PersonRequired = Required<Person>;

  type PersonPartial = Partial<Person>;

  // Readonly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  // person1.name = "ok" not imitable

  //   Record
  const EmptyObj: Record<string, unknown> = {};

  //
}
