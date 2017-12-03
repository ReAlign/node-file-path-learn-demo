const path = require('path');

let _basename = './../../file/watch/t.txt';

console.log(path.basename(_basename));
console.log(path.basename(_basename, '.txt'));
