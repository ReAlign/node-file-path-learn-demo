const fs = require('fs');

let splitData = (data) => {
    let _arr = [];
    _arr = data.split(/\r?\n/).filter((item) => {
        return item;
    });
    console.log(_arr);
};

fs.readFile('./../demo.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    splitData(data);
});