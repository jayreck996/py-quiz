const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `#!/bin/bash
echo "Starting StreamBox encoder..."`,
    choices: [
      'A. It runs the encoder service in the background',
      'B. It prints Starting StreamBox encoder... to the terminal',
      'C. It creates a file called StreamBox encoder',
      'D. It sets an environment variable',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `ls -lh /var/streambox/uploads/`,
    choices: [
      'A. It deletes all files in the uploads directory',
      'B. It lists files with human-readable sizes in the uploads directory',
      'C. It creates the uploads directory',
      'D. It counts the number of uploaded files',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `VIDEO_DIR="/mnt/storage/videos"
echo "Storage path: $VIDEO_DIR"`,
    choices: [
      'A. It creates the directory /mnt/storage/videos',
      'B. It raises an error — variables cannot contain slashes',
      'C. It prints Storage path: /mnt/storage/videos',
      'D. It prints Storage path: $VIDEO_DIR literally',
    ],
    answer: 'C',
  },
  {
    id: 4, level: 'Beginner',
    code: `mkdir -p /var/streambox/logs/encoding`,
    choices: [
      'A. It deletes the encoding directory',
      'B. It creates the full directory path, including any missing parents',
      'C. It lists the contents of the logs directory',
      'D. It raises an error if the directory already exists',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `cp /tmp/video_raw.mp4 /mnt/storage/videos/video_raw.mp4`,
    choices: [
      'A. It moves the raw video to storage',
      'B. It copies the raw video from /tmp to the storage path',
      'C. It creates a symlink to the raw video',
      'D. It compresses the video before copying',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `#!/bin/bash
for res in 480p 720p 1080p; do
  echo "Encoding: $res"
  ffmpeg -i input.mp4 -vf "scale=-1:\${res%p}" "output_$res.mp4"
done`,
    choices: [
      'A. It encodes the video only at 1080p',
      'B. It loops through resolutions and encodes a separate file for each',
      'C. It deletes the original input.mp4 after encoding',
      'D. It raises an error — ffmpeg cannot be called in a loop',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `#!/bin/bash
LOG="/var/log/streambox/access.log"
ERRORS=$(grep -c "ERROR" "$LOG")
echo "Total errors today: $ERRORS"`,
    choices: [
      'A. It deletes all error lines from the log',
      'B. It counts and prints the number of ERROR lines in the log',
      'C. It appends ERROR to the log file',
      'D. It raises an error if the log file is empty',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `#!/bin/bash
if curl -sf https://api.streambox.io/health > /dev/null; then
  echo "API is healthy"
else
  echo "API is DOWN"
fi`,
    choices: [
      'A. It always prints API is healthy',
      'B. It checks the health endpoint and prints the result',
      'C. It restarts the API service automatically',
      'D. It raises an error if curl is not installed',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `#!/bin/bash
find /mnt/storage/videos -name "*.tmp" -mtime +7 -delete`,
    choices: [
      'A. It lists .tmp files older than 7 days without deleting them',
      'B. It deletes .tmp files in the video storage older than 7 days',
      'C. It moves .tmp files to /tmp',
      'D. It renames .tmp files to .mp4',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `#!/bin/bash
set -euo pipefail

BUCKET="s3://streambox-videos"
aws s3 sync /mnt/storage/videos "$BUCKET" --delete`,
    choices: [
      'A. It downloads all videos from S3 to local storage',
      'B. It syncs local videos to S3 and exits immediately on any error',
      'C. It only uploads new files and never deletes anything from S3',
      'D. It raises an error — set -euo pipefail is invalid',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `#!/bin/bash
encode_video() {
  local input="$1"
  local output_dir="$2"
  local base
  base=$(basename "$input" .mp4)

  for res in 480 720 1080; do
    ffmpeg -i "$input" \
      -vf "scale=-2:$res" \
      -c:v libx264 -crf 23 \
      "$output_dir/\${base}_\${res}p.mp4" &
  done
  wait
  echo "All resolutions done: $base"
}

encode_video "/uploads/movie.mp4" "/encoded"`,
    choices: [
      'A. It encodes all resolutions sequentially',
      'B. It encodes all three resolutions in parallel using background jobs',
      'C. It raises an error — & is invalid inside a function',
      'D. It only encodes the last resolution in the loop',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `#!/bin/bash
THRESHOLD=80
DISK=$(df /mnt/storage | awk 'NR==2 {print $5}' | tr -d '%')

if (( DISK > THRESHOLD )); then
  echo "ALERT: Disk usage at \${DISK}%" | \
    mail -s "StreamBox Storage Alert" ops@streambox.io
fi`,
    choices: [
      'A. It prints disk usage every minute',
      'B. It emails ops if storage disk usage exceeds 80%',
      'C. It automatically deletes files to free disk space',
      'D. It raises an error — mail requires root privileges',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `#!/bin/bash
PIDS=()

for service in encoder cdn-sync metadata-indexer; do
  /opt/streambox/bin/$service &
  PIDS+=($!)
done

for pid in "\${PIDS[@]}"; do
  wait "$pid" || echo "Service $pid failed"
done`,
    choices: [
      'A. It starts all services sequentially and waits for each one',
      'B. It starts all services in parallel and waits for each to finish',
      'C. It raises a syntax error — arrays are not supported in bash',
      'D. It only starts the first service in the list',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `#!/bin/bash
retry() {
  local retries=3
  local delay=5
  local cmd=("$@")

  for ((i=1; i<=retries; i++)); do
    "\${cmd[@]}" && return 0
    echo "Attempt $i failed. Retrying in \${delay}s..."
    sleep "$delay"
  done
  return 1
}

retry aws s3 cp /tmp/video.mp4 s3://streambox-videos/`,
    choices: [
      'A. It copies the file to S3 without any retry logic',
      'B. It retries the S3 upload up to 3 times with a 5-second delay on failure',
      'C. It raises an error — functions cannot wrap aws commands',
      'D. It runs the upload command 3 times regardless of success',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `#!/bin/bash
watch_queue() {
  local queue_dir="/var/streambox/encode_queue"
  inotifywait -m -e create "$queue_dir" |
  while read -r dir event file; do
    echo "New job: $file"
    /opt/streambox/encoder "$queue_dir/$file"
  done
}

watch_queue`,
    choices: [
      'A. It checks the queue directory once and exits',
      'B. It watches the queue directory and triggers encoding on each new file',
      'C. It raises an error — inotifywait requires root',
      'D. It processes only the first file added to the queue',
    ],
    answer: 'B',
  },
]

export default questions
