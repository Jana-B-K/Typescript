// Type Alias
type Person = {
  name: string;
  age: number;
};

// Interface
interface Car {
  brand: string;
  year: number;
}

// Union Type
type Status = "loading" | "success" | "error";

// Intersection Type
type Employee = Person & {
  employeeId: number;
};

// Readonly Type
type Settings = {
  readonly theme: string;
};

// Generic Type
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

// Variables
const person1: Person = {
  name: "Jana",
  age: 22,
};

const car1: Car = {
  brand: "Toyota",
  year: 2023,
};

let currentStatus: Status = "loading";

const employee1: Employee = {
  name: "Jana",
  age: 22,
  employeeId: 101,
};

const settings: Settings = {
  theme: "dark",
};

let numbers: number[] = [1, 2, 3, 4];

// Function with Types
function add(a: number, b: number): number {
  return a + b;
}

// Union + Type Narrowing
function check(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * value;
}

// Generic Function
function identity<T>(value: T): T {
  return value;
}

// Using Generic Type
const response: ApiResponse<Person> = {
  data: person1,
  success: true,
};

// Function Using Interface
function isAdult(user: Person): boolean {
  return user.age > 18;
}

// Function Type Alias
type Multiply = (a: number, b: number) => number;

const multiply: Multiply = (a, b) => a * b;

// Output (optional test)
console.log(add(2, 3));
console.log(check("hello"));
console.log(identity<number>(10));
console.log(isAdult(person1));
console.log(response);