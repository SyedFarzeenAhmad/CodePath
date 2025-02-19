const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.pipe(process.stdout);

readStream.on('error', (err) => {
    console.error('Error reading the file', err);
});
