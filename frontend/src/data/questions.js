const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'x = 5\nprint(type(x))',
    choices: ['A. It prints the value of x', 'B. It prints the data type of x', 'C. It converts x to a string', 'D. It raises a TypeError'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'fruits = ["apple", "banana"]\nfruits.append("cherry")\nprint(fruits)',
    choices: ['A. It removes cherry from the list', 'B. It sorts the list alphabetically', 'C. It adds cherry to the end of the list', 'D. It creates a brand new list'],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: 'for i in range(3):\n    print(i)',
    choices: ['A. It prints 1, 2, 3', 'B. It prints 0, 1, 2', 'C. It prints the letter i three times', 'D. It raises a SyntaxError'],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: 'if 10 > 5:\n    print("yes")',
    choices: ['A. It prints yes only if 5 is greater than 10', 'B. It always prints yes regardless of condition', 'C. It prints yes because 10 is greater than 5', 'D. It prints no as the default output'],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: 'name = "Alice"\nprint(f"Hello, {name}!")',
    choices: ['A. It prints the variable name literally', 'B. It raises a SyntaxError for the curly braces', 'C. It prints Hello, Alice! using an f-string', 'D. It prints Hello, {name}! without substitution'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'result = [x ** 2 for x in range(5)]\nprint(result)',
    choices: ['A. It filters only even numbers from range(5)', 'B. It builds a list of squares from 0 to 4', 'C. It multiplies all elements by 2', 'D. It creates a range object named result'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'def greet(name="World"):\n    return f"Hello, {name}!"',
    choices: ['A. It requires name to always be passed in', 'B. It defines a function with a default parameter value', 'C. It raises an error when called without arguments', 'D. It always returns Hello, World! no matter what'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'my_dict = {"a": 1}\nmy_dict["b"] = 2\nprint(my_dict)',
    choices: ['A. It deletes the key a from the dictionary', 'B. It replaces key a with key b', 'C. It adds a new key-value pair to the dictionary', 'D. It creates a second separate dictionary'],
    answer: 'C',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'nums = [3, 1, 4, 1, 5]\nprint(sorted(nums))',
    choices: ['A. It sorts nums in place and returns None', 'B. It returns a new sorted list without changing nums', 'C. It removes duplicate values from the list', 'D. It reverses the list order'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("error")',
    choices: ['A. It successfully converts abc to an integer', 'B. It silently skips the line without output', 'C. It catches the ValueError and prints error', 'D. It raises a TypeError instead of ValueError'],
    answer: 'C',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'def decorator(func):\n    def wrapper():\n        print("before")\n        func()\n        print("after")\n    return wrapper',
    choices: ['A. It calls func twice inside wrapper', 'B. It permanently replaces func with wrapper', 'C. It wraps a function to run code before and after it', 'D. It creates an identical copy of func'],
    answer: 'C',
  },
  {
    id: 12, level: 'Advanced',
    code: 'gen = (x for x in range(5))\nprint(next(gen))',
    choices: ['A. It prints all 5 values at once', 'B. It creates a list and prints the first element', 'C. It creates a generator and yields the first value', 'D. It raises a StopIteration immediately'],
    answer: 'C',
  },
  {
    id: 13, level: 'Advanced',
    code: 'with open("file.txt", "r") as f:\n    data = f.read()',
    choices: ['A. It creates a new empty file named file.txt', 'B. It opens and reads a file, closing it automatically', 'C. It writes data to an existing file', 'D. It appends new content to the end of the file'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'squares = list(map(lambda x: x ** 2, [1, 2, 3]))\nprint(squares)',
    choices: ['A. It filters elements that are perfect squares', 'B. It sorts the list using a lambda key', 'C. It applies a lambda to square each element in the list', 'D. It reduces the list down to a single value'],
    answer: 'C',
  },
  {
    id: 15, level: 'Advanced',
    code: 'class Dog:\n    def __init__(self, name):\n        self.name = name',
    choices: ['A. It creates a standalone function called Dog', 'B. It defines a Dog class with an initializer method', 'C. It creates a global variable called name', 'D. It inherits all methods from an Animal class'],
    answer: 'B',
  },
]

export default questions
