{
  // union type
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  const frontendDeveloper: FrontendDeveloper = "juniorDeveloper";

  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  const fullstackDeveloper: FullstackDeveloper = "expertDeveloper";

  type newDev = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: newDev = "fakibazDeveloper";

  type User = {
    name: string;
    email?: string;
    contact: number;
    bloodGroup: "A+" | "B+";
  };

  const user: User = {
    name: "Abu Raihan",
    contact: 18,
    bloodGroup: "A+",
  };

  //   object
  type FrontendDeveloper1 = {
    skills: string[];
    designation1: "frontend developer";
  };

  type FrontendDeveloper2 = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type Developer2 = FrontendDeveloper1 & FrontendDeveloper2;

  const obj: Developer2 = {
    skills: ["html", "css", "javascript"],
    designation1: "frontend developer",
    designation2: "Backend Developer",
  };
}
