#!/bin/bash

prop=$1
filePath=$2

function getJsonValue {
  if [[ -z "$prop" ]]; then
    echo "You need to pass the property name"
    exit 1
  elif [[ -z "$filePath" ]]; then
    echo "You need to pass the file path"
    exit 1
  fi

  result=$(node -pe "JSON.parse(process.argv[1]).${prop}" "$(cat ${filePath})")

  if [[ "$result" == "undefined" ]] || [[ "$result" == "null" ]] ; then
    echo "Property: '${prop}' not found"
    exit 1
  fi

  echo "${result}"

  exit 0
}

getJsonValue
