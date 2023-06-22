var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function (err, data) {
    console.log(data);
    fs.writeFile('writeme.txt', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

fs.mkdir('stuff', function () {
    fs.readFile('readme.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeme.txt', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
});