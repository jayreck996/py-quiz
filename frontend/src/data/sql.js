const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `SELECT title, release_year
FROM videos
WHERE genre = 'Sci-Fi';`,
    choices: [
      'A. It deletes all Sci-Fi videos from the table',
      'B. It returns the title and release year of all Sci-Fi videos',
      'C. It counts the number of Sci-Fi videos',
      'D. It updates the genre column to Sci-Fi',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `INSERT INTO users (name, email, plan)
VALUES ('Alice', 'alice@example.com', 'Premium');`,
    choices: [
      'A. It updates Alice\'s plan to Premium',
      'B. It inserts a new user record into the users table',
      'C. It deletes the user with email alice@example.com',
      'D. It raises an error — INSERT requires an id column',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `SELECT COUNT(*) FROM subscriptions
WHERE plan = 'Premium' AND status = 'active';`,
    choices: [
      'A. It deletes all active Premium subscriptions',
      'B. It counts the number of active Premium subscriptions',
      'C. It returns the list of active Premium users',
      'D. It updates inactive Premium subscriptions to active',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `UPDATE users
SET plan = 'Premium'
WHERE email = 'bob@example.com';`,
    choices: [
      'A. It creates a new user called bob with a Premium plan',
      'B. It updates bob\'s plan to Premium in the users table',
      'C. It deletes all users with a Premium plan',
      'D. It raises an error — WHERE requires an id column',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `SELECT title FROM videos
ORDER BY view_count DESC
LIMIT 10;`,
    choices: [
      'A. It returns all videos sorted alphabetically',
      'B. It returns the titles of the 10 most-viewed videos',
      'C. It deletes the 10 least-viewed videos',
      'D. It raises an error — LIMIT cannot be used with ORDER BY',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `SELECT u.name, COUNT(wh.video_id) AS videos_watched
FROM users u
JOIN watch_history wh ON u.id = wh.user_id
WHERE wh.watched_at >= NOW() - INTERVAL '30 days'
GROUP BY u.name
ORDER BY videos_watched DESC;`,
    choices: [
      'A. It lists all users and their total watch history',
      'B. It counts videos each user watched in the last 30 days, sorted by most active',
      'C. It raises an error — INTERVAL cannot be used with NOW()',
      'D. It deletes watch history older than 30 days',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `SELECT v.title, AVG(r.score) AS avg_rating, COUNT(r.id) AS review_count
FROM videos v
LEFT JOIN reviews r ON v.id = r.video_id
GROUP BY v.title
HAVING COUNT(r.id) >= 100
ORDER BY avg_rating DESC;`,
    choices: [
      'A. It returns all videos including those with fewer than 100 reviews',
      'B. It returns videos with at least 100 reviews sorted by average rating descending',
      'C. It raises an error — HAVING cannot reference COUNT',
      'D. It deletes videos with fewer than 100 reviews',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `CREATE INDEX idx_watch_history_user_date
ON watch_history (user_id, watched_at DESC);`,
    choices: [
      'A. It deletes duplicate rows in watch_history',
      'B. It creates a composite index to speed up queries filtering by user and date',
      'C. It raises an error — DESC is not valid in index definitions',
      'D. It creates a unique constraint on user_id and watched_at',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `SELECT plan,
  COUNT(*) AS total,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) AS percentage
FROM subscriptions
WHERE status = 'active'
GROUP BY plan;`,
    choices: [
      'A. It counts subscriptions per plan without percentages',
      'B. It calculates the count and percentage share of each active plan using a window function',
      'C. It raises an error — window functions cannot be inside ROUND()',
      'D. It returns only the plan with the highest percentage',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `WITH monthly_revenue AS (
  SELECT
    DATE_TRUNC('month', billed_at) AS month,
    SUM(amount) AS revenue
  FROM billing
  WHERE status = 'paid'
  GROUP BY 1
)
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_month
FROM monthly_revenue;`,
    choices: [
      'A. It returns total revenue without month-over-month comparison',
      'B. It calculates monthly revenue and includes the previous month\'s revenue for comparison',
      'C. It raises an error — CTEs cannot use window functions',
      'D. It only returns months where revenue increased',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `EXPLAIN ANALYZE
SELECT u.id, v.title
FROM users u
JOIN watch_history wh ON u.id = wh.user_id
JOIN videos v ON wh.video_id = v.id
WHERE wh.watched_at >= NOW() - INTERVAL '7 days'
  AND u.plan = 'Premium';`,
    choices: [
      'A. It runs the query and discards the results',
      'B. It executes the query and shows the execution plan with actual timing and row counts',
      'C. It raises an error — EXPLAIN ANALYZE requires superuser',
      'D. It estimates the cost without running the query',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `CREATE MATERIALIZED VIEW top_videos_weekly AS
SELECT v.id, v.title, COUNT(wh.id) AS views
FROM videos v
JOIN watch_history wh ON v.id = wh.video_id
WHERE wh.watched_at >= NOW() - INTERVAL '7 days'
GROUP BY v.id, v.title
ORDER BY views DESC;

REFRESH MATERIALIZED VIEW CONCURRENTLY top_videos_weekly;`,
    choices: [
      'A. It creates a regular view that recalculates on every query',
      'B. It creates a cached view of weekly top videos and refreshes it without blocking reads',
      'C. It raises an error — CONCURRENTLY requires a unique index',
      'D. It automatically refreshes the view every 7 days',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `CREATE TABLE watch_history (
  id BIGSERIAL,
  user_id INT NOT NULL,
  video_id INT NOT NULL,
  watched_at TIMESTAMPTZ NOT NULL
) PARTITION BY RANGE (watched_at);

CREATE TABLE watch_history_2024_q1
PARTITION OF watch_history
FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');`,
    choices: [
      'A. It creates a table with a quarterly cron job to archive old rows',
      'B. It creates a range-partitioned table and a Q1 2024 partition for efficient time-based queries',
      'C. It raises an error — PARTITION BY requires an index',
      'D. It copies Q1 2024 data from an existing watch_history table',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `SELECT
  user_id,
  video_id,
  watched_at,
  ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY watched_at DESC) AS rn
FROM watch_history`,
    choices: [
      'A. It returns one row per user with the latest video',
      'B. It assigns a sequential rank to each user\'s views ordered by most recent first',
      'C. It raises an error — PARTITION BY requires GROUP BY',
      'D. It deletes duplicate watch_history rows',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `BEGIN;

UPDATE subscriptions
SET status = 'cancelled', cancelled_at = NOW()
WHERE user_id = 42;

INSERT INTO subscription_events (user_id, event, created_at)
VALUES (42, 'cancelled', NOW());

COMMIT;`,
    choices: [
      'A. It cancels the subscription but does not log the event if the INSERT fails',
      'B. It cancels the subscription and logs the event atomically — both succeed or both roll back',
      'C. It raises an error — INSERT cannot follow UPDATE in a transaction',
      'D. It commits the UPDATE immediately and defers the INSERT',
    ],
    answer: 'B',
  },
]

export default questions
