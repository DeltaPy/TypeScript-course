type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber

// Literal types
let myName: "Denis";

let userName: "Denis" | "John" | "Amy";
userName = "Amy";

//Functions
const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 5));

let subtract = function (c: number, d: number): number {
  return c - d;
};

interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//default parameter
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(sumAll(1, 1));
logMsg(sumAll(undefined, 1)); //skip first value

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

//never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    // if (i > 100) break;
    i++;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
