# !/usr/bin/env bash

GITHUB_TOKEN=$(grep GITHUB_TOKEN .env | cut -d '=' -f 2-)
BRANCH_NAME="${1:=main}"

function triggerGithubAction() {
  echo "GitHub: Running Manual Action Trigger"
  # curl -H "Accept: application/vnd.github.everest-preview+json" \
  #     -H "Authorization: token ${GITHUB_TOKEN}" \
  #     --request POST \
  #     --data '{"event_type": "manual-action-trigger", "client_payload": { "branch_name": '${BRANCH_NAME}'}}' \
  #     https://api.github.com/repos/${REPO_NAME}/dispatches
  curl \
    -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    https://api.github.com/repos/the-glima/my-website/actions/workflows/Manually%20Triggered/dispatches \
    -d '{"ref": "'${BRANCH_NAME}'", "hello": "Hola", "world": "Mundo"}'

triggerGithubAction
