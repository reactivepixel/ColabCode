const util = require('./src/tool');
const fs = require('fs');

util.log(true, 'Title Goes here', { status: 100 });

util.log(false, 'File System Obj', fs);