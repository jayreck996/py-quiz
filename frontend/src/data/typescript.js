const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'let name: string = "Alice"\nconsole.log(typeof name)',
    choices: ['A. It logs the value "Alice"', 'B. It logs the type "string"', 'C. It logs undefined', 'D. It throws a TypeError'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'const age: number = 25\nconsole.log(age + 5)',
    choices: ['A. It logs "255" as string concatenation', 'B. It logs 30 as numeric addition', 'C. It throws a type error at runtime', 'D. It logs NaN'],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: 'let isActive: boolean = true\nconsole.log(!isActive)',
    choices: ['A. It logs true', 'B. It logs the string "false"', 'C. It logs false using the NOT operator', 'D. It throws a compile error'],
    answer: 'C',
  },
  {
    id: 4, level: 'Beginner',
    code: 'const nums: number[] = [1, 2, 3]\nnums.push(4)\nconsole.log(nums.length)',
    choices: ['A. It logs 3 before the push', 'B. It logs 4 after adding a new element', 'C. It throws because const arrays are immutable', 'D. It logs undefined'],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: 'function greet(name: string): string {\n  return "Hello, " + name\n}',
    choices: ['A. It accepts any type and returns a number', 'B. It declares a function that takes and returns a string', 'C. It returns a boolean value', 'D. It throws a compile error for the return type'],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'interface User {\n  name: string\n  age: number\n}\nconst u: User = { name: "Bob", age: 30 }',
    choices: ['A. It creates a class called User', 'B. It defines a shape and creates a matching object', 'C. It throws an error for missing properties', 'D. It creates a global variable called User'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'type ID = string | number\nlet id: ID = 42\nid = "abc"',
    choices: ['A. It throws a type error on reassignment', 'B. It creates a union type accepting string or number', 'C. It only allows number values', 'D. It automatically converts 42 to a string'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'const double = (n: number): number => n * 2\nconsole.log(double(5))',
    choices: ['A. It logs 10 from a typed arrow function', 'B. It logs "52" as string concatenation', 'C. It logs NaN due to type mismatch', 'D. It throws because arrow functions cannot be typed'],
    answer: 'A',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'enum Direction { Up, Down, Left, Right }\nconsole.log(Direction.Up)',
    choices: ['A. It logs the string "Up"', 'B. It logs 0 as the default numeric enum value', 'C. It logs undefined', 'D. It throws a ReferenceError'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'function identity<T>(value: T): T {\n  return value\n}\nconsole.log(identity<string>("hello"))',
    choices: ['A. It throws a type error for using generics', 'B. It logs undefined because T is not resolved', 'C. It logs "hello" using a generic function', 'D. It only works with primitive types'],
    answer: 'C',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'type ReadOnly<T> = {\n  readonly [K in keyof T]: T[K]\n}',
    choices: ['A. It removes all properties from type T', 'B. It creates a mapped type making all properties readonly', 'C. It converts type T into an array type', 'D. It picks only the string properties of T'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'async function fetchData(): Promise<string> {\n  return "data"\n}\nfetchData().then(console.log)',
    choices: ['A. It returns data synchronously without a Promise', 'B. It throws because async functions cannot return strings', 'C. It returns a Promise resolving to "data" and logs it', 'D. It logs undefined because the Promise is not awaited'],
    answer: 'C',
  },
  {
    id: 13, level: 'Advanced',
    code: 'class Animal {\n  constructor(public name: string) {}\n}\nconst a = new Animal("Cat")',
    choices: ['A. It creates an Animal with a private name property', 'B. It uses shorthand to declare and assign a public property', 'C. It throws because constructors cannot have parameters', 'D. It creates a static property on the class'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'const obj = { a: 1, b: 2 } as const\nobj.a = 5',
    choices: ['A. It successfully updates a to 5', 'B. It throws a runtime error', 'C. It causes a compile error because as const is readonly', 'D. It creates a new object with a updated'],
    answer: 'C',
  },
  {
    id: 15, level: 'Advanced',
    code: 'type GetReturn<T extends (...args: any) => any>\n  = T extends (...args: any) => infer R ? R : never',
    choices: ['A. It extracts the parameter types of a function', 'B. It infers and extracts the return type of a function', 'C. It creates a new function type from T', 'D. It removes the return type annotation from T'],
    answer: 'B',
  },
]

export default questions
