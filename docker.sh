#!/bin/sh
docker login -e sreeram.com@gmail.com -u sreeram -p qpalzm123
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="develop"
fi
docker build -f Dockerfile -t $TRAVIS_REPO_SLUG:$TAG .
docker push $TRAVIS_REPO_SLUG