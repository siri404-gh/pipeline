const { src, docs, site, github, description, title, twitter, image, testsDir, interfaces } = require('./variables/esdoc');

module.exports = JSON.parse(JSON.stringify({
  "source": src,
  "destination": docs,
  "includes": ["\\.js$"],
  "excludes": ["\\.config\\.js$"],
  "plugins": [
  {
    "name": "esdoc-standard-plugin",
    "option": {
      "lint": {"enable": true},
      "coverage": {"enable": true},
      "accessor": {"access": ["public", "protected", "private"], "autoPrivate": true},
      "undocumentIdentifier": {"enable": true},
      "unexportedIdentifier": {"enable": false},
      "typeInference": {"enable": true},
      "brand": {
        "title": title,
        "description": description,
        "repository": github,
        "site": site,
        "author": twitter,
        "image": image
      },
      "test": {
        "source": testsDir,
        "interfaces": interfaces,
        "includes": ["(spec|Spec|test|Test)\\.js$"],
        "excludes": ["\\.config\\.js$"]
      }
    }
  }]
}));