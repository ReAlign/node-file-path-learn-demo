const fs = require('fs');
let count = 0;

let fsWatchClose = () => {
  console.log('关闭');
  fsWatcher.close((err) => {
    if(err) {
      console.error(err);
    }
    console.log('关闭watch');
  });
};

let fsWatcher = fs.watch('./t.txt', (eventType, filename) => {
  console.log(eventType);
  if (filename) {
    console.log(filename);
    count++;
    if(count > 1) {
      fsWatchClose();
    }
  }
});