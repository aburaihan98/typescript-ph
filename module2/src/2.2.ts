{
  interface num {
    name: string;
    email: string;
  }

  const obj: num = {
    name: "Abu Raihan",
    email: "raihan@gmail.com",
  };

  interface obj2 extends num {
    role: number;
  }
}
