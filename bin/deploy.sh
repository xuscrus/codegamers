#!/bin/sh
mv public docs
git add ./docs
git commit -m "$(git log '--format=format:%H' master -1)"
git push origin master --force