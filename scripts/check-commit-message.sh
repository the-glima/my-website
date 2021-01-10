#!/usr/bin/env bash

COMMIT_FILTERS=("feat" "fix" "perf" "refactor")

function checkCommitMessage {
  local LAST_COMMMIT=$(git log -7 --pretty=format:"%s")
  echo "Last Commit Message: \"$LAST_COMMMIT\""

  for i in "${COMMIT_FILTERS[@]}";
  do
    REGEX="^${i}+(:|\([a-zA-Z]+\)+:)"
    echo "$LAST_COMMMIT" | grep -qE "${REGEX}"

    if [[ $? -eq 0 ]]; then
      echo "All good"
      exit 0
    fi
  done

  echo "Commit message doesn't conttain any releasable type [${COMMIT_FILTERS[@]}], exiting..."
  exit 1
}

checkCommitMessage
