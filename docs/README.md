# Webtrekk analytics frontend app documentation

### How to implement

1. Install node dev dependencies

    npm install dgeni --save-dev && npm install --save-dev canonical-path && npm install --save-dev dgeni && npm install --save-dev dgeni-packages && npm install --save-dev lodash && npm install --save-dev marked && npm install --save-dev node-html-encoder && npm install --save-dev semver && npm install --save-dev shelljs && npm install --save-dev stringmap
    
2. Update source code location in the docs/config/index.js
3. Update the repository field in package.json. *TODO: It currently is defaulted to github. Rework it to accept webtrekk repositories.*

    "repository": {
        "type": "git",
        "url": "http://stash.webtrekk.com/scm/q3v2/wt-analytics-frontend.git"
    }

4. 