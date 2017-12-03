const fs = require('fs');
let count = 0;

let fsWatchClose = (FsW) => {
  console.log('关闭');
  FsW.close((err) => {
    if(err) {
      console.error(err);
    }
    // 似乎调不到？
    console.log('关闭watch');
  });
};

let fsWatcher = fs.watch('./t.txt', (eventType, filename) => {
  // 事件类型
  console.log(eventType);
  if (filename) {
    console.log(filename);
    count++;
    if(count > 1) {
      fsWatchClose(fsWatcher);
    }
  }
});
