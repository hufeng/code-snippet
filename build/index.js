"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
var entryFilePath = process.argv[2];
if (!entryFilePath) {
    throw new Error('please specify an entry file');
}
console.log(process.cwd());
const modulePolyfill = fs.readFileSync(path.resolve(__dirname, './polyfill/module.js'));
const entyFile = fs.readFileSync(path.join(process.cwd(), entryFilePath));
const bundleFile = `
(function() {
  ${modulePolyfill}

  _m(0, function(module, exports, require) {
    ${entyFile}
  });

  _require(0);
})();
`;
fs.writeFile(path.join(process.cwd(), 'bundle.js'), bundleFile, err => {
    if (err) {
        console.log(err.message);
    }
});
