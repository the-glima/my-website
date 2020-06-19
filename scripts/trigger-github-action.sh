# !/usr/bin/env bash

REPO_NAME=$(grep REPO_NAME .env | cut -d '=' -f 2-)
GITHUB_TOKEN=$(grep GITHUB_TOKEN .env | cut -d '=' -f 2-)

function triggerGithubAction() {
  echo "GitHub: Running Manual Action Trigger for: ${REPO_NAME}"

  curl -H "Accept: application/vnd.github.everest-preview+json" \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      --request POST \
      --data '{"event_type": "manual-action-trigger""}' \
      https://api.github.com/repos/${REPO_NAME}/dispatches
}

triggerGithubAction
