const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'git status',
    choices: ['A. It shows the commit history', 'B. It lists all remote branches', 'C. It shows staged, unstaged, and untracked changes', 'D. It checks if the remote is reachable'],
    answer: 'C',
  },
  {
    id: 2, level: 'Beginner',
    code: 'git add .\ngit commit -m "fix: correct typo"',
    choices: ['A. It stages only new files then commits', 'B. It stages all changes and creates a commit', 'C. It pushes changes to remote', 'D. It creates a new branch'],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: 'git clone https://github.com/user/repo.git',
    choices: ['A. It forks the repository on GitHub', 'B. It downloads and initialises a local copy of the repo', 'C. It pulls the latest changes from remote', 'D. It creates an empty repo at that URL'],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: 'git branch feature/login\ngit checkout feature/login',
    choices: ['A. It deletes the feature/login branch', 'B. It merges feature/login into main', 'C. It creates and switches to the feature/login branch', 'D. It renames the current branch'],
    answer: 'C',
  },
  {
    id: 5, level: 'Beginner',
    code: 'git push origin main',
    choices: ['A. It pulls changes from the main branch', 'B. It creates the main branch on remote', 'C. It uploads local main commits to the remote repo', 'D. It merges origin into main'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'git log --oneline --graph --all',
    choices: ['A. It deletes all local branches', 'B. It shows a compact visual graph of all branch history', 'C. It merges all branches into one log', 'D. It exports the log to a file'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'git stash\ngit stash pop',
    choices: ['A. It deletes uncommitted changes permanently', 'B. It commits changes to a temporary branch', 'C. It saves uncommitted changes and later restores them', 'D. It creates a new stash branch'],
    answer: 'C',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'git diff HEAD~1 HEAD',
    choices: ['A. It shows the difference between two remote branches', 'B. It shows what changed between the last two commits', 'C. It reverts to the previous commit', 'D. It merges the last two commits'],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'git fetch origin\ngit rebase origin/main',
    choices: ['A. It merges origin/main with a merge commit', 'B. It deletes local commits that differ from main', 'C. It fetches then replays local commits on top of main', 'D. It resets local branch to match origin'],
    answer: 'C',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'git reset --soft HEAD~1',
    choices: ['A. It deletes the last commit and its changes', 'B. It undoes the last commit but keeps changes staged', 'C. It moves HEAD to the first commit', 'D. It resets the remote branch'],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'git cherry-pick a1b2c3d',
    choices: ['A. It reverts the commit a1b2c3d', 'B. It merges the branch containing a1b2c3d', 'C. It applies only that specific commit to the current branch', 'D. It creates a tag at commit a1b2c3d'],
    answer: 'C',
  },
  {
    id: 12, level: 'Advanced',
    code: 'git bisect start\ngit bisect bad\ngit bisect good v1.0.0',
    choices: ['A. It reverts commits between v1.0.0 and HEAD', 'B. It uses binary search to find the commit that introduced a bug', 'C. It merges v1.0.0 into the current branch', 'D. It tags the current commit as bad'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: 'git reflog',
    choices: ['A. It shows all remote references', 'B. It lists every movement of HEAD including deleted branches', 'C. It refreshes the local branch list', 'D. It shows only commits from the last 30 days'],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: 'git tag -a v1.0.0 -m "Release 1.0.0"\ngit push origin v1.0.0',
    choices: ['A. It creates a lightweight tag and pushes all tags', 'B. It creates an annotated tag and pushes it to remote', 'C. It renames the current branch to v1.0.0', 'D. It merges v1.0.0 into main on remote'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'git submodule add https://github.com/org/lib.git libs/lib',
    choices: ['A. It clones the repo as a regular folder', 'B. It creates a symlink to the external repo', 'C. It embeds an external repo as a tracked dependency', 'D. It downloads only the latest release of the repo'],
    answer: 'C',
  },
]

export default questions
