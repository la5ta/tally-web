#!/bin/bash
#title           : pre-commit.sh
#description     : This script runs before each commit to prevent direct changes
#                  to the 'master' branch and to enforce the use of `yarn commit`
#author		       : Luis Matute
#version         : 1.0
#===================================================================================

# Which brand am committing?
branch="$(git rev-parse --abbrev-ref HEAD)"

# Draws a Box around a message
function draw_box () {
  local s=("$@") b w
  for l in "${s[@]}"; do
    ((w<${#l})) && { b="$l"; w="${#l}"; }
  done
  tput setaf 3
  echo " -${b//?/-}-
| ${b//?/ } |"
  for l in "${s[@]}"; do
    printf '| %s%*s%s |\n' "$(tput setaf 4)" "-$w" "$l" "$(tput setaf 3)"
  done
  echo "| ${b//?/ } |
 -${b//?/-}-"
  tput sgr 0
}

# Adds "warning!" title to a box dialog
function warn() {
  draw_box \
  "           __               __    /" \
  "|  |  /\  |__) |\ | | |\ | / _\`  /" \
  "|/\| /~~\ |  \ | \| | | \| \__> . " \
  "--------------------------------" \
  "" \
  "$1"
}

# Prevent commits directly to `master`
if [ "$branch" = "master" ]; then
  warn "You can't commit directly to the 'master' branch"
  exit 1
fi

# Warn not to use `git commit`
warn "We use conventional commits to help keep the git history in order! \
please use yarn commit to commit your changes"

# Exit
exit 126 # command cannot execute
