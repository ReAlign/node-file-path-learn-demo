const fs = require('fs');

// async
fs.unlink('./../source/file/1.async.txt', (err) => {
  if (err) throw err;
  console.log('成功删除 ./../source/file/1.async.txt');
});

// sync
fs.unlinkSync('./../source/file/1.sync.txt');
console.log('成功删除 ./../source/file/1.sync.txt');