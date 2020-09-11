#!/bin/bash

cd "$(dirname "$0")"

/bin/git pull

/bin/node "./src/merge.js"

/bin/git add .
/bin/git commit -m "Updated build/adlist.txt"
/bin/git push


