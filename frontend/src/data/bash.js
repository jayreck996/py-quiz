const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'echo "Hello, World!"',
    choices: ['A. It creates a file called Hello World', 'B. It prints Hello, World! to the terminal', 'C. It runs a script named Hello', 'D. It sets a variable called Hello'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'ls -la',
    choices: ['A. It lists only directories', 'B. It deletes all files', 'C. It lists all files including hidden ones with details', 'D. It creates a new directory'],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: 'mkdir mydir && cd mydir',
    choices: ['A. It removes a directory named mydir', 'B. It creates mydir and navigates into it', 'C. It copies mydir to a new location', 'D. It lists the contents of mydir'],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: 'cat server.log | grep "ERROR"',
    choices: ['A. It deletes lines containing ERROR', 'B. It creates a file with only ERROR lines', 'C. It prints only lines containing ERROR', 'D. It counts the number of ERROR lines'],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: 'chmod +x deploy.sh',
    choices: ['A. It deletes the script', 'B. It changes the script owner', 'C. It makes the script executable', 'D. It runs the script immediately'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'for f in *.txt; do\n  echo "Processing: $f"\ndone',
    choices: ['A. It deletes all .txt files', 'B. It creates a .txt file for each loop', 'C. It loops over every .txt file and prints its name', 'D. It renames all .txt files'],
    answer: 'C',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'if [ $? -eq 0 ]; then\n  echo "Success"\nfi',
    choices: ['A. It checks if a variable equals zero', 'B. It checks the exit code of the previous command', 'C. It runs only if the script has no arguments', 'D. It always prints Success'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'NAME=${1:-"World"}\necho "Hello, $NAME"',
    choices: ['A. It requires an argument or throws an error', 'B. It uses World as a default if no argument is passed', 'C. It always prints Hello, World', 'D. It removes the first argument'],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'find . -name "*.log" -mtime +7 -delete',
    choices: ['A. It finds log files older than 7 hours', 'B. It lists log files modified in the last 7 days', 'C. It deletes .log files not modified in the last 7 days', 'D. It moves old log files to a backup folder'],
    answer: 'C',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'ps aux | grep nginx | awk \'{print $2}\'',
    choices: ['A. It restarts the nginx process', 'B. It prints the PID of running nginx processes', 'C. It kills all nginx processes', 'D. It shows nginx error logs'],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'set -euo pipefail',
    choices: ['A. It enables verbose output for debugging', 'B. It disables all error handling in the script', 'C. It enables strict mode — exit on error, unset vars, pipe failures', 'D. It sets the script to run in background'],
    answer: 'C',
  },
  {
    id: 12, level: 'Advanced',
    code: 'trap \'echo "Error on line $LINENO"\' ERR',
    choices: ['A. It suppresses all errors silently', 'B. It runs a command whenever an error occurs', 'C. It traps the Ctrl+C signal', 'D. It logs errors to a file'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: 'BACKUP=$(date +%Y%m%d)\ncp config.yml "config.$BACKUP.yml"',
    choices: ['A. It restores a config from a backup date', 'B. It creates a dated backup copy of config.yml', 'C. It schedules a daily config backup', 'D. It compresses the config file'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'curl -s https://api.example.com/data \\\n  | jq \'.users[] | .name\'',
    choices: ['A. It sends user names to the API', 'B. It downloads and saves the API response', 'C. It fetches JSON from the API and extracts user names', 'D. It pings the API endpoint'],
    answer: 'C',
  },
  {
    id: 15, level: 'Advanced',
    code: 'while IFS= read -r line; do\n  echo "$line"\ndone < input.txt',
    choices: ['A. It writes each line of stdin to a file', 'B. It reads and prints each line of input.txt safely', 'C. It counts the number of lines in a file', 'D. It deletes empty lines from a file'],
    answer: 'B',
  },
]

export default questions
