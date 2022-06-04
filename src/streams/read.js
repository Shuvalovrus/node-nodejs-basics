import { createReadStream } from 'fs'

export const read = (async () => {
    let stream = createReadStream('./files/fileToRead.txt');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
})();

