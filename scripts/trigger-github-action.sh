# !/usr/bin/env bash

GITHUB_TOKEN=$(grep GITHUB_TOKEN .env | cut -d '=' -f 2-)
BRANCH_NAME="${1:=main}"

function triggerGithubAction() {
  echo "GitHub: Running Manual Action Trigger"

  curl \
    -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    --data '{"ref": "'${BRANCH_NAME}'", "inputs": {"hello": "Hola", "world": "Mundo"}}' \
    https://api.github.com/repos/the-glima/my-website/actions/workflows/manual-trigger.yml/dispatches
}

triggerGithubAction
