const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `git checkout -b feature/player-controls`,
    choices: [
      'A. It deletes the player-controls branch',
      'B. It creates and switches to a new branch called feature/player-controls',
      'C. It merges the branch into main',
      'D. It pushes the branch to the remote',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `git add src/components/VideoPlayer.tsx
git commit -m "feat: add pause/resume controls to VideoPlayer"`,
    choices: [
      'A. It stages all files and pushes to remote',
      'B. It stages VideoPlayer.tsx and creates a commit with the message',
      'C. It deletes VideoPlayer.tsx from the repo',
      'D. It creates a new branch for the commit',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `git status`,
    choices: [
      'A. It shows the full diff of all changed files',
      'B. It shows which files are staged, unstaged, or untracked',
      'C. It commits all pending changes',
      'D. It resets the working directory to the last commit',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `git log --oneline -5`,
    choices: [
      'A. It shows the full commit history with diffs',
      'B. It shows the last 5 commits as a compact one-line list',
      'C. It reverts the last 5 commits',
      'D. It stages the last 5 changed files',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `git push origin feature/player-controls`,
    choices: [
      'A. It deletes the remote branch',
      'B. It pushes the local branch to the remote repository',
      'C. It merges the branch into main on the remote',
      'D. It creates a pull request automatically',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `git stash
git pull origin main
git stash pop`,
    choices: [
      'A. It permanently discards local changes',
      'B. It temporarily shelves changes, pulls latest main, then restores the changes',
      'C. It merges main into the current branch',
      'D. It raises an error if there are merge conflicts',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `git rebase main`,
    choices: [
      'A. It merges main into the current branch creating a merge commit',
      'B. It replays the current branch commits on top of the latest main',
      'C. It deletes all commits not in main',
      'D. It creates a backup branch before rebasing',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `git cherry-pick a3f2c1b`,
    choices: [
      'A. It reverts commit a3f2c1b from the current branch',
      'B. It applies only the changes from commit a3f2c1b to the current branch',
      'C. It merges the entire branch containing a3f2c1b',
      'D. It tags commit a3f2c1b as a release',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `git diff main..feature/subtitle-support`,
    choices: [
      'A. It merges feature/subtitle-support into main',
      'B. It shows all changes between main and the feature branch',
      'C. It counts commits ahead between the two branches',
      'D. It raises an error if the branches diverged',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `git tag -a v2.4.0 -m "Release: HDR streaming support"
git push origin v2.4.0`,
    choices: [
      'A. It creates a lightweight tag and pushes the branch',
      'B. It creates an annotated release tag and pushes it to the remote',
      'C. It creates a new branch called v2.4.0',
      'D. It raises an error — tags cannot be pushed separately',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `git reflog | head -10`,
    choices: [
      'A. It shows the remote repository history',
      'B. It shows the last 10 HEAD movements including resets and rebases',
      'C. It lists the 10 largest files in the repository',
      'D. It raises an error — reflog only works on remotes',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `git bisect start
git bisect bad HEAD
git bisect good v2.3.0`,
    choices: [
      'A. It reverts all commits between v2.3.0 and HEAD',
      'B. It begins a binary search to find the commit that introduced a bug',
      'C. It merges v2.3.0 into the current branch',
      'D. It raises an error — bisect requires a clean working tree',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `git filter-branch --env-filter '
if [ "$GIT_COMMITTER_EMAIL" = "old@streambox.io" ]; then
  GIT_COMMITTER_EMAIL="new@streambox.io"
  GIT_AUTHOR_EMAIL="new@streambox.io"
fi' --tag-name-filter cat -- --branches --tags`,
    choices: [
      'A. It deletes all commits by old@streambox.io',
      'B. It rewrites history to replace the author email across all branches and tags',
      'C. It creates a new branch with the updated email',
      'D. It raises an error — email cannot be changed after committing',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `git worktree add ../streambox-hotfix hotfix/buffer-overflow-fix`,
    choices: [
      'A. It creates a new branch and immediately merges it into main',
      'B. It checks out the hotfix branch into a separate directory without switching branches',
      'C. It copies the entire repository to ../streambox-hotfix',
      'D. It raises an error — worktrees require a remote',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `git log --all --format="%H %ae" | \
  awk '{print $2}' | \
  sort | uniq -c | sort -rn | head -5`,
    choices: [
      'A. It lists the 5 most recent commits',
      'B. It shows the top 5 contributors by commit count across all branches',
      'C. It raises an error — git log cannot be piped to awk',
      'D. It lists the 5 largest commits by file size',
    ],
    answer: 'B',
  },
]

export default questions
