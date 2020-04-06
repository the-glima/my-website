#!/usr/bin/env bash

RUN_COMMAND=$1
DIFF_PATH=$2

function commitDiff() {
  local RESULT=$(git diff HEAD~0 --name-only > /dev/null 2>&1)

  if [[ -n "${RESULT}" ]]; then
    echo "${RESULT}"
  else
    echo "No files were changed"
  fi

  exit 0
}

commitDiff
