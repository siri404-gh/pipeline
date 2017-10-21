[![Build Status](https://travis-ci.org/sreerampr/pipeline.svg?branch=develop)](https://travis-ci.org/sreerampr/pipeline)
[![BCH compliance](https://bettercodehub.com/edge/badge/sreerampr/pipeline?branch=master)](https://bettercodehub.com/)
[![codecov](https://codecov.io/gh/sreerampr/pipeline/branch/master/graph/badge.svg)](https://codecov.io/gh/sreerampr/pipeline)

# pipeline
The ultimate pipeline boilerplate

## yarn scripts
*    "start:web:dev": "./node_modules/.bin/webpack-dev-server --env=dev --progress --profile --colors --open",
*    "lint": "./node_modules/.bin/eslint .",
*    "test": "karma start",
*    "prod": "./node_modules/.bin/webpack --env=prod",
*    "report-coverage": "codecov -t 48525b57-3063-4eb1-add2-057f8d4d57f2",
*    "firebase": "yarn lint && yarn test && yarn prod && ./node_modules/.bin/firebase deploy && yarn report-coverage",
*    "travis": "yarn firebase"
