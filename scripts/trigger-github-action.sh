# !/usr/bin/env bash

GITHUB_TOKEN=$(grep VITE_GH_TOKEN .env | cut -d '=' -f 2-)
BRANCH_NAME="${1:-main}"

function triggerGithubAction() {
  echo "GitHub: Running Deploy Trigger"

  curl \
    -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    --data '{"ref": "'${BRANCH_NAME}'"}' \
    https://api.github.com/repos/the-glima/my-website/dispatches \
    -f event_type='deploy-trigger'
}
