#!/bin/sh
cd public 
git add --all
git commit -m "$(git log '--format=format:%H' master -1)"
git push origin gh-pages --force