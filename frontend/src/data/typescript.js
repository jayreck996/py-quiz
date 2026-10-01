const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `interface Video {
  id: number
  title: string
  duration: number
}

const v: Video = { id: 1, title: "Inception", duration: 148 }
console.log(v.title)`,
    choices: [
      'A. It logs the entire Video object',
      'B. It logs Inception',
      'C. It raises a TypeError at runtime',
      'D. It logs undefined',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `type Plan = "Basic" | "Standard" | "Premium"

function getPrice(plan: Plan): number {
  if (plan === "Premium") return 15
  if (plan === "Standard") return 10
  return 5
}

console.log(getPrice("Premium"))`,
    choices: [
      'A. It logs 5',
      'B. It logs 10',
      'C. It logs 15',
      'D. It raises a compile error',
    ],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: `const genres: string[] = ["Drama", "Sci-Fi", "Comedy"]
console.log(genres.length)`,
    choices: [
      'A. It logs Drama',
      'B. It logs 3',
      'C. It logs undefined',
      'D. It raises a TypeError',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `function greet(name: string): string {
  return \`Welcome to StreamBox, \${name}!\`
}

console.log(greet("Alice"))`,
    choices: [
      'A. It logs Welcome to StreamBox, name!',
      'B. It raises a compile error',
      'C. It logs Welcome to StreamBox, Alice!',
      'D. It returns undefined',
    ],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: `const isPlaying: boolean = true

if (isPlaying) {
  console.log("Buffering...")
}`,
    choices: [
      'A. It logs nothing — isPlaying is not a string',
      'B. It logs Buffering...',
      'C. It raises a TypeError',
      'D. It logs false',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `interface User {
  id: number
  name: string
  watchlist?: string[]
}

function getWatchlist(user: User): string[] {
  return user.watchlist ?? []
}

console.log(getWatchlist({ id: 1, name: "Bob" }))`,
    choices: [
      'A. It throws because watchlist is undefined',
      'B. It logs [] — watchlist is optional and defaults to empty array',
      'C. It logs undefined',
      'D. It raises a compile error — watchlist is required',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `type VideoStatus = "playing" | "paused" | "buffering" | "stopped"

function handleStatus(status: VideoStatus): void {
  console.log(\`Player: \${status}\`)
}

handleStatus("buffering")`,
    choices: [
      'A. It raises a runtime error — buffering is invalid',
      'B. It logs Player: buffering',
      'C. It logs undefined',
      'D. It raises a compile error',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `const catalog = [
  { title: "Dune", rating: 8.0 },
  { title: "Inception", rating: 8.8 },
  { title: "Tenet", rating: 7.4 },
]

const filtered = catalog.filter(v => v.rating >= 8)
console.log(filtered.length)`,
    choices: [
      'A. It logs 1',
      'B. It logs 3',
      'C. It logs 2 — Dune and Inception have rating >= 8',
      'D. It raises a TypeError',
    ],
    answer: 'C',
  },
  {
    id: 9, level: 'Intermediate',
    code: `async function fetchVideo(id: number): Promise<{ title: string }> {
  const res = await fetch(\`/api/videos/\${id}\`)
  return res.json()
}

fetchVideo(42).then(v => console.log(v.title))`,
    choices: [
      'A. It synchronously logs the video title',
      'B. It fetches video 42 and logs its title when the promise resolves',
      'C. It raises a compile error — Promise cannot return an object',
      'D. It logs undefined immediately',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `enum Quality {
  SD = "480p",
  HD = "720p",
  FHD = "1080p",
  UHD = "4K",
}

function stream(q: Quality): void {
  console.log(\`Streaming at \${q}\`)
}

stream(Quality.FHD)`,
    choices: [
      'A. It logs Streaming at FHD',
      'B. It logs Streaming at 1080p',
      'C. It raises a TypeError',
      'D. It logs Streaming at undefined',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `type ApiResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: string }

function parseVideo(
  res: ApiResponse<{ title: string }>,
): string {
  if (res.ok) return res.data.title
  return \`Error: \${res.error}\`
}

console.log(parseVideo({ ok: true, data: { title: "Inception" } }))`,
    choices: [
      'A. It logs Error: undefined',
      'B. It raises a compile error — discriminated unions are unsupported',
      'C. It logs Inception',
      'D. It logs { title: "Inception" }',
    ],
    answer: 'C',
  },
  {
    id: 12, level: 'Advanced',
    code: `function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, k) => ({ ...acc, [k]: obj[k] }),
    {} as Pick<T, K>,
  )
}

const video = { id: 1, title: "Dune", duration: 155, rating: 8.0 }
console.log(pick(video, ["title", "rating"]))`,
    choices: [
      'A. It logs the full video object',
      'B. It logs { title: "Dune", rating: 8 }',
      'C. It raises a TypeError at runtime',
      'D. It logs undefined for non-string keys',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}

type Config = DeepReadonly<{
  cdn: { url: string; timeout: number }
}>

const cfg: Config = {
  cdn: { url: "https://cdn.streambox.io", timeout: 30 },
}
cfg.cdn.url = "https://other.cdn.io"`,
    choices: [
      'A. It updates the URL successfully',
      'B. It raises a compile error — DeepReadonly makes nested props readonly',
      'C. It logs the updated URL',
      'D. It silently ignores the assignment',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `function usePlayer<T extends HTMLVideoElement>(
  ref: React.RefObject<T>,
) {
  const play = () => ref.current?.play()
  const pause = () => ref.current?.pause()
  return { play, pause }
}`,
    choices: [
      'A. It raises a compile error — generics cannot extend DOM elements',
      'B. It creates a reusable hook constrained to HTMLVideoElement',
      'C. It only works with HTMLAudioElement',
      'D. It raises a runtime error when ref.current is null',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `type EventMap = {
  play: { videoId: number }
  pause: { videoId: number; position: number }
  seek: { videoId: number; to: number }
}

function emit<E extends keyof EventMap>(
  event: E,
  payload: EventMap[E],
): void {
  console.log(event, payload)
}

emit("seek", { videoId: 5, to: 120 })`,
    choices: [
      'A. It raises a compile error — mapped event types are unsupported',
      'B. It logs seek { videoId: 5, to: 120 }',
      'C. It logs undefined because seek is not a string',
      'D. It raises a runtime TypeError',
    ],
    answer: 'B',
  },
]

export default questions
