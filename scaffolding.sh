#!/bin/bash

if [ -z $1 ]; then
  echo "Please enter a name"
  exit 1 
fi

name=$1

FILE=./assets/scss/pages/$name.scss
if [ -f "$FILE" ]; then
  echo "$FILE exists."
  exit 1 
fi

cp -R ./scaffolding/page ./pages/$name
touch ./assets/scss/pages/$name.scss
echo "@import '@/assets/scss/pages/$name';" >> ./pages/$name/style.scss