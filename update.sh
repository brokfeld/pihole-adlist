#!/bin/bash

git pull

node "./src/merge.js"

git add .
git commit -m "Updated build/adlist.txt"
git push



