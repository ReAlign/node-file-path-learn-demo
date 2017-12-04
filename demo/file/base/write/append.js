const fs = require('fs');

fs.appendFile('./../demo-write.txt', '\nHello Append', (err) => {
    if (err) throw err;
    console.log('append saved!');
});