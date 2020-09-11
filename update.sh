#!/bin/bash

git pull

node "./node_modules/.bin/merge"

git add .
git commit -m "Updated build/adlist.txt"
git push



