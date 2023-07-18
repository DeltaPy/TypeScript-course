//Utility types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 100 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 100 });

//Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database, ecc...
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record

const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "Tina" | "Tommy";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Tina: "A",
  Tommy: "C",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 100, assign2: 100 },
  Tina: { assign1: 100, assign2: 100 },
  Tommy: { assign1: 100, assign2: 100 },
};

//Pick and Omit ---- used on Interfaces

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 23,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract used for literal types

type adjustedGrade = Exclude<LetterGrades, "F">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable

type AllPossibleGrades = "Denis" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title: string, points: number};

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return data;
};

type fetchUsersReturnType = ReturnType<typeof fetchUsers>;

type fetchUsersReturnType2 = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((data) => console.log(data)


