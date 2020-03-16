#!/usr/bin/env bash

PROP=$1
FILE_PATH=$2

function getJsonValue {
  if [[ -z "$PROP" ]]; then
    echo "You need to pass the property name"
    exit 1
  elif [[ -z "$FILE_PATH" ]]; then
    echo "You need to pass the file path"
    exit 1
  fi

  result=$(node -pe "JSON.parse(process.argv[1]).${PROP}" "$(cat ${FILE_PATH})")

  if [[ "$result" == "undefined" ]] || [[ "$result" == "null" ]]; then
    echo "Property: '${PROP}' not found"
    exit 1
  fi

  echo "${result}"
  exit 0
}

getJsonValue
