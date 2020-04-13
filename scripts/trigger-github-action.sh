#!/usr/bin/env bash

# Manually Trigger A GitHub Actions Workflow: 
# https://goobar.io/2019/12/07/manually-trigger-a-github-actions-workflow/

GITHUB_TOKEN=${1:-$GITHUB_TOKEN}

function triggerGithubAction() {
  curl -H "Accept: application/vnd.github.everest-preview+json" \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      --request POST \
      --data '{"event_type": "manual-trigger""}' \
      https://api.github.com/repos/the-glima/my-website/dispatches 
}

triggerGithubAction 
