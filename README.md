# browserify-bookmarklet-skeleton

Use as a starting point if you want to:

- Get the benefits of browserify such as
  - Ability to split the bookmarklet into multiple files
  - Writing tests for the bookmarklet
  - npm
- Generate an installation page for the bookmarklet

## points of interest

- `index.js`  
  Entry point of the script that runs when the bookmarklet is activated
- `templates/install.html`  
  Template where the minified bundle is finally injected to in a link

## setup

```
$ npm install
```

## usage

```
$ gulp        # watch for changes and build to dist/install.html
$ gulp html   # build to dist/install.html
$ npm test    # run tests
```

## disclaimer

Due to restrictions in URL size, you might be better off loading big scripts
from a remote location. That said, at least Chrome and Firefox seem to
support fairly large bookmarklets. Keep in mind also that bookmarklets don't
update themselves.
