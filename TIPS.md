# Tips

## Globbing Patterns

Construct globbing patterns by combining `path.join()` with the `PLI`.  For more information see [Do you need to use `path.join` in node](http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js).

``` javascript
var path = requrie('path');
var ALL_CSS_FILES = '**/*.css';
var PLI = require('superfly-css-pli');

var cssEntryFiles = path.join(PLI.src.main.css, ALL_CSS_FILES);
console.log(PLI.src.main.css);
//Logs `./src/main/css`
```
