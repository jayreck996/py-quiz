const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'SELECT * FROM users\nWHERE active = true;',
    choices: ['A. It deletes all inactive users', 'B. It updates the active column to true', 'C. It returns all columns for active users', 'D. It counts all active users'],
    answer: 'C',
  },
  {
    id: 2, level: 'Beginner',
    code: 'INSERT INTO products (name, price)\nVALUES (\'Widget\', 9.99);',
    choices: ['A. It updates the price of Widget to 9.99', 'B. It adds a new row to the products table', 'C. It creates a new table called products', 'D. It checks if Widget already exists'],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: 'UPDATE users\nSET email = \'new@example.com\'\nWHERE id = 42;',
    choices: ['A. It inserts a new user with id 42', 'B. It deletes the user with id 42', 'C. It changes the email for user with id 42', 'D. It returns the email of user 42'],
    answer: 'C',
  },
  {
    id: 4, level: 'Beginner',
    code: 'DELETE FROM orders\nWHERE created_at < \'2023-01-01\';',
    choices: ['A. It archives orders before 2023', 'B. It returns orders created before 2023', 'C. It deletes all orders created before 2023', 'D. It updates old orders to a deleted status'],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: 'SELECT COUNT(*) FROM employees;',
    choices: ['A. It returns the first employee row', 'B. It sums all numeric columns', 'C. It returns the total number of rows in the employees table', 'D. It lists all employee IDs'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'SELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;',
    choices: ['A. It returns all users even those without orders', 'B. It returns only users who have at least one order', 'C. It returns all orders including those with no matching user', 'D. It creates a new table combining both'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'SELECT department, COUNT(*) AS total\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5;',
    choices: ['A. It returns individual employees in departments larger than 5', 'B. It deletes departments with 5 or fewer employees', 'C. It returns departments that have more than 5 employees', 'D. It limits results to the first 5 departments'],
    answer: 'C',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'SELECT * FROM logs\nORDER BY created_at DESC\nLIMIT 10;',
    choices: ['A. It returns the 10 oldest log entries', 'B. It deletes all but the 10 most recent logs', 'C. It returns the 10 most recent log entries', 'D. It paginates logs 10 per page'],
    answer: 'C',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'SELECT name FROM products\nWHERE id IN (\n  SELECT product_id FROM order_items\n  WHERE quantity > 100\n);',
    choices: ['A. It joins products and order_items on id', 'B. It returns product names that appear in high-quantity orders', 'C. It counts products ordered more than 100 times', 'D. It updates product names from order_items'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'SELECT\n  SUM(amount) AS total,\n  AVG(amount) AS average,\n  MAX(amount) AS highest\nFROM payments;',
    choices: ['A. It returns one row per payment with computed values', 'B. It returns three separate queries as columns', 'C. It returns a single row with aggregate stats across all payments', 'D. It groups payments by amount'],
    answer: 'C',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'WITH monthly AS (\n  SELECT DATE_TRUNC(\'month\', created_at) AS month,\n         SUM(amount) AS revenue\n  FROM orders\n  GROUP BY 1\n)\nSELECT * FROM monthly ORDER BY month;',
    choices: ['A. It creates a permanent view called monthly', 'B. It uses a CTE to compute and return monthly revenue', 'C. It stores monthly data in a temporary table', 'D. It creates a stored procedure'],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: 'SELECT\n  name,\n  salary,\n  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rank\nFROM employees;',
    choices: ['A. It returns only the top-ranked employee per department', 'B. It sorts all employees by salary globally', 'C. It ranks employees by salary within each department', 'D. It groups employees by department and salary'],
    answer: 'C',
  },
  {
    id: 13, level: 'Advanced',
    code: 'CREATE INDEX idx_users_email\nON users (email);',
    choices: ['A. It enforces uniqueness on the email column', 'B. It creates a lookup index to speed up queries filtering by email', 'C. It adds a foreign key constraint on email', 'D. It compresses the email column for storage'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
    choices: ['A. It runs two updates independently', 'B. It wraps two updates in a transaction so both succeed or both fail', 'C. It locks both rows permanently', 'D. It creates a savepoint between the two updates'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'EXPLAIN ANALYZE\nSELECT * FROM orders WHERE user_id = 42;',
    choices: ['A. It runs the query and returns only the row count', 'B. It shows the query execution plan and actual timing', 'C. It suggests indexes to create', 'D. It caches the query for future runs'],
    answer: 'B',
  },
]

export default questions
