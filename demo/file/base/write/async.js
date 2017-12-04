const fs = require('fs');

fs.writeFile('./../demo-write.txt', '\nHello Node.js', (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});