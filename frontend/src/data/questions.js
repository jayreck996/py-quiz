const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `title = "Inception"
duration = 148
is_hd = True
print(type(is_hd))`,
    choices: [
      "A. It prints True",
      "B. It prints <class 'bool'>",
      "C. It prints <class 'str'>",
      "D. It raises a TypeError",
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `username = "alice"
plan = "Premium"
print(f"{username} is on the {plan} plan")`,
    choices: [
      'A. It prints {username} is on the {plan} plan literally',
      'B. It raises a NameError',
      'C. It prints alice is on the Premium plan',
      'D. It prints alice is on the plan plan',
    ],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: `genres = ["Drama", "Sci-Fi", "Comedy"]
genres.append("Thriller")
print(genres[2])`,
    choices: [
      'A. It prints Thriller',
      'B. It prints Comedy — index 2 is the third item',
      'C. It prints Sci-Fi',
      'D. It raises an IndexError',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `user = {"name": "Alice", "plan": "Premium", "active": True}
print(user.get("country", "unknown"))`,
    choices: [
      'A. It raises a KeyError because country does not exist',
      'B. It prints None',
      'C. It prints unknown — the default value for a missing key',
      'D. It prints False',
    ],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: `views = 4_200_000
print(views > 1_000_000)`,
    choices: [
      'A. It raises a SyntaxError — underscores are not allowed in numbers',
      'B. It prints 4200000',
      'C. It prints True',
      'D. It prints False',
    ],
    answer: 'C',
  },
  {
    id: 6, level: 'Beginner',
    code: `title = "  Inception  "
print(title.strip().upper())`,
    choices: [
      'A. It prints   Inception   in uppercase',
      'B. It prints INCEPTION with leading/trailing spaces removed',
      'C. It raises an AttributeError — strip returns None',
      'D. It prints inception',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Beginner',
    code: `bitrate = 8000

if bitrate >= 6000:
    quality = "4K"
elif bitrate >= 3000:
    quality = "HD"
else:
    quality = "SD"

print(quality)`,
    choices: [
      'A. It prints HD',
      'B. It prints SD',
      'C. It prints 4K',
      'D. It raises a NameError',
    ],
    answer: 'C',
  },
  {
    id: 8, level: 'Beginner',
    code: `catalog = ["Dune", "Tenet", "Inception", "Avatar"]
print(catalog[-1])`,
    choices: [
      'A. It raises an IndexError',
      'B. It prints Dune',
      'C. It prints Avatar — negative indexing starts from the end',
      'D. It prints None',
    ],
    answer: 'C',
  },
  {
    id: 9, level: 'Beginner',
    code: `def is_premium(plan):
    return plan == "Premium"

print(is_premium("Basic"))
print(is_premium("Premium"))`,
    choices: [
      'A. It prints True then False',
      'B. It prints Basic then Premium',
      'C. It prints False then True',
      'D. It raises a TypeError',
    ],
    answer: 'C',
  },
  {
    id: 10, level: 'Beginner',
    code: `watchlist = ["Dune", "Avatar"]
new_titles = ["Inception", "Tenet"]
watchlist.extend(new_titles)
print(len(watchlist))`,
    choices: [
      'A. It prints 2',
      'B. It prints 4 — extend adds all items from new_titles',
      'C. It prints [["Dune", "Avatar"], ["Inception", "Tenet"]]',
      'D. It raises a TypeError',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 11, level: 'Intermediate',
    code: `catalog = [
    {"title": "Dune", "rating": 8.0},
    {"title": "Tenet", "rating": 7.4},
    {"title": "Inception", "rating": 8.8},
]
titles = [v["title"] for v in catalog if v["rating"] >= 8]
print(titles)`,
    choices: [
      'A. It prints all three titles',
      "B. It prints ['Dune', 'Inception'] — only ratings >= 8",
      'C. It raises a KeyError',
      'D. It prints an empty list',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Intermediate',
    code: `views = [120, 340, 85, 560, 210]
view_map = {i: v for i, v in enumerate(views) if v > 200}
print(view_map)`,
    choices: [
      'A. It creates a dict of all views indexed by position',
      'B. It creates a dict of views over 200 with their original index as key',
      'C. It raises a TypeError — enumerate cannot be used in dict comprehensions',
      'D. It prints an empty dict',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Intermediate',
    code: `def get_recommendations(user_id, limit=5, *tags, **filters):
    print(f"user={user_id}, limit={limit}, tags={tags}, filters={filters}")

get_recommendations(42, 10, "sci-fi", "action", region="US", lang="en")`,
    choices: [
      'A. It raises a TypeError — too many arguments',
      'B. It prints user=42, limit=10, tags=(\'sci-fi\', \'action\'), filters={\'region\': \'US\', \'lang\': \'en\'}',
      'C. It prints user=42, limit=5, tags=(), filters={}',
      'D. It raises a SyntaxError — *args before **kwargs is invalid',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Intermediate',
    code: `top_videos = [("Dune", 8.0), ("Inception", 8.8), ("Tenet", 7.4)]
top_videos.sort(key=lambda x: x[1], reverse=True)
print(top_videos[0][0])`,
    choices: [
      'A. It prints Dune',
      'B. It prints Tenet',
      'C. It prints Inception — highest rating after sort',
      'D. It raises a TypeError — tuples cannot be sorted',
    ],
    answer: 'C',
  },
  {
    id: 15, level: 'Intermediate',
    code: `try:
    data = {}
    cdn_url = data["cdn_url"]
except KeyError:
    cdn_url = "https://cdn.streambox.io"
finally:
    print(f"Using CDN: {cdn_url}")`,
    choices: [
      'A. It raises a KeyError and exits',
      'B. It prints Using CDN: https://cdn.streambox.io — KeyError is caught and fallback is set',
      'C. It skips the finally block on exception',
      'D. It prints Using CDN: None',
    ],
    answer: 'B',
  },
  {
    id: 16, level: 'Intermediate',
    code: `class VideoPlayer:
    def __init__(self, title):
        self.title = title
        self.playing = False

    def play(self):
        self.playing = True
        return f"Now playing: {self.title}"

player = VideoPlayer("Inception")
print(player.play())`,
    choices: [
      'A. It raises an AttributeError — self is not defined',
      'B. It prints Now playing: Inception',
      'C. It prints Now playing: VideoPlayer',
      'D. It returns None because play has no explicit return',
    ],
    answer: 'B',
  },
  {
    id: 17, level: 'Intermediate',
    code: `user_ids = [1, 2, 3, 4, 5]
premium_ids = [2, 4]
active = list(filter(lambda uid: uid in premium_ids, user_ids))
print(active)`,
    choices: [
      'A. It prints [1, 3, 5]',
      'B. It prints [2, 4] — only IDs in premium_ids pass the filter',
      'C. It raises a TypeError — lambda cannot use in operator',
      'D. It prints [1, 2, 3, 4, 5]',
    ],
    answer: 'B',
  },
  {
    id: 18, level: 'Intermediate',
    code: `title, *rest = "StreamBox Originals: Dune Part Two".split(": ")
print(title)
print(rest)`,
    choices: [
      'A. It raises a ValueError — too many values to unpack',
      'B. It prints StreamBox Originals then [\'Dune Part Two\']',
      'C. It prints StreamBox Originals: Dune Part Two then []',
      'D. It prints the full string twice',
    ],
    answer: 'B',
  },
  {
    id: 19, level: 'Intermediate',
    code: `history = {}

for user_id, title in [(1, "Dune"), (2, "Tenet"), (1, "Inception")]:
    history.setdefault(user_id, []).append(title)

print(history)`,
    choices: [
      'A. It raises a KeyError on the second entry for user 1',
      'B. It prints {1: [\'Dune\', \'Inception\'], 2: [\'Tenet\']}',
      'C. It overwrites user 1\'s history with Inception',
      'D. It prints {1: \'Inception\', 2: \'Tenet\'}',
    ],
    answer: 'B',
  },
  {
    id: 20, level: 'Intermediate',
    code: `import json

config = {"cdn": "https://cdn.streambox.io", "ttl": 86400}

with open("config.json", "w") as f:
    json.dump(config, f, indent=2)

print("saved")`,
    choices: [
      'A. It raises a FileNotFoundError — the file does not exist yet',
      'B. It writes the config as formatted JSON and prints saved',
      'C. It prints the JSON to stdout instead of writing to the file',
      'D. It raises a TypeError — integers cannot be serialised to JSON',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 21, level: 'Advanced',
    code: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.3f}s")
        return result
    return wrapper

@timer
def encode_video(path):
    time.sleep(0.1)
    return f"encoded: {path}"

print(encode_video("movie.mp4"))`,
    choices: [
      'A. It raises a TypeError — decorators cannot accept arguments',
      'B. It times the encode_video call and prints the duration, then the result',
      'C. It runs encode_video without timing because @timer replaces the function',
      'D. It prints encoded: movie.mp4 without timing output',
    ],
    answer: 'B',
  },
  {
    id: 22, level: 'Advanced',
    code: `def video_chunks(path: str, size: int = 1024):
    with open(path, "rb") as f:
        while chunk := f.read(size):
            yield chunk

chunks = video_chunks("movie.mp4")
print(type(chunks))`,
    choices: [
      'A. It prints <class \'list\'>',
      'B. It raises a FileNotFoundError immediately',
      'C. It prints <class \'generator\'> — the file is not opened until iteration',
      'D. It prints <class \'bytes\'>',
    ],
    answer: 'C',
  },
  {
    id: 23, level: 'Advanced',
    code: `class CDNConnection:
    def __enter__(self):
        print("Connecting to CDN...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Disconnecting from CDN")
        return False

with CDNConnection() as cdn:
    print("Uploading video...")`,
    choices: [
      'A. It raises an AttributeError — __enter__ must return None',
      'B. It prints Connecting, Uploading, then Disconnecting in order',
      'C. It connects but never disconnects because no exception occurred',
      'D. It prints the CDNConnection object',
    ],
    answer: 'B',
  },
  {
    id: 24, level: 'Advanced',
    code: `import asyncio

async def fetch_segment(segment_id: int) -> str:
    await asyncio.sleep(0.01)
    return f"segment_{segment_id}"

async def main():
    segments = await asyncio.gather(
        *[fetch_segment(i) for i in range(5)]
    )
    print(len(segments))

asyncio.run(main())`,
    choices: [
      'A. It fetches segments one at a time and prints 1',
      'B. It fetches all 5 segments concurrently and prints 5',
      'C. It raises a RuntimeError — gather cannot unpack a list comprehension',
      'D. It prints the segment strings, not their count',
    ],
    answer: 'B',
  },
  {
    id: 25, level: 'Advanced',
    code: `from dataclasses import dataclass, field
from typing import List

@dataclass
class Playlist:
    name: str
    owner_id: int
    videos: List[str] = field(default_factory=list)

    def add(self, title: str) -> None:
        self.videos.append(title)

p = Playlist(name="Weekend Watch", owner_id=42)
p.add("Dune")
print(p.videos)`,
    choices: [
      "A. It raises a TypeError — dataclasses don't support methods",
      "B. It prints ['Dune']",
      "C. It shares the videos list across all Playlist instances",
      "D. It raises an error because owner_id has no default",
    ],
    answer: 'B',
  },
  {
    id: 26, level: 'Advanced',
    code: `from functools import lru_cache

@lru_cache(maxsize=256)
def get_recommendations(user_id: int, genre: str) -> list:
    print(f"DB query for user {user_id}")
    return []

get_recommendations(1, "sci-fi")
get_recommendations(1, "sci-fi")
get_recommendations(1, "drama")`,
    choices: [
      'A. It prints DB query for user 1 three times',
      'B. It prints DB query for user 1 twice — the second sci-fi call is cached',
      'C. It raises a TypeError — lru_cache requires hashable args',
      'D. It prints DB query for user 1 once — all calls are cached',
    ],
    answer: 'B',
  },
  {
    id: 27, level: 'Advanced',
    code: `from abc import ABC, abstractmethod

class BaseEncoder(ABC):
    @abstractmethod
    def encode(self, path: str) -> str:
        pass

class H264Encoder(BaseEncoder):
    def encode(self, path: str) -> str:
        return f"h264:{path}"

enc = H264Encoder()
print(enc.encode("movie.mp4"))`,
    choices: [
      'A. It raises a TypeError — abstractmethod cannot be overridden',
      'B. It prints h264:movie.mp4',
      'C. It raises a TypeError trying to instantiate BaseEncoder directly',
      'D. It prints None because the ABC method returns pass',
    ],
    answer: 'B',
  },
  {
    id: 28, level: 'Advanced',
    code: `from typing import Protocol

class Streamable(Protocol):
    def stream(self, quality: str) -> bytes: ...

class HLSStream:
    def stream(self, quality: str) -> bytes:
        return b"hls_data"

def start(source: Streamable) -> None:
    data = source.stream("1080p")
    print(len(data))

start(HLSStream())`,
    choices: [
      "A. It raises a TypeError — HLSStream doesn't inherit from Streamable",
      'B. It prints 8 — HLSStream satisfies the Protocol structurally',
      'C. It raises an AttributeError — Protocol methods require super()',
      'D. It prints 0',
    ],
    answer: 'B',
  },
  {
    id: 29, level: 'Advanced',
    code: `class StreamSession:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        self.connected = True

s1 = StreamSession()
s2 = StreamSession()
print(s1 is s2, id(s1) == id(s2))`,
    choices: [
      'A. It prints False False — each call creates a new instance',
      'B. It prints True True — both variables point to the same Singleton object',
      'C. It raises an AttributeError on __new__',
      'D. It prints True False — same value but different identities',
    ],
    answer: 'B',
  },
  {
    id: 30, level: 'Advanced',
    code: `from typing import TypeVar, Generic

T = TypeVar("T")

class EventQueue(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop(0)

q: EventQueue[str] = EventQueue()
q.push("play_event")
print(q.pop())`,
    choices: [
      'A. It raises a TypeError — Generic classes cannot store items',
      'B. It prints play_event',
      'C. It raises an IndexError on pop from empty queue',
      'D. It prints the EventQueue object',
    ],
    answer: 'B',
  },
]

export default questions
