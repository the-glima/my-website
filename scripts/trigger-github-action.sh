#!/usr/bin/env bash

# Manually Trigger A GitHub Actions Workflow: 
# https://goobar.io/2019/12/07/manually-trigger-a-github-actions-workflow/

GITHUB_TOKEN=$(grep GITHUB_TOKEN .env | cut -d '=' -f 2-)

function triggerGithubAction() {
  echo "Running Manual GitHub Action Trigger, check:"
  echo "https://github.com/the-glima/my-website/actions"

  curl -H "Accept: application/vnd.github.everest-preview+json" \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      --request POST \
      --data '{"event_type": "manual-action-trigger""}' \
      https://api.github.com/repos/the-glima/my-website/dispatches 
}

triggerGithubAction 
