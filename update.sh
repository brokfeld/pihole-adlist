#!/bin/bash

cd "$(dirname "$0")"

/usr/bin/git pull

/usr/bin/node "./src/merge.js"

/usr/bin/git add .
/usr/bin/git commit -m "Updated build/adlist.txt"
/usr/bin/git push

