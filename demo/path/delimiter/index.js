const path = require('path');

console.log(process.env.PATH);
// 输出: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

console.log(process.env.PATH.split(path.delimiter));
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']