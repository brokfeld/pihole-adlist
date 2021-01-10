ECHO OFF
git pull

call npm i
node "./src/merge.js"

git add .
git commit -m "Updated build/adlist.txt"
git push
