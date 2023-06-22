var fs = require('fs');

fs.unlink('./stuff/writeme.txt', function () {
    fs.rmdir('stuff', function () {
        console.log('Deleted!');
    }
    );
}
);
