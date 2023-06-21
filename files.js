var fs = require('fs');

var readme = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readme);

//console.log(readme);